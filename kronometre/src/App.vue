<script>
  export  default {
    data(){
      return{
        durum:"",
        zaman:null,
        zaman_dizi:{
          dakika:0,
          saniye :0,
          milisaniye:0
        },
        inter:null,
        btn_star:true,

      }
    },
    methods:{
        btn_start(event){


             if (event.target.id ==="start")
             {
               this.durum="Start"

               if(this.btn_star === true)
               {
                 this.inter= setInterval(this.basla,10)
                 this.btn_star =false
               }


               console.log(this.btn_star)
             }

            if(event.target.id === "stop")
            {

              clearInterval(this.inter)
              this.durum="Stop"


              if(this.btn_star === false){ this.btn_star =true}
              console.log(this.btn_star)
            }
           if(event.target.id === "restart")
            {



              this.zaman_dizi.dakika=0;
              this.zaman_dizi.saniye=0;
              this.zaman_dizi.milisaniye=0;
              this.zaman_durum()
              this.durum="Restart"
              this.btn_star=true

            }


        },
        basla(){

          this.zaman_dizi.milisaniye+=1

          if (this.zaman_dizi.milisaniye === 99){
            this.zaman_dizi.milisaniye=0
            this.zaman_dizi.saniye +=1

          }
          else if ( this.zaman_dizi.saniye === 60)
          {
            this.zaman_dizi.dakika+=1
            this.zaman_dizi.saniye = 0

          }

          this.zaman=this.zaman_dizi.dakika+":"+this.zaman_dizi.saniye+":"+this.zaman_dizi.milisaniye


        },
      zaman_durum(){
          return this.zaman=this.zaman_dizi.dakika+":"+this.zaman_dizi.saniye+":"+this.zaman_dizi.milisaniye

      }

    },

  }
</script>

<template>
  <div class="contain d-flex-col-center">
    <div class="item"><h1>Kronometre</h1></div>
    <div class="item"><h3>{{durum}}</h3></div>
    <div class="item"><h3>{{zaman}}</h3></div>
    <div class="item item-btn-contain">
      <button class="item-btn" @click="btn_start($event)" id="start" >Start</button>
      <button class="item-btn" @click="btn_start($event)" id="stop">Stop</button>
      <button class="item-btn" @click="btn_start($event)" id="restart">Restart</button>
    </div>
  </div>
</template>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#app{

  background-color: #ffa600;

  width: 100%;

  height: 100vh;
  box-sizing: content-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1,h3{
  color: white;
  font-size: 30px;
}
.contain{
  border: 2px solid white;
  padding: 2rem;
  border-radius: 5px;

  width: 50%;

}
.d-flex-col-center{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
  .item-btn{
    width: 150px;
    height: 40px;
    color: white;
    border: #f2f2f2 1px solid;
    background-color:#ffa600;
    margin:  1rem;
    border-radius: 5px;

  }
  .item-btn:hover{
    background-color: white;
    color: #ffa600;
    transition: .6s;
    cursor: pointer;
  }
  .item-btn-contain{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width:320px) and (max-width:425px)
  {
    .item-btn-contain{
      flex-direction: column;
    }  
  }
  @media (min-width:768px) and (max-width: 1440px)
  {
    .contain{
      width: 80%;
    }  
  }
</style>
