

console.clear();

import $ from "cash-dom";									// loading a small lib to get some of the oldschool jquery shortcuts
import '../scss/style.scss'									// loading in the style
import { gsap } from "gsap";								// loading in the green sock library
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";	// loading in the green sock scroll trigger
import Media from './Baymax.amazon.js';						// loading in the baymax audio player


gsap.registerPlugin(ScrollTrigger);

/* :::::::::: Code to update the percentage value :::::::::::: */
/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */



function init () {

	/* :::: Code to run the initial animation on load  ::::::::::: */
	/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

	function initialAnimation () {
		var initAnimation = gsap.timeline();
		initAnimation.add( function(){ document.querySelector(".wrapper").style.visibility = "visible"; } )
		initAnimation.fromTo(".hero img", {x:500,scale:0.5,alpha:0,rotation:30,y:100},{delay:1,x:0,scale:1,alpha:1,duration:1,rotation:0,y:0});
		initAnimation.fromTo(".hero .section-header", {alpha:0,y:100},{alpha:1,duration:1,y:0},"-=0.75");
		initAnimation.fromTo(".hero .devider-line", {alpha:0,y:200},{alpha:1,duration:1,y:0},"-=0.75");
		initAnimation.fromTo(".how-to-share .copy-left", {alpha:0,x:-100},{alpha:1,duration:1,x:0},"-=0.75");
		initAnimation.fromTo(".how-to-share .copy-right", {alpha:0,x:100},{alpha:1,duration:1,x:0},"-=1");
	}
	
	initialAnimation ();
	
	function numberUpdater (triggerele, targetele, startnum, endnum) {
	
		var startCount = startnum;
		var num = {var:startCount};
		var val1 = document.querySelector(targetele);
	
		var numberUpdate1 = gsap.timeline({
		scrollTrigger: {
			trigger: triggerele,
			start: "top bottom-=20%",
			end: '+=50%',
			scrub: 0.5, 
			}
		})
	
		numberUpdate1.to(num, {var: endnum, duration: 1, ease:"none", onUpdate:changeNumber});
		function changeNumber() { val1.innerHTML = (num.var).toFixed(); }
	
	}
	
	numberUpdater (".the-initial-idea .value",".the-initial-idea .value",0,72);
	numberUpdater (".indeed-and-hillman .value",".indeed-and-hillman .value",0,60);
	numberUpdater (".the-best-connections .value",".the-best-connections .value",0,75);
	
	
	
	/* :::: Code to slide the larger section header images ::::::: */
	/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
	
	function largeImgSlide (data) {
	
		var largeImgSlide1 = gsap.timeline({
			scrollTrigger: {
			   trigger: data.trigger,
			   pinSpacing: false,
			 scrub:.5,
			  start: "top bottom+=10%",
			  end: '+=100%',
			},
		  })
		  
		largeImgSlide1.fromTo(data.target, {x:data.xpos,scale:0.5,alpha:0,rotation:data.rotation,y:data.ypos},{x:0,scale:1,alpha:1,duration:1,rotation:0,y:0});
	}
	
	largeImgSlide ({ trigger: ".take-a-stand", target: ".take-a-stand img", xpos: 500, ypos: 100, rotation: 30});
	largeImgSlide ({ trigger: ".meet-audiences", target: ".meet-audiences img", xpos: -500, ypos: 100, rotation: -30});
	largeImgSlide ({ trigger: ".build-trust", target: ".build-trust img", xpos: 500, ypos: 100, rotation: 30});
	
	
	
	/* ::::::::: Code to slide the audio talent images ::::::::::: */
	/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
	
	
	function talentImgSlide (data) {
	
		var talentImgSlide1 = gsap.timeline({
			scrollTrigger: {
			   trigger: data.trigger,
			   pinSpacing: false,
			 scrub:1,
			  start: "top bottom+=20%",
			  end: '+=50%',
			},
		  })
		  
		  talentImgSlide1.fromTo(data.target, {x:data.xpos,alpha:0,rotation:data.rotationstart},{x:0,alpha:1,duration:1,rotation:data.rotationend});
	}
	
	talentImgSlide ({
		trigger: ".the-initial-idea .talent-pic",
		target: ".the-initial-idea .talent-pic img",
		xpos: 100,
		rotationstart: -3,
		rotationend: 3
	});
	
	talentImgSlide ({
		trigger: ".indeed-and-hillman .talent-pic",
		target: ".indeed-and-hillman .talent-pic img",
		xpos: -100,
		rotationstart: 3,
		rotationend: -3
	});
	
	talentImgSlide ({
		trigger: ".the-best-connections .talent-pic",
		target: ".the-best-connections .talent-pic img",
		xpos: 100,
		rotationstart: -3,
		rotationend: 3
	});
	
	
	/* ::::::::: Code to set up Audio Players  ::::::::::::::::::: */
	/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
	
	
	
	window.Player1 = new Media ({
	  container: 'player-1', // div ID of the video container
	  type: 'audio',
	  playbutton: "./assets/images/play-purple.png", 	// this images needed to be hosted in google bucket
	  pausebutton: "./assets/images/pause-purple.png",	// this images needed to be hosted in google bucket
	  id: 'audio-1',	
	  mp3: "./assets/audio/file_example_MP3_5MG.mp3",	// this mp3 file needed to be hosted in google bucket
	});
	
	window.Player2 = new Media ({
	  container: 'player-2', // div ID of the video container
	  type: 'audio',
	  playbutton: "./assets/images/play-green.png",		// this images needed to be hosted in google bucket
	  pausebutton: "./assets/images/pause-green.png",	// this images needed to be hosted in google bucket
	  id: 'audio-2',	
	  mp3: "./assets/audio/file_example_MP3_5MG.mp3",	// this mp3 file needed to be hosted in google bucket
	});
	
	window.Player3 = new Media ({
	  container: 'player-3', // div ID of the video container
	  type: 'audio',
	  playbutton: "./assets/images/play-pink.png",		// this images needed to be hosted in google bucket
	  pausebutton: "./assets/images/pause-pink.png",	// this images needed to be hosted in google bucket
	  id: 'audio-3',	
	  mp3: "./assets/audio/file_example_MP3_5MG.mp3",	// this mp3 file needed to be hosted in google bucket
	});

}


$(function() {init ();});  // init will run after DOM elements are loaded 

// TAB //


function onTabClick(e){
    let activeTabs = document.querySelectorAll('.active');


    activeTabs.forEach(function(tab){
        tab.className = tab.className.replace('active', '');
    });


    e.target.parentElement.className += ' active';
    document.getElementById(event.target.href.split("#")[1]).className += ' active';

}

const element = document.getElementById('nav-tab');
element.addEventListener('click', onTabClick, false);


// MASONRY 

var grid = document.querySelector('.grid');
var msnry;

imagesLoaded( grid, function() {
  // init Isotope after all images have loaded
  msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
});
