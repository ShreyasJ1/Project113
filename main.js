function preload() {
    img = loadImage('https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1600');

}

function setup() {
    canvas = createCanvas(800, 800);
    canvas.center();
}

function draw() {
image(img,300,300,200,200);
fill(255,0,0);
stroke(255,0,0);
circle(60,60,80);
circle(740,60,80);
circle(60,740,80);
circle(740,740,80);
fill('green')
stroke('green')
rect(40, 95, 40,610);
rect(720,95,40,610);//
rect(95,720,610,40);//
rect(95,40,610,40);//

}

function take_snapshot() {
save('Image1.png');
}