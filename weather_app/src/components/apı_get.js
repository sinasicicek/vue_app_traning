

async function fetchtext(sehir="Diyarbakir")
{
    const api=`http://api.weatherapi.com/v1/current.json?key=eb1f2f15864a4c46ab3163659222112&q=${sehir}&aqi=no`

    let durum_gonder=null
    let sonuc=await  fetch(api);
    let datam=await sonuc.json()
        for (const key in datam) {
            if (Object.hasOwnProperty.call(datam, key)) {
                const element = datam[key];
                if(element["temp_c"] != null){
                    console.log("Anlık sıcaklık :"+element["temp_c"]);
                    durum_gonder=element["temp_c"]
                }
                
            }
        }
    
        return durum_gonder
   
}
   export default fetchtext();