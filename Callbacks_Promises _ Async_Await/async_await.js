async function weatherReport(){
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
         resolve("It's 25 degree in Delhi")
         reject(new Error("No data found"))
        },2000)
     })
     
     let lucknowWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
         resolve("It's 31 degree in Lucknow")
         reject(new Error("No data found"))
        },4000)
     })
    //  delhiWeather.then(alert)
    //  lucknowWeather.then(alert)
    console.log('Fetching Delhi weather.....')
    let delhi = await delhiWeather
    console.log(`Fetched Delhi weather : ${delhi}`)

    console.log('Fetching Lucknow weather.....')
    let lucknow = await lucknowWeather
    console.log(`Fetched Lucknow weather : ${lucknow}`)
    return[delhi,lucknow]
    }

const comparison = async()=>{
    setTimeout(() => {
        console.log("It's much hotter in Lucknow than Delhi..")
    },2000);
}

const finalReport = async()=>{
    let a = await weatherReport()
    let b = await comparison()
}
finalReport()


