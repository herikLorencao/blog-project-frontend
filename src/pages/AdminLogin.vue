<template>
  <q-page class="flex column justify-center items-center">
    <div class="login-box column items-center">
      <h1>Admin</h1>
      <div class="login-fields column items-center">
        <q-input class="login-input" color="white" v-model="loginForm.login" placeholder="login"/>
        <q-input class="login-input" color="white" v-model="loginForm.password" type="password"
                 placeholder="senha" />
      </div>
      <div class="login-buttons column items-center">
        <q-btn class="login-button" no-caps @click="login()">Entrar</q-btn>
        <router-link class="link" to="esqueceusenha">
          Esqueceu a senha?
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
import LoginAdminService from 'src/services/LoginAdminService';

export default {
  data() {
    return {
      loginForm: {
        login: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      const loginService = new LoginAdminService();
      const isLogged = await loginService.verifyLogin(this.loginForm);

      if (isLogged) {
        await this.$router.push('/admin');
      }
    },
  },
};
</script>

<style scoped>
</style>
