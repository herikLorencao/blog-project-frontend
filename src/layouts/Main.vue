<template>
  <q-layout view="lHh Lpr lFf">
    <Header/>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    <Footer/>
  </q-layout>
</template>

<script>
import Header from 'components/header/Header.vue';
import Footer from 'components/footer/Footer.vue';

export default {
  name: 'Main',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
  .layout {
    background-color: $background-dark-gray;
  }
</style>
