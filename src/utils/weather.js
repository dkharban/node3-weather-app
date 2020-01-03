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
           temperature:body.currently.temperature,
           rain:body.currently.precipProbability
        })
       
    }
})
}
module.exports=weather;
