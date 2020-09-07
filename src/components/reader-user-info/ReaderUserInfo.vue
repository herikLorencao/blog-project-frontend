<template>
  <div :class="cssClasses">
    <q-fab class="btn" icon="person" direction="down" flat
           no-caps>
      <q-fab-action v-if="reader" class="btn-reader-action" @click="logout" text-color="white">
        Sair
      </q-fab-action>
      <q-fab-action v-else class="btn-reader-action" @click="login" text-color="white">
        Entrar
      </q-fab-action>
    </q-fab>
  </div>
</template>

<script>
export default {
  computed: {
    cssClasses() {
      return this.reader ? 'reader-user enable' : 'reader-user disable';
    },
    reader() {
      if (this.$store.getters['readerLogin/getReaderId']) {
        return {
          id: this.$store.getters['readerLogin/getReaderId'],
        };
      }
      return null;
    },
  },
  methods: {
    login() {
      this.$router.push('/login');
    },
    logout() {
      this.$store.commit('readerLogin/setReaderId', null);
      this.$store.commit('readerLogin/setReaderName', null);
    },
  },
  mounted() {
    const readerId = this.$store.getters['readerLogin/getReaderId'];

    if (readerId) {
      this.reader.id = readerId;
    }
  },
};
</script>

<style scoped>

</style>
