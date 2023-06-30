function getCustomElementsAndConfig() {
  const customElements = ["bpmn:ZTask"];
  const customConfig = {
    // 自定义元素的配置(后面会用到)
    "bpmn:ZTask": {
      url: "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png",
      attr: { x: 0, y: 0, width: 48, height: 48 },
    },
  };

  return { customElements, customConfig };
}

function CustomRenderer(eventBus, styles) {
  BpmnJS.DiagramBaseRenderer.call(this, eventBus, 1500);
  // this.bpmnRenderer = bpmnRenderer;
//   this.canRender = function (element) {
//     return !element.labelTarget;
//   };

  //   this.drawShape = function(parentNode, element) {
  //     const {  append, create }  = TinySVG;
  //     // 核心函数就是绘制shape
  //     // const shape = this.bpmnRenderer.drawShape(parentNode, element)
  //     const { customElements, customConfig } = getCustomElementsAndConfig();
  //     const type = element.type; // 获取到类型
  //     if (customElements.includes(type)) {
  //       // or customConfig[type]
  //       const { url, attr } = customConfig[type];
  //       const customIcon = create("image", {
  //         // 在这里创建了一个image
  //         ...attr,
  //         href: url,
  //       });
  //       element["width"] = attr.width;
  //       element["height"] = attr.height;
  //       append(parentNode, customIcon);
  //       return customIcon;
  //     }
  //     const shape = this.bpmnRenderer.drawShape(parentNode, element);

  //     return shape;
  //   };

  //   this.getShapePath = function (shape) {
  //     return this.bpmnRenderer.getShapePath(shape);
  //   };

  this._styles = styles;

  var self = this;

  var computeStyle = styles.computeStyle;

  this.handlers = {
    "bpmn:UserTask": function (parentGfx, element) { 
        return self.drawTriangle(parentGfx, element.width);
    }
    // "custom:triangle": function (parentGfx, element) {
    //   return self.drawTriangle(parentGfx, element.width);
    // },
    // "custom:circle": function (parentGfx, element, attrs) {
    //   return self.drawCircle(parentGfx, element.width, element.height, attrs);
    // },
  };

  this.drawTriangle = function (parentGfx, side, attrs) {
    const {  append, create, attr }  = TinySVG;
    var halfSide = side / 2,
      points;

    points = [
      { x: halfSide, y: 0 },
      { x: side, y: side },
      { x: 0, y: side },
    ];

    var pointsString = points
      .map(function (point) {
        return point.x + "," + point.y;
      })
      .join(" ");

    attrs = computeStyle(attrs, {
      stroke: "#3CAA82",
      strokeWidth: 2,
      fill: "#3CAA82",
    });

    var polygon = create("polygon");
    attr(polygon, { points: pointsString });
    attr(polygon, attrs);

    append(parentGfx, polygon);

    return polygon;
  };

  this.getTrianglePath = function (element) {
    var x = element.x,
      y = element.y,
      width = element.width,
      height = element.height;
      var cx = element.x + element.width / 2,
      cy = element.y + element.height / 2,
      radius = element.width / 2;

    var trianglePath = [
        ["M", cx, cy],
        ["m", 0, -radius],
        ["a", radius, radius, 0, 1, 1, 0, 2 * radius],
        ["a", radius, radius, 0, 1, 1, 0, -2 * radius],
        ["z"],
    ];

    const { componentsToPath }  = BpmnJS.DiagramRenderUtil;
    return componentsToPath(trianglePath);
  };

  this.drawCircle = function (parentGfx, width, height, attrs) {
    const {  append, create, attr }  = TinySVG;
    var cx = width / 2,
      cy = height / 2;

    attrs = computeStyle(attrs, {
      stroke: "#4488aa",
      strokeWidth: 4,
      fill: "white",
    });

    var circle = create("circle");
    attr(circle, {
      cx: cx,
      cy: cy,
      r: Math.round((width + height) / 4),
    });
    attr(circle, attrs);

    append(parentGfx, circle);

    return circle;
  };

  this.getCirclePath = function (shape) {
    var cx = shape.x + shape.width / 2,
      cy = shape.y + shape.height / 2,
      radius = shape.width / 2;

    var circlePath = [
      ["M", cx, cy],
      ["m", 0, -radius],
      ["a", radius, radius, 0, 1, 1, 0, 2 * radius],
      ["a", radius, radius, 0, 1, 1, 0, -2 * radius],
      ["z"],
    ];

    const { componentsToPath }  = BpmnJS.DiagramRenderUtil;
    return componentsToPath(circlePath);
  };
}

CustomRenderer.$inject = ["eventBus", "styles"];

CustomRenderer.prototype.canRender = function (element) {
//   return /^custom:/.test(element.type);
return !element.labelTarget
};

CustomRenderer.prototype.drawShape = function (visuals, element) {
  var type = element.type;
  var h = this.handlers[type];

  /* jshint -W040 */
  return  h &&  h(visuals, element);
};

CustomRenderer.prototype.drawConnection = function (visuals, element) {
  var type = element.type;
  var h = this.handlers[type];

  /* jshint -W040 */
  return h && h(visuals, element);
};

CustomRenderer.prototype.getShapePath = function (element) {
    // var type = element.type.replace(/^custom:/, '');

    // var shapes = {
    //   triangle: this.getTrianglePath,
    //   circle: this.getCirclePath
    // };
  
    // return shapes[type](element);
return this.getTrianglePath(element);
};

CustomRenderer.prototype.getConnectionPath = function (element) {
};
