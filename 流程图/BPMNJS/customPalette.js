function CustomPalette(bpmnFactory, create, elementFactory, palette, translate, a,b ,c) {
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
                const businessObject = bpmnFactory.create('custom:node');
                const shape = elementFactory.createShape({
                    type: 'custom:node',
                    businessObject
                });
                create.start(event, shape);
            }
        }

        function createOriginTask() {
            return function(event) {
                const businessObject = bpmnFactory.create('bpmn:UserTask');
                businessObject.$attrs.name = 'zzh'; // 设置属性初始值
                const id = String(Number((new Date())));
                const shape = elementFactory.createShape({
                    type: 'bpmn:UserTask',
                    id,
                    businessObject,
                    x: 0,
                    y: 0,
                    isExpanded: true,
                });
                create.start(event, shape);
            }
        }

        return {
            'create.zzh-task-origin': {
                group: 'model',
                className: 'icon-custom zzh-task origin',
                title: translate('Task左侧样式扩展'), // 基于已有类型进行扩展: UserTask
                action: {
                    dragstart: createOriginTask(),
                    click: createOriginTask()
                }
            },
            'create.zzh-task': {
                group: 'model',
                className: 'icon-custom zzh-task self-define',
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