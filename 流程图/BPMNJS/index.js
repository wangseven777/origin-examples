function init() {
  var viewer;
  var {
    BpmnPropertiesPanelModule,
    BpmnPropertiesProviderModule,
    CamundaPlatformPropertiesProviderModule,
    ZeebeDescriptionProvider,
    ZeebePropertiesProviderModule,
    useService,
  } = BpmnJSPropertiesPanel;

  viewer = new BpmnJS({
    container: document.querySelector(".bpmn-canvas"),
    propertiesPanel: { parent: ".bpmn-js-properties-panel" },
    additionalModules: [
      BpmnPropertiesPanelModule,
      BpmnPropertiesProviderModule,
    ],
  });

  viewer.createDiagram();
}
