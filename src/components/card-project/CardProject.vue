<template>
  <div style="width: 100%; height: 350px" :class="cssClasses">
    <div class="grid-container column-xs row-md justify-center items-center">
      <div class="project-info col-6 column items-xs-center items-md-start">
        <h1>{{ title }}</h1>
        <span class="link">
            Link: <a :href="link">{{ link }}</a>
          </span>
        <span class="description">
          {{ description }}
        </span>
      </div>
      <div class="project-image col-4">
        <a :href="link">
          <q-img class="img" :src="img">
            <template v-slot:error>
              <q-spinner
                class="error-loading"
                color="white"
                :thickness="2"
                size="10em"
              />
            </template>
          </q-img>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
  },
  computed: {
    cssClasses() {
      return this.idx % 2 === 0
        ? 'home-light-card row justify-center items-center breakpoint-grid'
        : 'home-light-dark row justify-center items-center breakpoint-grid';
    },
  },
};
</script>
