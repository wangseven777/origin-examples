function bootstrap() {
  const { createApp, reactive, toRefs, ref, defineComponent, h, computed } = Vue;

  const vue3Composition = {
    setup() {
      //#region 选择模板，默认0号
      const templateIndex = ref('0');
      const useTemplateIndex = (index) => (templateIndex.value = index);
      const showTopNavBar = computed(
        () => templateIndex.value === '1' || templateIndex.value === '4'
      );
      //#endregion

      //#region  一级导航： 左侧/顶部
      const activeIndex = ref('0');
      const mainMenuList = ref([
        { index: '0', icon: "Notification", text: "演示" },
        { index: '1', icon: "Memo", text: "页面" },
        { index: '2', icon: "Files", text: "生态" },
      ]);
      const changeMainMenu = (item, index) => {
        activeIndex.value = index;
        menuList.value = [
          { id: "001", icon: "Notification", text: "页面" + index },
          { id: "002", icon: "Notification", text: "生态" + index },
        ];
      };
      //#endregion

      //#region 二级导航
      const collapse = ref(false);
      const toggleCollapse = () => { collapse.value = !collapse.value; };

      const menuList = ref([
        { id: '0', icon: "Notification", text: "演示" },
        {
          id: '1',
          icon: "Memo",
          text: "页面",
          children: [
            { id: '1.1', icon: "Memo", text: "页面1" },
            {
              id: '1.2',
              icon: "Memo",
              text: "页面2",
              children: [
                { id: '1.21', icon: "Memo", text: "页面2.1" },
                { id: '1.22', icon: "Memo", text: "页面2.2" },
              ],
            },
          ],
        },
        { id: '2', icon: "Files", text: "生态" },
      ]);

      // use data id as menu index
      const handleMenuSelect = (index, path, item) => {
        const menu = findTreeNode(menuList.value, index);

        !cachedViews.value.find((x) => x.id === index) && cachedViews.value.push({ ...menu, title: menu.text });
        currentIndex.value = index;

        updateContentByInnerHtml(`选中菜单，序号: ${JSON.stringify(menu)}`);
      };

      const findTreeNode = (tree, id) => {
        let stark = [];
        stark = stark.concat(tree);
        while (stark.length) {
          const temp = stark.shift();
          if (temp.children) {
            stark = stark.concat(temp.children);
          }
          if (temp.id === id) {
            return temp;
          }
        }
      };

      const searchTreeNodeParents = (map, id) => {
        let t = [];
        for (const element of map) {
          const e = element;
          if (e.id === id) {
            //若查询到对应的节点，则直接返回
            t.push(e);
            break;
          } else if (e.children && e.children.length !== 0) {
            //判断是否还有子节点，若有对子节点进行循环调用
            let p = searchTreeNodeParents(e.children, id);
            //若p的长度不为0，则说明子节点在该节点的children内，记录此节点，并终止循环
            if (p.length !== 0) {
              p.unshift(e);
              t = p;
              break;
            }
          }
        }
        return t;
      };
      //#endregion

      //#region 设置抽屉组件
      const drawer = ref(false);
      //#endregion

      //#region tags
      const cachedViews = ref([]);
      const currentIndex = ref();

      // 关闭单个标签
      const closeSingleTag = (cachedView) => {
        if (cachedViews.value.length < 2) return;
        cachedViews.value = cachedViews.value.filter(
          (x) => x.id !== cachedView.id
        );
        currentIndex.value = cachedViews.value[0].id;
      };

      // 标签高亮
      const isActive = (cachedView) => cachedView.id === currentIndex.value;

      const clickTag = (cachedView) => {
        currentIndex.value = cachedView.id;
        // console.log(path);
        //   router.push(path);
        // 路由跳转，更换主体内容
      };
      //#endregion

      //#region 内容展示区域
      const updateContentByInnerHtml = (content) => {
        const dom = document.querySelector(".app-main");
        dom.innerHTML = content;
      };

      const updateContentByAppendChild = (child) => {
        const dom = document.querySelector(".app-main");
        dom.appendChild(child);
      };
      //#endregion
    
      //#region 收藏/面包屑/折叠
      const currentViewPathList = computed(() => {
        const result = searchTreeNodeParents(menuList.value, currentIndex.value);
        console.log(JSON.stringify(result));
        return result;

      });
      //#endregion
      

      const fullscreen = ref(false);
      const fullscreenMain = ref(false);

      

      const toggleSideBar = () => {
        collapse.value = !collapse.value;
      };

      

      const toggleFullScreenByDom = (element, isFullScreen) => {
        if (!element) return;
        if (isFullScreen) {
          if (element.requestFullscreen) element.requestFullscreen();
          else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
          else if (element.webkitRequestFullscreen)
            element.webkitRequestFullscreen();
          else if (element.msRequestFullscreen) element.msRequestFullscreen();
        } else {
          if (document.exitFullscreen) document.exitFullscreen();
          else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
          else if (document.webkitExitFullscreen)
            document.webkitExitFullscreen();
        }
      };

      const toggleFullScreen = () => {
        toggleFullScreenByDom(document.body, !fullscreen.value);
        fullscreen.value = !fullscreen.value;
      };

      const toggleFullScreenMain = () => {
        toggleFullScreenByDom(
          document.body.getElementsByClassName("right-content")[0],
          !fullscreenMain.value
        );
        fullscreenMain.value = !fullscreenMain.value;
      };

      const dropdownChangePersonalInfo = (command) => {
        console.log(command);
        alert(command);
      };

      const dropdownChangeCloseTag = (command) => {
        if (command === "closeall") {
          cachedViews.value = [];
          const dom = document.querySelector(".app-main");
          dom.innerHTML = `tag已清除，根据需要显示界面`;
        } else if (command === "closeother") {
          cachedViews.value = cachedViews.value.filter(
            (x) => x.index === currentIndex.value
          );
        }
      };

      return {
        // 模板
        templateIndex,
        useTemplateIndex,
        showTopNavBar,

        // 一级导航
        activeIndex,
        mainMenuList,
        // generateMenu,

        // 二级导航
        menuList,

        drawer,

        collapse,
        cachedViews,
        toggleCollapse,
        handleMenuSelect,
        isActive,
        clickTag,
        closeSingleTag,
        fullscreen,
        fullscreenMain,
        toggleFullScreen,
        toggleFullScreenMain,
        dropdownChangePersonalInfo,
        dropdownChangeCloseTag,
        changeMainMenu,
        currentViewPathList
      };
    },
  };

  const app = createApp(vue3Composition);
  // 遍历挂载element plus icons
  for ([name, comp] of Object.entries(ElementPlusIconsVue)) {
    app.component(name, comp);
  }

  // 挂载自定义组件
  const menuItemComponent = getMenuItemComponent();
  app.component("menu-item-component", menuItemComponent);

  app.use(ElementPlus).mount("#app");

  return app;
}
