<template>
  <v-app class="app">
    <v-container id="home">
      <v-row dense justify="center" alignment="center">
        <v-col cols="12">
          <h1 id="greeting" class="mb-n3">Hi there!</h1>
          <h2 id="headline">WHAT'S IN YOUR FRIDGE?</h2>

          <v-card id="ingredientForm" class="elevation-12">
            <v-card-text>
              <v-form
                ref="form"
                class="form-group"
                lazy-validation
                v-for="(item, index) in ingredients"
                :key="index"
              >
                <v-text-field
                  label="Ingredient"
                  :rules="formRules"
                  v-model="ingredients[index]"
                />
              </v-form>
            </v-card-text>

            <div class="btn-group">
              <v-btn class="mx-2" fab dark outlined color="teal" @click="addField">
                <v-icon dark>mdi-plus</v-icon> 
              </v-btn>
              <v-card-actions>
                <v-btn
                  rounded
                  class="btn mb-4"
                  id="showRecipe"
                  color="#E57373"
                  v-on:click="fetchRecipe"
                  >SHOW RECIPES</v-btn
                >
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-btn
        class="mt-6"
        small
        absolute
        top
        right
        fab
        dark
        v-on:click="setTheme"
      >
        <v-icon dark>mdi-brightness-6</v-icon>
      </v-btn>

      <recipeCard v-bind:dishes="dishes"></recipeCard>
    </v-container>
  </v-app>
</template>

<script>
import recipeCard from "./components/RecipeCard.vue";
export default {
  name: "app",
  components: {
    recipeCard,
  },
  data() {
    return {
      api_key: process.env.VUE_APP_API_KEY,
      url_base: "https://api.spoonacular.com/recipes",
      ingredients: ["", "", ""],
      dishes: [],
      formRules: [
        //    v => !!v || 'Ingredient is required'
      ],
    };
  },
  methods: {
    fetchRecipe: async function () {
      const url = `recipe/${this.ingredients.join(",")}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => (this.dishes = data));
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
    addField(){
      this.ingredients.push("");
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=League+Script&display=swap");

#home {
  display: flex;
  flex-direction: column;
  color: rgb(46, 44, 44);
  font-family: roboto;
  max-width: 512px;
  min-height: 100%;
}
#showRecipe {
  background-color: salmon;
  margin-top: 10px;
  padding: 10px;
  color: aliceblue;
}
#greeting {
  font-family: "League Script", cursive;
  text-align: center;
  font-size: xx-large;
}

#headline {
  text-align: center;
  font-family: "Anton", sans-serif;
  font-style: normal;
  font-stretch: ultra-condensed;
  font-size: x-large;
  margin-top: 0;
  margin-bottom: 50px;
}

#ingredientForm {
  flex-basis: 30%;
  flex-grow: 0;
}

.btn-group {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>