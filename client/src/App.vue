<template>
  <v-app class="app">
    <v-container id="home">
      <div id="header">
        <h1 id="greeting" class="mt-10 mb-n3">Hi there!</h1>
        <h2 id="headline" class="mb-5">WHAT'S IN YOUR FRIDGE?</h2>
        <v-btn class="mt-9" small absolute top right fab v-on:click="setTheme">
          <v-icon dark>mdi-brightness-6</v-icon>
        </v-btn>
      </div>

      <div id="body">
        <form ref="form" class="form-group">
          <v-icon>mdi-search</v-icon>
          <v-text-field
            label="Ingredients"
            v-model="ingredients"
            :error-messages="ingredientErrors"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
            filled
            rounded
            dense
            prepend-inner-icon="mdi-magnify"
          />
          <v-btn outlined rounded small class="mt-1 mb-4" @click="fetchRecipe"
            >SHOW RECIPES</v-btn
          >
          <v-btn outlined rounded small class="mt-1 mb-4 ml-4" @click="clear"
            >CLEAR</v-btn
          >
        </form>
      </div>
      <recipes v-bind:dishes="dishes"></recipes>
    </v-container>
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
      api_key: process.env.VUE_APP_API_KEY,
      url_base: "https://api.spoonacular.com/recipes",
      ingredients: "",
      dishes: [],
      submitStatus: null,
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
      const url = `recipe/${this.ingredients}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => (this.dishes = data));
    },
    clear: function () {
      this.$v.$reset();
      this.ingredients = "";
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
