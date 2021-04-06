<template>
  <v-app class="app">
    <div id="header">
      <h1 id="greeting" class="mt-10 mb-n3">Hi there!</h1>
      <h2 id="headline" class="mb-5">WHAT'S IN YOUR FRIDGE?</h2>
      <v-btn class="mt-2 mr-n6" small absolute top right fab v-on:click="setTheme">
        <v-icon dark>mdi-brightness-6</v-icon>
      </v-btn>
    </div>

    <div id="body">
      <form ref="form" class="form-group" @submit.prevent="fetchRecipe">
        <v-icon>mdi-search</v-icon>
        <v-text-field
          label="Ingredients"
          v-model="ingredients"
          v-on:keyup.enter="fetchRecipe"
          :error-messages="ingredientErrors"
          required
          @input="$v.ingredients.$touch()"
          filled
          rounded
          dense
          prepend-inner-icon="mdi-magnify"
        />
        <v-btn
          dark
          small
          rounded
          color="blue-grey lighten-1"
          class="mt-1 mb-4"
          @click="fetchRecipe"
          >SHOW RECIPES</v-btn
        >
        <v-btn
          dark
          small
          rounded
          color="blue-grey lighten-1"
          class="mt-1 mb-4 ml-4"
          @click="clear"
          id="btn-2"
          >CLEAR</v-btn
        >
      </form>
    </div>

    <v-skeleton-loader id="loader" v-show="loading" width="15rem" type="image, card-heading"></v-skeleton-loader>
    <recipes v-show= "!loading" v-bind:dishes="dishes"></recipes>
  </v-app>
</template>

<script>
import recipes from "./components/Recipes.vue";
import { required } from "vuelidate/lib/validators";

export default {
  name: "app",
  created() {
    document.title = "Recipe Generator";
  },
  components: {
    recipes,
  },
  data() {
    return {
      ingredients: "",
      dishes: [],
      submitStatus: null,
      loading: false,
    };
  },
  validations: {
    ingredients: {
      required,
    },
  },

  computed: {
    ingredientErrors() {
      const errors = [];
      if (!this.$v.ingredients.$dirty) return errors;
      !this.$v.ingredients.required &&
        errors.push("At least one ingredient is required.");
      return errors;
    },
  },
  methods: {
    fetchRecipe: async function () {
      this.$v.$touch();
      this.loading = true;
      const url = `recipe/${this.ingredients}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.dishes = data;
          this.loading = false;
        });
    },
    clear: function () {
      this.$v.$reset();
      this.ingredients = "";
      this.dishes = [];
      this.loading = false;
    },
    setTheme: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=League+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Spinnaker&display=swap");

@import "../assets/styles/main.scss";
</style>
