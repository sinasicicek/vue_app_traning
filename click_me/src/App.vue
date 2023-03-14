<script>   


  export default{
 
    data(){return{
      back_contain:null,
      rgb_code:null
    }},
    methods:{
      btn_click(){
        const sayı=Math.floor(Math.random() * 101);
        const sayı2=Math.floor(Math.random() * 101);
        const sayı3=Math.floor(Math.random() * 101);
        this.rgb_code="RGB("+sayı+","+sayı2+","+sayı3+")"
        this.back_contain=`background-color:RGB(${sayı+","+sayı2+","+sayı3})`

   
        
      }
    }

  }
</script>

<template>
  <div  class="back-contain-color d-flex-center" :style="back_contain">
      <div class="d-flex-center">
        <button @click="btn_click">Click me !</button>
        <span ref="rgb_span">{{rgb_code}}</span>
  </div>
  </div>

</template>

<style>
*{
  margin: 0px;
  padding: 0px;
}
.back-contain-color{
  width: 100%;
  height: 100vh;
  color: rgb(60, 88, 79);
}
  .contain{
   

  }
  .d-flex-center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  button{
    width: 150px;
    height: 40px;
    background-color:grey ;
    font-size: 24px;
    border: 0px;
    border-radius: 5px;
  }
  button:hover{
    cursor: pointer;
    background-color: rgb(163, 147, 147);
    transition: 1s;
  }
  button:active{
    transform: scale(.8);
  }
  span{
    font-size: 24px;
    font-weight: 600;
    background-color: whitesmoke;
    margin: 1rem 0px;
  }
</style>
