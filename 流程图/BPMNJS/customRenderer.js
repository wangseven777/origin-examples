function getCustomElementsAndConfig() {
  const customElements = ["bpmn:UserTask", 'custom:node'];
  const customConfig = {
    // 自定义元素的配置(后面会用到)
    "bpmn:UserTask": {
      url: "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png",
      attr: { x: 0, y: 0, width: 48, height: 48 },
    },
    "custom:node": {
      url: "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png",
      attr: { x: 0, y: 0, width: 48, height: 48 },
    },
  };

  return { customElements, customConfig };
}

function CustomRenderer(eventBus, styles) {
  // 继承DiagramBaseRenderer
  BpmnJS.DiagramBaseRenderer.call(this, eventBus, 1500);
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
