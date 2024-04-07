<script>
export default{
  data(){
    return{
      language: 'pt'
    }
  },
  methods:{
    languageChoice(locale){
      this.language = locale
      this.$i18n.locale = locale;
    }
  }
}
</script>

<template>
  <div>
  <div class="frase">{{  $t("salutation.labelOne") }}</div>
  <div class="languageStyle">{{ $t("salutation.language") }}</div>
  <div class="trocar">{{ $t("salutation.change") }}
  <button v-if="language !== 'en'" @click="languageChoice( 'en' )"><img src="../img/estados-unidos.png" alt="Estatos Unidos"></button>
  <button v-if="language !== 'sp'" @click="languageChoice( 'sp' )"><img src="../img/espanha.png" alt="Espanha"></button>
  <button v-if="language !== 'pt'" @click="languageChoice( 'pt' )"><img src="../img/brasil.png" alt="Espanha"></button>

  </div>

  </div>
</template>

<style scoped>
.frase{
  color:crimson;
  font-weight: 600;
}
.languageStyle{
  color: #333;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  border-radius: 5px;
  padding: 1rem;
  margin: .5rem;
  background-color: white;
}
.trocar{
  font-weight: 600;
  color: #333;
}
button{
  background-color: transparent;
  border: none;
  margin: .5rem;
  cursor: pointer;
  transition: .2s;
}

button:hover{
  transform: scale(1.1);
}
img{
  width: 20px;
}
</style>
