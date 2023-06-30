function CustomPalette(bpmnFactory, create, elementFactory, palette, translate) {
    this.bpmnFactory = bpmnFactory;
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;

    palette.registerProvider(this);

    this.getPaletteEntries = (element) => {
        const {
            bpmnFactory,
            create,
            elementFactory,
            translate
        } = this;

        function createTask() {
            return function(event) {
                // const businessObject = bpmnFactory.create('bpmn:ZTask');
                const shape = elementFactory.createShape({
                    type: 'bpmn:UserTask',
                    // businessObject
                });
                console.log(shape) // 只在拖动或者点击时触发
                create.start(event, shape);
            }
        }

        return {
            'create.zzh-task': {
                group: 'model',
                className: 'icon-custom zzh-task',
                title: translate('创建一个类型为zzh-task的任务节点'),
                action: {
                    dragstart: createTask(),
                    click: createTask()
                }
            }
        }
    }
}

CustomPalette.$inject = [
    'bpmnFactory',
    'create',
    'elementFactory',
    'palette',
    'translate'
]