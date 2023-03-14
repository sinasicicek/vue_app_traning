<script>
export default {
  data() {
    return {
      hava_durumu: "24",
      icon_api: null,
      city: "Diyarbakir",
      sıcaklık_durumu:"",
      img_state:null
    };
  },
  created(){
    this.api_data_get()
  },
  methods: {
    async api_data_get(sehir = this.city) {
        const api = `http://api.weatherapi.com/v1/current.json?key=eb1f2f15864a4c46ab3163659222112&q=${sehir}&aqi=no`;
        let sonuc = await fetch(api);
        let datam = await sonuc.json();
        for (const key in datam) {
          if (Object.hasOwnProperty.call(datam, key)) {
            const element = datam[key];
            if (element["temp_c"] != null) {
              console.log("Anlık sıcaklık :" + element["temp_c"]);
              let hava_durumu_int=parseInt(element["temp_c"])
              this.hava_durumu = element["temp_c"];
               this.icon_api="http:"+element["condition"]["icon"]
              //sıcaklık durumu degerlendirme yapılıyor
              this.hava_durumu_write(hava_durumu_int)
              
            }
          }
        }
      
    },
    hava_durumu_write(durum_number){
        this.hava_durumu_write_back_image(durum_number)

        if(durum_number<0){
            this.sıcaklık_durumu=this.city+" Kar bekleniyor ..."
            console.log("karlı");
        }
        if(1< durum_number){
            this.sıcaklık_durumu=this.city+" hava soguk"
        }
        if(18<durum_number){
            this.sıcaklık_durumu=this.city+" klimaları aç"
        }
    },
    hava_durumu_write_back_image(numb){
        if(numb < 0){ this.img_state='background-image: url("../src/assets/kar.jpg");'}
        if(0< numb <18){ this.img_state='background-image: url("../src/assets/ayaz.jpg");'}
        if(18 < numb){ this.img_state='background-image: url("../src/assets/sıcak.jpg");'}
    }
  },
};
</script>
<template>
  <div class="contain">
    <div class="back_image" v-bind:style="img_state ">
      <div class="back_image_txt d-flex-center-col">
        <div class="back-image-cover d-flex-center-col">
          <input class="back-image-cover-input" type="text" v-model="city" />
          <button class="back-image-cover-btn" @click="api_data_get()">
            Hava Durumu
          </button>
          <h1 class="hav">{{ hava_durumu }} <span class="hav_span">C</span></h1>
          <div class="durum_icon"><h3>{{sıcaklık_durumu}}</h3><img :src="icon_api" class="sicaklik_durum"/>
</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
* {
  margin: 0px;
  padding: 0px;
}
.sicaklik_durum{
    width: 50px;
    height: 50px;
}
:root {
  --input-color: #FC814A;
}
.hav {
  font-size: 10rem;
  position: relative;
}
.hav_span {
  font-size: 3rem;
  position: absolute;
}
.contain {
  position: relative;
  width: 100%;
  height: 100vh;
}
.durum_icon{
    display: flex;
    align-items: center;
    justify-content: center;
}
.back_image {
  width: 100%;
  height: 100vh;
  display: block;
  z-index: -12;
  /*background-image: url("../assets/soguk.jpg");*/
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.back_image_txt {
  width: 100%;
  height: 100%;
}
.d-flex-center-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.back-image-cover {
  width: 30%;
  height: 60%;
  background-color: rgba(240, 248, 255, 0.726);
  border-radius: 10px;
}
.back-image-cover-btn {
  width: 150px;
  border-radius: 5px;
  border: 3px solid transparent;
  padding: 0.8rem;
  font-weight: 600;
  background-color: #FC814A;
  
}
.back-image-cover-btn:active {
  transform: scale(0.9);
}
.back-image-cover-input {
  width: 20rem;
  margin: 10px;
  border-left: 20px solid var(--input-color);
  border-top: 3px solid var(--input-color);
  border-bottom: 3px solid var(--input-color);
  padding: 3px 0px;
  padding-left: 10px;
  font-weight: 600;
  color: #564256;
}

@media (min-width:320px) and (max-width:425px) 
{
    .back-image-cover-input {
        max-width: max-content;
        border-left: 0px;
    }
    .back-image-cover{
        width: 90%;
    }
    
}
@media (min-width:425px) and (max-width:768px) 
{
    .back-image-cover-input {
        max-width: max-content;
       
    }
    .back-image-cover{
        width: 90%;
    }
    
}
@media (min-width:768px) and (max-width:1024px) 
{
    
    .back-image-cover{
        width: 90%;
    }
    
}
@media (min-width:1024px)
{
    
    .back-image-cover{
        width: 90%;
    }
    
}
</style>
