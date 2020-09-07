<template>
  <q-page class="flex column justify-center items-center">
    <div class="login-box column items-center">
      <h1>Login</h1>
      <div class="login-fields column items-center">
        <q-input class="login-input" color="white" v-model="loginForm.login" placeholder="login"/>
        <q-input class="login-input" color="white" v-model="loginForm.password" type="password"
                 placeholder="senha" />
      </div>
      <div class="login-buttons column items-center">
        <q-btn @click="login" class="login-button" no-caps>Entrar</q-btn>
<!--        '<router-link class="link" to="esqueceusenha">-->
<!--          Esqueceu a senha?-->
<!--        </router-link>'-->
      </div>
    </div>
  </q-page>
</template>

<script>
import LoginReaderService from 'src/services/LoginReaderService';
import ReaderService from 'src/services/ReaderService';

export default {
  data() {
    return {
      service: new LoginReaderService(),
      readerService: new ReaderService(),
      loginForm: {
        login: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      const isLogged = await this.service.verifyLogin(this.loginForm);

      if (isLogged) {
        await this.$router.back();
      }
    },
  },
};
</script>

<style scoped>
</style>
