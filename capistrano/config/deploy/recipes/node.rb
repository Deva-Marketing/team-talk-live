namespace :node do
  desc "Check required packages and install if packages are not installed"
  task :install_app_packages do
    run "ulimit -n 4000"

    run "rm -rf #{release_path}/src/server/database"
    run "ln -s #{shared_path}/database #{release_path}/src/server/database"

    run "cd #{release_path}/src/ && npm-cache install #{(node_env == 'staging') ? '--loglevel warn' : ''}"
    run "cd #{release_path}/src/ && gulp build"
  end


  desc "Fix ACL masks"
  task :updateAcl do
    # fix ACL masks
    run "sudo setfacl -R -m m:rwx #{release_path}/src/server"
    run "sudo setfacl -R -m m:rwx #{release_path}/dist"
    run "sudo setfacl -R -m m:rwx #{shared_path}"
  end

  before "deploy:create_symlink", "node:install_app_packages"
  after "deploy:create_symlink", "node:updateAcl"
end
