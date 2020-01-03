const request= require('request');


const geoCode= (address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGl2aWowMDciLCJhIjoiY2s0ZG8zcnljMDJlNjNlbjY0eG14bHBvaSJ9.27yR07gpZCTgXo83gA3inA'
    request({url, json:true},(error,{body})=>{
        if(error)
    {
        callback('unable to connect to network',undefined)
    }
    else if(body.features.length===0){
        callback('unable to get the location',undefined)
      
    }
    else{
        const longitude=body.features[0].center[0]
        const latitude=body.features[0].center[1]
        const location=body.features[0].place_name
        callback(undefined,{
            longitude,
            latitude,
            location
        })

}
    })
}


module.exports=geoCode