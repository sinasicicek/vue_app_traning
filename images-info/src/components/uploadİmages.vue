<script>


export default {
    data(){return{

    }},
    methods: {
        uploadClick(e){

            
            if (window.File && window.FileReader && window.FileList && window.Blob) 
            {
                
                const nesne=e.target.files
                for (const key in nesne) {
                    if (Object.hasOwnProperty.call(nesne, key)) {
                        const element = nesne[key];
                        //images ait isim bilgisini alıyor nesne[key].name
                       
                    }
                }
                
                
                
            } else {
                alert("hata")
            }
        }
    },
}
</script>
<template>
    <form>
        <input type="file" multiple="multiple" @change="uploadClick($event)" accept="image/jpeg, image/png, image/jpg">
    </form>
</template>
<style></style>