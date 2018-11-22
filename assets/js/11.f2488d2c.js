(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{173:function(e,t,n){"use strict";n.r(t);var s=n(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("目录结构")]),e._v(" "),e._m(5),n("p",[e._v("\bwebpack.config.js")]),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),n("p",[e._v("webpack.config.js")]),e._v(" "),e._m(14),e._m(15),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("本节学习课程demo下载\b文件夹为"),n("a",{attrs:{href:"https://github.com/494755899/Webpack-learning/tree/master/source",target:"_blank",rel:"noopener noreferrer"}},[e._v("lesson20"),n("OutboundLink")],1)])]),e._v(" "),e._m(16),e._v(" "),n("p",[e._v("对于插件而言,是通过实列化构造函数。每个传入的选项都是独立的。所以对于同一个插件可以进行多次实例化使用")]),e._v(" "),n("p",[e._v("改变一下\bwebpack.config.js中的文件内容")]),e._v(" "),e._m(17),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("本节学习课程demo下载\b文件夹为"),n("a",{attrs:{href:"https://github.com/494755899/Webpack-learning/tree/master/source",target:"_blank",rel:"noopener noreferrer"}},[e._v("lesson21"),n("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"插件-plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" 插件(plugins)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("webpack")]),this._v("的插件功能十分强大,插件主要解决"),t("code",[this._v("loader")]),this._v("无法解决\b的问题。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"插件的基本用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件的基本用法","aria-hidden":"true"}},[this._v("#")]),this._v(" \b插件的基本用法")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("所有的"),n("code",[e._v("webpack")]),e._v("插件都是定义在"),n("code",[e._v("plugins")]),e._v("选项中,在引入插件包之后。只需要在"),n("code",[e._v("plugins")]),e._v("选项中通过"),n("code",[e._v("new")]),e._v("关健词进行使用差件既可")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("举列"),t("code",[this._v("clean-webpack-plugin")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("webpackProject\n |--src\n |   |--index.js\n |--webpack.config.js\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("module.exports = {\n  output: {\n    path: __dirname + '/dist',\n    filename: 'bundle.[hash].js'\n  }\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("运行"),t("strong",[this._v("webpack")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("在打包后的结果中"),t("code",[this._v("dist\b")]),this._v("目录下生成了一个"),t("code",[this._v("bundle.")]),this._v("(跟着"),t("code",[this._v("hash")]),this._v("码).js的文件。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("如果此时我们改动"),t("code",[this._v("src/index.js")]),this._v("的文件。此时再次会生成一个"),t("code",[this._v("bundle.")]),this._v("(跟着"),t("code",[this._v("hash")]),this._v("码).js的文件。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("这样会导致我们每次生成文件都需要都动把上次生成的"),t("code",[this._v("hash")]),this._v("文件删除。手动的情况下会导致删错文件等情况。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"通过clean-webpack-plugin进行删除文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过clean-webpack-plugin进行删除文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 通过clean-webpack-plugin进行删除文件")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("下载"),t("code",[this._v("npm install clean-webpack-plugin -D")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("在"),n("code",[e._v("plugins")]),e._v("数组选项中"),n("code",[e._v("new")]),e._v("一个"),n("code",[e._v("CleanWebpackPlugin")]),e._v("插件。为了能更好的演示出结果。在"),n("code",[e._v("filename")]),e._v("中添加了"),n("code",[e._v("hash")]),e._v(",\b每次改动入口文件的时候,打包后的文件"),n("code",[e._v("hash\b")]),e._v("值都会变。正是因为每次这样能更好的展示出"),n("code",[e._v("clean-webpack-plugin")]),e._v("的根本作用。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("const CleanWebpackPlugin = require('clean-webpack-plugin')\nmodule.exports = {\n  output: {\n    path: __dirname + '/dist',\n    filename: 'bundle.[hash].js'\n  },\n +plugins: [\n +  new CleanWebpackPlugin(['dist'])\n +] \n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("当每次打包之前都会调用"),t("code",[this._v("new CleanWebpackPlugin(['dist'])")]),this._v(",删除"),t("code",[this._v("dist")]),this._v("目录下的文件。这样就可以保证每次在生成文件的时候都会删除上次打包过的文件目录。当重新改变入口文件的\b内容的时候就不会存在多余残留的文件。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"同一个插件可以new多次"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同一个插件可以new多次","aria-hidden":"true"}},[this._v("#")]),this._v(" 同一个插件可以new多次")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("const CleanWebpackPlugin = require('clean-webpack-plugin')\n\nmodule.exports = {\n  entry: {\n    index1: './src/index1.js',\n    index2: './src/index2.js'\n  },\n  output: {\n    path: __dirname + '/dist',\n    filename: '[name]/[hash].js'\n  },\n  plugins: [\n    new CleanWebpackPlugin(['dist/index1']),\n    new CleanWebpackPlugin(['dist/index2'])\n  ]\n}\n")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("此时在"),n("code",[e._v("entry")]),e._v("中定义两个入口文件,在"),n("code",[e._v("out\bput")]),e._v("输出结果的总目录放在"),n("code",[e._v("dist")]),e._v("目录下。然后分别把"),n("code",[e._v("'./src/index1.js'")]),e._v("打包后的文件\b输出结果为"),n("code",[e._v("dist/index1/index1.js")]),e._v("。把"),n("code",[e._v("'./src/index2.js'")]),e._v("打包后的文件输出结果为"),n("code",[e._v("\bdist/index2/index2.js")]),e._v("中。")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("在插件中分别对删除"),n("code",[e._v("dist/index1")]),e._v("目录和"),n("code",[e._v("dist/index2")]),e._v("目录的文件。如果只删除其中的一个。在改动"),n("code",[e._v("src")]),e._v("中"),n("code",[e._v("index1")]),e._v("和"),n("code",[e._v("index2")]),e._v("文件内容时，会对"),n("code",[e._v("hash")]),e._v("进行一个改动。每次都会残留多余上次打包后的"),n("code",[e._v("hash")]),e._v("文件。")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("其实本质上我们可以直接删除"),n("code",[e._v("dist")]),e._v("目录。但是为了展示可以通过"),n("code",[e._v("new")]),e._v("多个实例插件的表现。做了"),n("code",[e._v("index1")]),e._v("和"),n("code",[e._v("index2")]),e._v("目录的分别删除。由此可知可以"),n("code",[e._v("new")]),e._v("多个实例插件。")])}],!1,null,null,null);i.options.__file="plugins.md";t.default=i.exports}}]);