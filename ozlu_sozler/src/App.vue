
<script >
import SozlerTemp from './components/sozler.vue'

export default{
  data(){
    return{
      
    }
  },
  components:{SozlerTemp},

}
</script>

<template>
  <div class="contain d-flex-center">
      <div class="contain-main d-flex-column-center">
        <SozlerTemp />
      </div>
  </div>
</template>

<style >
*{
  margin: 0px;
  padding: 0px;
}
.d-flex-center{
  display: flex;
  align-items: center;
  justify-content: center;

}
.d-flex-column-center{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*#bbbbd7*/
}
.contain{
  width: 100%;
  height: 100vh;
  background-color: #1b1b30;
  color: #786cd5;
  font-size: 30px;
}
.contain-main{
  width: 50%;
  height: 50%;
  background-color: #786cd5;
}
.contain-main-btn-nxt{
  width: 120px;
  height: 40px;
 font-size: 24px;
 border-radius: 5px;
 border: 1px solid transparent;
 
 
}
.contain-main-btn-nxt:hover{
  cursor: pointer;
  background-color: #666691;
  transition: 1s;
}

</style>
