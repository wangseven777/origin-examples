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

// 动态添加JS脚本
const loadScript = (src, onload) => {
  const loaded = Array.from(document.scripts).some(it => it.getAttribute('src') === src); // Warn：script.src !== script.getAttribute('src')
    if (loaded) {
        typeof onload === 'function' && onload();
        return;
    }
    const script = document.createElement('script');
    script.src = src;
    document.head.insertBefore(script, document.head.firstElementChild);
    script.addEventListener('load', (ev) => {
        typeof onload === 'function' && onload();
    });
};


// 删除JS脚本
const unloadScript = (url) => {
    const script = document.querySelector(`script[src='${url}']`)
    document.head.removeChild(script);
};