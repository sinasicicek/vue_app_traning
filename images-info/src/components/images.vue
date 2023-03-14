<script>
import uplo from "./uploadİmages.vue";
import prms from 'node:fs'
export default {
    data(){return{
        click_src:null,
        img_state:"showOff",
        boy_en:"",
        info_data:false,
        img_dizi:[
       
        "../src/assets/mask.jpeg",
        "../src/assets/mask2.jpeg",
        ]
    }},
    
    created(){
        
        this.click_src=""
    },
    components:{uplo},
    methods:{
        info_click(nesne){
            
            this.img_state="showOn"
            this.click_src=this.img_dizi[nesne.target.id]
            


                        //tıklanan resisim width  ve height degerleri çekiliyor
            const nesne_id=document.getElementById("click_img_id")
            const he=nesne_id.height

            //width ve height degeleri atanıyor
            //this.boy_en=`height:${he}px`
            console.log(he);
        },
        kapat(){
            this.img_state="showOff"
            const ekle=document.getElementById("info-data")
            ekle.innerHTML=""
            this.boy_en=null
        },
        rea(){
          
        
        }
    
        
            
            
    }
}

</script>
<template>
    <div class="contain d-flex d-flex-center d-flex-col">
        
        <div class="contain-upload d-flex " id="navbar">
            <nav>
        <ul>
            <li>Vector</li>
            <li>Illustrations</li>
            <li>Images</li>
            <li>Icons</li>
        </ul>
        </nav>
            <div class="contain-upload-item">
                <input type="text" class="contain-upload-input" placeholder="Search">
             <button class="contain-upload-btn" @click="rea">Upload</button>
              
                </div>
        </div>
        <hr class="contain-upload-br"/>
        <div class="contain-img" >
       
            <img :src="img_dizi[index]" alt="" @click="info_click($event)" v-for="(item,index) in img_dizi.length" :id="index">
           
        </div>

    </div>
    <div class=" showOn-click" :class="img_state">
        <div class="show-on-click-div"><button class="img-x spinner" @click="kapat">X</button></div>
        <div class="show-img-contain">
            <img class="show-img" :class="img_state"  :src="click_src" alt="" id="click_img_id">
            <div class="show-img-info" :style="boy_en">
                <div id="info-data"></div>
            </div>
        </div>
        </div>
</template>
<style>
@import '../components/responsive/navbar.css';
@import '../components/css/navbar.css';
@import '../components/css/contain.css';
.spinner {
  background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
  width: 100px;
  height: 100px;
  animation: spinning82341 1.7s linear infinite;
  text-align: center;
  border-radius: 50px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
}

.spinner1 {
  background-color: rgb(36, 36, 36);
  width: 100px;
  height: 100px;
  border-radius: 50px;
  filter: blur(10px);
}

@keyframes spinning82341 {
  to {
    transform: rotate(360deg);
  }
}

#info-data{
    width: 100%;
    height: 100%;

}
.inf-ul{
    display: flex;
    flex-direction: column;
}
.img-x{
    width: 40px;
    height: 40px;
    position: relative;
  
    
    margin:1rem 0rem;
    border-radius: 50%;
}
.img-x:hover{
    cursor: pointer;
    border-color: rebeccapurple;
}
.showOff{
    display: none;
    visibility: hidden;
}
.showOn{
    display: block;
}

.showOn-click{
   /* width: 100%;
    max-width: 1200px;*/
    height: 100%;
    z-index: 12;
    position: fixed;
   top: 1%;
    left: 1%;
    right: 1%;
    
}
.show-on-click-div{
    display: flex;
    justify-content: flex-end;
   
}
.show-img-contain{
    display: flex;
    max-width: 100%;
    max-height: 600px;
    justify-content: center;
    align-items: center;
}
.show-img{
    width: 20%;
    height:400px;
    
}

.show-img-info{
   width: 30%;
    height: 400px;
    background-color: #334043;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: white;
    border: 2px solid azure;
    
}
.show-img-info > p {
    max-width: 100%;
   
    font-size: 18px;
}
</style>