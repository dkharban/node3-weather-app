const request= require('request');
const weather= (latitude,longitude,callback)=>{
    const url= 'https://api.darksky.net/forecast/7390c46d6156a1271d9f955ec76360cb/'+ latitude+','+ longitude +'?units=si';

    request({url, json:true},(error,{body})=>{
        if(error)
    {
        callback('unable to connect to network',undefined)
    }
    else if(body.error){
        callback("Response error",undefined)
    }
    else{
        
        callback(undefined,{
            summary: body.daily.data[0].summary,
            temperature: 'It is currently '+body.currently.temperature +'celsius with chances of rain: '+body.currently.precipProbability*100 +'%'
        }
           
        )
       
    }
})
}
module.exports=weather;
