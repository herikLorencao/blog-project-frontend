<template>
  <header class="row justify-center">
    <ItemMenu class="col-2" name="Inicio" link="/" />
    <ItemMenu class="col-2" name="Projetos" link="/projetos" />
    <ItemMenu class="col-2" name="Posts" link="/posts" />
  </header>
</template>

<script>
import ItemMenu from 'components/header/components/ItemMenu.vue';

export default {
  name: 'Header',
  components: {
    ItemMenu,
  },
};
</script>

<style scoped>

</style>
