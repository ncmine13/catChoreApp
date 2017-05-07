class ChoreController < ApplicationController

	get ('/') do
		erb :main
	end

	get ('/chores') do
		content_type :json
		@chores = Chore.all
		@chores.to_json
	end

	post ('/chores') do

		content_type :json
		@chore = Chore.new

		@chore.roommatename = params['roommatename']
		@chore.chorename = params['chorename']
		@chore.dateday = Time.now.to_s.slice(0, 10)

		@chore.save
		@chore.to_json

	end

end
