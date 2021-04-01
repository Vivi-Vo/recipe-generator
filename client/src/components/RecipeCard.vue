<template>
      <v-dialog id="popup" v-model="dialog">
      <v-card id="card">
        <v-card-title id="dishTitle">
          <span class="headline">{{selectedDish.title}}</span>
        </v-card-title>

        <v-avatar size="200" >
          <v-img :src="recipeURL" />
        </v-avatar>        

      <v-card-text>
          <span class="headline">Time Cook: {{timeCook}} minutes</span>
        </v-card-text>

        <v-btn class="btn mb-4" raised color="purple lighten-4" @click="showIngredient=!showIngredient">Ingredients</v-btn>
        <v-card-text>
          <ul>
            <li v-for="item in ingredients" :key="item.index">{{item}}</li>
          </ul>
        </v-card-text>

        <v-spacer></v-spacer>
        <v-btn raised color="purple lighten-4" @click="showInstruction=!showInstruction">Direction</v-btn> 


        <v-card-text >
          <ol>
            <li v-for="steps in instructions" :key="steps.number">{{steps.step}}</li>
          </ol>
        </v-card-text>

        <v-card-text v-if="instructionURL">
          <a :href="instructionURL" target="_blank">Recipe URL</a>
          <p></p>
        </v-card-text>

        <v-card-actions>
          <v-btn icon @click="scrollToTop">
            <v-icon>mdi-arrow-up-circle</v-icon>
          </v-btn>
          <v-btn absolute bottom right color="green darken-1" text @click="dialog =false">Back</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>