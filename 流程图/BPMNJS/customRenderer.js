function getCustomElementsAndConfig() {
  const customElements = ["bpmn:UserTask", "custom:Task"];
  const customConfig = {
    // 基于已有类型修改样式
    "bpmn:UserTask": {
      url: "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png",
      attr: { x: 0, y: 0, width: 48, height: 48 },
    },
    // 新增自定义类型
    "custom:Task": {
      attr: { x: 0, y: 0, width: 48, height: 48 },
      className: "icon-custom zzh-task self-define",
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
  const { append, create, innerSVG, classes } = TinySVG;
  if (config.customElements.find((x) => x === element.type)) {
    const { url, attr, isIcon, className } = config.customConfig[element.type];
    if (url) {
      const customIcon = create("image", {
        // 在这里创建了一个image（url）
        ...attr,
        href: url,
      });
      element["width"] = attr.width; // 这里我是取了巧, 直接修改了元素的宽高
      element["height"] = attr.height;
      append(parentNode, customIcon);
      return customIcon;
    } else {
      // 手动创建svg
      const g = create("g");
      classes(g).add("hellowrold");
      // svg图形可以从网络拷贝，例如iconfont
      var text = `
      <g class="icon-custom-svg">
      <svg t="1688539257659" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1477" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60">
      <path d="M512.1 361.2v567.1L149.9 566.1c-39.1-39.1-58.7-90.5-58.7-141.8 0-51.3 19.6-102.6 58.7-141.8 78.3-78.3 205.2-78.3 283.6 0l78.6 78.7z" fill="#d81e06" p-id="1478"></path><path d="M512.1 361.2v567.1l362.2-362.2C913.4 527 933 475.6 933 424.3c0-51.3-19.6-102.6-58.7-141.8-78.3-78.3-205.2-78.3-283.6 0l-78.6 78.7z" fill="#d81e06" p-id="1479"></path></svg>      </g>
`;

      // set innerSVG
      innerSVG(g, text);

      append(parentNode, g);
      return g;
    }
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
