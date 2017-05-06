require 'sinatra/base'

require './server/controllers/ApplicationController'
require './server/controllers/ChoreController'

require './server/models/Chore'

map('/') {run ApplicationController}
map('/home') {run ChoreController}
