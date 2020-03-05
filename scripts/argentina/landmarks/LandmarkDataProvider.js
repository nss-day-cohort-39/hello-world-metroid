const landmarkCollection = [
    {
        name: "Iguazu Falls",
        info: "Iguazú Falls or Iguaçu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná. Together, they make up the largest waterfall in the world. The falls divide the river into the upper and lower Iguazu.",
        img: "https://cdn2.wanderlust.co.uk/media/1098/iguazu.jpg?anchor=center&mode=crop&width=1440&height=0&rnd=132150861810000000"
    },
    {
        name: "Caviahue Araucaria Stand",
        info: "They survive in a very small handful of sites in the world, but alone, against wind and cold, the araucarias have adapted to this land and have won, of course, a place. There, where only the toughest shrubs can withstand harsh winters, these species continue to grow as reaching for the sky with their sharp branches.",
        img: "https://lh3.googleusercontent.com/proxy/lK-uuAdtQDLdrVpqLj0aGKTtmLe8sLTpCgvoL-V1inRJd6LIZdSek341c8QwEJhqo8Xh0McqJTDlQnT16jeoAfd9ZkeFRxukpXj9tMZwNfgSyV1Ie8a9RdFVQ-RMeWh5_qWjFLz2dWIWFwRo4N3stmHX1Q"
       
    },
    {
        name: "Aconcagua",
        info: "Aconcagua is a mountain in the Principal Cordillera of the Andes mountain range, in Mendoza Province, Argentina. It is the highest mountain outside of Asia, being the highest in both the Southern and Western Hemispheres with a summit elevation of 6,960.8 metres.",
        img: "https://media.nationalgeographic.org/assets/photos/634/509/2fbc3744-ebf2-42cc-8486-84492f0b829d.jpg"
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice();
}