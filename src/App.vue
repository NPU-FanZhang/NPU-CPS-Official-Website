<template>
  <div id="app">
    <v-topmsgbar></v-topmsgbar>
    <v-toptitlelogobar></v-toptitlelogobar>
    <v-mainswitchbar></v-mainswitchbar>
    <div id="nav">
    </div>

    <router-view />
  </div>
</template>

<style lang="less">
html,
body,
#app{
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#e6e6e6;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
