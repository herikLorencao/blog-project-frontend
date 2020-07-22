<template>
  <div class="column items-center">
    <q-avatar size="130px">
      <img v-if="id === 1" src="../../assets/ifesvni.jpg" :alt="name"/>
      <img v-if="id === 2" src="../../assets/ifescachoeiro.jpg" :alt="name"/>
      <img v-if="id === 3" src="../../assets/arcowebsites.jpg" :alt="name"/>
    </q-avatar>
    <span class="name">{{ name }}</span>
    <span class="years">{{ years }}</span>
  </div>
</template>

<script>
export default {
  name: 'HomeLocalImage',
  props: {
    id: {
      required: true,
      type: Number,
    },
    name: {
      required: true,
      type: String,
    },
    years: {
      required: true,
      type: String,
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
  span {
    color: $white;
  }

  .name {
    margin-top: 20px;
    font-size: $font-normal;
  }

  .years {
    font-size: $font-small;
  }
</style>
