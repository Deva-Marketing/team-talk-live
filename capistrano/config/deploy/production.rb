server '162.13.81.123', :app, :web, :db, :primary => true

# node environment
set :node_env, "production"
set :domain, "teamtalk.live"

set :branch, "master"
set(:application_stage) { "#{application}-production" }
