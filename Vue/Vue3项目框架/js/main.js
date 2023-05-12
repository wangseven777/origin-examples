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
        { index: "0", icon: "Notification", title: "演示" },
        { index: "1", icon: "Memo", title: "页面" },
        { index: "2", icon: "Files", title: "生态" },
      ]);

      const changeMainMenu = (item, index) => {
        activeIndex.value = index;
        menuList.value = [
          {
            index: "0" + index,
            icon: "Notification",
            title: "演示" + index,
            cache: true,
          },
          {
            index: "1" + index,
            icon: "Memo",
            title: "页面" + index,
            children: [
              {
                index: "1.1" + index,
                icon: "Memo",
                title: "页面1" + index,
                cache: true,
              },
              {
                index: "1.2" + index,
                icon: "Memo",
                title: "页面2" + index,
                children: [
                  { index: "1.21" + index, icon: "Memo", title: "页面2.1" + index, cache: true, },
                  { index: "1.22" + index, icon: "Memo", title: "页面2.2" + index, cache: true, },
                ],
              },
            ],
          },
          { index: "2" + index, icon: "Files", title: "生态" + index },
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
        { index: "00", icon: "Notification", title: "演示0", cache: true },
        {
          index: "10",
          icon: "Memo",
          title: "页面0",
          children: [
            { index: "1.10", icon: "Memo", title: "页面10", cache: true },
            {
              index: "1.20",
              icon: "Memo",
              title: "页面20",
              children: [
                { index: "1.210", icon: "Memo", title: "页面2.10" },
                { index: "1.220", icon: "Memo", title: "页面2.20" },
              ],
            },
          ],
        },
        { index: "20", icon: "Files", title: "生态0" },
      ]);

      // use data index as menu index
      const handleMenuSelect = (index, path, item) => {
        const lastMenu = findTreeNode(menuList.value, currentIndex.value) || homeMenu;
        const menu = findTreeNode(menuList.value, index);

        !cachedViews.value.find((x) => x.index === index) &&
          cachedViews.value.push({
            ...menu,
            title: menu.title,
            pathList: searchTreeNodeParents(menuList.value, index),
          });
        currentIndex.value = index;

        updateContent(menu, lastMenu);
      };

      //#endregion

      //#region 设置抽屉组件
      const drawer = ref(false);
      //#endregion

      //#region tags
      const cachedViews = ref([]);
      const homeMenu = { index: "000", title: "主页", icon: "Notification" };
      const currentIndex = ref(homeMenu.index);
      const isAtHome = computed(() => currentIndex.value === homeMenu.index);
      const disabledLeft = computed(() => {
        const index = cachedViews.value.findIndex(
          (x) => x.index === currentIndex.value
        );
        return index === 0;
      });

      const disabledRight = computed(() => {
        const index = cachedViews.value.findIndex(
          (x) => x.index === currentIndex.value
        );
        return index === cachedViews.value.length - 1;
      });

      // 关闭其他标签
      const closeOtherTag = () => {
        cachedViews.value = [
          cachedViews.value.find((x) => x.index === currentIndex.value),
        ];
      };
      // 关闭右侧标签
      const closeRightTag = () => {
        const index = cachedViews.value.findIndex(
          (x) => x.index === currentIndex.value
        );
        cachedViews.value = cachedViews.value.toSpliced(index + 1);
      };
      // 关闭左侧标签
      const closeLeftTag = () => {
        const index = cachedViews.value.findIndex(
          (x) => x.index === currentIndex.value
        );
        cachedViews.value = cachedViews.value.toSpliced(0, index);
      };

      // 关闭单个标签
      const closeSingleTag = (cachedView) => {
        if (cachedViews.value.length < 2) return;
        cachedViews.value = cachedViews.value.filter(
          (x) => x.index !== cachedView.index
        );
        currentIndex.value = cachedViews.value[0].index;
        const menu = findTreeNode(menuList.value, currentIndex.value);
        updateContent(menu || homeMenu);
      };

      // 标签高亮
      const isActive = (cachedView) => cachedView.index === currentIndex.value;

      const clickTag = (cachedView) => {
        const lastMenu = findTreeNode(menuList.value, currentIndex.value) || homeMenu;
        currentIndex.value = cachedView.index;
        const menu = findTreeNode(menuList.value, cachedView.index);
        // refMenu.value.open(cachedView.index);
        activeIndex.value = cachedView.index;
        updateContent(menu || homeMenu, lastMenu);
        // console.log(path);
        //   router.push(path);
        // 路由跳转，更换主体内容
      };
      //#endregion

      //#region 收藏
      const starList = ref([]);
      const showEmptyStar = computed(() => {
        return starList.value.length === 0 || (starList.value.length > 0 && !starList.value.find(x => x.index === currentIndex.value));
      });
      const addStar = () => {
        const item = findTreeNode(menuList.value, currentIndex.value);
        item && starList.value.push(item);
      };
      const removeStar = (item) =>
        (starList.value = starList.value.filter((x) => x.index !== item.index));
      //#endregion

      //#region 面包屑
      const currentViewPathList = computed(() => {
        const result = cachedViews.value.find(
          (x) => x.index === currentIndex.value
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
        updateContent(homeMenu);
        cachedViews.value.push({
          ...homeMenu,
          title: homeMenu.title,
          pathList: [homeMenu],
        });
        currentIndex.value = homeMenu.index;
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
        showEmptyStar,
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
