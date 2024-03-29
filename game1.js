let score = 0;

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Score: ${score}`, 8, 20);
}

window.onload = function() {

    runGame(LEVELS, DOMDisplay);
}

        var LEVELS = [
            ["                                                                                ",
             "                                                                                ",
             "                                                                                ",
             "                                                                                ",
             "                                                                                ",
             "                                                                                ",
             "                                                                  xxx           ",
             "                                                   xx      xx    xx!xx          ",
             "                                             xx                  x!!!x          ",
             "                                                                 xx!xx          ",
             "                                   xxxxx                          xvx           ",
             "                                                                            xx  ",
             "  xx                                      o o                                x  ",
             "  x                     o                                                    x  ",
             "  x                                      xxxxx                               x  ",
             "  x          xxxx       o                                                    x  ",
             "  x  @       x  x                                                xxxxx       x  ",
             "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
             "                              x   x                  x     x                    ",
             "                              x!!!x                  x!!!!!x                    ",
             "                              x!!!x                  x!!!!!x                    ",
             "                              xxxxx                  xxxxxxx                    ",
             "                                                                                ",
             "                                                                                "],
             
             ["                                                                                ",
             "                                                                                ",
             "                                                                                ",
             "                                                                                ",
             "                                                                                ",
             "                                                   o        o                   ",
             "                                              o                                 ",
             "                                                   xxx     xxxx                 ",
             "                                             xxx                                ",
             "                                                                                ",
             "                                         xxx                                    ",
             "                                                                                ",
             "  xx                               o o                                       x  ",
             "  x                     o                                                    x  ",
             "  x                               xxxxx                                    o x  ",
             "  x                     o                                                    x  ",
             "  x  @                                                                       x  ",
             "  xxxxxxxx      xxxxxxxxxxxxxxx                                   xxxx   xxxxx  ",
             "                              x                                   x             ",
             "                              x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x             ",
             "                              x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x             ",
             "                              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx             ",
             "                                                                                ",
             "                                                                                "],
            ["                                      x!!x                        xxxxxxx                                    x!x  ",
             "                                      x!!x                     xxxx     xxxx                                 x!x  ",
             "                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
             "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
             "                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ",
             "                                                xx!x         x     o   o                                    xx!x  ",
             "                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ",
             "                                                 xvx         x     x   x                        !!!!!!!!!!!!!!xx  ",
             "                                                             xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ",
             "                                                              xx!!!!!!!!!!!xx            v                        ",
             "                                                               xxxx!!!!!xxxx                                      ",
             "                                               x     x            xxxxxxx        xxx         xxx                  ",
             "                                               x     x                           x x         x x                  ",
             "                                               x     x                             x         x                    ",
             "                                               x     x                             xx        x                    ",
             "                                               xx    x                             x         x                    ",
             "                                               x     x      o  o     x   x         x         x                    ",
             "               xxxxxxx        xxx   xxx        x     x               x   x         x         x                    ",
             "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
             "             xx       xx        x o x          x    xx               x   x   x               x                    ",
             "     @       x         x        x   x          x     x               x   x   x               x                    ",
             "    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ",
             "    x x      x         x       xx o xx         x     x               x     o     x x         x                    ",
             "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ",
             "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
             "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
             "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
             "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
             "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
             "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
            
            
             ["                                                                                                              ",
             "                                                                                                              ",
             "                                                                                                              ",
             "                                                                                                              ",
             "                                                                                                              ",
             "                                        o                                                                     ",
             "                                                                                                              ",
             "                                        x                                                                     ",
             "                                        x                                                                     ",
             "                                        x                                                                     ",
             "                                        x                                                                     ",
             "                                       xxx                                                                    ",
             "                                       x x                 !!!        !!!  xxx                                ",
             "                                       x x                 !x!        !x!                                     ",
             "                                     xxx xxx                x          x                                      ",
             "                                      x   x                 x   oooo   x       xxx                            ",
             "                                      x   x                 x          x      x!!!x                           ",
             "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
             "                                     xx   xx      x   x      x                                                ",
             "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
             "                                      x   x           x                    x!!!x                              ",
             "                                      x   x           x                     xxx                               ",
             "                                     xx   xx          x                                                       ",
             "                                      x   x= = = =    x            xxx                                        ",
             "                                      x   x           x           x!!!x                                       ",
             "                                      x   x    = = = =x     o      xxx       xxx                              ",
             "                                     xx   xx          x                     x!!!x                             ",
             "                              o   o   x   x           x     x                xxv        xxx                   ",
             "                                      x   x           x              x                 x!!!x                  ",
             "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
             "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
             "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
             "                             xx           xx                                         xxx                      ",
             "  xxx                         x     x     x                                         x!!!x                xxx  ",
             "  x x                         x    xxx    x                                          xxx                 x x  ",
             "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
             "  x                           x           x                              x   x                             x  ",
             "  x                           xx          x                              x x x                             x  ",
             "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
             "  x                xxx             o o    x                              x         xxx                     x  ",
             "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
             "  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
             "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
             "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
             "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
             "                                                                                                              ",
             "                                                                                                              "],
            ["                                                                                                  xxx x       ",
             "                                                                                                      x       ",
             "                                                                                                  xxxxx       ",
             "                                                                                                  x           ",
             "                                                                                                  x xxx       ",
             "                          o                                                                       x x x       ",
             "                                                                                             o o oxxx x       ",
             "                   xxx                                                                                x       ",
             "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
             "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
             "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
             "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
             "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
             "                                                                                                              ",
             "          o              xxx                              xx                                                  ",
             "                                                                                                              ",
             "                                                                                                              ",
             "                                                      xx                                                      ",
             "                   xxx         xxx                                                                            ",
             "                                                                                                              ",
             "                          o                                                     x      x                      ",
             "                                                          xx     xx                                           ",
             "             xxx         xxx         xxx                                 x                  x                 ",
             "                                                                                                              ",
             "                                                                 ||                                           ",
             "  xxxxxxxxxxx                                                                                                 ",
             "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
             "  x         x   x       x   x       x   x                 ||                  x     x                         ",
             "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
             "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
             "        x=                  =                =x   x                     xxx                                   ",
             "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
             "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "                                                                                                              "]
          ];
          
          
          function Vector(x, y) {
              this.x = x; this.y = y;
          }
          
          Vector.prototype.plus = function(other) {
              return new Vector(this.x + other.x, this.y + other.y);
          };
          
          Vector.prototype.times = function(scale) {
              return new Vector(this.x * scale, this.y * scale);
          };
          
          // Note: uppercase words are used that means constructor are values
          var actorchars =  {
              "@": Player,
              "o": Coin,
              "=": Lava,
              "|": Lava,
              "v": Lava
          };
          
          function Player(pos) {
              this.pos = pos.plus(new Vector(0, -.5));  //position in the start
              this.size = new Vector(.7, 1);  //largeur,longeur
              this.speed = new Vector(0, 0);
          }
          Player.prototype.type = "player";
          
          function Lava(pos, ch) {
              this.pos = pos;
              this.size = new Vector(1, 1);
              if (ch === "=")
                  this.speed = new Vector(2, 0);
              else if (ch === '|')
                  this.speed = new Vector(0, 2);
              else if (ch === 'v'){
                  this.speed = new Vector(0, 3); 		   
                  this.repeatPos = pos;
              }
          }
          Lava.prototype.type = "Lava";
          
          function Coin(pos) {
              this.basePos = this.pos = pos;
              this.size = new Vector(.7, .7);
              // take a look back
              this.wobble = Math.random() * Math.PI * 2;
          }
          Coin.prototype.type = "coin";
          
          // To find out whether a level is finished
          Level.prototype.isFinished = function() {
            return this.status != null && this.finishDelay < 0;
          };
          
          //build the grid
          //construit le niveau(place les elements)
          function Level(plan) {
              this.width = plan[0].length;
              this.height = plan.length;
              this.grid = [];
              this.actors = [];
              
              for (var y = 0; y < this.height; y++) {
                  var line = plan[y],  gridLine = [];
                  for (var x = 0; x < this.width; x++) {
                      var ch = line[x], fieldType = null;
                      var Actor = actorchars[ch];
                      if (Actor)
                          this.actors.push(new Actor(new Vector(x, y), ch));
                      else if (ch === "x")
                          fieldType = "wall";
                      else if (ch === "!")
                          fieldType = "lava";
                      else if (ch === "|")
                          fieldType = "lava";
                      else if (ch === "=")
                          fieldType = "lava";
                      else if (ch === "v"){
                          fieldType = "lava";
                          console.log(fieldType);
                      }
                      gridLine.push(fieldType)
                  }
                  this.grid.push(gridLine);
              }
               // store the player Actor object
              this.player = this.actors.filter(function(actor) {
                  return actor.type === "player"
              })[0];	
              this.status = this.finishDelay = null;
          }
          

          function element(name, className) {
              var elem = document.createElement(name);
              if(className) elem.className = className;
              return elem;
          }
          
          //DOMDisplay object

          // A display object displays a given level, encapsulating of the drawing code.
          // This `DOMDisplay` object uses simple DOM elements to show the level.

          // It is created by giving it a parent element to which it should append itself and a level object.

          function DOMDisplay(parent, level) {
              this.wrap = parent.appendChild(element("div", "game"));
              this.level = level;

              // The level’s background, which never changes, is drawn once.

              this.wrap.appendChild(this.drawBackground());
              // The actors are redrawn every time the display is updated. 
              // The `actorLayer` property will be used by `drawFrame` to track the element that holds 
              // the actors so that they can be easily removed and replaced.
              this.actorLayer = null;
              this.drawFrame();
          }
          
          
          var scale = 15;
          
          // The background is drawn as a `<table>` element. This nicely corresponds to the structure 
          // of the grid property in the level—
          // each row of the grid is turned into a table row (`<tr>` element). 
          // The strings in the grid are used as class names for the table cell (`<td>`) elements.
          DOMDisplay.prototype.drawBackground = function() {
              var table = element("table", "background");
              table.style.width = this.level.width * scale + "px";
              table.style.height = this.level.height * scale + "px";
              this.level.grid.forEach(function(row) {
              var rowElement = table.appendChild(element("tr"));
                  rowElement.style.height = scale + "px";
                  row.forEach(function(type) {
                      rowElement.appendChild(element("td", type));
                  });
              });
              return table;
          };


          // We draw each actor by creating a DOM element for it and setting that element’s position 
          // and size based on the actor’s properties. 
          // The values have to be multiplied by scale to go from game units to pixels.
          DOMDisplay.prototype.drawActors = function() {
              var wrap = element("div");
              this.level.actors.forEach(function(actor) {
                  var rect = wrap.appendChild(element("div", "actor " + actor.type));
                  rect.style.width = actor.size.x * scale + "px";
                  rect.style.height = actor.size.y * scale + "px";
                  rect.style.left = actor.pos.x * scale + "px";
                  rect.style.top = actor.pos.y * scale + "px";
              });
              return wrap;
          }
          
          //update l'affichage. dabord remove les anciens graphics
          //et apres il les remet dans leur nouvelle position
          DOMDisplay.prototype.drawFrame = function() {
              if (this.actorLayer)
                  this.wrap.removeChild(this.actorLayer);
              this.actorLayer = this.wrap.appendChild(this.drawActors());
              this.wrap.className = "game " + (this.level.status || "");
              this.scrollPlayerIntoView();
          };
          
          // il garantit que si le niveau dépasse de la fenêtre,
          // nous faisons défiler cette fenêtre pour nous assurer que le joueur est près de son centre.
          // Dans cette méthode, nous trouvons la position du joueur et mettons à jour la position de défilement de l'élément d'emballage.

          DOMDisplay.prototype.scrollPlayerIntoView = function() {
            var width = this.wrap.clientWidth;
            var height = this.wrap.clientHeight;
            var margin = width / 3;
          
            // The viewport
            var left = this.wrap.scrollLeft, right = left + width;
            var top = this.wrap.scrollTop, bottom = top + height;
          
            var player = this.level.player;
            var center = player.pos.plus(player.size.times(0.5))
                           .times(scale);
          
            if (center.x < left + margin)
              this.wrap.scrollLeft = center.x - margin;
            else if (center.x > right - margin)
              this.wrap.scrollLeft = center.x + margin - width;
            if (center.y < top + margin)
              this.wrap.scrollTop = center.y - margin;
            else if (center.y > bottom - margin)
              this.wrap.scrollTop = center.y + margin - height;
          };
          
          // To clear a displayed level, to be used when the game moves to the next level or resets a level.
          DOMDisplay.prototype.clear = function() {
              this.wrap.parentNode.removeChild(this.wrap);
          };
          
          // To tell whether a rectangle (specified by a position and a size) 
          //overlaps with any nonempty space on the background grid
          Level.prototype.obstacleAt = function(pos, size) {
            var xStart = Math.floor(pos.x);
            var xEnd = Math.ceil(pos.x + size.x);
            var yStart = Math.floor(pos.y);
            var yEnd = Math.ceil(pos.y + size.y);
          
             // If the body sticks out of the level, we always return "wall" for the sides and top
            if (xStart < 0 || xEnd > this.width || yStart < 0)
              return "wall";
            if (yEnd > this.height)
              return "lava";
            for (var y = yStart; y < yEnd; y++) {
              for (var x = xStart; x < xEnd; x++) {
                var fieldType = this.grid[y][x];
                if (fieldType) return fieldType;
              }
            }
          };
          
          // Handle the collisions between the player and other dynamic actors.
          Level.prototype.actorAt = function(actor) {
            for (var i = 0; i < this.actors.length; i++) {
              var other = this.actors[i];
              if (other != actor &&
                  actor.pos.x + actor.size.x > other.pos.x &&
                  actor.pos.x < other.pos.x + other.size.x &&
                  actor.pos.y + actor.size.y > other.pos.y &&
                  actor.pos.y < other.pos.y + other.size.y)
                return other;
            }
          };
          
          var maxStep = 0.05;
          
          // Gives all actors in the level a chance to move.
          // `step`: the time step in seconds(nb de sec ou on presse la key)
          // `keys`: contains the info about the arrow kets pressed(la touche sur le clavier)
          Level.prototype.animate = function(step, keys) {
            if (this.status != null)
              this.finishDelay -= step;
          
          // cut the time step into suitably small pieces, ensuring that step is not to large
            while (step > 0) {
              var thisStep = Math.min(step, maxStep);
              this.actors.forEach(function(actor) {
                actor.act(thisStep, this, keys);
              }, this);
              step -= thisStep;
            }
          };
          
          //fonction sur la lava
          Lava.prototype.act = function(step, level) {
            var newPos = this.pos.plus(this.speed.times(step));
            if (!level.obstacleAt(newPos, this.size))
              this.pos = newPos;
            else if (this.repeatPos)
              this.pos = this.repeatPos;
            else
              this.speed = this.speed.times(-1);
          };
          
          var wobbleSpeed = 8, wobbleDist = 0.07;
          
          //fonction sur les matbeots(pieces)
          Coin.prototype.act = function(step) {
            this.wobble += step * wobbleSpeed;
            var wobblePos = Math.sin(this.wobble) * wobbleDist;
            this.pos = this.basePos.plus(new Vector(0, wobblePos)); //position de la piece
          };
          
          
          var playerXSpeed = 10;
          
          //fonction qui fait bouger sur la largeur(lenght)
          Player.prototype.moveX = function(step, level, keys) {
            this.speed.x = 0;
            if (keys.left) this.speed.x -= playerXSpeed;
            if (keys.right) this.speed.x += playerXSpeed;
          
            var motion = new Vector(this.speed.x * step, 0);
            var newPos = this.pos.plus(motion);
            var obstacle = level.obstacleAt(newPos, this.size);
            if (obstacle)
              level.playerTouched(obstacle);
            else
              this.pos = newPos;
          };
          
          var gravity = 30;
          var jumpSpeed = 17;
          
          //fonction qui bouge le carre sur sa hauteur(height)
          Player.prototype.moveY = function(step, level, keys) {
            this.speed.y += step * gravity;
            var motion = new Vector(0, this.speed.y * step);
            var newPos = this.pos.plus(motion);
            var obstacle = level.obstacleAt(newPos, this.size);
            if (obstacle) {
              level.playerTouched(obstacle);
              if (keys.up && this.speed.y > 0)
                this.speed.y = -jumpSpeed;
              else
                this.speed.y = 0;
            } else {
              this.pos = newPos;
            }
          };
          
          //fonction qui recoit le niveau et la touche du clavier ou on appui et fait bouger le carre
          Player.prototype.act = function(step, level, keys) {
            this.moveX(step, level, keys);
            this.moveY(step, level, keys);
          
            var otherActor = level.actorAt(this);
            if (otherActor)
              level.playerTouched(otherActor.type, otherActor);
          
            // Losing animation
            if (level.status == "lost") {
              this.pos.y += step;
              this.size.y -= step;
            }
          };
          
          //detecte quel object il touche(si cest de la lave il perd, si cest une piece...)
          Level.prototype.playerTouched = function(type, actor) {
            if (type == "lava" && this.status == null) {
              this.status = "lost";
              this.finishDelay = 1;
            } else if (type == "coin") {
              this.actors = this.actors.filter(function(other) {
                return other != actor;
              });
              if (!this.actors.some(function(actor) {
                return actor.type == "coin";
              })) {
                this.status = "won";
                this.finishDelay = 1;
              }
            }
          };
          
          var arrowCodes = {37: "left", 38: "up", 39: "right"};
          
          //detecte sur quelle touche on appui et avance le carre en fonction
          function trackKeys(codes) {
            var pressed = Object.create(null);
            function handler(event) {
              if (codes.hasOwnProperty(event.keyCode)) {
                var down = event.type == "keydown";
                pressed[codes[event.keyCode]] = down;
                event.preventDefault();
              }
            }
            addEventListener("keydown", handler);
            addEventListener("keyup", handler);
            return pressed;
          }
          
          //La fonction `requestAnimationFrame` anime le jeu mais
          //son utilisation nous oblige à suivre l'heure à laquelle notre fonction
          // a été appelée la dernière fois et à appeler à nouveau `requestAnimationFrame` après chaque image.
          //cette fonction calcule ce temps
          function runAnimation(frameFunc) {
            var lastTime = null;
            function frame(time) {
              var stop = false;
              if (lastTime != null) {
                var timeStep = Math.min(time - lastTime, 100) / 1000;
                stop = frameFunc(timeStep) === false;
              }
              lastTime = time;
              if (!stop)
                requestAnimationFrame(frame);
            }
            requestAnimationFrame(frame);
          }
          
          var arrows = trackKeys(arrowCodes);
          
          //fonction qui montre les diff levels(qd on gagne il passe au niveau suivant)
          function runLevel(level, Display, andThen) {
            var display = new Display(document.body, level);
            runAnimation(function(step) {
              level.animate(step, arrows);
              display.drawFrame(step);
              if (level.isFinished()) {
                display.clear();
                if (andThen)
                  andThen(level.status);
                return false;
              }
            });
          }
          
          //demarre le jeu
          function runGame(plans, Display) {
            function startLevel(n) {
              var obj=window.localStorage.getItem('current user');       
              var newobj=JSON.parse(window.localStorage.getItem(obj));
              console.log( newobj.number_of_times_played_Platformer);
              newobj.number_of_times_played_Platformer+=1;
              localStorage.setItem(obj, JSON.stringify(newobj));
              runLevel(new Level(plans[n]), Display, function(status) {
                if (status == "lost"){
                  startLevel(n);
                 
                }else if (n < plans.length - 1){
                  startLevel(n + 1);
                  
                  var obj=window.localStorage.getItem('current user');
                  
                  var newobj=JSON.parse(window.localStorage.getItem(obj));
                 
                  newobj.score_Platformer=`level ${n+1}`;
                  
                  localStorage.setItem(obj, JSON.stringify(newobj));
                }else
                  alert("You win!");
              });
            }
            
            startLevel(0);
          }
          
          