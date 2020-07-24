<template>
  <header class="row justify-center">
    <ItemMenu :active="active" class="col-2" name="Inicio" link="/"/>
    <ItemMenu class="col-2" name="Projetos" link="/projetos" :active="active" />
    <ItemMenu class="col-2" name="Posts" link="/posts" :active="active" />
  </header>
</template>

<script>
import ItemMenu from 'components/header/components/ItemMenu.vue';

export default {
  name: 'Header',
  components: {
    ItemMenu,
  },
  computed: {
    routePath() {
      this.changeMenuItem(this.$route.path);
      return this.$route.path;
    },
  },
  data() {
    return {
      active: 'Inicio',
    };
  },
  methods: {
    changeMenuItem(option) {
      switch (option) {
        case '/':
          this.active = 'Inicio';
          break;
        case '/projetos':
          this.active = 'Projetos';
          break;
        case '/posts':
          this.active = 'Posts';
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>

</style>
