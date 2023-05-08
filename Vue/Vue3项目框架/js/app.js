const _cachedView = new Map();

const updateContentByInnerHtml = async (menu) => {
  const dom = document.querySelector(".app-main");
  let content;
  if (menu.cache && _cachedView.has(menu.id)) {
    content = _cachedView.get(menu.id);
    console.log("使用缓存内容......");
  } else {
    console.log("请求接口......");
    content = `这是测试显示内容，该内容可能来自接口请求, 参数： ${JSON.stringify(
      menu
    )}`;
    _cachedView.set(menu.id, content);
  }
  dom.innerHTML = content;
};

const updateContentByVueComponent = async (menu) => {};

const updateContentByDom = async (menu) => {
  const dom = document.querySelector(".app-main");
  let content;
  if (menu.cache && _cachedView.has(menu.id)) {
    content = _cachedView.get(menu.id);
    console.log("使用缓存内容......");
  } else {
    console.log("请求接口......");
    content = `
      <div class="box">
      <h1>这是测试显示内容，该内容可能来自接口请求, 参数： ${JSON.stringify(
        menu
      )}</h1>
      <div v-if="true">测试vue中的模板语法</div>
      <div v-if="false">测试vue中的模板语法：false</div>
</div>

<script>
// 解析vue语法
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
  const vue3Composition = {
    setup() {}
  };
  const app = createApp(vue3Composition);
  for ([name, comp] of Object.entries(ElementPlusIconsVue)) {
    app.component(name, comp);
  }
  app.use(ElementPlus).mount("#app-main .box");
  return app;
})();

const dom = document.querySelector(".app-main");
dom.style.backgroundColor = 'red';

// 引入JQ并使用
function callback() { $('#app-main').css({ 'color': 'white' }); }
loadScript('https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js', callback); // loadScript是全局公共方法，使用方式Fn(url, callback)

// 使用完或者不需要使用时，目前只能迷惑性的在HTML中不显示，但实际已经装载，$依旧可以全局使用
// 如果不想被使用，可以强制置空，$ = null;
unloadScript('https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js');
</script>
      `;
    _cachedView.set(menu.id, content);
  }
  const fragDOM = document.createRange().createContextualFragment(content);
  dom.innerHTML = "";
  dom.appendChild(fragDOM);
};

// 接口请求
// 自动追加
// script脚本
// vue组件， dom中使用vue模板语法
