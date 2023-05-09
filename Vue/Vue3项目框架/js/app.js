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

const updateContentByVue = async (menu) => {
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

const updateContentByReact = async (menu) => {
  const dom = document.querySelector(".app-main");
  let content;
  if (menu.cache && _cachedView.has(menu.id)) {
    content = _cachedView.get(menu.id);
    console.log("使用缓存内容......");
  } else {
    console.log("请求接口......");
    content = `
      <div class="box"></div>

<script type="text/babel">
    //OH的右边的内容就是JSX的语法
    //（script type="text/babel" 需要这么写，不然就会报错，需要告诉babel需要转哪些，只需要在script标签写type="text/babel"就可以了）
    let oH = <div>
        hello react!
    </div>;
    // ReactDOM.render(要渲染什么内容，渲染到哪里)
    //只有用了这个才会创建虚拟DOM，先创建再更新
    ReactDOM.render(oH, document.querySelector("#app-main .box"));
</script>

<script>

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

const updateContentByDom = async (menu) => {
  // api请求
  // const result = await fetchData('https://www.baidu.com');
  // console.log(result);

  
  const appMainDom = document.querySelector(".app-main");
  let content;
  if (menu.cache && _cachedView.has(menu.id)) {
    content = _cachedView.get(menu.id);
    console.log("使用缓存内容......");
  } else {
    console.log("请求接口......");
    const id = (new Date()).getMilliseconds();
    content = `
      <div class="box" id='id${id}'></div>

<script type="module" id="ab${(new Date()).getMilliseconds()}">
    ReactDOM.render(React.createElement('button',
    { onClick: () => console.log('test') },
    'Like'), document.querySelector("#app-main .box"));
    console.log('1111');
</script>

<script type="module" id="aa${(new Date()).getMilliseconds()}">
console.log('2222');
// 测试脚本
const dom = document.querySelector(".app-main");
dom.style.backgroundColor = '#909090';

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
  appMainDom.innerHTML = "";
  appMainDom.firstChild && appMainDom.removeChild(appMainDom.firstChild);
  appMainDom.appendChild(fragDOM);
};

// 接口请求
// 自动追加
// script脚本
// vue组件， dom中使用vue模板语法


// 动态抽离script并执行（包括界面初始化时，以及dom更新时）