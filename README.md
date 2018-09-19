# vue-language-switcher

Small,simple,easy to use.

简单，小巧，易使用。

## 本插件特点 | Why use it

### 1. 小巧 | Small

 \> 1.5 KiB

### 2. 参数、语言列表使用数组承载，不需要将同一个意思写两遍

在官方的 awesome-vue （https://github.com/vuejs/awesome-vue） 中，有许多不错的i18n插件，不过大多用起来不是太简单。

大多数i18n等多语言切换的使用格式为：

<code>
{
  zh: {
    hello: '您好'
  },
  en: {
    hello: 'Hello'
  }
}
</code>

也有小部分这样的：

<code>
{
  hello: {
​    zh: '您好',
​    en: 'Hello'
  }
}
</code>

我偏向于能省则省，

`['您好','Hello']`

当然，是会有顺序设置的，默认为：

`['zh','en']`

设置语言则仅需要在Vue中 `$lSet('en')` 即可切换到英文。

所以，如果你要求不高，只是一个非常小的项目，要在IE9这样的不支持ES6的浏览器，尤其是不考虑用Webpack等东东进行打包...

可以试试鸭~

---

## 安装   |  Install 

`Vue.use(VueLangSwitcher,参数 | Parameters)`


## 使用   |  How to use 

   `$l(Data)`

   将 Data 挂载于 Vue 中

   使用时建议：将数据（Data）与展示（View）根据情况做分离

## Data格式   |  Format 

   `{key:['语言1','2nd language']}`

## 参数   |  Parameters 

   locale:语言；默认：`'zh'`

   index:语言列表。默认：`['zh', 'en']`

   title:`{title:['中文标题','English title']}`(需要与Data一致)；默认为title标签内容

## 方法 | Methods 

   方法均在Vue的原型链中。

   `$lSet(val)` | val:语言，默认zh，默认可选en

   `$lReset()` | 无参数，清除`localStorage（vlsLang）`，恢复语言为默认值