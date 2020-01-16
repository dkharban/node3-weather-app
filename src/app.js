const path=require('path')
const express=require('express')
const app= express()
const hbs=require('hbs')
const directory=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialpaths=path.join(__dirname,'../templates/partials')
const geoCode=require('./utils/geoCode');
const weather=require('./utils/weather');
const port = process.env.PORT || 4000
//const weather=require('./weather')
console.log(directory)
app.use(express.static(directory))
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialpaths)
app.get('/help',(req,res)=>{
    res.render('help',{
       name:'Divij',
       route:'help'
    })
    })
    app.get('/about',(req,res)=>{
        res.render('about',{
           name:'Divij',
           route:'About'
        })
        })
        app.get('/',(req,res)=>{
            res.render('index',{
               name:'Divij',
               route:'Weather'
            })
            })
            app.get('/weather',(req,res)=>{
                if(!req.query.address)
                {
                    return res.send({
                        error:'Location field cannot be empty'
                    })
                }
                geoCode(req.query.address,(error,{latitude,longitude,location}={})=>{
                  if(error){
                     return res.send({
                        error:error
                    })  
                  }
                  
                  weather(latitude,longitude,(weatherError,{temperature,summary}={})=>{
                  if(weatherError)
                  {
                     return res.send({
                        error:weatherError
                    })  
                  }
                     res.send({
                        temperature:temperature,
                        summary:summary,
                        location:location,
                        address:req.query.address
                        
                     })
                      })
              })
                })    
        app.get('/help/*',(req,res)=>{
                res.render('wild',{
                   name:'Divij',
                   route:'Help article not found'
                })
                })
        app.get('*',(req,res)=>{
                res.render('wild',{
                   name:'Divij',
                   route:'Page not found 123'
                })
                })
                     
app.listen(port,()=>{
    console.log('server started')
})