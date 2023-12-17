<template>
  <div class="talepOluşturma">
  <h1>Talep Oluşturun</h1>
  <form>
    <label>
      <textarea type="text" required v-model="talep" class="inputField">
      Talep oluşturunuz.
      </textarea>
    </label>
  </form>
</div>
</template>

<script>

import { ref } from 'vue';

export default {
  setup() {
    const talep = ref( ' ' )

    return { talep }
  }

}
</script>

<style>
.talepOluşturma{
  width: 300px;
  background-color: #e6e6e6;
  border-radius: 5px;
  color: rgb(0, 0, 0);
  padding-right: 24px;
  margin-left: 50%;
}
.inputField{
  resize: none;
  padding: 100px 100px 200px 0px;
}

</style>


