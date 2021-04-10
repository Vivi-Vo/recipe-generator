<template>
  <v-app class="app">
    <AppHeader :greeting="greeting" :headline="headline" />
    <v-btn class="mt-1 mr-0" small absolute top right fab v-on:click="setTheme">
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
#app {
  margin: auto;
  padding: 20px;
}
</style>
