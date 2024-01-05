<template>
  <div class="talepOluşturma">
    <div>
      <h1>Talep Oluşturma</h1>
      <form @submit.prevent="submitForm">
        <label>
          Talep Türünü Seçiniz:
          <select v-model="selectedTalep" class="selectField" required>
            <option value="" disabled selected>Seçiniz</option>
            <option value="kontenjan-arttirma">Kontenjan Arttırma</option>
            <option value="ders-yuku-arttirma">Ders Yükü Arttırma</option>
            <option value="ders-yuku-azaltma">Ders Yükü Azaltma</option>
            <option value="sosyal-secimlik-ders-alma">Sosyal Seçimlik Ders Alma</option>
            <option value="baska-bolumden-secimlik-ders-alma">Baska Bölümden Seçimlik Ders Alma</option>
            <option value="baska-bolumden-ortak-ders-alma">Baska Bölümden Ortak Ders Alma</option>
            <option value="esdeğer-ders-saydirma-talepi">Eşdeğer Ders Saydırma Talepi</option>
            <option value="oncelikli-alinmasi-gereken-dersin-ertelenmesi">Öncelikli Alınması Gereken Dersin Ertelenmesi</option>
            <option value="diger">Diğer</option>
          </select>
        </label>

        
        <template v-if="selectedTalep">
          <label>
            Talep Oluşturunuz:
            <textarea v-model="talep" class="inputField" required></textarea>
          </label>
          <button type="submit" class="talepButton">Gönder</button>
        </template>
      </form>
    </div>
  </div>
  <div id="app">
    <Sidebar />
  </div>
</template>

<script>
import { ref } from 'vue';
import Sidebar from '../components/SideBar.vue';

export default {
  name: 'TalepOluturma',
  components: {
    Sidebar,
  },
  setup() {
    const talep = ref('');
    const selectedTalep = ref('');

    const submitForm = () => {
      // Don't forget the logic here(note to oneself)
      console.log('Form submitted with talep:', talep.value);
    };

    return {
      talep,
      selectedTalep,
      submitForm,
    };
  },
};
</script>

<style>
.talepOluşturma {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e4e4e4;
  width: 50%;
  margin-top: 5%;
  margin-left: 30%;
  border-radius: 20px;
  padding: 5%;
}

.inputField {
  width: 100%;
  height: 100px;
  margin-right: 85px;
  resize: none;
  padding: 8px;
  margin-bottom: 10px;
}

.selectField {
  width: 80%; 
  margin-right: 85px;
  padding: 8px;
  margin-bottom: 10px;
}

.talepButton {
  background-color: #32118d;
  color: white;
  border: none;
  border-radius: 4px;
  margin-left: 25%;
  width: 50%; 
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
}
.talepButton:hover{
  cursor: pointer;
  background-color: #412787;
}
label {
  color: black;

}
</style>




