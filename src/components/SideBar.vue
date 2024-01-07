<template>
  <div class="sidebar">
    <router-link to="/anasayfa">Ana Sayfa</router-link>
    <router-link :to="{ name: 'Talepler' }">Talepler</router-link>
    <router-link :to="{ name: 'TalepOlusturma' }">Talep Oluşturma</router-link>
    <router-link :to="{ name: 'Program' }">Program</router-link>
    <div class="line"></div>
    <router-link :to="{ name: 'Ayarlar' }">Ayarlar</router-link>
    <div class="user-container">
      <img src="../assets/user.png" alt="user" />
      <div class="user-info">
        <p class="user-name">Isim Soyisim</p>
        <p class="user-id">11223344</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  height: 100%;
  width: 20%; 
  position: fixed;
  top: 0;
  left: 0;
  background-color: #32118d;
  padding-top: 60px; 
  z-index: 2;
}

.sidebar a {
  padding: 18px 32px 18px 18px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: #d4d4d4;
  display: block;
}

.sidebar a:hover {
  color: #ffffff;
}
.line{
  width: 80%;
  height: 5px;
  background-color: #d4d4d4;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10%;
  border-radius: 8%;
}
.user-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10%;
  position: absolute;
  bottom: 10%;
}
img{
  width: 30%;
  border-radius: 20%;
  margin-right: 5%;
}
.user-info{
  margin-left: 5%;
  font-size: 80%;
  color:white;
}
.user-name{
  font-weight: bold;
}
.user-id{
  font-weight: bold;
}

</style>
