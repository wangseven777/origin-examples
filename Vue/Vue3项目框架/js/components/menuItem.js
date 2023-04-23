function getMenuItemComponent() {
  const { createApp, reactive, toRefs, ref, defineComponent, h, PropType } =
    Vue;
  const { ElMenuItem, ElIcon, ElSubMenu } = ElementPlus;
  const component1 = defineComponent({
    name: "menuItem",
    props: {
      item: {
        required: true,
      },
    },
    data() {
      return {};
    },
    render() {
      const renderItem = (item) => {
        return !item || !item.children || item.children.length === 0
          ? h(ElMenuItem, { index: item?.id } , {
              default: () =>
                h(ElIcon, null, {
                  default: () => h(ElementPlusIconsVue[item?.icon]),
                }),
              title: () => item?.text,
            })
          : h(
              ElSubMenu,
              { index: item?.id || "" },
              {
                title: () => [
                  h(ElIcon, null, {
                    default: () => h(ElementPlusIconsVue[item?.icon]),
                  }),
                  h("span", { class: "tab" }, item.text),
                ],

                default: () =>
                  item.children.map((child) => {
                    if (child.children && child.children.length > 0)
                      return renderItem(child);
                    else {
                      return h(ElMenuItem, { index: child?.id || "" }, {
                        default: () => [
                          h(ElIcon, null, {
                            default: () => h(ElementPlusIconsVue[child?.icon]),
                          }),
                          h("span", null, child.text),
                        ],
                      });
                    }
                  }),
              }
            );
      };
      return renderItem(this.item);
    },
  });

  return component1;
}
