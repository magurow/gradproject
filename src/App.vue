<template>
  <div id="app">
    <Sidebar />
  </div>
  <router-view class="content" />
</template>

<script>
import Sidebar from "./components/SideBar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  margin-left: 250px; /* Adjust the margin based on your sidebar width */
  padding: 16px;
}
</style>
