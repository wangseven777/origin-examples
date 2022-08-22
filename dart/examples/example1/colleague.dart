// 新建一个同事类
class Colleague {
  // 类属性声明
  late String name;
  late int age;
  late int sex;

  // 普通构造函数
  Colleague(String name, int age, [int sex = 1]) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  goto(String place) {
    print('$name 去 $place...');
  }

  eat(bool breakfast) {
    if (breakfast) {
      print('$name 吃早饭...');
    } else {
      print('$name 吃午饭 or 晚饭');
    }
  }

  wc() {
    sex == 1 ? print('$name 去男厕所') : print('$name 去女厕所');
  }
}
