function getMenuItemComponent () {
    const { createApp, reactive, toRefs, ref, defineComponent, h, PropType } = Vue;
    const { ElMenuItem, ElIcon } = ElementPlus;
    const component1 = defineComponent({
        name: 'menuItem',
        props: {
            item: {
              required: true
            }
          },
        data() {
            return {}
        },
        render() {
            // return !item || !item.children || item.children.length === 0 ? 
            return true ? 
                h(ElMenuItem, null,{ 
                    // default: () =>  h(ElIcon, null, { default: () => h({ template: `<component :is="Notification"></component>` }) }),
                    default: () =>  h(ElIcon, null, { default: () => h( ElementPlusIconsVue['Notification'])}),
                    title: () => 'hello worlds' 
                })
                :
                h('el-sub-menu', null, 'hello world')
                ;
        },
    });

    return component1;
}