<template>
  <router-link class="menu-link" :to="link">
    <div class="btn column justify-center">
      <div class="row justify-center items-center">
        {{ name }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ItemMenu',
  props: {
    name: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      type: String,
    },
    active: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  .menu-link {
    color: $white;
    font-family: "Segoe UI Regular", sans-serif;
    font-size: $font-normal;
    background-color: $background-dark-gray;
    text-decoration: none;
    height: 60px;
  }

  .menu-link:hover {
    background-color: $hover-white;
  }

  .btn {
    height: 100%;
  }

  .icon {
    margin-top: 5%;
    font-size: 0.3em;
  }

  .enable {
    color: $white !important;
  }

  .disable {
    color: transparent !important;
  }
</style>
