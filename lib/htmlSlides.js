/*
 * HTML Slideshow
 * Author: Rob Flaherty | rob@ravelrumba.com
 * Copyright (c) 2011 Rob Flaherty 
 * MIT Licensed: http://www.opensource.org/licenses/mit-license.php
 */
   
var htmlSlides = {
  
  //Vars
  currentSlide: 1,
  slideHash: location.hash,
  deck: null,
  slideCount: null,
  prevButton: null,
  nextButton: null,
  slideNumber: null,
      
  init: function(options) {
    var settings = {
      hideToolbar: false,
      slideWidth: 1280,
      slideHeight: 800
    },
    base = this;

    $.extend(this.settings, options);

    this.deck = $('#deck');
    this.slideCount = $('#deck > section').size();
    this.prevButton = $('#prev-btn');
    this.nextButton = $('#next-btn');
    this.slideNumber = $('#slide-number');

    //Add ids and classes to slides
    $('#deck > section').each(function(index, el) {
      $el = $(el);
      $el.attr('id', 'slide' + (index +1));
      $el.addClass('slide');
    });

    //Set total slide count in toolbar
    $('#slide-total').html(this.slideCount);

    //Check for hash and validate value
    if (this.slideHash && (parseInt((this.slideHash.substring(1)), 10) <= this.slideCount)) {
      this.currentSlide = parseInt(this.slideHash.replace('#', ''), 10);
    }

    $('#toolbar').addClass('toolbar-background');

    function toggleBgd(visibility) {
      if ($('#toolbar').hasClass('hide-background')) {
        switch (visibility) {
        case "show":
          $('#toolbar').addClass('toolbar-background');
          break;
        case "hide":
          $('#toolbar').removeClass('toolbar-background');
        }
      }
    }

    // Hide elements from toolbar with class "hide"
    var $elements = $('.hide');
    setTimeout(function(){
      $elements.fadeTo(300, 0);
      toggleBgd('hide');
    }, 1500);

    $('#toolbar').hover(
      function() {
        $elements.fadeTo(300, 1);
        toggleBgd('show');
      },
      function() {
        $elements.fadeTo(300, 0);
        toggleBgd('hide');
      }
    );

    //Bind control events
    this.prevButton.bind('click', $.proxy(this, 'prevSlide'));
    this.nextButton.bind('click', $.proxy(this, 'showActions'));
    $('html').bind('keydown', $.proxy(this, 'keyControls'));

    //Set initial slide
    this.changeSlide(this.currentSlide);

    //Ensure focus stays on window and not embedded iframes/objects
    $(window).load(function() {
      this.focus();
    });

    //Swipe gestures
    $('.slide').swipe({
      threshold: {
        x: 20,
        y: 30
      },
      swipeLeft: function() {
        base.showActions.apply(base);
      },
      swipeRight: function() {
        base.prevSlide.apply(base);
      },
    });

    /* Set the slide width and height and zoom proportionally */
    $(window).resize(function () {
        var width = $(window).width();
        var height = width * settings.slideHeight / settings.slideWidth;
        if (height > $(window).height()) {
          height = $(window).height();
          width = height * settings.slideWidth / settings.slideHeight;
        }
        var zoom = width * 100 / settings.slideWidth;
        $("section").css("width", settings.slideWidth + "px");
        $("section").css("height", settings.slideHeight + "px");
        $("section").css("zoom", zoom + "%");
    });
    $(window).resize();
  },

  //Change slide
  changeSlide: function(id) {
    var slideID = '#slide' + id;

    //Update slide classes
    this.deck.find('.slide-selected').removeClass('slide-selected');
    $(slideID).addClass('slide-selected');

    //Update toolbar
    this.slideNumber.html(this.currentSlide);

    //Update hash
    location.hash = id;

    //Trigger newSlide event
    this.newSlideEvent(id);

    //Hide arrows on first and last slides
    if ((id != 1) && (id != this.slideCount)) {
      this.prevButton.css('visibility', 'visible');
      this.nextButton.css('visibility', 'visible');
    } else if (id == 1) {
      this.prevButton.css('visibility', 'hidden');
    } else if (id == this.slideCount) {
      this.nextButton.css('visibility', 'hidden');
    }
  },

  //Next slide
  prevSlide: function() {
    if (this.currentSlide > 1) {
      this.currentSlide--;
      this.changeSlide(this.currentSlide);
    }
  },

  //Previous slide
  nextSlide: function() {
    if (this.currentSlide < this.slideCount) {
      this.currentSlide++;
      this.changeSlide(this.currentSlide);
    }
  },

  //Reveal actions
  showActions: function() {
    var actions = $('.slide-selected').find('.action'),
      actionOns;

    //If actions exist
    if (actions.length > 0) {
      actions.first().removeClass('action').addClass('action-on').fadeIn(250);

      //Number of current action
      actionOns = $('.slide-selected').find('.action-on');

      //Trigger newAction event
      $('html').trigger("newAction", actionOns.length );
    } else {
      this.nextSlide();
    }
  },

  newSlideEvent: function(id) {
    $('html').trigger('newSlide', id);
  },

  //Keyboard controls
  keyControls: function(event) {
    switch(event.keyCode) {
      //Left, up, and page up keys
      case 33:
      case 37:
      case 38:
        this.prevSlide();
      break;
      //Right, down, spacebar, and page down keys
      case 32:
      case 34:
      case 39:
      case 40:
        this.showActions();
      break;
    }
  }

};