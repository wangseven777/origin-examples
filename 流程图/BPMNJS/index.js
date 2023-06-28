var bpmnModeler;
var bpmnContainerDom;
function init() {
    bpmnContainerDom = document.querySelector('#bpmnContainer');
    createBpmn();

    // 添加上传事件的监听
    addFileOperationEventListener();
}

//#region 视图方法
// 创建
const createBpmn = () => {
  const {
    BpmnPropertiesPanelModule,
    BpmnPropertiesProviderModule,
    CamundaPlatformPropertiesProviderModule,
    ZeebeDescriptionProvider,
    ZeebePropertiesProviderModule,
    useService,
  } = BpmnJSPropertiesPanel;

  bpmnModeler = new BpmnJS({
    container: bpmnContainerDom,
    propertiesPanel: { parent: ".bpmn-js-properties-panel" },
    additionalModules: [
      BpmnPropertiesPanelModule,
      BpmnPropertiesProviderModule,
    ],
  });

  bpmnModeler.createDiagram();
};

// 销毁
const destroyBpmn = () => {
  bpmnModeler && bpmnModeler.destroy();
};

const download = ({ name, data }) => {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(data)
  );
  element.setAttribute("download", name);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

// 导出XML
const exportBpmnXML = async () => {
    if (!bpmnModeler) return;
    try {
        const { xml } = await bpmnModeler.saveXML({ format: true });
        const name = "file.bpmn";
        download({ name, data: xml });
    } catch(err) {
        console.error('导出XML出错', err);
    }
};

// 导入XML
const importBpmnXML = async (xml) => {
    try {
        await bpmnModeler.importXML(xml);
    } catch(err) {
        console.error('导入XML出错, 请确认该模型符合Bpmn2.0规范', err);
    }
};

// 导出SVG
const exportBpmnSvg = async () => {
    if (!bpmnModeler) return;
    try {
        const  { svg } = await bpmnModeler.saveSVG();
        const name = "file.svg";
        download({ name, data: svg });
    } catch(err) {
        console.error("导出 SVG 出错", err);
    }
};


// 添加xml导入监听
const addUploadBpmnXmlEventListener = () => {
    const fileInput = document.getElementById('bpmn-upload-xml');
    fileInput.addEventListener('change', function (event) {
      const file = event.target.files[0];
      const reader = new FileReader()
      reader.onload = async (event) => {
        if (event.target) {
          const xml = event.target.result;
          await destroyBpmn();
        //   bpmnModeler = new BpmnModeler({ container: bpmnContainerDom });
          createBpmn();
          importBpmnXML(xml);

          fileInput.value = null;
        }
      }
      reader.readAsText(file); // you could also read images and other binaries
    });
};

const addFileOperationEventListener = () => {
    const downloadXmlDom = document.getElementById('bpmn-download-xml');
    downloadXmlDom.addEventListener("click", (e) => {
        exportBpmnXML();
    });
  
    const downloadSvgDom = document.getElementById('bpmn-download-svg');
    downloadSvgDom.addEventListener("click", (e) => {
        exportBpmnSvg();
    });

    addUploadBpmnXmlEventListener();
  }

// 导入XML

//#endregion
