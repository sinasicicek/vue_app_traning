<script >
import Card from "./components/cardd.vue"
import bdy from "./components/bdy.vue"
export default {
  data(){return{
    kasGrub:null,
   
  }},
  emits:['selectKas'],
  methods:{
    kasGrubuGöster(nesne){
      console.log(nesne);
     
    }
  },
  components:{Card,bdy},
  
}
</script>

<template>
  <div class="container">
        <div class="container-comp">
        <bdy  @selectKas="(ii)=>kasGrub=ii"></bdy>
        <card></card>
        <div class="kasAlert">
        {{ kasGrub }}
        </div>
        </div>
 
  </div>
  
</template>

<style >
*{
  padding: 0px;
  margin: 0px;
}
.kasAlert-show-off{}
.kasAlert-show-on{}
.kasAlert{
  position: absolute;
  top: 0px;
  width: 100%;
  height: 20px;
  background-color: #D9AFD9;
  backdrop-filter: opacity(0.1);
  text-align: center;
  color: black;
}
.container-comp{

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.container{
  position: relative;
    width: 100%;
    height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
    background-color: #D9AFD9;
    background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);

}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
