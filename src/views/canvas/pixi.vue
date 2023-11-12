<template>
  <div ref="pixi"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import img from "../../assets/1.jpg";
import {
  Sprite,
  utils,
  Rectangle,
  Application,
  BlurFilter,
  Texture,
  Text,
  Assets,
  Graphics,
} from "pixi.js";
import { OutlineFilter, GlowFilter } from "pixi-filters";

const app = new Application({
  resizeTo: window,
  backgroundColor: 0x061639,
});
const pixi = ref();
onMounted(() => {
  pixi.value.appendChild(app.view);

  //基本图形
  // const rect = new Graphics()
  // rect.lineStyle(4,0xff0000,1)
  // rect.beginFill(0x66ccff,0.5)
  // rect.drawRect(0,0,64,64)
  // rect.endFill()

  // rect.scale.set(1,2)
  // rect.position.set(100,200)
  // rect.rotation = 0.5
  // rect.pivot.set(-100,0)

  // app.stage.addChild(rect)

  // const cir = new Graphics()
  // cir.beginFill(0x66ccff,0.5)
  // cir.drawCircle(200,100,50)
  // cir.endFill()
  // app.stage.addChild(cir)

  // const rec = new Graphics()
  // rec.beginFill(0x66ccff,0.5)
  // rec.drawRoundedRect(400,100,50,50,15)
  // rec.endFill()
  // app.stage.addChild(rec)

  // const ell = new Graphics()
  // ell.beginFill(0x66ccff,0.5)
  // ell.drawEllipse(350,50,70,30)
  // ell.endFill()
  // app.stage.addChild(ell)

  // const pol = new Graphics()
  // pol.beginFill(0x66ccff,0.5)
  // pol.drawPolygon([10,10,100,30,120,50,100,90,20,100])
  // pol.endFill()
  // app.stage.addChild(pol)

  // const arc = new Graphics()
  // arc.beginFill(0x66ccff,0.5)
  // arc.arc(50,300,40,0,Math.PI,false)
  // arc.endFill()
  // app.stage.addChild(arc)

  // const line = new Graphics()
  // line.lineStyle(3,0x66ccff,0.5)
  // line.moveTo(300,400)
  // line.lineTo(350,450)
  // line.lineTo(450,350)
  // line.endFill()
  // app.stage.addChild(line)

  //纹理
  const texture = Texture.from(img);

  // 资源加载
  // Assets.add("diyi", img);
  // const x = Assets.load(["diyi"]);
  // x.then((texture:any) => {
  //   // 精灵
  //   const sprite = new Sprite(texture.diyi);
  //   // sprite.x = app.screen.width / 2;
  //   // sprite.y = app.screen.height / 2;
  //   // sprite.anchor.set(0.5, 0.5);
  //   // sprite.rotation = 40;
  //   sprite.scale.set(0.1, 0.1);
  //   sprite.alpha = 0.9;
  //   app.stage.addChild(sprite);

  //   // 动画 ticket
  //   // app.ticker.add(((delta:any)=>{
  //   //   sprite.rotation += 0.01 * delta
  //   // }))
  // });

  // 文字
  // const text = new Text("HELLO", {
  //   fontFamily: "Arial",
  //   fontSize: 80,
  //   fill: 0xff000,
  //   align: "center",
  // });
  // text.x = app.screen.width / 2;
  // text.y = app.screen.height / 2;
  // text.anchor.set(0.5);
  // app.stage.addChild(text);

  // 精灵
  const sprite = new Sprite(texture);
  sprite.width = app.screen.width / 2;
  sprite.height = app.screen.height / 2;
  // sprite.anchor.set(0.5, 0.5);
  // sprite.rotation = 40;
  // sprite.scale.set(0.1, 0.1);
  sprite.alpha = 0.9;

  // sprite.mask = text;
  app.stage.addChild(sprite);

  // 滤镜
  const blurFilter = new BlurFilter();
  blurFilter.blur = 5;
  sprite.filters = [blurFilter];

  const outlineFilter = new OutlineFilter(5, 0xffff00);
  const glowFilter = new GlowFilter({
    distance: 15,
    outerStrenght: 1,
    innerStrenght: 0,
    color: 0xffffff,
    quality: 0.5,
  });
  sprite.filters = [outlineFilter, glowFilter];
  // // 动画 ticket
  // // app.ticker.add(((delta:any)=>{
  // //   sprite.rotation += 0.01 * delta
  // }))

  // 事件
  sprite.interactive = true;
  sprite.on("mouseenter", () => {
    sprite.alpha = 1;
    blurFilter.blur = 0;
  });
  sprite.on("mouseleave", () => {
    sprite.alpha = 0.6;
    blurFilter.blur = 5;
  });
});
</script>