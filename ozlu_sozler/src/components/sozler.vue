<script>
import sozluk from "./ozlusoz";

export default{
created(){
    this.next_btn(0)
},
  data(){
    return{
        söz:"",
        yazar_kim:"",
        next_id:0,
    }
  },
  
 /* watch:{
   next_id(yeni,eski){
        if(yeni != eski){
            console.log("uyumsuz");
            this.next_btn()}
    }
},*/
  methods:{
    next_btn(soz_id){

      const yaz=sozluk()

      yaz.forEach(element => {
       

        if(element.id === soz_id)
        {
            this.söz=element.söz
            this.yazar_kim=element.yazar
            this.next_id+=1
            
        }
       
       
   

      });
      
    }
  }

}
</script>
<template>
    <div class="contain-sozler d-flex-column-center">
        <div><button class="contain-main-btn-nxt" @click="next_btn(this.next_id)">Next</button></div>
        <div class="contain-txt">{{söz}}</div>
        <div class="contain-yazar">{{yazar_kim}}</div>
    </div>
</template>
<style scoped>
.contain_id{
    position: absolute;
    color: aliceblue;
    top: -5rem;
    right: 1rem;
}
.contain-sozler{
    position: relative;
    width: 100%;
    padding-top: 1rem;
}
.contain-txt{
    text-align: center;
    color: white;
    margin-top: 1rem;
}
.contain-yazar{
    width: 100%;
    text-align: right;

    position: relative;
    bottom: -3rem;
    right: 10rem;
    color: white;
}

</style>