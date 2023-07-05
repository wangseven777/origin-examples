function CustomContextPad (config, contextPad, create, elementFactory, injector, translate) {
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;

    if (config.autoPlace !== false) {
        this.autoPlace = injector.get('autoPlace', false);
    }

    contextPad.registerProvider(this); // 定义这是一个contextPad

    this.getContextPadEntries = function(element) {
        const {
            autoPlace,
            create,
            elementFactory,
            translate
        } = this;

        function appendTask(event, element) {
            if (autoPlace) {
                const shape = elementFactory.createShape({ type: 'bpmn:UserTask' });
                autoPlace.append(element, shape);
            } else {
                appendTaskStart(event, element);
            }
        }

        function appendTaskStart(event) {
            const shape = elementFactory.createShape({ type: 'bpmn:UserTask' });
            create.start(event, shape, element);
        }


        return {
            'append.zzh-task-origin': {
                group: 'model',
                className: 'icon-custom zzh-task origin-pad',
                title: translate('Task左侧样式扩展'),
                action: {
                    click: appendTask,
                    dragstart: appendTaskStart
                }
            }
        };
    }
}

CustomContextPad.$inject = [
    'config',
    'contextPad',
    'create',
    'elementFactory',
    'injector',
    'translate'
];