<template>
  <v-card class="pa-6">
    <h1>{{title}}</h1>
    <img :src="recipeURL" />
    <h2>{{ timeCook }} minutes | {{ingredients.length}} ingredients</h2>
    <h2>Ingredients:</h2>

    <ul>
      <li v-for="item in ingredients" :key="item.index">{{ item }}</li>
    </ul>

    <h2>Step-by-step instruction:</h2>
    <ol>
      <li v-for="steps in instructions" :key="steps.number">
        {{ steps.step }}
      </li>
    </ol>
  </v-card>
</template>

<script>
export default {
  props: {
    timeCook: String,
    ingredients: Array,
    instructionURL: String,
    recipeURL: String,
    instructions: Array,
    title: String
  },
};
</script>


<style scoped>
@import "../../assets/styles/recipes.scss";
@import url("https://use.typekit.net/bdn8fqt.css");
</style>