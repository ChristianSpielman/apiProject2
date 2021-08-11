const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

const fetchData = async () => {
    try {
        let response = await fetch(`${url}${api_key}`)
        let data = await response.json()
        console.log('Nasa APOD data', data);
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}
const displayData = data => {
    document.getElementById('title').textContent = data.title
    document.getElementById('date'). textContent = data.date
    document.getElementById('picture').src = data.hdurl
    document.getElementById('details').textContent = data.explanation
}

fetchData()
