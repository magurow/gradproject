<template>
  <div id="app">
    <Sidebar />
  </div>
  <div id="app">
    <DersProgram />
  </div>
</template>

<script>
import Sidebar from "../components/SideBar.vue";
import DersProgram from "../components/DersProgram.vue";

export default {
  name: 'Program',
  components: {
    Sidebar,
    DersProgram
  }
};
</script>