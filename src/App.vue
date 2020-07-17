<template>
  <v-app id="app-body" :class="this.$store.state.lastType.toLowerCase()">
        <h1 class="app-title">Pokeffective</h1>
    <v-main>
      <SelectedTypes/>
    </v-main>
    <v-main>
      <TypesTable/>
    </v-main>
    <v-main>
      <TypesResult/>
    </v-main>
  </v-app>
</template>

<script>
import SelectedTypes from "@/components/SelectedTypes";
import TypesTable from "@/components/TypesTable";
import TypesResult from "@/components/TypesResult";

export default {
  name: 'App',

  components: {
    TypesResult,
    TypesTable,
    SelectedTypes,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

  #app-body{
    font-family: 'Orbitron', sans-serif;
    color: white;
    text-shadow: 2px 2px #000000;
  }
  .full-title{
    margin-left: 5em;
  }
  .app-title{
    color: white;
    font-size: 7vw;
    text-align: center;
    text-shadow: 5px 5px #000000;
  }
  .logo{
    width: 50%;
    height: 50%;
    margin-left: -9vw;
    margin-top: 6vh;
  }
  /*Color styles for the background*/
  .default{
    background-color: #272727 !important;
  }
  .bug{
    background-color: #C0E11D !important;
  }
  .dark{
    background-color: #51453C !important;
  }
  .dragon{
    background-color: #6200EA !important;
  }
  .electric{
    background-color: #FFFF00 !important;
  }
  .fairy{
    background-color: #FF6FDE !important;
  }
  .fighting{
    background-color: #C03028 !important;
  }
  .fire{
    background-color: #FF6D00 !important;
  }
  .flying{
    background-color: #9FA8DA !important;
  }
  .ghost{
    background-color: #9575CD !important;
  }
  .grass{
    background-color: #00D12F !important;
  }
  .ground{
    background-color: #C4A96A !important;
  }
  .ice{
    background-color: #18FFFF !important;
  }
  .normal{
    background-color: #EFEBE9 !important;
  }
  .poison{
    background-color: #AA00FF !important;
  }
  .psychic{
    background-color: #FF00C5 !important;
  }
  .rock{
    background-color: #A8814C !important;
  }
  .steel{
    background-color: #9E9E9E !important;
  }
  .water{
    background-color: #304FFE !important;
  }
  @media only screen and (max-width: 1100px) {
    .logo{
      width: 50%;
      height: 50%;
      margin-left: -8vw;
      margin-top: 4vh;
    }
  }
  @media only screen and (max-width: 600px) {
    .logo{
      display: none;
    }
    .app-title{
      font-size: 13vw;
      margin-left: -0.1em;
    }
  }
  @media only screen and (max-width: 380px) {
    .app-title{
      font-size: 13vw;
      margin-left: 0.1em;
    }
  }
</style>
