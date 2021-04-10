<template>
  <header>
    <h1 id="greeting" class="mt-10 mb-n3">{{greeting}}</h1>
    <h2 id="headline" class="mb-5">{{headline}}</h2>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    greeting: String,
    headline: String
},
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=League+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Spinnaker&display=swap");

#greeting {
  font-family: "League Script", cursive;
  text-align: center;
  font-size: xx-large;
}

#headline {
  text-align: center;
  font-family: "Spinnaker", sans-serif;
  font-style: normal;
  font-stretch: ultra-condensed;
  font-size: x-large;
}
</style>