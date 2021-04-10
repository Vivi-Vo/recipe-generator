<template>
  <div>
    <form id="search-form" ref="form" class="form-group" @submit.prevent="fetchRecipe">
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
        id="btn-2"
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
      <v-skeleton-loader
        id="loader"
        v-show="loading"
        width="15rem"
        type="image, card-heading"
      ></v-skeleton-loader>
    </form>
    <RecipeList v-show="!loading" v-bind:dishes="dishes" />
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import RecipeList from "./RecipeList";

export default {
  name: "SearchForm",
  components:{
    RecipeList
  },
  data() {
    return {
      ingredients: "",
      loading: false,
      dishes: [],
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
  },
};
</script>

<style>
#search-form {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
}

#btn-1:hover {
  color: black;
}

#btn-2:hover {
  color: black;
}
</style>