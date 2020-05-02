import Vue from "vue";

const darkModeClass = "theme--dark";
//Função para adicionar a classe css theme--dark
function addDarkModeStyle(el, binding, vnode) {
  if (vnode.context?.$store?.state?.darkMode) {
    if (el.className.split(" ").filter((x) => x == darkModeClass).length == 0) {
      el.className += " " + darkModeClass;
    }
  }

  if (!vnode.context?.$store?.state?.darkMode) {
    el.className = el.className.replace(darkModeClass, "").trim();
  }
}

Vue.directive("dark-mode", {
  update: function(el, binding, vnode) {
    addDarkModeStyle(el, binding, vnode);
  },
  bind: function(el, binding, vnode) {
    addDarkModeStyle(el, binding, vnode);
  },
});
