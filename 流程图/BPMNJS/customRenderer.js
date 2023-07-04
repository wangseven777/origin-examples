function getCustomElementsAndConfig() {
  const customElements = ["bpmn:UserTask"];
  const customConfig = {
    // 自定义元素的配置(后面会用到)
    "bpmn:UserTask": {
      url: "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png",
      attr: { x: 0, y: 0, width: 48, height: 48 },
    },
  };

  return { customElements, customConfig };
}

function CustomRenderer(eventBus, styles) {
  // 继承DiagramBaseRenderer
  BpmnJS.DiagramBaseRenderer.call(this, eventBus, 1500);

  // this._styles = styles;

  // var self = this;

  // var computeStyle = styles.computeStyle;

  // this.handlers = {
  //   "custom:circle": function (parentGfx, element) {
  //       return self.drawTriangle(parentGfx, element.width);
  //   }
  // };

  // this.drawTriangle = function (parentGfx, side, attrs) {
  //   const {  append, create, attr }  = TinySVG;
  //   var halfSide = side / 2,
  //     points;

  //   points = [
  //     { x: halfSide, y: 0 },
  //     { x: side, y: side },
  //     { x: 0, y: side },
  //   ];

  //   var pointsString = points
  //     .map(function (point) {
  //       return point.x + "," + point.y;
  //     })
  //     .join(" ");

  //   attrs = computeStyle(attrs, {
  //     stroke: "#3CAA82",
  //     strokeWidth: 2,
  //     fill: "#3CAA82",
  //   });

  //   var polygon = create("polygon");
  //   attr(polygon, { points: pointsString });
  //   attr(polygon, attrs);

  //   append(parentGfx, polygon);

  //   return polygon;
  // };

  // this.getTrianglePath = function (element) {
  //   var x = element.x,
  //     y = element.y,
  //     width = element.width,
  //     height = element.height;
  //     var cx = element.x + element.width / 2,
  //     cy = element.y + element.height / 2,
  //     radius = element.width / 2;

  //   var trianglePath = [
  //       ["M", cx, cy],
  //       ["m", 0, -radius],
  //       ["a", radius, radius, 0, 1, 1, 0, 2 * radius],
  //       ["a", radius, radius, 0, 1, 1, 0, -2 * radius],
  //       ["z"],
  //   ];

  //   const { componentsToPath }  = BpmnJS.DiagramRenderUtil;
  //   return componentsToPath(trianglePath);
  // };
}

CustomRenderer.$inject = ["eventBus", "styles"];

CustomRenderer.prototype.canRender = function (element) {
  return !element.labelTarget;
};

CustomRenderer.prototype.drawShape = function (parentNode, element) {
  const config = getCustomElementsAndConfig();
  const { append, create } = TinySVG;
  if (config.customElements.find((x) => x === element.type)) {
    const { url, attr } = config.customConfig[element.type];
    const customIcon = create("image", {
      // 在这里创建了一个image
      ...attr,
      href: url,
    });
    element["width"] = attr.width; // 这里我是取了巧, 直接修改了元素的宽高
    element["height"] = attr.height;
    append(parentNode, customIcon);
    return customIcon;
  }
};

CustomRenderer.prototype.drawConnection = function (parentNode, element) {
  // return this.drawConnection(visuals, element);
  // var type = element.type;
  // var h = this.handlers[type];
  // return h && h(visuals, element);
};

CustomRenderer.prototype.getShapePath = function (element) {
  // return this.getTrianglePath(element);
  // return this.getShapePath(element);
};

CustomRenderer.prototype.getConnectionPath = function (element) {
  // return this.getConnectionPath(element);
};
