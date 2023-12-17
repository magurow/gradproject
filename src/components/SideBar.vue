<template>
  <div class="sidebar">
    <router-link to="/">Ana Sayfa</router-link>
    <router-link :to="{ name: 'Talepler' }">Talepler</router-link>
    <router-link :to="{ name: 'TalepOluşturma' }">Talep Oluşturma</router-link>
    <router-link :to="{ name: 'Program' }">Program</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Add your component-specific styles here */
.sidebar {
  height: 100%;
  width: 250px; 
  position: fixed;
  top: 0;
  left: 0;
  background-color: #32118d;
  padding-top: 60px; 
}

.sidebar a {
  padding: 18px 32px 18px 18px;
  text-decoration: none;
  font-size: 18px;
  color: #d4d4d4;
  display: block;
}

.sidebar a:hover {
  color: #ffffff;
}
</style>
