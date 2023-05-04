function bootstrap() {
        const { createApp, reactive, toRefs, ref, defineComponent, h, computed } = Vue;

        const vue3Composition = {
            setup() {
                //#region 选择模板，默认0号
                const templateIndex = ref(1);
                const useTemplateIndex = (index) => templateIndex.value = index;
                const showTopNavBar = computed(() => templateIndex.value === 1 || templateIndex.value === 4);
                //#endregion

                //#region 左侧一级导航/顶部导航
                const activeIndex = ref(0);
                const mainMenuList = ref([
                    { index: 0,  icon: 'Notification', text: '演示' },
                    { index: 1,  icon: 'Memo', text: '页面' },
                    { index: 2,  icon: 'Files', text: '生态' },
                ]);
                const changeMainMenu = (item, index) => {
                    activeIndex.value = index;
                    menuList.value = [
                        { id: '001',  icon: 'Notification', text: '页面' + index },
                        { id: '002',  icon: 'Notification', text: '生态' + index },
                    ];
                };
                //#endregion

                //#region 左侧二级导航
                const menuList = ref([
                    { id: 0,  icon: 'Notification', text: '演示' },
                    { id: 1,  icon: 'Memo', text: '页面', children: [
                        { id: 1.1, icon: 'Memo', text: '页面1' },
                        { id: 1.2, icon: 'Memo', text: '页面2', children: [
                            { id: 1.21, icon: 'Memo', text: '页面2.1' },
                            { id: 1.22, icon: 'Memo', text: '页面2.2' },
                        ] },
                    ] },
                    { id: 2,  icon: 'Files', text: '生态' },
                ]);

                const handleMenuSelect = (index, path, item) => {
                    !cachedViews.value.find(x => x.index === index) && cachedViews.value.push({ title: index, index });
                    currentIndex.value = index;

                    const menu = breadthQuery(menuList.value, index);
                    updateContentByInnerHtml(`选中菜单，序号: ${JSON.stringify(menu)}`);
                }

                const breadthQuery = (tree, id) => {
                    let stark = [];
                    stark = stark.concat(tree);
                    while(stark.length) {
                        const temp = stark.shift();
                        if(temp.children) {
                            stark = stark.concat(temp.children);
                        }
                        if(temp.id === id) {
                            return temp;
                        }
                    }
                };
                //#endregion

                //#region 设置抽屉组件
                const drawer = ref(false);
                //#endregion

                //#region tags
                const cachedViews = ref([]);
                const currentIndex = ref();
                //#endregion

                //#region 内容展示区域
                const updateContentByInnerHtml = (content) => {
                    const dom = document.querySelector('.app-main');
                    dom.innerHTML = content;
                };

                const updateContentByAppendChild = (child) => {
                    const dom = document.querySelector('.app-main');
                    dom.appendChild(child);
                };
                //#endregion
                const collapse = ref(false);
                const fullscreen = ref(false);
                const fullscreenMain = ref(false);


                const toggleCollapse = () => {
                    collapse.value = !collapse.value;
                };



                const toggleSideBar = () => {
                    collapse.value = !collapse.value;
                };

                // 关闭单个标签
                const closeSingleTag = (cachedView) => {
                    if (cachedViews.value.length < 2) return;
                    cachedViews.value = cachedViews.value.filter(x => x.index !== cachedView.index);
                    currentIndex.value = cachedViews.value[0].index;
                };

                // 标签高亮
                const isActive = (route) => {
                    return route.index === currentIndex.value;
                };

                const clickTag = (cachedView) => {
                    currentIndex.value = cachedView.index;
                    // console.log(path);
                    //   router.push(path);
                    // 路由跳转，更换主体内容
                };

                const toggleFullScreenByDom = (element, isFullScreen) => {
                    if (!element) return;
                    if (isFullScreen) {
                        if (element.requestFullscreen) element.requestFullscreen();
                        else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
                        else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
                        else if (element.msRequestFullscreen) element.msRequestFullscreen();
                    } else {
                        if (document.exitFullscreen) document.exitFullscreen();
                        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
                    }
                };

                const toggleFullScreen = () => {
                    toggleFullScreenByDom(document.body, !fullscreen.value);
                    fullscreen.value = !fullscreen.value;
                };

                const toggleFullScreenMain = () => {
                    toggleFullScreenByDom(document.body.getElementsByClassName('right-content')[0], !fullscreenMain.value);
                    fullscreenMain.value = !fullscreenMain.value;
                };

                const dropdownChangePersonalInfo = (command) => {
                    console.log(command);
                    alert(command);
                }

                const dropdownChangeCloseTag = (command) => {
                    if (command === 'closeall') {
                        cachedViews.value = [];
                        const dom = document.querySelector('.app-main');
                        dom.innerHTML = `tag已清除，根据需要显示界面`;

                    } else if (command === 'closeother') {
                        cachedViews.value = cachedViews.value.filter(x => x.index === currentIndex.value);
                    }
                }

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
                    changeMainMenu
                }
            }

        }

        const app = createApp(vue3Composition);
        // 遍历挂载element plus icons
        for ([name, comp] of Object.entries(ElementPlusIconsVue)) { app.component(name, comp); }

        // 挂载自定义组件
        const menuItemComponent = getMenuItemComponent();
        app.component('menu-item-component', menuItemComponent);

        app.use(ElementPlus).mount('#app');

        return app;
};