const _cachedView = new Map();

const updateContentByInnerHtml = async (menu) => {
  const dom = document.querySelector(".app-main");
  let content;
  if (menu.cache && _cachedView.has(menu.id)) {
    content = _cachedView.get(menu.id);
    console.log('使用缓存内容......');
  } else {
    console.log('请求接口......');
    content = `这是测试显示内容，该内容可能来自接口请求, 参数： ${JSON.stringify(
      menu
    )}`;
    _cachedView.set(menu.id, content);
  }
  dom.innerHTML = content;
};

const updateContentByDom = async (menu) => {
    const dom = document.querySelector(".app-main");
    let content;
    if (menu.cache && _cachedView.has(menu.id)) {
      content = _cachedView.get(menu.id);
      console.log('使用缓存内容......');
    } else {
      console.log('请求接口......');
      content =  `<h1>这是测试显示内容，该内容可能来自接口请求, 参数： ${JSON.stringify(
        menu
      )}</h1>`;
      _cachedView.set(menu.id, content);
    }
    const fragDOM = document.createRange().createContextualFragment(content);
    dom.innerHTML = '';
    dom.appendChild(fragDOM);
};
