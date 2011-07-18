# Do "gem install watchr --source=http://gemcutter.org"
# Run "watchr autobuild.watchr"

watch('presentation/.*') do
  system "rake source=presentation"
end
