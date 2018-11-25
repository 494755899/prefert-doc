(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{178:function(e,a,t){"use strict";t.r(a);var s=t(0),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"mixins的混合方法和混合数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mixins的混合方法和混合数据","aria-hidden":"true"}},[e._v("#")]),e._v(" mixins的混合方法和混合数据")]),e._v(" "),t("p",[e._v("全局的方法和全局的数据是必不可少的。这样可以大量增强复用性,让代码量可以很大程度上减少。")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("global")]),e._v("文夹中定义的"),t("code",[e._v("mixins")]),e._v("需要手动引入到"),t("code",[e._v("index.js")]),e._v("中。然后"),t("code",[e._v("index.js")]),e._v("会自动向外暴露。所有的方法将会在初始化的时候混合到全局。这些通用的形式希望不需要每次都手动引入。而其它针对于个别项目的"),t("code",[e._v("mixins")]),e._v("的选项\b希望进行手动引入。因为这样可以让项目的维护者可以更好的理解\b方法和数据的来源。")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("所有的混合数据和事件名都在前面加上"),t("code",[e._v("_")]),e._v("代表是\b私有的，这样大大避免在合并\b\b策略的同名的时候被覆盖。")])]),e._v(" "),t("h2",{attrs:{id:"项目全局的混合方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目全局的混合方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目全局的混合方法")]),e._v(" "),t("p",[e._v("弹窗页面的混合方法是项目的必用的一些方法。无论是打开弹窗页面还是关闭弹窗页面,我们不需要引入任何东西。只需要直接调用混入的全局方法就可以。全局方法暂时暴露出两个方法")]),e._v(" "),t("h2",{attrs:{id:"opendialog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#opendialog","aria-hidden":"true"}},[e._v("#")]),e._v(" _openDialog")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("this._openDialog({\n  name: '指定的文件路径'\n})\n")])])]),t("h2",{attrs:{id:"closedialog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#closedialog","aria-hidden":"true"}},[e._v("#")]),e._v(" _closeDialog")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("this._closeDialog()\n")])])]),t("p",[e._v("在弹窗页面中如果执行完某个方法之后。自动\b关闭弹窗页面的时候，\b直接可以手动调用"),t("code",[e._v("this._closeDialog()")]),e._v("方法。手动\b关闭\b当前对应的弹窗")]),e._v(" "),t("h2",{attrs:{id:"基于element封装的混合方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于element封装的混合方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 基于element封装的混合方法")]),e._v(" "),t("p",[t("code",[e._v("element ui")]),e._v("给我们提供了很多方法。但是对于方法如果每次都去重复写一次。就会显的非常沉余,通过封装之后在"),t("code",[e._v("mixins")]),e._v("进行混入,不但不需要进行引入。同样我们简化\b\b代码量。进行操作。同样所有对"),t("code",[e._v("element ui")]),e._v("有特别想法的封装方法统一可以写在此文件中。")]),e._v(" "),t("h2",{attrs:{id:"submitform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#submitform","aria-hidden":"true"}},[e._v("#")]),e._v(" _submitForm")]),e._v(" "),t("p",[e._v("当"),t("code",[e._v("form")]),e._v("表单提交的时候，需要对"),t("code",[e._v("rules")]),e._v("规则进行校验的完毕之后再写入回调方法。通过"),t("code",[e._v("promise\b")]),e._v("封底装。可以很好的用"),t("code",[e._v("async await")]),e._v("进行融合的简化操作")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("methods: {\n  async hander () {\n    await this_submitForm()\n    console.log('\b\b表单规则检测通过')\n  }\n}\n")])])]),t("h2",{attrs:{id:"confirmdelete"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#confirmdelete","aria-hidden":"true"}},[e._v("#")]),e._v(" _confirmDelete")]),e._v(" "),t("p",[e._v("当对某些行为需要再次确认的时候,可以调用"),t("code",[e._v("_confirmDelete")]),e._v("方法。封装的原形是根据"),t("code",[e._v("this.$confirm")]),e._v("进行通过"),t("code",[e._v("promise")]),e._v("二次封装。可以很好的用"),t("code",[e._v("async await")]),e._v("进行融合的简化操作")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("methods: {\n  async hander () {\n    await this_confirmDelete()\n    console.log('确认完毕,可以执行操作')\n  }\n}\n")])])]),t("h2",{attrs:{id:"confirmmessage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#confirmmessage","aria-hidden":"true"}},[e._v("#")]),e._v(" _confirmMessage")]),e._v(" "),t("p",[e._v("当某些行为完成之后，要提示对应的消息和状态，可以调用"),t("code",[e._v("_confirmMessage")]),e._v("方法，原形是通过"),t("code",[e._v("this.$message")]),e._v("进行封装")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("methods: {\n  async hander () {\n    await this_confirmDelete()\n    \bthis._confirmMessage('你\b已经确认了')\n  }\n}\n")])])]),t("h2",{attrs:{id:"其它方法暂为开放，敬请期待"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它方法暂为开放，敬请期待","aria-hidden":"true"}},[e._v("#")]),e._v(" 其它方法\b暂为开放，\b敬请期待")])])}],!1,null,null,null);i.options.__file="mixins.md";a.default=i.exports}}]);