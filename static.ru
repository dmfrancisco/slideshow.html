#
# Made by Eric White (http://blog.ericwhite.ca/articles/2009/03/serving-static-content-with-ruby-thinrack/)
# Do "gem install thin" and "gem install rack"
# Run "thin -R static.ru start"
#

# The static content rooted in the current working directory
# Dir.pwd =&gt; http://0.0.0.0:3000/
#
root=Dir.pwd
puts ">>> Serving: #{root}"
run Rack::Directory.new("#{root}")
