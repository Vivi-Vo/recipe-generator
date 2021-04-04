<template>
  <div id="recipes">
    <div class="card" v-for="dish in dishes" :key="dish.id">
      <v-dialog
        v-model="showDialog"
        max-width="800"
        overlay-opacity="0.2"
        :retain-focus="false"
      >
        <template v-slot:activator="{ on, attrs }">
          <img
            :src="dish.image"
            v-bind="attrs"
            v-on="on"
            @click="getRecipeIngredients(dish.id)"
          />
          <p
            id="title"
            v-text="dish.title"
            v-bind="attrs"
            v-on="on"
            @click="getRecipeIngredients(dish.id)"
          ></p>
        </template>
        <RecipeCard v-bind="recipe" v-bind:dataIsFetched="dataIsFetched"></RecipeCard>
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
        timeCook: 0,
        recipeURL: "",
        instructions: [],
        title: "",
        serving: 0,
        credit: "",
      },
      dataIsFetched: false
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
            let ingredient = {
              amount: element.amount,
              unit: element.unit,
              name: element.name,
            };

            this.recipe.ingredients.push(ingredient);
          });
          this.recipe.title = result.title;
          this.recipe.timeCook = result.readyInMinutes;
          this.recipe.recipeURL = result.image;
          this.recipe.serving = result.servings;
          this.recipe.credit = result.creditsText;

          if (result.analyzedInstructions.length === 0) {
            this.recipe.instructionURL = result.sourceUrl;
          } else {
            this.recipe.instructions = result.analyzedInstructions[0].steps;
          }
          this.dataIsFetched = true
        });
    },
    resetState: function () {
      this.dataIsFetched = false;
      this.recipe = {
        ingredients: [],
        instructionURL: "",
        timeCook: 0,
        recipeURL: "",
        instructions: [],
        title: "",
        serving: 0,
        credit: "",
      };
    },
  },
};
</script>

<style scoped>
@import "../../assets/styles/recipes.scss";
@import url("https://use.typekit.net/bdn8fqt.css");
</style>