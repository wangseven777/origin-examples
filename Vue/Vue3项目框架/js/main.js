const bootstrap = () => {
  const {
    createApp,
    reactive,
    toRefs,
    ref,
    defineComponent,
    h,
    computed,
    onMounted,
  } = Vue;

  const vue3Composition = {
    setup() {
      //#region 选择模板，默认0号
      const templateIndex = ref("0");
      const useTemplateIndex = (index) => (templateIndex.value = index);
      const showTopNavBar = computed(
        () => templateIndex.value === "1" || templateIndex.value === "4"
      );
      const showLeftNavBar = computed(
        () => templateIndex.value === "0" || templateIndex.value === "3"
      );
      const showLeftMenu = computed(
        () =>
          templateIndex.value === "0" ||
          templateIndex.value === "1" ||
          templateIndex.value === "2"
      );
      //#endregion

      //#region  一级导航： 左侧/顶部
      const activeIndex = ref("0");
      const mainMenuList = ref([
        { index: "0", icon: "Notification", text: "演示" },
        { index: "1", icon: "Memo", text: "页面" },
        { index: "2", icon: "Files", text: "生态" },
      ]);

      const changeMainMenu = (item, index) => {
        activeIndex.value = index;
        menuList.value = [
          {
            id: "0" + index,
            icon: "Notification",
            text: "演示" + index,
            cache: true,
          },
          {
            id: "1" + index,
            icon: "Memo",
            text: "页面" + index,
            children: [
              {
                id: "1.1" + index,
                icon: "Memo",
                text: "页面1" + index,
                cache: true,
              },
              {
                id: "1.2" + index,
                icon: "Memo",
                text: "页面2" + index,
                children: [
                  { id: "1.21" + index, icon: "Memo", text: "页面2.1" + index },
                  { id: "1.22" + index, icon: "Memo", text: "页面2.2" + index },
                ],
              },
            ],
          },
          { id: "2" + index, icon: "Files", text: "生态" + index },
        ];
      };
      //#endregion

      //#region 二级导航
      const refMenu = ref();
      const collapse = ref(false);
      const toggleCollapse = () => {
        collapse.value = !collapse.value;
      };

      const menuList = ref([
        { id: "00", icon: "Notification", text: "演示0", cache: true },
        {
          id: "10",
          icon: "Memo",
          text: "页面0",
          children: [
            { id: "1.10", icon: "Memo", text: "页面10", cache: true },
            {
              id: "1.20",
              icon: "Memo",
              text: "页面20",
              children: [
                { id: "1.210", icon: "Memo", text: "页面2.10" },
                { id: "1.220", icon: "Memo", text: "页面2.20" },
              ],
            },
          ],
        },
        { id: "20", icon: "Files", text: "生态0" },
      ]);

      // use data id as menu index
      const handleMenuSelect = (index, path, item) => {
        const menu = findTreeNode(menuList.value, index);

        !cachedViews.value.find((x) => x.id === index) &&
          cachedViews.value.push({
            ...menu,
            title: menu.text,
            pathList: searchTreeNodeParents(menuList.value, index),
          });
        currentIndex.value = index;

        updateContentByDom(menu);
      };

      //#endregion

      //#region 设置抽屉组件
      const drawer = ref(false);
      //#endregion

      //#region tags
      const cachedViews = ref([]);
      const currentIndex = ref();
      const homeMenu = { id: "000", text: "主页", icon: "Notification" };
      const isAtHome = currentIndex.value === homeMenu.id;
      const disabledLeft = computed(() => {
        const index = cachedViews.value.findIndex(
          (x) => x.id === currentIndex.value
        );
        return index === 0;
      });

      const disabledRight = computed(() => {
        const index = cachedViews.value.findIndex(
          (x) => x.id === currentIndex.value
        );
        return index === cachedViews.value.length - 1;
      });

      // 关闭其他标签
      const closeOtherTag = () => {
        cachedViews.value = [
          cachedViews.value.find((x) => x.id === currentIndex.value),
        ];
      };
      // 关闭右侧标签
      const closeRightTag = () => {
        const index = cachedViews.value.findIndex(
          (x) => x.id === currentIndex.value
        );
        cachedViews.value = cachedViews.value.toSpliced(index + 1);
      };
      // 关闭左侧标签
      const closeLeftTag = () => {
        const index = cachedViews.value.findIndex(
          (x) => x.id === currentIndex.value
        );
        cachedViews.value = cachedViews.value.toSpliced(0, index);
      };

      // 关闭单个标签
      const closeSingleTag = (cachedView) => {
        if (cachedViews.value.length < 2) return;
        cachedViews.value = cachedViews.value.filter(
          (x) => x.id !== cachedView.id
        );
        currentIndex.value = cachedViews.value[0].id;
        const menu = findTreeNode(menuList.value, currentIndex.value);
        updateContentByDom(menu || homeMenu);
      };

      // 标签高亮
      const isActive = (cachedView) => cachedView.id === currentIndex.value;

      const clickTag = (cachedView) => {
        currentIndex.value = cachedView.id;
        const menu = findTreeNode(menuList.value, cachedView.id);
        // refMenu.value.open(cachedView.id);
        activeIndex.value = cachedView.id;
        updateContentByDom(menu || homeMenu);
        // console.log(path);
        //   router.push(path);
        // 路由跳转，更换主体内容
      };
      //#endregion

      //#region 收藏
      const starList = ref([]);
      const addStar = () => {
        const item = findTreeNode(menuList.value, currentIndex.value);
        starList.value.push(item);
      };
      const removeStar = (item) =>
        (starList.value = starList.value.filter((x) => x.id !== item.id));
      //#endregion

      //#region 面包屑
      const currentViewPathList = computed(() => {
        const result = cachedViews.value.find(
          (x) => x.id === currentIndex.value
        );
        return result?.pathList;
      });
      //#endregion

      //#region 姓名/放大缩小功能/消息提示 栏
      const userName = ref("李白");
      const { pinyin } = pinyinPro;
      const pinyinFL = computed(() => pinyin(userName.value || "无")[0].toUpperCase());
      //#endregion

      //#region 内容展示区域
      onMounted(() => {
        updateContentByDom(homeMenu);
        cachedViews.value.push({
          ...homeMenu,
          title: homeMenu.text,
          pathList: [homeMenu],
        });
        currentIndex.value = homeMenu.id;
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
        showLeftNavBar,
        showLeftMenu,

        // 一级导航
        activeIndex,
        mainMenuList,
        // generateMenu,

        // 二级导航
        refMenu,
        menuList,

        // tag
        isAtHome,
        disabledLeft,
        disabledRight,
        closeOtherTag,
        closeRightTag,
        closeLeftTag,
        clickTag,
        closeSingleTag,

        // 收藏
        starList,
        addStar,
        removeStar,

        userName,
        pinyinFL,

        drawer,

        collapse,
        cachedViews,
        toggleCollapse,
        handleMenuSelect,
        isActive,
        fullscreen,
        fullscreenMain,
        toggleFullScreen,
        toggleFullScreenMain,
        dropdownChangePersonalInfo,
        dropdownChangeCloseTag,
        changeMainMenu,
        currentViewPathList,
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
};
