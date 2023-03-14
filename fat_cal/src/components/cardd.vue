<script>
export default {
    data(){return{
        bel:null,
        boy:null,
        boyun:null,
        kalca:null,
        cinsiyet:"Erkek",
        uyari:"",
        durum:"show-off",
        dikkatEdilecekler:[
            "Ölçümler Kıyafetler etki etmeyecek şekilde ölçülmeli",
            "Bel çevresini ölçerken kıyafet olmadan göbek deligine denk gelecek şekilde ölçülmeli",
            "Boyun çevresini ölçerken en ince yerden alınır"
        ]
       
        
    }},
    methods:{
        control(){
            
            if(this.cinsiyet === "Erkek"){this.Erkekhesapla()}
            else{
                this.Kadinhesapla()
            }
            
        },
        Erkekhesapla(){
            if(this.bel !=null && this.boyun !=null && this.boy !=null){
                const sabit=86.01
                const sabit2=70.04
                const sabit3=30.30

                const bel_boyun=this.bel-this.boyun
                const a=sabit*Math.log10(bel_boyun)


                const b=Math.log10(this.boy)  
                const c=sabit2 * b


                const d=a-c
                const sonuc=d+sabit3
                this.uyari="Vucut yag oranınız %"+sonuc
            }
            else{
                this.uyariMsg()
            }
           
           
        },
        Kadinhesapla(){
            if(this.bel !=null && this.boyun !=null && this.boy !=null && this.kalca !=null){
                const sabit=163.205
                const sabit2=97.684
                const sabit3=104.912

                const blm1=sabit*Math.log10(this.bel+this.kalca-this.boyun)
                const blm2=sabit2*Math.log10(this.boy)
                const blm3=blm2+sabit3

                const sonuc=blm1-blm3
                this.uyari="% "+sonuc
            }
            else{
             this.uyariMsg()
            }
          
           
        },
        uyariMsg(){
            this.uyari="Lütfen gerekli tüm alanları doldurunuz"
             setTimeout(()=>{this.uyari=""},3000)
        }
    },
    watch:{
        cinsiyet(yeni,eski){
            if(yeni === "Kadın"){this.durum ="show-on"}
            else{this.durum ="show-off"}
        }
    }
}
</script>
<template>
    <div class="card-container">
    <div >
   <!-- <strong class="uyari">Dikkat Hesaplamanın dogru çıkabilmesi için Ölçüleri Santim cinsinden girilmelidir</strong>
   -->
    <ul class="d-flex-row-center">
    <div class="li-img-div">
        <img src="../assets/danger.png" class="ul-img" alt="">
    </div>
    <div class="card-container-uyari">
        <li class="li-dik" v-for="(item,index) in dikkatEdilecekler" :key="index">{{ item }}</li>

    </div>
    </ul>
   </div>
        <div>
        <input type="radio" v-model="cinsiyet" name="cinsiyet" value="Erkek"> Erkek |
        <input type="radio" v-model="cinsiyet" name="cinsiyet" value="Kadın"> Kadın
       </div>
        <input type="number" name="" class="input-border border-sil" placeholder="Bel Ölçüsü (cm)" v-model="bel">
        <input type="number" name="" class="input-border border-sil" placeholder="Boyun Ölçüsü (cm)" v-model="boyun">
        <input type="number" name="" class="input-border border-sil" placeholder="Boy (cm)" v-model="boy">
        <input type="number" name="" 
        :class="durum"
        class="input-border border-sil" 
        placeholder="Kalça ölçünüz (cm)" 
        v-model="kalca">
        <button class="cal_btn border-sil" @click="control">Hesapla </button>
        
            <strong class="uyari-tit">{{ uyari }}</strong>
        
    </div>
</template>
<style>
.show-off{ display:none ;}
.show-on{ display:block ;}
.uyari{
    font-size: 24px;
   text-align: center;
}

.uyari-tit{
margin-top: .5rem;
}
.card-container{

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.card-container-uyari{
    border: 2px solid;
    margin-left: 25px;
    border-radius: 10px;
}
.input-border{
    height: 30px;
    border-radius: 5px;

    margin: .5rem;
    padding:0px 1rem;
    
    
}
.input-border:focus{
    outline: 0px;
}
.border-sil{border: 0px;}
.cal_btn{
    background-color: #d35e35;
    letter-spacing: 2px;
    font-weight: 600;
    width: 10rem;
    height: 2rem;
    border-radius: 5px;
    
}
.cal_btn:active{transform: scale(.8);}
.cal_btn:hover{
    cursor: grab;
    color: white;
}
ul{
    padding: 15px;
}
li{
    list-style-type: none;
    margin: 10px;
    
   
}
.li-dik{
    font-family:'Times New Roman', Times, serif;
    font-weight: 600;
}
.li-dik:hover{
    transform: scale(1.02);
    color: #d35e35;
}
.ul-img{
    width: 74px;
    /*padding: 10px;*/
  
}
.d-flex-row-center{
    display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
}


.li-img-div{
    width: 74px;
    height: 74px;
    background-color: antiquewhite;
    border-radius: 50%;
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0%{transform: scale(1.1);}
    30%{transform: scale(1.2);}
    60%{transform: scale(1.3);}
    80%{transform: scale(1.2);}
    100%{transform: scale(1.1);}
    
}
</style>