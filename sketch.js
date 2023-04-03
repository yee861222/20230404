let points = [[100, 100], [150,100], [150, 50],[100,50],[100,-50],[50,-50],[50,50],[0,50],[0,100],[50,100],[50,150],[100,150]];
let ctx
function setup() {
createCanvas(windowWidth, windowHeight);
ctx = canvas.getContext('2d');
 ctx.lineWidth = 10;
 ctx.lineCap = 'round'

}

function draw() {
  gradientLine(ctx, 400, 20, 200, 400, 'brown', 'orange')

background(255);
textSize(18)  
fill(0, 102, 167); 
text("教科系",-100+mouseX,-65+mouseY)  

for (let i = 0; i < points.length-1; i++) {
  line(mouseX-points[i][0], mouseY-points[i][1], mouseX-points[i+1][0], mouseY-points[i+1][1]);
    }
    line(mouseX-points[points.length-1][0], mouseY-points[points.length-1][1], mouseX-points[0][0], mouseY-points[0][1]); //把最後一點與第一點的連線
  }
  function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
    const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(0, c1);
    gradient.addColorStop(1, c2);
    ctx.strokeStyle = gradient;


//background(255);
//translate(width/2, height/2);
//scale(1, -1);
for (let i = 0; i < points.length-1; i++) {


line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);

}
line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);
}

