# 17347 Team Talk Live

Prequisites:

	run `bundle` in the capistrano directory 
	install node - tested with version v5.1.0
	install gulp - install globally via 'npm install gulp-cli -g' 

Running:

	1. /src, `npm i`
	2. `gulp develop`
	3. `node server`

By default will be served on http://localhost:8000


# Deployment

From /capistrano directory:


	Use this to push to staging - https://staging.teamtalk.live

		`cap staging deploy`

	Use this to push to production - https://teamtalk.live

		`cap production deploy`


	