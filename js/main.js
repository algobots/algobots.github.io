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
      $wrapper 		= $('.wrapper'),
      $pledge 		= $('.pledge'),
      $pricing 		= $('.pricing'),
      $contact 		= $('.contact')
      
    var activeSection = $logo;
    var activeButton = $button1;

	mainTl = new TimelineMax();   
  	mainTl
  		.set($wrapper, {autoAlpha:1})
  		.set($pledge, {scale:0, autoAlpha: 0})
  		.set($pricing, {scale:0, autoAlpha: 0})
  		.set($contact, {scale:0, autoAlpha: 0});

   // ===================
   // =ANIMATION HELPERS
   // ===================
  
  function animateLogo() {
    var logoTl = new TimelineMax();
    
    logoTl
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
      .fromTo($blurb1, 0.4, {xPercent: '-200'}, {xPercent:'0', ease: Power4.easeInOut}, '-=1')
      .add('blurb')

    mainTl.add(logoTl);
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
      .to(element, 0.3, {scale:0, autoAlpha: 0}, '-=1'); 
    
    mainTl.add(closeTl);
  }

  function hideSection(section) {
  	mainTl
  		.set(section, {className:'+=hide'})
  }

  function activateSection(section) {
  	mainTl
  		.set(section, {className:'-=hide'})
  }

  function loadPledge() {
  	

  	var pledgeTl = new TimelineMax();

  	pledgeTl
  		.set()
  }


  function loadPricing() {
    
  }

  function resetSection(section) {
    mainTl
      .to(section, 0, {scale:1, autoAlpha: 1})
      .to($lineMask,0,{width:152})
  }

  function activateButton(button) {
  	mainTl
  		.set(button, {className:'+=active'})
  }

  function deactivateButton(button) {
  	mainTl
  		.set(button, {className:'-=active'})
  }

  // =======================
  // =ONCLICK FUNCTIONS
  // =======================

  $button1.on('click', function (e) {
  	if($button1.attr('class').split(' ')[1] === 'active') {
  		console.log('active button');
  	} else {
  		deactivateButton(activeButton);
  		activateButton($button1);
  		closeAnimation(activeSection);
  		hideSection(activeSection);
  		activateSection($logo);
  		resetSection($logo);
  		animateLogo();

  		activeSection = $logo;
  		activeButton = $button1;
  	}
  });

  $button2.on('click', function (e) {
    if($button2.attr('class').split(' ')[1] === 'active') {
  		console.log('active button');
  	} else {
		deactivateButton(activeButton);
  		activateButton($button2);
		closeAnimation(activeSection);
		hideSection(activeSection);
		activateSection($pledge);
		resetSection($pledge);

		activeSection = $pledge;
		activeButton = $button2;
  	}
  });

  $button3.on('click', function (e) {
    if($button3.attr('class').split(' ')[1] === 'active') {
  		console.log('active button');
  	} else {
  		deactivateButton(activeButton);
  		activateButton($button3);
		closeAnimation(activeSection);
		hideSection(activeSection);
		activateSection($pricing);
		resetSection($pricing);
		
		activeSection = $pricing;
		activeButton = $button3;
  	}
  });

  $button4.on('click', function (e) {
    if($button4.attr('class').split(' ')[1] === 'active') {
  		console.log('active button');
  	} else {
  		deactivateButton(activeButton);
  		activateButton($button4);
		closeAnimation(activeSection);
		hideSection(activeSection);
		activateSection($contact);
		resetSection($contact);
		
		activeSection = $contact;
  		activeButton = $button4;
  	}
  });


  // =======================
  // HOVER FUNCTIONS
  // =======================

  $button1.hover(
    function() {
      if($button1.attr('class').split(' ')[1] !== 'active') {
        TweenLite.to($bp1, 0.05, {scale:1.1});  
      } 
    },
    function() {
      TweenLite.to($bp1, 0.05, {scale:1});
    }
  );

  $button2.hover(
    function() {
      if($button2.attr('class').split(' ')[1] !== 'active') {
        TweenLite.to($bp2, 0.1, {scale:1.1});  
      } 
    },
    function() {
      TweenLite.to($bp2, 0.05, {scale:1});
    }
  );

  $button3.hover(
    function() {
      if($button3.attr('class').split(' ')[1] !== 'active') {
        TweenLite.to($bp3, 0.05, {scale:1.1});  
      } 
    },
    function() {
      TweenLite.to($bp3, 0.4, {scale:1});
    }
  );

  $button4.hover(
    function() {
      if($button4.attr('class').split(' ')[1] !== 'active') {
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
  animateLogo();
  loadButtons();

})(jQuery);
