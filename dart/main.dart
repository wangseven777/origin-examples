import './summary.dart';
import './todo.dart';

void main(List<String> args) {
  // Summary.printVariables();
  doSomething();
}

@Todo('seth', 'make this do something')
void doSomething() {
  print('do something');
}
