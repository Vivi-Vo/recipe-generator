<template>
  <v-card v-if="dataIsFetched" id="card" class="pa-6">
    <div class="recipe-header">
      <h1 id="recipe-name">{{ title }}</h1>
      <h4 class="font-italic font-weight-thin mb-4">{{ credit }}</h4>
      <img id="recipe-img" :src="recipeURL" />

      <h2 id="recipe-info">
        {{ timeCook }} minutes | {{ ingredients.length }} ingredients |
        {{ serving }} servings
      </h2>
    </div>
    <div class="ingredients">
      <h2>Ingredients</h2>
      <ul id="ingredient-list">
        <li v-for="item in ingredients" :key="item.index">
          {{ `${item.amount} ${item.unit} ${item.name}` }}
        </li>
      </ul>
    </div>
    <div v-if="instructionURL">
      <v-btn
        small
        rounded
        color="blue-grey"
        dark
        class="mt-3"
        :href="instructionURL"
        target="_blank"
      >
        GET DIRECTION
      </v-btn>
    </div>

    <div v-else>
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
    credit: String,
    dataIsFetched: Boolean
  },
};
</script>


<style scoped>
@import "../../assets/styles/recipes.scss";
@import url("https://use.typekit.net/bdn8fqt.css");
</style>