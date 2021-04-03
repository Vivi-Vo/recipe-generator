<template>
  <v-card id="card" class="pa-6">
    <div class="recipe-header">
      <h1 id="recipe-name">{{ title }}</h1>
      <img id="recipe-img" :src="recipeURL" />

      <h2 id="recipe-info">
        {{ timeCook }} minutes | {{ ingredients.length }} ingredients
      </h2>
    </div>
    <div class="ingredients">
      <h2>Ingredients</h2>
      <h4>{{ serving }} servings</h4>
      <ul id="ingredient-list">
        <li v-for="item in ingredients" :key="item.index">
          {{ `${item.amount} ${item.unit} ${item.name}` }}
        </li>
      </ul>
    </div>

    <div class="direction">
      <h2>Direction:</h2>
      <ol>
        <li v-for="steps in instructions" :key="steps.number">
          {{ steps.step }}
        </li>
      </ol>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    timeCook: Number,
    ingredients: Array,
    instructionURL: String,
    recipeURL: String,
    instructions: Array,
    title: String,
    serving: Number,
  },
};
</script>


<style scoped>
@import "../../assets/styles/recipes.scss";
@import url("https://use.typekit.net/bdn8fqt.css");
</style>