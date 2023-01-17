// var makeItRain = function() {
//     //clear out everything
//     $('.rain').empty();
  
//     var increment = 0;
//     var drops = "";
//     var backDrops = "";
  
//     while (increment < 100) {
//       //couple random numbers to use for various randomizations
//       //random number between 98 and 1
//       var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
//       //random number between 5 and 2
//       var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
//       //increment
//       increment += randoFiver;
//       //add in a new raindrop with various randomizations to certain CSS properties
//       drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
//       backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
//     }
  
//     $('.rain.front-row').append(drops);
//     $('.rain.back-row').append(backDrops);
//   }
  
//   $('.splat-toggle.toggle').on('click', function() {
//     $('body').toggleClass('splat-toggle');
//     $('.splat-toggle.toggle').toggleClass('active');
//     makeItRain();
//   });
  
//   $('.back-row-toggle.toggle').on('click', function() {
//     $('body').toggleClass('back-row-toggle');
//     $('.back-row-toggle.toggle').toggleClass('active');
//     makeItRain();
//   });
  
//   $('.single-toggle.toggle').on('click', function() {
//     $('body').toggleClass('single-toggle');
//     $('.single-toggle.toggle').toggleClass('active');
//     makeItRain();
//   });
  
//   makeItRain();

// var w = c.width = window.innerWidth,
//     h = c.height = window.innerHeight,
//     ctx = c.getContext( '2d' ),
    
//     opts = {
      
//         len: 20,
//         count: 50,
//         baseTime: 10,
//         addedTime: 10,
//         dieChance: .05,
//         spawnChance: 1,
//         sparkChance: .1,
//         sparkDist: 10,
//         sparkSize: 2,
        
//         color: 'hsl(hue,100%,light%)',
//         baseLight: 50,
//         addedLight: 10, // [50-10,50+10]
//         shadowToTimePropMult: 6,
//         baseLightInputMultiplier: .01,
//         addedLightInputMultiplier: .02,
        
//         cx: w / 2,
//         cy: h / 2,
//         repaintAlpha: .04,
//         hueChange: .1
//     },
    
//     tick = 0,
//     lines = [],
//     dieX = w / 2 / opts.len,
//     dieY = h / 2 / opts.len,
    
//     baseRad = Math.PI * 2 / 6;
    
//     ctx.fillStyle = 'black';
//     ctx.fillRect( 0, 0, w, h );

// function loop() {

//     window.requestAnimationFrame( loop );
    
//     ++tick;
    
//     ctx.globalCompositeOperation = 'source-over';
//     ctx.shadowBlur = 0;
//     ctx.fillStyle = 'rgba(0,0,0,alp)'.replace( 'alp', opts.repaintAlpha );
//     ctx.fillRect( 0, 0, w, h );
//     ctx.globalCompositeOperation = 'lighter';
    
//     if( lines.length < opts.count && Math.random() < opts.spawnChance )
//         lines.push( new Line );
    
//     lines.map( function( line ){ line.step(); } );
// }

// function Line(){
//     this.reset();
// }

// Line.prototype.reset = function(){
//     this.x = 0;
//     this.y = 0;
//     this.addedX = 0;
//     this.addedY = 0;
    
//     this.rad = 0;
    
//     this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
    
//     this.color = opts.color.replace( 'hue', tick * opts.hueChange );
//     this.cumulativeTime = 0;
    
//     this.beginPhase();
// }

// Line.prototype.beginPhase = function(){

//     this.x += this.addedX;
//     this.y += this.addedY;
    
//     this.time = 0;
//     this.targetTime = ( opts.baseTime + opts.addedTime * Math.random() ) |0;
    
//     this.rad += baseRad * ( Math.random() < .5 ? 1 : -1 );
//     this.addedX = Math.cos( this.rad );
//     this.addedY = Math.sin( this.rad );
    
//     if( Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY )
//         this.reset();
// }

// Line.prototype.step = function(){

//     ++this.time;
//     ++this.cumulativeTime;
    
//     if( this.time >= this.targetTime )
//         this.beginPhase();
    
//     var prop = this.time / this.targetTime,
//         wave = Math.sin( prop * Math.PI / 2  ),
//         x = this.addedX * wave,
//         y = this.addedY * wave;
    
//     ctx.shadowBlur = prop * opts.shadowToTimePropMult;
//     ctx.fillStyle = ctx.shadowColor = this.color.replace( 'light', opts.baseLight + opts.addedLight * Math.sin( this.cumulativeTime * this.lightInputMultiplier ) );
//     ctx.fillRect( opts.cx + ( this.x + x ) * opts.len, opts.cy + ( this.y + y ) * opts.len, 2, 2 );
    
//     if( Math.random() < opts.sparkChance )
//         ctx.fillRect( opts.cx + ( this.x + x ) * opts.len + Math.random() * opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.sparkSize / 2, opts.cy + ( this.y + y ) * opts.len + Math.random() * opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize )
// }

// loop();

// window.addEventListener( 'resize', function() {
//     w = c.width = window.innerWidth;
//     h = c.height = window.innerHeight;
//     ctx.fillStyle = 'black';
//     ctx.fillRect( 0, 0, w, h );
    
//     opts.cx = w / 2;
//     opts.cy = h / 2;
    
//     dieX = w / 2 / opts.len;
//     dieY = h / 2 / opts.len;
// });