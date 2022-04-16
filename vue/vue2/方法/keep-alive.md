# keep-alive
    会缓存不活动的组件的状态

\_ 作用：
    避免多次重复渲染降低性能

\_ 常用知识点
    1、include - 字符串或正则表达式。只有名称匹配的组件会被缓存
    <keep-alive include="组件名称">
        <router-view/>
    </keep-alive>

    2、 exclude -
    字符串或正则表达式。任何名称匹配的组件都不会被缓存。
    <keep-alive exclude="组件名称">
        <router-view/>
    </keep-alive>

    3、max - 数字。最多可以缓存多少组件实例。

    4、结合 Router，缓存部分页面
        $route.meta.keepAlive 选项
    【1】在router的index.js文件下
    const routes = [
        {
            path: '/keepB',
            name: 'keepB',
            component: keep_b,
            meta: {
            keepAlive: true // 需要被缓存
            }
        }
    ]

    【2】在App.vue 中使用
    <!-- 缓存 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <!-- 不缓存 -->
    <router-view v-if="!$route.meta.keepAlive"/>


\_ 
    全局缓存:
        <keep-alive>
            <router-view/>
        </keep-alive>