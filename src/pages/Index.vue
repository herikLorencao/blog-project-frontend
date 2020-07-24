<template>
  <q-page class="flex justify-center items-start">
    <div class="home-dark-card row items-center">
      <div class="profile-text-info col-12 col-sm-6">
        <div class="profile-name row justify-sm-end justify-xs-center">
          <div class="name-size column items-sm-start items-xs-center">
            <span class="md">Herik dos Santos</span>
            <span class="md">Lorenção</span>
            <span class="md-hide">Herik dos Santos Lorenção</span>
          </div>
        </div>
        <div class="profile-job row justify-sm-end justify-xs-center">
          <div class="name-size row">
            <span>Desenvolvedor Web</span>
          </div>
        </div>
      </div>
      <div class="profile-photo col-sm-5 col-xs-12 row justify-center">
        <img src="../assets/fotoInicio.png" alt="">
      </div>
    </div>
    <div class="home-light-card column items-center breakpoint-grid">
      <h1>Redes</h1>
      <div class="row-md column-xs justify-center grid-container">
        <div class="profile-links row-md column-xs items-xs-center justify-around">
          <a href="https://www.linkedin.com/in/herik-santos-loren%C3%A7%C3%A3o-751b16187/">
            <q-icon class="profile-link" name="fab fa-linkedin"/>
          </a>
          <a href="https://github.com/herikLorencao">
            <q-icon class="profile-link" name="fab fa-github"/>
          </a>
          <a href="https://gitlab.com/herikLorencao">
            <q-icon class="profile-link" name="fab fa-gitlab"/>
          </a>
        </div>
      </div>
    </div>
    <div class="home-dark-card column items-center breakpoint-grid">
      <h1>Linha do Tempo</h1>
      <div class="row-md column-xs justify-center grid-container">
        <div class="places-images row-md column-xs justify-around items-xs-center">
          <HomeLocalImage
            v-for="place in placesImages"
            :key="place.id"
            :id="place.id"
            :name="place.name"
            :years="place.years"
          />
        </div>
      </div>
    </div>
    <div class="home-light-card-small column items-center breakpoint-grid">
      <h1>Contato</h1>
      <div class="column justify-center items-center contact-info grid-container">
        <div class="row justify-xs-center justify-md-start items-center">
          <q-icon class="icon" name="fas fa-at"/>
          <span>heriksantoslorencao@gmail.com</span>
        </div>
        <div class="row justify-xs-center justify-md-start items-center">
          <q-icon class="icon" name="fas fa-phone"/>
          <span>(28) 99953-7167</span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import HomeLocalImage from 'components/home-local-image/HomeLocalImage.vue';

export default {
  name: 'PageIndex',
  components: {
    HomeLocalImage,
  },
  data() {
    return {
      placesImages: [
        {
          id: 1,
          name: 'IFES V.N.I',
          years: '2014 - 2016',
        },
        {
          id: 2,
          name: 'IFES Cachoeiro',
          years: '2017 - Atual',
        },
        {
          id: 3,
          name: 'Arco Websites',
          years: '2019 - Atual',
        },
      ],
    };
  },
};
</script>
