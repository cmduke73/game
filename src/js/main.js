var game = (function(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var rect = canvas.getBoundingClientRect();

  var dir='right';
  var spawns = {}

  function spawn(theSpawn){
    spawns[theSpawn] = {}
    spawns[theSpawn].y = Math.floor(Math.random()*canvas.width);
    spawns[theSpawn].x=0;
    spawns[theSpawn].h=10;
    spawns[theSpawn].w=10;
    spawns[theSpawn].interval = setInterval(()=>{

      ctx.fillStyle = 'yellow';
      ctx.clearRect(spawns[theSpawn].y, spawns[theSpawn].x-4, 10, 10);
      ctx.fillRect(spawns[theSpawn].y, spawns[theSpawn].x++, 10, 10);

      if( spawns[theSpawn].x == canvas.height){
        clearInterval(spawns[theSpawn].interval);
      }

    }, 4);
  }
  return {

  changeDir: function(){
  if(dir == 'right'){
    dir = 'left';
  }else if (dir == 'left'){
    dir = 'right';
  }

},



evil: function(){
  var x=0;
  var evil = setInterval(function(){
    var text='';
    var possible = 'abcdefghijklmnopqrstuvwxyz';
    for(var i=0; i < 10; i++){
        text+=possible.charAt(Math.floor(Math.random() * possible.length));
    }

    spawn(text);

  }, 400);

},



player: function(){

  var i=0;


  var player = setInterval(function(){
    ctx.fillStyle = '#ffffff';

    if (i==canvas.width-50){
      dir='left'
    }

      if(i==0){
      dir='right';
 }

    if(dir=='right'){
      ctx.clearRect(i-4, 450, 50, 50);
      ctx.fillRect(i++, 450, 50, 50);
     }else{
      ctx.clearRect(i+4, 450, 50, 50);
      ctx.fillRect(i--, 450, 50, 50);
    }


  },10);


      let x = i;
      let y = 450;
      let h = 50;
      let w = 50;

      for (s in spawns){
       if(x < spawns[s].x + spawns[s].w &&
        spawns[s].x > x && spawns[s].x < (x+w) &&
        y < spawns[s]. y + spawns[s].h &&
        y+h > spawns[s].y){
          alert('collision');
        }
     }

    },

      init: function(){
      canvas.height = '600';
      canvas.width = '800';

        this.player();

        this.evil();
      }
    }

})();
game.init();
window.addEventListener('keyup', function(){
game.changeDir();



});




