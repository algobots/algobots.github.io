(function($) {

  // ===================
  // =Set variables
  // ===================

	var $rightEar     = $('#rightEar'),
      $leftEar      = $('#leftEar'),
      $headOutline  = $('#headOutline'),
      $mouth        = $('#mouth'),
      $rightAntenna = $('#rightAntenna'),
      $leftAntenna  = $('#leftAntenna'),
      $lineChart    = $('#lineChart'),
      $eyes         = $('#eyes'),
      $lineMask     = $('#lineMask'),
      $title        = $('.title'),
      $blurb1        = $('.blurb1'),
      $blurb2        = $('.blurb2'),
      $blurb3        = $('.blurb3'),
      $buttonContainer = $('.button-container'),
      $button1        =$('.button1'),
      $button2       =$('.button2'),
      $button3        =$('.button3'),
      $button4       =$('.button4'),
      $buttonSpan    = $('.bp'),
      $buttonText    = $('.bp-text'),
      $logo          = $('.logo'),
      $bp1           = $('.bp1'),
      $bp2           = $('.bp2'),
      $bp3           = $('.bp3'),
      $bp4           = $('.bp4'),
      $wrapper 		= ($('.wrapper'))

	 mainTl = new TimelineMax();
   
   var tlProjects = new TimelineMax();

   tlProjects
   		.set($wrapper, {autoAlpha: 1});
   		// .set($wrapper, {perspective: 10000});




   // ===================
   // =ANIMATION HELPERS
   // ===================
  
  function loadLogo() {
    var animateTl = new TimelineMax();
    
    animateTl
      .set($leftEar, {autoAlpha: 0, xPercent: +50})
      .set($rightEar, {autoAlpha: 0, xPercent: -50})
      .fromTo($headOutline, 0.7, {opacity: 0, scale: 0.5, transformOrigin: "50% 50% 0"}, {scale: 1, opacity:1, ease:Back.easeOut}, '+=1')
      .add('headOutline')
      .to($leftEar, 0.1, {autoAlpha: 1, xPercent: 0, ease: Back.easeOut})
      .to($rightEar, 0.1, {autoAlpha: 1, xPercent: 0, ease: Back.easeOut})
      .add('ears')
      .fromTo($eyes, 0.2, {opacity: 0, scale: 0.5, transformOrigin: "50% 50% 0"}, {scale: 1, opacity:1, ease:Back.easeOut})
      .add('eyes')
      .fromTo($mouth, 0.2, {opacity: 0, scale: 0.5, transformOrigin: "50% 50% 0"}, {scale: 1, opacity:1, ease:Back.easeOut})
      .add('mouth')
      .fromTo($leftAntenna, 0.2, {opacity: 0, scale: 0}, {scale: 1, opacity: 1, yPercent: -33, xPercent: -45, rotation: 0, ease:Back.easeOut})
      .fromTo($rightAntenna, 0.2, {opacity: 0, scale: 0}, {scale: 1, opacity: 1, yPercent: -43, xPercent: 60, rotation: 70, ease:Back.easeOut})
      .add('antenna')
      .to($lineMask, 0.5, {width: 0, ease: Power3.easeInOut}, '-=0.2')
      .add('line')
      .fromTo($title, 0.5, {autoAlpha:0, scale:0}, {autoAlpha:1, scale:0.8, rotation: 0, ease: Power4.easeInOut})
      .to($title, 2, {scale:1})
      .add('title')
      .fromTo($blurb1, 0.4, {xPercent: '-100'}, {xPercent:'0', ease: Power4.easeInOut}, '-=1')
      // .to($blurb1, 1, {vars})
      .add('blurb')

    mainTl.add(animateTl);
  }

  function loadButtons() {
    mainTl
      .staggerFrom($buttonSpan, 0.3, {autoAlpha: 0, yPercent: -100, ease:Back.easeOut}, 0.1)
      .fromTo($buttonText, 0.3, {opacity: 0}, {opacity: 1})
      .add('button')
  }

  function closeAnimation(element) {
    var closeTl = new TimelineMax()
    closeTl
      .to(element, 0.4, {scale:0, autoAlpha: 0}); 
    
    mainTl.add(closeTl);
  }

  function loadPricing() {
    
  }

  function resetLogo() {
    mainTl
      .to($logo, 0, {scale:1, autoAlpha: 1})
      .to($lineMask,0,{width:152})
  }

  function minimizeLogo() {
    mainTl
      .to($logo, 0.4, {scale:0.5, top:0, left:0})
  }

  function handleButtonClick(button) {
       mainTl
      .set([$button1, $button2, $button3, $button4], {className:'-=active'})
      .set([$button1, $button2, $button3, $button4], {className:'+=inactive'})
      .set(button, {className:'+=active'})
      .set(button, {className:'-=inactive'})
  }

  function over (button) {
    
    if($button1.attr('class').split(' ')[1] === 'inactive') {
    
        // TweenLite.to($(this), 0.4, {scale:1.1});
    
    
        // TweenLite.to($(this), 0.4, {scale:1});
    
    }  
  }


  // =======================
  // =ONCLICK FUNCTIONS
  // =======================

  $button1.on('click', function (e) {
    // closeAnimation($logo);
    handleButtonClick($button1);
  });

  $button2.on('click', function (e) {
    handleButtonClick($button2);
    closeAnimation($logo);
  });

  $button3.on('click', function (e) {
    handleButtonClick($button3);
  });

  $button4.on('click', function (e) {
    handleButtonClick($button4);
  });


  // =======================
  // HOVER FUNCTIONS
  // =======================

  $button1.hover(
    function() {
      if($button1.attr('class').split(' ')[1] === 'inactive') {
        TweenLite.to($bp1, 0.05, {scale:1.1});  
      } 
    },
    function() {
      TweenLite.to($bp1, 0.05, {scale:1});
    }
  );

  $button2.hover(
    function() {
      if($button2.attr('class').split(' ')[1] === 'inactive') {
        TweenLite.to($bp2, 0.1, {scale:1.1});  
      } 
    },
    function() {
      TweenLite.to($bp2, 0.05, {scale:1});
    }
  );

  $button3.hover(
    function() {
      if($button3.attr('class').split(' ')[1] === 'inactive') {
        TweenLite.to($bp3, 0.05, {scale:1.1});  
      } 
    },
    function() {
      TweenLite.to($bp3, 0.4, {scale:1});
    }
  );

  $button4.hover(
    function() {
      if($button4.attr('class').split(' ')[1] === 'inactive') {
        TweenLite.to($bp4, 0.05, {scale:1.1});  
      } 
    },
    function() {
      TweenLite.to($bp4, 0.4, {scale:1});
    }
  );

  // =======================
  // LIFE CYCLE FUNCTIONS
  // =======================

  //init
  loadLogo();
  loadButtons();

})(jQuery);
