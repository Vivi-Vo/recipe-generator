<template>
  <div id="recipes">
    <div class="card" v-for="dish in dishes" :key="dish.id">
      <v-dialog v-model="showDialog" max-width="800" overlay-opacity="0.2">
        <template v-slot:activator="{ on, attrs }">
          <img
            :src="dish.image"
            @click="getRecipeIngredients(dish.id)"
            v-bind="attrs"
            v-on="on"
          />
          <p id="title" v-text="dish.title"></p>
        </template>
        <RecipeCard v-bind="recipe"></RecipeCard>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard.vue";
export default {
  components: { RecipeCard },
  name: "recipes",
  props: {
    dishes: Array,
  },
  data() {
    return {
      showDialog: false,
      recipe: {
        ingredients: [],
        instructionURL: "",
        timeCook: "",
        recipeURL: "",
        instructions: [],
        title: "",
      },
    };
  },
  methods: {
    getRecipeIngredients: function (id) {
      this.resetState();
      const url = `recipe/instructions/${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          result.extendedIngredients.forEach((element) => {
            this.recipe.ingredients.push(element.name);
          });
          this.recipe.title=result.title;
          this.recipe.timeCook = result.readyInMinutes;
          this.recipe.recipeURL = result.image;
          if (result.analyzedInstructions.length === 0) {
            this.recipe.instructionURL = result.sourceUrl;
          } else {
            this.recipe.instructions = result.analyzedInstructions[0].steps;
          }
        });
    },
    resetState: function () {
      this.recipe = {
        title: "",
        ingredients: [],
        instructionURL: "",
        timeCook: "",
        recipeURL: "",
      };
    },
  },
};
</script>

<style scoped>
@import "../../assets/styles/recipes.scss";
@import url("https://use.typekit.net/bdn8fqt.css");
</style>