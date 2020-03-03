const landmarkData = [
    {
        name:"Hallgrímskirkja",
        image: "https://www.planetware.com/photos-large/ISL/iceland-hallgrimskyrka.jpg"
    },
    {
        name: "Skaftafell Ice Cave",
        image: "http://rover.stridetravel.com/media/wysiwyg/skaftafell-2137274_1920.jpg"
    },
    {
        name: "Vik Black Sand beaches", 
        image: "http://rover.stridetravel.com/media/wysiwyg/vik-i-myrdal-1350910_1920.jpg"
    }
]

export const landmarkInfo = () => {
    return landmarkData.slice()
};