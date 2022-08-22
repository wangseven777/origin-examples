// Dart语言支持以下类型:
// 数字 字符串 布尔 列表(类似于数组) 集合 映射 符文(用于表示字符串中的Unicode字符) 符号

void main(List<String> args) {
  // 数字, int/double
  var num1 = 1; // 整型
  var num2 = 2.56; // 浮点型

  print('测试 0.1 + 0.2 = ' + (0.1 + 0.2).toString()); // 0.30000000000000004

  // 字符串
  var str1 = 'string';
  var str2 = '$str1测试';
  var str3 = '${str2}str3测试3';
  print('测试字符串打印：$str3');
  print('判断空字符串：${''.isEmpty}');

  // 布尔类型
  var bol1 = true;

  // 列表类型
  var arr1 = [
    1,
    2,
    3,
    '3',
    if (true) '测试判断添加',
    for (var i in [1, 2, 3]) '#$i'
  ];

  // 集合
  var list = {'你好', 1, true};

  // 映射， 相当map
  var mapList = {
    'key1': 'value1',
    'key2': 'value2',
  };
}
