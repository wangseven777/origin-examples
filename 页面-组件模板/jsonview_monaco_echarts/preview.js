const is_exit_value = function (data, value) {
    let is_exit = false
    if ($.isArray(data)) {
        $.each(data, function (index, item) {
            if (item == value) {
                is_exit = true
            }
        })
    }
    return is_exit;
}

// 目前echarts还不支持数组渲染出多图，将数组进行合并
function changeDataBeforeOperate(data) {
    if (Array.isArray(JSON.parse(data))) {
        return { name: '根节点', root: JSON.parse(data)};
    } else {
        return JSON.parse(data);
    }
}
var myChart;
var option;
function initPreview(data) {
    var chartDom = document.getElementById('previewBox');
    myChart = echarts.init(chartDom);
    newDataStr = convertJSON2Tree(changeDataBeforeOperate(data));

    option = {
        darkMode: true,
        backgroundColor: '#2F3136',
        tooltip: {
            trigger: 'none',
            // triggerOn: 'mousemove'
        },
        series: [{
            type: 'tree',
            data: [newDataStr],
            initialTreeDepth: 3, // 默认展开5层
            top: '30',
            left: '30',
            bottom: '30',
            right: '60',
            symbolSize: 7,
            leaves: {
                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },

            emphasis: {
                focus: 'descendant'
                // focus: 'none'
            },
            // blur: {
            //     itemStyle: {
            //         color: 'red'
            //     }
            // },
            label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'left',
                lineHeight: 18,
                color: '#D2D3D5',
                margin: [2, 4],
                borderWidth: 1,
                borderColor: '#404D65',
                backgroundColor: '#2B2C3E',
                borderRadius: 2,
                padding: [5, 10],
                rich: {
                    keywords: {
                        color: "#5C87FF",
                        fontSize: '12'
                    },
                    index: {
                        fontSize: 12,
                        color: '#2979ff',
                        position: '10%'
                    },

                },
                formatter: function (data, data1) {
                    var newName = data.data.name
                    //默认样式
                    data.data.label = {
                        fontSize: 12,
                        padding: [5, 4],
                        // backgroundColor: 'rgb(238, 243, 246)',
                        // borderColor: 'rgb(115, 161, 191)',
                        // color: '#000000',
                    }
                    if (!data.data.children) {
                        if (data.data.label) {
                            data.data.label.borderWidth = 0
                            data.data.label.backgroundColor = 'transparent'
                            // data.data.label.color = '#2979ff',
                            data.data.label.color = '#FCC423',
                            data.data.label.padding = [5, 4]
                        }
                    }
                    //如果是最后一级，设置样式不带框
                    // if (!data.data.children) {
                    //     // debugger
                    //     data.data.label.borderWidth = 0
                    //     data.data.label.fontSize = 12
                    //     data.data.label.padding = [5, 4]
                    //     data.data.label.backgroundColor = 'transparent'
                    //     data.data.symbolSize = 12
                    //     data.data.label.color = '#2979ff'
                    // } else
                    //     newName = data.data.children.length >= 0 ? newName + '(' + data.data.children.length + '类)' : newName;

                    var arr = [];
                    const keywords = findKeys(newName);
                    //关键字标红
                    if (keywords.length) {
                        var splitName = newName
                        $.each(keywords, function (index, item) {
                            splitName = splitName.replace(item, '`' + item + '`')
                        })
                        $.each(splitName.split('`'), function (i, item) {
                            if (is_exit_value(keywords, item))
                                arr.push('{keywords|' + item + '}');
                            else
                                arr.push(item);
                        })
                    } else {
                        arr.push(newName);
                    }
                    return arr.join('');
                },
            },
            // leaves: {
            //     label: {
            //         position: 'right',
            //         verticalAlign: 'middle',
            //         align: 'left',
            //         color: 'red',
            //     }
            // },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }],

    };

    myChart.setOption(option);

    // resizeDOM();
    myChart.on("click", () => { setTimeout(() => {
        resizeDOM();
    }, 500); } );
    window.addEventListener('resize', myChart.resize);
}

function previewFold () {
    option.series[0].initialTreeDepth = 0;
    myChart.setOption(option);
    resizeDOM();
}

function previewUnFold () {
    option.series[0].initialTreeDepth = -1;
    myChart.setOption(option);
    resizeDOM();
}

function resizeDOM () {
    var chartDom = document.getElementById('previewBox');
    var allNode = 0;
    var nodes = myChart._chartsViews[0]._data._graphicEls;
    // console.log(nodes);
    for (var i = 0, count = nodes.length; i < count; i++) {
      var node = nodes[i];
      if (node === undefined)
        continue;
      allNode++;
    }
    // var height = window.innerHeight;
    // var currentHeight = 35 * allNode;
    // var newWidth = Math.max(currentHeight, height);
    // // chartDom.style.width = window.innerWidth + 'px';
    // // chartDom.style.width = newWidth + 'px';
    // chartDom.style.height = newWidth + 'px';
    const height = window.innerHeight;

    const width = window.innerWidth;

const currentHeight = 10 * allNode;

const currentWidth = 40 * allNode;

const newHeight = Math.max(currentHeight, height);

const newWidth = Math.max(currentWidth, width);


chartDom.style.height = newHeight + 'px';

chartDom.style.width = newWidth + 'px';

    myChart.resize();
}

function findKeys(str) {
    let result = [];
    const arr = str && typeof str === 'string' && str.split('\n');
    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i].split(':')[0]);
        }
    }   
    return result;
}


function convertJSON2Tree(json) {
    const tree = {};
    const keys = Object.keys(json);
    for (let i = 0; i < keys.length; i++) {
        if (typeof json[keys[i]] !== 'object') {
            tree.name ? tree.name = tree.name + `${keys[i]}: ${json[keys[i]]}\n` : tree.name = `${keys[i]}: ${json[keys[i]]}\n`;
        }
        else if (isType(json[keys[i]]), 'Array') {
            if (!tree.children) tree.children = [];
            let childs = [];
            for (let j = 0; j < json[keys[i]].length; j++) {
                let children;
                if (typeof json[keys[i]][j] !== 'object') {
                    children = { name:  json[keys[i]][j] };
                } else {
                    children = convertJSON2Tree(json[keys[i]][j]);
                }
                childs.push(children);
            }
            tree.children.push({ name: keys[i], children: childs});

            // const children = convertJSON2Tree(json[keys[i]]);
            // tree.children.push({ name: keys[i], ...children}); 
        } else {

        }
    }

    if (tree.name) tree.name = tree.name.substring(0, tree.name.lastIndexOf('\n')); // 移出最后一个换行
    return tree;
}

const isType = (obj, type) => {
    if (typeof obj !== 'object') return false;
    // 判断数据类型的经典方法：
    const typeString = Object.prototype.toString.call(obj);
    let flag;
    switch (type) {
        case 'Array':
            flag = typeString === '[object Array]';
            break;
        case 'Date':
            flag = typeString === '[object Date]';
            break;
        case 'RegExp':
            flag = typeString === '[object RegExp]';
            break;
        default:
            flag = false;
    }
    return flag;
};