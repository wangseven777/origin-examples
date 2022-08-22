import 'colleague.dart';
import 'dart:math';

void main(List<String> args) {
  var colleagures = [
    new Colleague('秦始皇', 18, 1),
    new Colleague('秦二世', 18, 1),
    new Colleague('赵高', 18, 2),
    new Colleague('李斯', 18, 1),
    new Colleague('刘邦', 18, 1),
    new Colleague('大乔', 18, 2),
    new Colleague('小乔', 18, 2),
    new Colleague('曹操', 18, 1),
    new Colleague('刘备', 18, 1),
    new Colleague('袁绍', 18, 1),
  ];

  var random = new Random();
  var ranIndex = random.nextInt(10);
  var colleagure = colleagures[ranIndex]; // 随机进来的第一个同事

  colleagure.eat(true); // 吃早饭
  colleagure.goto('接水');
  colleagure.wc();
  colleagure.goto('工作');
}
