const cubaCities = [
  {
    id: 1,
    name: 'Havana',
    population: '2.13 Million',
    elevation: '194 ft above sea level',
    description: 'Havana is the capital city, largest city, province, major port, and leading commercial center of Cuba. The city has a population of 2.1 million inhabitants, and it spans a total of 781.58 km2 (301.77 sq mi) – making it the largest city by area, the most populous city, and the fourth largest metropolitan area in the Caribbean region.',
    image: 'https://images.unsplash.com/photo-1503192851959-c6da8ac80cff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60'
  },
  {
    id: 2,
    name: 'Santiago de Cuba',
    population: '.51 million',
    elevation: '269 ft above sea level',
    description: 'Santiago de Cuba is the second-largest city in Cuba and the capital city of Santiago de Cuba Province. It lies in the southeastern area of the island, some 870 km (540 mi) southeast of the Cuban capital of Havana.',
    image: 'https://images.unsplash.com/photo-1484323896115-e7c27cd29bce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60'
  },
  {
    id:3,
    name: 'Cienfuegos',
    population: '.41 million',
    elevation: '82 ft above sea level',
    description: 'Cienfuegos, capital of Cienfuegos Province, is a city on the southern coast of Cuba. It is located about 250 km (160 mi) from Havana and has a population of 150,000. Since the late 1960s, Cienfuegos has become one of Cuba\'s main industrial centers, especially in the energy and sugar sectors. The city is dubbed La Perla del Sur (Pearl of the South). Although Cienfuegos literally translates to "one hundred fires" (cien, "one hundred"; fuegos, "fires"), the city takes its name from the surname of José Cienfuegos, Captain General of Cuba (1816–19).',
    image: 'https://images.unsplash.com/photo-1538428096024-e83b20eac270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60'
  }
]

const useCubaCities = () => cubaCities.slice()

export default useCubaCities