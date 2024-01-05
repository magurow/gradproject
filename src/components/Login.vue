<template>
  <div class="login-container">
    <form @submit.prevent="handleFormSubmission">
      <label>Öğrenci Numarası:</label>
      <input type="email" v-model="email" required >

      <label>Şifre:</label>
      <input type="password" v-model="password" required >
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <div class="submit">
        <button type="submit">Giriş Yap</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      passwordError: null,
    }
  },
  methods: {
    handleSubmit() {
      this.passwordError = this.password.length > 5 ?
        '' : 'Şifre en az 6 karakter olmalı';
    },
    redirectToAnaSayfa() {
      this.$router.push('/anasayfa');
    },
    handleFormSubmission() {
      this.handleSubmit();

      if (!this.passwordError && this.email && this.password) {
        this.redirectToAnaSayfa();
      }
    }
  }
}
</script>

<style>
  .login-container {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  max-width: 420px;
  margin: 30px auto;
  }
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    color: #555;
  }
  button {
    background: #32118d;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  .submit :hover {
    cursor: pointer;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>