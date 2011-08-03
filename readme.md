![slideshow.html](http://dmfranc.com/assets/slideshow.png)

## Demonstration
[View the demo](http://dmfrancisco.github.com/slideshow.html/)


## Dependencies and supported browsers

Tested on Ruby 1.9.7 and 1.9.2.
It works in the latests versions of Chrome, Safari and IE (9+).
Firefox and Opera don't support the CSS zoom property, so slides don't resize correctly.


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

If you don't have execute permission, try:

```
ruby watch
```


# Usage

The demo slideshow in the "slideshow" folder contains instructions to get you started.
Everything inside the "slideshow" folder is specific to a presentation.
However, what's inside the "lib" folder and the "watch" script shouldn't need to be modified.


## Help

For more information and additional options execute:

```
./watch --help
```


## Origin

slideshow.html was based on the [HTML5 Slideshow](https://github.com/robflaherty/html-slideshow) project by Rob Flaherty. The code was extended and new features were added:

* Dimensions and proportional slide resizing according to a specified ratio (for example, 1280x800)
* Browser automatic refresh
* Additional options (for example, hide the toolbar but keep the slide number visible)
* Less.js support
* The ruby script which offers support for partials and automated build


2011 David Francisco, released under the MIT license.