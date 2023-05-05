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

