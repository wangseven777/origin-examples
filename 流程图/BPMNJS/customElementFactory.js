function assign(target, ...others) {
    return Object.assign(target, ...others);
  }

function CustomElementFactory(config, bpmnFactory, moddle, translate) {    
    BpmnJS.ElementFactory.call(this, bpmnFactory, moddle, translate);

    this._config = config;
}

CustomElementFactory.$inject = ["config.elementFactory", "bpmnFactory", "moddle", "translate"];

CustomElementFactory.prototype.getDefaultSize = function(element, di) {
    return { width: 40, height: 40 };
}
