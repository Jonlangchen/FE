# 插槽 slot
\_ 作用：
    1、父组件向子组件传递内容--slot更像一个出口

    2、拓展、复用、定制组件

\_ 类型：
    1、 默认插槽
        父组件传值覆盖子组件的值

    2、 具名插槽
    子组件：
        <slot name="插槽名称"></slot>

    父组件：
        <template v-slot:插槽名称>
          <p>welcome you 1</p>
        </template>

        简写：
        <template #插槽名称>
          <p>welcome you 1</p>
        </template>

    3、作用域插槽
    子组件：str：自定义命名
        <slot :str="子组件data中的属性">{{ 子组件data中的属性.job}}</slot>
    
    父组件：strProps：自定义命名
        <template v-slot:default="strProps">
          {{strProps.str.job}}
        </template>