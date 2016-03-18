[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

![slideshow.html](http://dmfranc.com/assets/slideshow.png)

[Demonstration](http://dmfrancisco.github.com/slideshow.html/)  
[Video](http://vimeo.com/davidfrancisco/slideshow/)


## Dependencies and supported browsers

Tested on Ruby 1.8.7 and 1.9.2.
It works with the latest versions of Chrome, Safari and IE (9+).
Firefox and Opera don't support the CSS zoom property, and consequently slides will not resize correctly.


## Installation

First install the dependencies (it may take some minutes):

```
gem install watchr
gem install thin
```

Then execute the following command:

```
./watch
```

If you don't have execution permission, try:

```
ruby watch
```


## Usage

The demo slideshow in the "slideshow" folder contains instructions to get you started.
Everything inside the "slideshow" folder is related to a specific presentation.
However, what's inside the "lib" folder and the "watch" script is generic and should not be modified.


## Help

For more information and additional options execute:

```
./watch --help
```

### Do I need a web server to view my presentation?

Live.js and less.js currently won't work if you’re using Chrome and the path to your slideshow starts with "file://" due to a known Chrome issue.  
If you're not using either of those, then you don't need a web server.

### My presentation keeps flashing. What should I do?

You are probably using a tablet or you are offline and some of the contents you included in your presentation are not locally accessible.  
This is caused by live.js. You should use the -n option to avoid it:

```
./watch --nolivejs
```

### Want to control your HTML presentation with Apple Remote?

Check this project: [github.com/danielwestendorf/HTML-Slide-Presenter](https://github.com/danielwestendorf/HTML-Slide-Presenter).  
It's a MacRuby application to display your HTML slideshows fullscreen with Apple Remote Support.

### I need more flexibility regarding transitions and animations

Check this project: [github.com/imakewebthings/deck.js](https://github.com/imakewebthings/deck.js).  
It's very flexible. However, slides don't scale in proportion and it works with a single html file (no partials).


## Origin

slideshow.html is based on the [HTML5 Slideshow](https://github.com/robflaherty/html-slideshow) project by Rob Flaherty. The code was extended and new features were added:

* The ruby script which offers support for partials and automated build
* Dimensions and proportional slide resizing according to a specified ratio (for example, 1280x800)
* Additional options (for example, hide the toolbar but keep the slide number visible)
* Live.js was added (browser automatic refresh)
* Less.js was added


2011 David Francisco, released under the MIT license.
