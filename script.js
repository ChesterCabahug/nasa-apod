

// for the nasa api
const count = 10
const apiKey = "DEMO_KEY"
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`


let resultsArray = []

// get 10 images from nasa api
const getNasaPictures = async () => {
    try {
        const response = await fetch(apiUrl)
        resultsArray = await response.json()
        console.log(resultsArray)
    } catch (error) {
        // catch error here
        console.log(error)
    }
}


// on load 
getNasaPictures()