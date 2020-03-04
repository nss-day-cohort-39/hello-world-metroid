const cityData = [
    {
        name:"Reykjavik",
        image: "https://www.fodors.com/assets/destinations/712533/downtown-cityscape-reykjavik-iceland_980x650.jpg"
    },
    {
        name: "Hvammstangi",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/04/b2/8d/08/hvammstangi.jpg"
    },
    {
        name: "Akureyri", 
        image: "https://www.icelandairhotels.com/static/news/lg/midbaer-1__1486546974_185.56.12.2.jpg"
    }
]

export const cityInfo = () => {
    return cityData.slice()
};