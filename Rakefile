#
# Made by Ryan Funduk (http://ryanfunduk.com/simple-partials/)
# Run "rake source=<name of the folder with the slides>"
# For example, rake source=example
#

# The MIT License
#
# Copyright (c) 2008 Ryan Funduk
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

require 'erb'

SRCDIR = ENV['source'] || ENV['s'] || 'source'
$partials = 0

def write_output( filename, result )
  ext = filename.split( '.' ).last

  filename = filename.split '/'
  filename.delete SRCDIR
  filename.insert -2, ext unless ext == 'html'
  filename = filename.join '/'

  result.gsub! /V%/, '&lt;%'
  result.gsub! /%V/, '%&gt;'

  File.open( filename, 'wb' ).write( result )
  puts "WROTE     : #{filename}"
end

def partial( name )
  filename = "#{SRCDIR}/#{name}.partial"

  if File.exists? filename
    $partials += 1
    puts "LOADED    : #{name}.partial"
    File.open( filename, 'rb' ).read.chomp
  else
    puts "ERROR     : #{filename}"
  end
end

task :build do
  sources = FileList["#{SRCDIR}/*.*"].exclude( "#{SRCDIR}/*.partial" )

  sources.each do |f|
    puts "\nCOMPILING : #{f}"
    page = ERB.new( File.open( f, 'rb' ).read )
    write_output f, page.result
  end

  puts "\nDONE      : Compiled #{sources.size} sources w/ " \
       "#{$partials} partials."
end

task :default => [ :build ]
