const Application = PIXI.Application;

const app= new Application({
    width:500,
    height:500,
    transparent:false,
    antialias:true
});

app.renderer.backgroundColor = 0x23395D;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position='absoulte';

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;
const rectangle=new Graphics();
rectangle.beginFill(0xAA33BB)
.lineStyle(4, 0xFFEA00, 1)
.drawRect(200, 200, 100, 120)
.endFill();

app.stage.addChild(rectangle);

const poly= new Graphics();
poly.beginFill(0xFF66FF)
.lineStyle(5,0xFFEA00, 1)
.drawPolygon([
    600, 50,
    800, 150,
    900, 300,
    400, 400
])
.endFill();

app.stage.addChild(poly);

const circle = new Graphics();
circle.beginFill(0x22AACC)
.drawCircle(440, 200 ,80)
.endFill();

app.stage.addChild(circle);

const line= new Graphics();
line.lineStyle(5, 0xFFEA00, 1)
.moveTo(1000,100)
.lineTo(1000,800);

app.stage.addChild(line);

const torus = new Graphics();
torus.beginFill(0xFFFDDD)
.drawTorus(100, 600, 80, 100)
.endFill();

app.stage.addChild(torus);