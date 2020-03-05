const leaderkData = [
    {
        name:"Guðni Th. Jóhannesson",
        position:"President",
        image: "https://pbs.twimg.com/profile_images/943443404503035905/IR4g2F3r_400x400.jpg"
    },
    {
        name: "Katrín Jakobsdóttir",
        position: "Prime Minister",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Katr%C3%ADn_Jakobsd%C3%B3ttir_at_G%C3%B6teborg_Book_Fair_2012_03_%28cropped%29.jpg/800px-Katr%C3%ADn_Jakobsd%C3%B3ttir_at_G%C3%B6teborg_Book_Fair_2012_03_%28cropped%29.jpg"
    }
]

export const presidentInfo = () => {
    return leaderkData.slice()
};