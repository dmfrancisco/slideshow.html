#
# You should:
#   gem install watchr --source=http://gemcutter.org
#   gem install thin
#   gem install rack
# Run:
#   thin -R watch.ru start
#
require 'watchr'

root = Dir.pwd
watched_files = 'src/.*'

fork do
  script = Watchr::Script.new
  script.watch watched_files do
    system "rake build"
  end
  controller = Watchr::Controller.new(script, Watchr.handler.new)
  controller.run
end

puts ">>> Watching #{root}/#{watched_files}"
puts ">>> Your slideshow will be built into the index.html file and refreshed automagically\n\n"

run Rack::Directory.new("#{root}")
