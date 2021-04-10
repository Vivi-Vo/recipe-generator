<template>
  <v-app class="app">
    <AppHeader :greeting="greeting" :headline="headline" />
    <v-btn class="mt-9 mr-6" small absolute top right fab v-on:click="setTheme">
      <v-icon dark>mdi-brightness-6</v-icon>
    </v-btn>
    <SearchForm />
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import SearchForm from "./components/SearchForm";

export default {
  name: "app",
  created() {
    document.title = "Recipe Generator";
  },
  components: {
    AppHeader,
    SearchForm,
  },
  data() {
    return {
      greeting: "Hello!",
      headline: "What's in your fridge?",
    };
  },

  methods: {
    setTheme: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=League+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Spinnaker&display=swap");

@import "../assets/styles/main.scss";
</style>
