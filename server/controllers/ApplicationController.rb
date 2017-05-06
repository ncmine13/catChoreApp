class ApplicationController < Sinatra::Base
	
	require 'bundler'
	Bundler.require

	ActiveRecord::Base.establish_connection(
		:adapter => 'postgresql',
	)

	set :views, File.expand_path('../../views', __FILE__)
	set :public_dir, File.expand_path('../../public', __FILE__)

	not_found do
		"Page Not Found"
	end

end
