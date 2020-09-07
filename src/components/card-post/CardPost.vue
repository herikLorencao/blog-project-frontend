<template>
  <div @click="openPost" :class="cssClasses">
    <div class="grid-container column-xs row-md justify-center items-center">
      <div class="post-info col-6 column items-center justify-center">
        <h1>{{ title }}</h1>
        <span class="date">
            Data de publicação: {{ dateFormat }}
          </span>
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
    dateInfo: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
  },
  computed: {
    dateFormat() {
      if (this.dateInfo) {
        const date = new Date(this.dateInfo);
        const dateFormatter = Intl.DateTimeFormat('pt-br');
        return dateFormatter.format(date);
      }
      return null;
    },
    cssClasses() {
      return this.idx % 2 === 0
        ? 'home-light-card row justify-center items-center breakpoint-grid link'
        : 'home-light-dark row justify-center items-center breakpoint-grid link';
    },
  },
  methods: {
    openPost() {
      this.$router.push(`/posts/${this.id}`);
    },
  },
};
</script>
