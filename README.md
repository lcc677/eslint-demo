**对于 ES6 语法，使用{"parserOptions":{"ecmaVersion":6}}**

**对于新的 ES6 全局变量，使用{"env":{"es6":true}}**

## parseOptions 代表的是解析的参数:

- ecmaVersion:可选参数是 3, 5 (default), 6, 7, 8, 9, 10, 11, 12, or 13 你也可以用年份代表 2015(same as 6),2016(same as 7),2017(same as 8),2018 (same as 9),2019 (same as 10), 2020 (same as 11), 2021 (same as 12), or 2022 (same as 13) 你也可以设置成"latest",来始终使用最新的
- sourceType 可选参数"script" (default),如果你使用 ecamScript 写的代码用"module",如果是"module"，那就说明我们用的是 es6 的
- allowReserved - 允许使用保留字作为标识符（如果 ecmaVersion 是 3）.
- ecmaFeatures - 标示你可以使用的功能:
  - globalReturn - 允许在全局作用域写 return 语句
  - impliedStrict - ecamVersion 是>=5,开启严格模式
  - jsx - 开启 jsx

## env:代表脚本执行的环境

列举几个常用的把
browser:true

node:true // 如果没有设置这个,我们的.eslintrc.js 这个文件本身都会报错,会提示 module 未定义的错误

es2021:true // 开启这个,允许我们使用 es6 中新的全局变量.如果不开,我们使用 Set 类型,会提示没有定义的.

## extends

这里面存放的是一些预先定义的一些规则。可选值

- eslint:recommand 由 eslint 官方提供的核心规则子集。
- eslint-config-xxx 可共享的配置。 可以用在 npm 仓库中的配置，你要把配置上传到仓库上，必须要以 eslint-config-开头，你也可以用简写 xxx，省略前缀 eslint-config-
- plugin:包名/配置名 也可以用插件中有的配置，插件也必须得是以 eslint-plugin-开头，我们也可以用简写，省略 eslint-config-，后面加上插件中的配置名称，（plugin:vue/vue-recommand）
- 也可以用本地的其余配置文件，'./node_modules/coding-standard/eslintDefaults.js'
  extends 主要是有这四种类型的。

## rules

当我们想修改预设中的配置的时候，就可以在 rules 中修改，这是一个对象

```js
'rules': {
    'quotes': ['error', 'single'], // 字符串单引号还是双引号,可修复
    'no-multi-spaces': ['error', { ignoreEOLComments: false }], // 不允许出现多个空格,而且注释前后也不能有多个空格,可修复
    'block-spacing': 'error',
    'no-trailing-spaces': 'error', //禁止使用行尾空白,
    'space-infix-ops':'error', // 要求在操作符周围有空格,
    'arrow-spacing':'error',
    // 'no-var':'error'
}
```

## Globals

你也可以定义一些全局变量，全局变量可以设置读写权限，这样我们可以在我们代码中使用这些全局变量，而不会校验不通过

```js
'globals':{
  'abc':'readonly'
},
```

这样我们在代码里使用 abc，就会通过校验，虽然我们没有定义 abc 这个，这个还是得根据实际情况来用，不要随便加，要不然你加一个根本找不到的全局变量，那我们程序就很容易出现问题

## 更加精细的配置

如果想针对某一些文件来做配置，我们可以在全局的基础上，添加 overrides 的配置

```js
{
  "rules": {
    "quotes": ["error", "double"]
  },

  "overrides": [
    {
      "files": ["bin/*.js", "lib/*.js"],
      "excludedFiles": "*.test.js",
      "rules": {
        "quotes": ["error", "single"]
      }
    }
  ]
}
```

## 目录级别的

如果我们项目有 eslint 的配置，我下面所有的目录都会用这些配置。我想给某一个目录添加一个 eslint 的配置。那需要我们在目录下创建配置，那这个目录下的文件就会以这个目录的 eslint 配置来校验，除此之外还会加上他上层的 eslint 配置，如果有重复的，会忽略上层的配置，以目录下的规则为主，如果你不想让目录下的用项目的配置，那我们可以在目录下的 eslint 配置加上`root:true`的配置。

## parser

解释器，eslint 默认给我提供的解释器是 Espree，除此之外还提供了 Esprima，@babel/eslint-parser (旧版本是 babel-eslint)，@typescript-eslint/parser
@babel/eslint-parser 这个解析器必须还得多安装@babel/core 和添加一个 babel.config.json 的 babel 的配置文件。

## plugins

插件，前面我们说了，插件命名必须得以 eslint-plugin，如果有组织名称，那是@scope/eslint-plugin-xxx，可以简写成@scope/xxx。plugins 我们可以不用，我们在 extends 中使用时一样的么？

## 总结

插件很好的扩展了 eslint，让我们可以自定义一些规则。这也是框架比较喜欢的，vue，react 甚至 TypeScript 都开发了 eslint 插件。
