# Do "gem install watchr --source=http://gemcutter.org"
# Run "watchr autobuild.watchr"

watch('src/.*') do
  system "rake build"
end
