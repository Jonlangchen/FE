<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/keepA">keepA</router-link> |
      <router-link to="/keepB">keepB</router-link> |
      <router-link to="/parent">Parent</router-link>
    </nav>
    <!-- 全局缓存 -->
    <!-- <keep-alive include="keepA">
      <router-view/>
    </keep-alive> -->

    <!-- <router-link to="/gItem">
      <button>gItem</button>
    </router-link>
    <router-link to="/eItem">
      <button>eItem</button>
    </router-link> -->
    <div class="wrap3"></div>

    <button @click="save1">保存111</button>
    <button @click="save2">保存222</button>

    

    <!-- 缓存 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <!-- 不缓存 -->
    <router-view v-if="!$route.meta.keepAlive"/>

    
    
  </div>
</template>
<script>
export default {
  methods: {
    save1() {
      localStorage.setItem('token', '111')
    },
    save2() {
      localStorage.setItem('token', '222')
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
body {
  margin: 0;
  padding: 0;
}
body {
  background: url('@/assets/1.webp') no-repeat;
}
.wrap3 {
  width: 300px;
  height: 300px;
  background: rgba(255,255,255,.3);
  border-radius: 10px;
  margin: 30px auto;
  border: 1px solid rgba(0,0,0,.3);
  box-shadow: 5px 5px 20px 5px;

  backdrop-filter: blur(10px);

  /* filter:blur(10px); */
}
</style>
