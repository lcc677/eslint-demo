**对于ES6语法，使用{"parserOptions":{"ecmaVersion":6}}**

**对于新的ES6全局变量，使用{"env":{"es6":true}}**

## parseOptions代表的是解析的参数:
- ecmaVersion:可选参数是3, 5 (default), 6, 7, 8, 9, 10, 11, 12, or 13 你也可以用年份代表2015(same as 6),2016(same as 7),2017(same as 8),2018 (same as 9),2019 (same as 10), 2020 (same as 11), 2021 (same as 12), or 2022 (same as 13) 你也可以设置成"latest",来始终使用最新的
- sourceType 可选参数"script" (default),如果你使用ecamScript写的代码用"module"
- allowReserved - 允许使用保留字作为标识符（如果 ecmaVersion 是 3）.
- ecmaFeatures - 标示你可以使用的功能:
  - globalReturn - 允许在全局作用域写return语句
  - impliedStrict - ecamVersion是>=5,开启严格模式
  - jsx - 开启jsx

## env:代表脚本执行的环境

列举几个常用的把
browser:true

node:true // 如果没有设置这个,我们的.eslintrc.js这个文件本身都会报错,会提示module未定义的错误

es2021:true // 开启这个,允许我们使用es6中新的全局变量.如果不开,我们使用Set类型,会提示没有定义的.

extends:[]