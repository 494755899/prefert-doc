# 模块化分

成昆系统对模块的化分非常清楚，每个模块负责着不同的角色和功能,整个工程是基于vue-cli搭建而成，主要关注src目录

## assets 目录

存放静态图片和一些静态css

assets目录结构
```
 ---css
 ---image
 ---font
```

 ## components 目录

 针对于后台管理系统，主要存在的有页面的布局组件,关于布局组件是基本定死，不需要关注。同样里面有基于普遍后台开发模式基于element-ui封装便捷开发者使用的组件系统，同样自己也要以存放自己便捷的开发的组件。

components目录结构

```
----layout
  |----PaperAside.vue  左侧菜单组件
  |----PaperHeader.vue  头部组件
  |----PaperBread.vue  内容区域内部导航组件
  |----PaperDialogs.vue  弹窗组件
----baseElement
  |----PaperDialog.vue 基于element封装的弹窗页面组件
  |----PaperTable.vue 基于element封装的表格列表自动化组件
  |----更多敬请期待
```

对于layout文件中是大家不需要关心的内容,是对页面自动运行布局等工程中的封装组件。而baseElement是对简化自动化模式的操作而封装的一系列组件,关于组件详细的内容[请点击这里]

## config目录

config主要是进行配置化的操作。工程内部自动化运行需要进行特定的配置。

```
----api.js  // 基于resultful配置接口
----cache.js // 设置页面缓存和全局弹窗页面缓存的机制
----menu.js // 左侧菜单的配置
```

1. api主要配置了所有了接口的请求，主要是针对于resultful接口的配置
2. cache通过name属性针对特定页面进行缓存处理
3. 通过menu对左侧菜单自动化运行配置

想知道配置的具体使用[请点击这里]

## filter目录

filter主要是对值进行过滤，充当过滤器的使用,学过vue的都知道，通过一些过滤函数。解决常用的比如对时间过滤等存放的目录

```
----formatTime.js 对时间格式进行处理
```

关于过滤器的更多内容[请点击这里]