/*
 * @Author: zzh
 * @Date: 2021-11-17 17:03:07
 * @LastEditors: zzh
 * @LastEditTime: 2021-11-17 17:11:29
 * @FilePath: \origin\设计模式\结构型\combination.js
 * @Description: 组合模式
 * 在程序设计中，组合模式就是用小的子对象来构建更大的对象，而这些小的子对象本身也是由更小的对象组成的。这里只是组合，并没有从属关系。
 */

const openDoorCommand = function () {
    console.log('开门......');
}

const closeDoorCommand = function () {
    console.log('关门......');
}

const openTVCommand = function () {
    console.log('打开电视......');
}

const closeTVCommand = function () {
    console.log('关闭电视......');
}

const openComputerCommand = function () {
    console.log('打开电脑......');
}

const closeComputerCommand = function () {
    console.log('关闭电脑......');
}

class MacroCommand {
    constructor() {
        this.commandList = [];
    }

    add (command) {
        this.commandList.push(command);
    }

    remove (command) {
        this.commandList = this.commandList.filter(x => x != command);
    }

    execute () {
        for (let command of this.commandList) {
            command();
        }
    }
}

let com = new MacroCommand();
com.add(openComputerCommand);
com.add(openDoorCommand);
com.add(openTVCommand);

com.execute();