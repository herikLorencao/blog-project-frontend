<template>
  <q-page v-if="projects" class="flex justify-center items-start">
    <h1>Projetos</h1>
    <CardProject v-for="(project, idx) in projects" :key="project.id" :title="project.title"
                 :description="project.description" :img="project.img_url" :link="project.url"
                 :idx="idx" />
  </q-page>
  <q-page class="column justify-center items-center" v-else>
    <q-spinner
      color="white"
      :thickness="2"
      size="10em"
    />
  </q-page>
</template>

<script>
import ProjectService from 'src/services/ProjectService';
import CardProject from 'components/card-project/CardProject.vue';

export default {
  components: { CardProject },
  data() {
    return {
      service: new ProjectService(),
      projects: null,
    };
  },
  async mounted() {
    this.projects = await this.service.listAll();
  },
};
</script>
