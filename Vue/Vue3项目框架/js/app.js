const _cachedView = new Map();
const _currentView = {};

const _addCacheView = (appMainDom, menu) => {
  _cachedView.set(
    menu.index,
    appMainDom.firstChild && appMainDom.firstChild.cloneNode(true)
  );
};

/*
 * menu: 菜单
 * lastMenu: 上一个菜单，模拟单页应用中的路由跳转，页面间传递参数
 * type: 渲染类型，vue/react/空，这里不建议多模板混用，只能选择其一
 * 注意：
 * 1. 注入的子节点必须有根节点包裹
 * 2. 注入的脚本中，最好使用type="module", 如果需要使用其他类型，请注意命令变量不要冲突
 * 3. 使用index作为class/id的一部分时，最好不要以index开头，index可能是数字
 */
const updateContent = async (menu, lastMenu) => {
  if (lastMenu && menu.index === lastMenu.index) return;
  NProgress.start();
  switch (menu.templateType) {
    case "vue":
      updateContentByVue(menu, lastMenu);
      NProgress.done();
      break;
    case "react":
      updateContentByReact(menu, lastMenu);
      NProgress.done();
      break;
    default:
      updateContentByDom(menu, lastMenu);
      NProgress.done();
      break;
  }
};

const updateContentByDom = async (menu, lastMenu) => {
  NProgress.inc();
  const appMainDom = document.querySelector(".app-main");
  let content;
  // 如果已经缓存，直接展示即可
  if (menu.cache && _cachedView.has(menu.index)) {
    console.log("使用缓存内容......");
    lastMenu && lastMenu.cache && _addCacheView(appMainDom, lastMenu);
    const fgDom = _cachedView.get(menu.index);
    appMainDom.innerHTML = "";
    appMainDom.appendChild(fgDom);
  } else {
    content = `<div class="box" id="app-main-${menu.index}"> 
                <h1>测试：内容是原生HTML</h1>
                <h3>参数:</h3>
                <div>menu: ${menu && JSON.stringify(menu)}</div>
                <div>lastMenu: ${lastMenu && JSON.stringify(lastMenu)}</div>
                <h3>功能:</h3>
                <div>改变背景色：#909090</div>
                <div>引入JQ，并修改字体颜色：wheat</div>
                <div>按钮，click事件</div>
                <input type="button" class='app-main-${
                  menu.index
                }-button' value="测试按钮" />
              </div>
              <script type="module">
                const dom = document.querySelector(".app-main");
                dom.style.backgroundColor = '#909090';
                window.console.log('hell');

                const btn = document.querySelector('.app-main-${
                  menu.index
                }-button');
                btn.addEventListener('click', function(e) {
                  alert(e);
                });

                // 引入JQ并使用
                function callback() { $('#app-main').css({ 'color': 'wheat' }); }
                loadScript('https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js', callback); // loadScript是全局公共方法，使用方式Fn(url, callback)

                // 使用完或者不需要使用时，目前只能迷惑性的在HTML中不显示，但实际已经装载，$依旧可以全局使用
                // 如果不想被使用，可以强制置空，$ = null;
                unloadScript('https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js');
              </script>
              <style>
                #app-main-${menu.index} {
                  line-height: 40px;
                }
              <style>
              `;
    lastMenu && lastMenu.cache && _addCacheView(appMainDom, lastMenu);
    const fragDOM = document.createRange().createContextualFragment(content);
    appMainDom.innerHTML = "";
    appMainDom.appendChild(fragDOM);
  }
};

const updateContentByVue = async (menu, lastMenu) => {
  NProgress.inc();
  const appMainDom = document.querySelector(".app-main");
  let content;
  // 如果已经缓存，直接展示即可
  if (menu.cache && _cachedView.has(menu.index)) {
    console.log("使用缓存内容......");
    lastMenu && lastMenu.cache && _addCacheView(appMainDom, lastMenu);
    const fgDom = _cachedView.get(menu.index);
    appMainDom.innerHTML = "";
    appMainDom.appendChild(fgDom);
  } else {
    content = `
              <div class="box" id="app-main-${menu.index}"> 
                <h1>测试：vue 模板</h1>
                <h3>参数:</h3>
                <div>menu: ${menu && JSON.stringify(menu)}</div>
                <div>lastMenu: ${lastMenu && JSON.stringify(lastMenu)}</div>

                <h3>功能:</h3>
                <h5>v-if</h5>
                <div v-if="true">v-if: true</div>
                <div v-if="false">v-if: false</div>

                <h5>v-for</h5>
                <span v-for="(item, index) in 10" :key="index" style="border: 1px solid black; padding: 5px; margin: 5px;">{{ item }}</span>

                <h5>按钮</h5>
                <el-button type="success" @click="btnClick()">Ele Button</el-button>

              </div>
              
              <script type="module">
                (function() {
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
                  const vue3Composition1 = {
                    setup() {
                      const btnClick = (e) => {
                        alert('hello');
                      };

                      return {
                        btnClick,
                      }
                    }
                  };
                  const app1 = createApp(vue3Composition1);
                  for ([name, comp] of Object.entries(ElementPlusIconsVue)) {
                    app1.component(name, comp);
                  }
                  app1.use(ElementPlus).mount("#app-main-${menu.index}");
                  return app1;
                })();
              </script>

              <style>
                #app-main-${menu.index} h3 { line-height: 50px; }
                #app-main-${menu.index} h5 { line-height: 50px; }
              <style>
              `;
    lastMenu && lastMenu.cache && _addCacheView(appMainDom, lastMenu);
    const fragDOM = document.createRange().createContextualFragment(content);
    appMainDom.innerHTML = "";
    appMainDom.appendChild(fragDOM);
  }
};

const updateContentByReact = async (menu, lastMenu) => {
  NProgress.inc();
  const appMainDom = document.querySelector(".app-main");
  let content;
  // 如果已经缓存，直接展示即可
  if (menu.cache && _cachedView.has(menu.index)) {
    console.log("使用缓存内容......");
    lastMenu && lastMenu.cache && _addCacheView(appMainDom, lastMenu);
    const fgDom = _cachedView.get(menu.index);
    appMainDom.innerHTML = "";
    appMainDom.appendChild(fgDom);
  } else {
    console.log("请求接口......");
    content = `
      <div class="box" id="app-main-${menu.index}"> </div>
      <script type="module">
        const header = React.createElement("header", null, React.createElement("h1", null, "React API语法创建"));
        ReactDOM.render(header, document.querySelector("#app-main-${menu.index}"));
      </script> 
      `;
    _cachedView.set(menu.id, content);
  }
  const fragDOM = document.createRange().createContextualFragment(content);
  appMainDom.innerHTML = "";
  appMainDom.appendChild(fragDOM);
};



