<script>
import images from "./components/images.vue"

export default {

  components:{images}

}
</script>

<template>
  <div class="d-flex d-flex-center" id="frem">
    <images/>
  </div>
</template>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#frem{
  
}
body{
  background-color: #DBE2E9;
  height: 100vh;
  width: 100%;
}
.d-flex{
    display: flex;
}
.d-flex-center{
    align-items: center;
    justify-content: center;
}
.d-flex-col{flex-direction: column;}
li{
  list-style-type: none;
  display: inline;
  padding: 0px 1rem;
}
</style>
