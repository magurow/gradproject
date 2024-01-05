<template>
  <div class="Anasayfa">
    <h1>Ana Sayfa</h1>
    <p>lorem ipsum</p>
    <p>lorem ipsum</p>
  </div>
  <div id="app">
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "../components/SideBar.vue";

export default {
  name: 'Anasayfa',
  components: {
    Sidebar
  }
};
</script>

