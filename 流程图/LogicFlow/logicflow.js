//#region 文件操作
function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function downloadImage() {
  lf.getSnapshot();
}

function downloadXml() {
  const data = lf.getGraphData();
  download("logic-flow.xml", data);
}

function uploadXml(ev) {
  const file = ev.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    if (event.target) {
      const xml = event.target.result;
      lf.render(xml);
      file.value = null;
    }
  };
  reader.readAsText(file); // you could also read images and other binaries
}
//#endregion

//#region 初始化
function getConfig() {
  return {
    stopScrollGraph: true,
    stopZoomGraph: true,
    metaKeyMultipleSelected: true,
    grid: {
      size: 10,
      type: "dot",
    },
    keyboard: {
      enabled: true,
    },
    snapline: true,
  };
}

function initLogicFlow() {
  const config = getConfig();
  LogicFlow.use(BpmnElement);
  LogicFlow.use(BpmnXmlAdapter);
  LogicFlow.use(Snapshot);
  LogicFlow.use(Control);
  LogicFlow.use(Menu);
  LogicFlow.use(SelectionSelect);
  LogicFlow.use(DndPanel);
  lf = new LogicFlow({
    ...config,
    container: document.querySelector("#graph"),
  });
  // 右击菜单：component-menu.md
  lf.extension.menu.addMenuConfig({
    nodeMenu: [
      {
        text: '分享',
        className: 'test-share',
        callback() {
          alert('分享成功！');
        }
      },
      {
        text: '属性',
        callback(node) {
          alert(`
            节点id：${node.id}
            节点类型：${node.type}
            节点坐标：(x: ${node.x}, y: ${node.y})`
          );
        },
      },
    ],
    edgeMenu: [
      {
        text: '属性',
        callback(edge) {
          alert(`
            边id：${edge.id}
            边类型：${edge.type}
            边坐标：(x: ${edge.x}, y: ${edge.y})
            源节点id：${edge.sourceNodeId}
            目标节点id：${edge.targetNodeId}`
          );
        },
      },
    ],
    graphMenu: [
      {
        text: '分享',
        callback() {
          alert('分享成功！');
        }
      },
    ],
  });
  lf.render();

  lf &&
    lf.on("selection:selected", () => {
      lf.updateEditConfig({
        stopMoveGraph: false,
      });
    });

    // 监听视图点击事件
  lf.on("node:click", ({ data, e, position }) => {
    const model = lf.graphModel.getElement(data.id);
    model.setStyles({ 
      fill: '#909090',
      stroke: '#000000',
      outlineColor: '#000000',
      adjustLine: { stroke: '#000000' },
      outline: { stroke: '#000000', fill: '#000000' },
      strokeWidth: 30,
      strokeDasharray: '3,3', });
    model.updateText('开始文字被修改');
    model.setProperties({ data: 'new', addP: 'p'  });
  });
}

// 监听左侧按钮点击事件
function addPatternEventListener() {
  const patternDom = document.querySelector(".pattern");
  patternDom.addEventListener("mousedown", (event) => {
    switch (event.target.className) {
      case "selection":
        lf.updateEditConfig({ stopMoveGraph: true });
        break;
      case "start-event":
        lf.dnd.startDrag({ type: "bpmn:startEvent", text: "开始", properties: { data: '测试data' }  });
        break;
      case "user-task":
        lf.dnd.startDrag({ type: "bpmn:userTask" });
        break;
      case "service-task":
        lf.dnd.startDrag({ type: "bpmn:serviceTask" });
        break;
      case "exclusive-gateway":
        lf.dnd.startDrag({ type: "bpmn:exclusiveGateway" });
        break;
      case "end-event":
        lf.dnd.startDrag({ type: "bpmn:endEvent" });
        break;
    }
  });
}

function addFileOperationEventListener() {
  const downloadXmlDom = document.querySelector(".downlad-xml");
  downloadXmlDom.addEventListener("click", (e) => {
    downloadXml();
  });

  const downloadSvgDom = document.querySelector(".downlad-svg");
  downloadSvgDom.addEventListener("click", (e) => {
    downloadImage();
  });

  const uploadXmlDom = document.querySelector(".upload");
  uploadXmlDom.addEventListener("change", (e) => {
    uploadXml(e);
  });
}

function init() {
  initLogicFlow();
  addPatternEventListener();
  addFileOperationEventListener();
}

//#endregion
