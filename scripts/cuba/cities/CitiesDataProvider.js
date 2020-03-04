const cubaCities = [
  {
    id: 1,
    name: 'Havana',
    population: '2.13 Million',
    elevation: '194 ft above sea level',
    image: 'https://images.unsplash.com/photo-1503192851959-c6da8ac80cff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60'
  },
  {
    id: 2,
    name: 'Santiago de Cuba',
    population: '.51 million',
    elevation: '269 ft above sea level',
    image: 'https://images.unsplash.com/photo-1484323896115-e7c27cd29bce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60'
  },
  {
    id:3,
    name: 'Cienfuegos',
    population: '.41 million',
    elevation: '82 ft above sea level',
    image: 'https://images.unsplash.com/photo-1538428096024-e83b20eac270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60'
  }
]

const useCubaCities = () => cubaCities.slice()

export default useCubaCities