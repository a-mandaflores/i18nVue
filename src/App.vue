<script setup>
import LanguageChange from "./components/LanguageChange.vue";

// function language(value){
//   $emit('language', value)
// }
</script>

<template>
  <div>
    <LanguageChange ></LanguageChange>
  </div>
</template>

<style scoped>
div{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
</style>
