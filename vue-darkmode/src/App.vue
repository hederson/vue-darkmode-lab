<template>
<body id="app" v-dark-mode>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <a @click="toggleDarkMode" style="cursor:pointer;">Alterar Modo do Template</a>
  </div>
  <router-view />
</body>
</template>
<script>
export default {
  methods: {
    toggleDarkMode: function() {
      //chamada do metodo no toggleDarkMode criado no Vuex
      this.$store.commit({ type: "toggleDarkMode" });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app.theme--dark {
  color: white;
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

.theme--dark #nav {
  a {
    font-weight: bold;
    color: #476380;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body.theme--dark {
  background-color: black;
}
</style>
