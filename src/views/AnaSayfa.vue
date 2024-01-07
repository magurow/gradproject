<template>
  <div class="Anasayfa">
  </div>
  <div id="app">
    <Sidebar />
  </div>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Sidebar from "../components/SideBar.vue";
import Dashboard from "@/components/Dashboard.vue";
export default {
  name: 'Anasayfa',
  components: {
    Sidebar,
    Dashboard,
  }
};
</script>

