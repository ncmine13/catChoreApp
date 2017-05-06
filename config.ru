require 'sinatra/base'

require './server/controllers/ApplicationController'
require './server/controllers/MainController'

map('/') {run ApplicationController}
map('/home') {run MainController}