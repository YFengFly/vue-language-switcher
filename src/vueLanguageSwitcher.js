var VueLangSwitcher = {
  install: function (Vue, _options) {
    // Initial
    var vlsThis = this
    if (_options === void 0) _options = {}
    var locale = localStorage.getItem('vlsLang') || _options.locale || 'zh'
    var index = _options.index || ['zh', 'en']
    var title = _options.title || document.title
    var indexJSON = {}
    index.forEach(function (val, i) {
      indexJSON[val] = i
    })
    this.opt = { //opt:options
      locale: locale,
      index: indexJSON,
      title: title
    }

    setTitle()

    // Methods

    function setTitle() {
      var opt = vlsThis.opt
      if (Array.isArray(opt.title)) {
        document.title = opt.title[opt.index[opt.locale]]
      }
    }

    Vue.prototype.$l = function (val) {
      if (Array.isArray(val)) {
        var opt = vlsThis.opt
        return val[opt.index[opt.locale]]
      } else if (typeof val === 'string') {
        return val
      } else {
        console.error('语言格式异常：\n', val)
        return '【** 无法获取信息，请联系管理员 Message got wrong,please connect site manager. **】'
      }
    }

    Vue.prototype.$lSet = function (val) {
      vlsThis.opt.locale = val
      localStorage.setItem('vlsLang', val)
      this.$forceUpdate()
      setTitle()
    }

    Vue.prototype.$lReset = function () {
      vlsThis.opt.locale = 'zh'
      localStorage.clear('vlsLang')
      this.$forceUpdate()
      setTitle()
    }
  }
}