load "config/deploy/recipes/setup"
load "config/deploy/recipes/base"
load "config/deploy/recipes/upstart"
load "config/deploy/recipes/node"
load "config/deploy/recipes/nginx"

# Stages
set :stages, %w(production staging defence midfield)
set :default_stage, "production"
require "capistrano/ext/multistage"

# Application name
set :application, "enigma-17347-teamtalk-live"

# Repository
set :scm, :git
set :branch, "master"
set :repository,  "git@bitbucket.org:enigmamarketingdigital/17347-teamtalk-live.git"
set :deploy_via, :remote_cache #speed up deployments by keeping local git repo on server and use fetch

# User to deploy as
set :group, "www-data"

# Deploy location
set(:application_stage) { "#{application}-staging" }
set :default_environment, { 'PATH' => "/srv/websites/#{application_stage}/current/bin:$PATH" }
set(:deploy_to) { "/srv/websites/#{application_stage}" }

# Tell cap not to user sudo in its internal commands
set :use_sudo, false

# Required for sudo password prompts
default_run_options[:pty] = true

# Forward public keys for authentication.
ssh_options[:forward_agent] = true

# Don't get capistrano to normalise asset timestamps, it expects a /public folder as per rails defaults
# Asset serving will also be left to s3 which will take care of last-modified header timestamps.
set :normalize_asset_timestamps, false

# Each deploy is kept in the releases folder, this hook removes releases older than 5
set :keep_releases, 5
after "deploy:restart", "deploy:cleanup"
