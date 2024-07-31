function setup() {
    createCanvas(400, 400);
    background("white");
  }
  
  function draw() {
    stroke("navy")
   
    fill("black")
    
    
    
    if(mouseIsPressed)
    rect(mouseX, mouseY, 15, 15);
  }