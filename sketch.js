let tree;
let camellia;
let speed=20;
let meow; //audio
let threeKittens;
let catX;
let catY;
let catCaught = false; // Track if the cat is caught
let timer = 10;
 link = createA('https://www.avma.org/resources-tools/pet-owners/petcare/spaying-and-neutering', 'Learn about spaying and neutering', '_blank');

let gameState = "current game state";  // Tracks the current state of the game


function preload(){
tree=loadImage("northGAwoods.webp");
camellia=loadImage("Camellia.jpeg");
threeKittens=loadImage("camelliasKittens.jpg");
  
familyIcon=loadImage("familyIcon.jpg");
heartIcon=loadImage("heartIcon.jpg");
hearteyesIcon=loadImage("hearteyesIcon.jpg");
malecat1Icon=loadImage("malecat1Icon.jpg");
malecat2Icon=loadImage("malecat2Icon.jpg");
marrymeIcon=loadImage("marrymeIcon.jpg");
  
meow=loadSound("Meow.mp3");

maleAssets= [
familyIcon,
heartIcon,
hearteyesIcon,
malecat1Icon,
malecat2Icon,
marrymeIcon];

}
function setup() {
  createCanvas(600, 400);
  catX=width/2;
  catY=height/2;
  slider=createSlider(0,1,0.50,0.01);
  meow.loop();
  frameRate(17);
  
  link = createA('https://www.avma.org/resources-tools/pet-owners/petcare/spaying-and-neutering', 'Learn about spaying and neutering', '_blank');
  link.position(188, 328);
  link.hide(); // Initially hide the link
  
}
function draw() {;
  meow.setVolume(slider.value());
  image(tree,0,0,600,400);
  let fr=frameRate();
  print(fr);
                 
  //Camellia's movement
  catX+=random(-speed,speed);
  catY+=random(-speed,speed);
  catX=constrain(catX,0,width);
  catY=constrain(catY,0,height);
                 
    //Male cats' movement       
    for (let i = 20; i < 580; i += 90) {
    let randomAsset = random(maleAssets);
    let randomX = random(width);
    let randomY = random(height);
    image(randomAsset, randomX, randomY, 60, 60);
      
//} if image(whiteCat,x,y,70,70)
}
//When Camellia is caught
if(dist(mouseX,mouseY,catX,catY) < 50){
  catCaught=true;

}
//Images displayed when Camellia is caught or not caught
  if(catCaught){
    rect(0, 0, 600,400);
    image(camellia,155,0,300,300)
    push();
    fill(168, 166, 163);
    noStroke();
    rect(0, 280, 600,400);
    pop();
    textAlign(CENTER);
    textSize(15);
    fill(36, 22, 2);
    let S="Camellia has been spayed! Thank you for helping to control the community cat population \n\nPress R to reset the game";
    text(S, 300, 325);
    link.show(); //show the TNR link when Camellia has been caught
    stroke(0);
} else {
  image(camellia, catX, catY, 70, 70);
  link.hide(); //hide the link when Camellia is still on the loose
 }
}
  //Display the kittens if she is not caught
 
function keyPressed() {
  let message = "Camellia has been spayed! Thank you for helping to control the community cat population \n\nPress R to reset the game";
 if(key==='R' || key==='r'){
  message = "Camellia has been spayed! Thank you for helping to control the community cat population \n\nPress R to reset the game";
   catCaught=false; //game reset
   catX=width/2;
   catY=height/2;
 
 }
}
  
/* 


Attributions:

//Audio
House Cats - Calico Queen Cat, Soft Meow and Purr by TheKingOfGeeks360 -- https://freesound.org/s/755363/ -- License: Creative Commons 0

Images:

I, Cyprus Meraz, have permission to use or photographed each of the photos. The photo of the woods is from a park near my home in the Atlanta suburbs; I took the photo with a smart phone. My sister took the photo of Camellia, the white cat, and she gave me permission to use the photo for the game. As for the "male assets," I drew them on paper with oil pastels, graphite pencils, and ink pens and photographed the drawings/writing.


*/

