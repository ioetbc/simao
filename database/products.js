const offset = {
  x: {
    one: 0,
    two: 10,
    three: 20,
    four: 35,
    five: 50,
  },
  y: {
    one: 0,
    two: 50,
    three: 75,
    four: 100,
    five: 150,
  },
}

const dimensions = {
  square: {
    large: {
      width: 1910,
      height: 1799,
    },
  },
  portrait: {
    small: {
      width: 320,
      height: 480,
    },
    medium: {
      width: 480,
      height: 720,
    },
    large: {
      width: 640,
      height: 960,
    },
  },
  landscape: {
    small: {
      width: 480,
      height: 320,
    },
    medium: {
      width: 640,
      height: 426,
    },
    large: {
      width: 960,
      height: 640,
    },
  },
}

export const plates = [
  {
    sku: 'moon-jar',
    pre: 'Moon Jar',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.large,
    thumbnail: '/images/products/moon-jar/moon-jar-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/moon-jar/moon-jar-1.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/moon-jar/moon-jar-2.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/moon-jar/moon-jar-3.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/moon-jar/moon-jar-4.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/moon-jar/moon-jar-5.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/moon-jar/moon-jar-6.jpg',
        ...dimensions.portrait.large,
      },
      {
        src: '/images/products/moon-jar/moon-jar-7.jpg',
        ...dimensions.landscape.medium,
      },
    ],
    description:
       'Coiled with layers of black clay blend, slips gathered from Dulwich Woods, embedded with crushed granite stones.',
    dimensions: 'Approx. 40cm Dia. x 45cm H',
    designer: 'Ikebana arrangement by Wagner Kreush.'
  },
  {
    sku: 'blue-crater-bowl',
    pre: 'Blue Crater Bowl',
    offsetX: offset.x.three,
    offsetY: offset.y.five,
    ...dimensions.square.large,
    thumbnail: '/images/products/blue-crater-bowl/blue-crater-bowl-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/blue-crater-bowl/blue-crater-bowl-1.jpg',
        ...dimensions.square.large,
      },
      {
        src: '/images/products/blue-crater-bowl/blue-crater-bowl-2.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/blue-crater-bowl/blue-crater-bowl-3.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/blue-crater-bowl/blue-crater-bowl-4.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/blue-crater-bowl/blue-crater-bowl-5.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/blue-crater-bowl/blue-crater-bowl-6.jpg',
        ...dimensions.portrait.medium,
      },
    
    ],
    description:
       'Hand-built sculptural bowl in a blend of porcelain and recycled clays, with a blue and lavender crater volcanic glaze.',
    dimensions: 'Approx. 35cm Dia. x 15cm H',
    designer: 'Ikebana arrangement by Wagner Kreush.'
  },
  {
    sku: 'black-crater-bowl',
    pre: 'Black Crater Bowl',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.medium,
    thumbnail: '/images/products/black-crater-bowl/black-crater-bowl-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/black-crater-bowl/black-crater-bowl-1.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/black-crater-bowl/black-crater-bowl-2.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/black-crater-bowl/black-crater-bowl-3.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/black-crater-bowl/black-crater-bowl-4.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/black-crater-bowl/black-crater-bowl-5.jpg',
        ...dimensions.portrait.large,
      },
      {
        src: '/images/products/black-crater-bowl/black-crater-bowl-6.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/black-crater-bowl/black-crater-bowl-7.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/black-crater-bowl/black-crater-bowl-8.jpg',
        ...dimensions.portrait.medium,
      },
    
    ],
    description:
       'Hand-built sculptural bowl in black clay, with a grey and black volcanic glaze.',
    dimensions: 'Approx. 35cm Dia. x 15cm H',
    designer: 'Ikebana arrangements by Wagner Kreush for the British Flower Week at the Garden Museum - London.'
  },
  {
    sku: 'white-crater-bowls',
    pre: 'White Crater Bowls',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.large,
    thumbnail: '/images/products/white-crater-bowls/white-crater-bowl-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/white-crater-bowls/white-crater-bowl-1.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/white-crater-bowls/white-crater-bowl-2.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/white-crater-bowls/white-crater-bowl-3.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/white-crater-bowls/white-crater-bowl-4.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/white-crater-bowls/white-crater-bowl-5.jpg',
        ...dimensions.landscape.large,
      },
      
    ],
    description:
       'Hand-built sculptural bowls in a blend of porcelain and recycled clays, with a white crater volcanic glaze and granite dust, fired 4 times.',
    dimensions: 'Large Bowl Approx. 40cm Dia. x 25cm H',
    secondDimensions: 'Small Bowls Approx. 15cm Dia. x 8cm H',
    
  },
  {
    sku: 'white-crater-&-granite-vessel',
    pre: 'White Crater & Granite Vessel',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.large,
    thumbnail: '/images/products/white-crater-&-granite-vessel/white-crater-&-granite-vessel-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/white-crater-&-granite-vessel/white-crater-&-granite-vessel-1.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/white-crater-&-granite-vessel/white-crater-&-granite-vessel-2.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/white-crater-&-granite-vessel/white-crater-&-granite-vessel-3.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/white-crater-&-granite-vessel/white-crater-&-granite-vessel-4.jpg',
        ...dimensions.landscape.medium,
      },
      
    ],
    description:
       'Coiled sculptural vessel in a blend of porcelain and recycled clays, with a white crater volcanic glaze and crushed granite stones, fired 5 times.',
    dimensions: 'Approx. 30cm Dia. x 55cm H',
  },
  {
    sku: 'terra-bowl',
    pre: 'Terra Bowl',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.large,
    thumbnail: '/images/products/terra-bowl/terra-bowl-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/terra-bowl/terra-bowl-1.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/terra-bowl/terra-bowl-2.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/terra-bowl/terra-bowl-3.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/terra-bowl/terra-bowl-4.jpg',
        ...dimensions.landscape.medium,
      },
      
    ],
    description:
       'Hand-built sculptural bowl with scale detail made in a blend of clays and slips gathered from Dulwich Woods, embedded with crushed granite stones, unglazed, fired 5 times.',
    dimensions: 'Approx. 30cm Dia. x 18cm H',
  },
  {
    sku: 'red-earth-bowl',
    pre: 'Red Earth Bowl',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.large,
    thumbnail: '/images/products/red-earth-bowl/red-earth-bowl-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/red-earth-bowl/red-earth-bowl-1.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/red-earth-bowl/red-earth-bowl-2.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/red-earth-bowl/red-earth-bowl-3.jpg',
        ...dimensions.landscape.large,
      },
      
    ],
    description:
       'Hand-built sculptural bowl with scale detail made in a deep red brick clay, embedded with crushed white granite stones, unglazed.',
    dimensions: 'Approx. 30cm Dia. x 18cm H',
  },
  {
    sku: 'red-earth-urn',
    pre: 'Red Earth Urn',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.large,
    thumbnail: '/images/products/red-earth-urn/red-earth-urn-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/red-earth-urn/red-earth-urn-1.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/red-earth-urn/red-earth-urn-2.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/red-earth-urn/red-earth-urn-3.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/red-earth-urn/red-earth-urn-4.jpg',
        ...dimensions.landscape.large,
      },
      
    ],
    description:
       'Hand-built sculptural urn with scale detail made in a deep red brick clay, embedded with crushed white granite stones, unglazed.',
    dimensions: 'Approx. 20cm Dia. x 15cm H',
  },
  {
    sku: 'coral-reef-bowl',
    pre: 'Coral Reef Bowl',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.large,
    thumbnail: '/images/products/coral-reef-bowl/coral-reef-bowl-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/coral-reef-bowl/coral-reef-bowl-1.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/coral-reef-bowl/coral-reef-bowl-2.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/coral-reef-bowl/coral-reef-bowl-3.jpg',
        ...dimensions.landscape.medium,
      },
      {
        src: '/images/products/coral-reef-bowl/coral-reef-bowl-4.jpg',
        ...dimensions.landscape.large,
      },
      
    ],
    description:
       'Hand-built sculptural bowl in a blend of porcelain and recycled clays, with white, blue, lavender and yellow crater volcanic glazes embedded with various crushed granite stones, fired 5 times.',
    dimensions: 'Approx. 40cm Dia. x 25cm H',
  },
  {
    sku: 'sculptural-plates',
    pre: 'Sculptural Plates',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/sculptural-plates/sculptural-plates-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/sculptural-plates/sculptural-plates-1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/sculptural-plates/sculptural-plates-2.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/sculptural-plates/sculptural-plates-3.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/sculptural-plates/sculptural-plates-4.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sculptural-plates/sculptural-plates-5.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sculptural-plates/sculptural-plates-6.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sculptural-plates/sculptural-plates-7.jpg',
        ...dimensions.portrait.large,
      },
    ],
    description:
       'Hand-built round plates sculpted in a blend of clays with multiple layers of sand and crushed granite stones sediments and oak and dried flower ash glaze.',
    dimensions: 'Approx. 20cm Dia. x 3cm H',
  },
  {
    sku: 'marbled-plate',
    pre: 'Marbled Plate',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.large,
    thumbnail: '/images/products/marbled-plate/marbled-plate-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/marbled-plate/marbled-plate-1.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/marbled-plate/marbled-plate-2.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/marbled-plate/marbled-plate-3.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
       'Hand-built round plate in a blend of porcelain and black clay, sealed with a transparent glaze to one side and left unglazed to the other side.',
    dimensions:'Approx. 20cm Dia. x 1cm H',
  },
  {
    sku: 'terra-&-stone-bowl',
    pre: 'Terra & Stone Bowl',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/terra-&-stone-bowl/terra-&-stone-bowl-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/terra-&-stone-bowl/terra-&-stone-bowl-1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/terra-&-stone-bowl/terra-&-stone-bowl-2.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/terra-&-stone-bowl/terra-&-stone-bowl-3.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/terra-&-stone-bowl/terra-&-stone-bowl-4.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/terra-&-stone-bowl/terra-&-stone-bowl-5.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/terra-&-stone-bowl/terra-&-stone-bowl-6.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/terra-&-stone-bowl/terra-&-stone-bowl-7.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/terra-&-stone-bowl/terra-&-stone-bowl-8.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/terra-&-stone-bowl/terra-&-stone-bowl-9.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
       'Hand-built bowl in a blend of clays, embedded with crushed granite stones, unglazed.',
    dimensions: 'Approx. 30cm Dia. x 18cm H',
    designer: 'Ikebana arrangements by Wagner Kreush.'
  },
  {
    sku: 'soil-&-sand-plates',
    pre: 'Soil & Sand Plates',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/soil-&-sand-plates/soil-&-sand-plates-1.jpg',
    imageCarousel:[
      {
        src: '/images/products/soil-&-sand-plates/soil-&-sand-plates-1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/soil-&-sand-plates/soil-&-sand-plates-2.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/soil-&-sand-plates/soil-&-sand-plates-3.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
       'Coiled sculptural vessel in a blend of porcelain and recycled clays, with a white crater volcanic glaze and crushed granite stones, fired 5 times.',
    dimensions: 'Approx. 30cm Dia. x 55cm H',
  },
  {
    sku: 'iron-bowl',
    pre: 'Iron Bowl',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.large,
    thumbnail: '/images/products/iron-bowl/iron-bowl-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/iron-bowl/iron-bowl-1.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/iron-bowl/iron-bowl-2.jpg',
        ...dimensions.landscape.large,
      },
    ],
    description:
       'Wheel thrown stoneware bowl with a black iron and manganese gold glaze, fired 5 times.',
    dimensions: 'Approx. 20cm Dia. x 3cm H',
  },
  {
    sku: 'stone-candle-holders',
    pre: 'Stone Candle Holders',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/stone-candle-holders/stone-candle-holders-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/stone-candle-holders/stone-candle-holders-1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/stone-candle-holders/stone-candle-holders-2.jpg',
        ...dimensions.landscape.large,
      },
    ],
    description:
       'Hand-built sculptural organic forms in a blend of clays embedded crushed granite, fired in various wood ash glazes.',
    dimensions: 'Approx. 8cm Dia. x 12cm H',
  },
  {
    sku: 'wood-ash-plates',
    pre: 'Wood Ash Plates',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/wood-ash-plates/wood-ash-plates-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/wood-ash-plates/wood-ash-plates-1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/wood-ash-plates/wood-ash-plates-2.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/wood-ash-plates/wood-ash-plates-3.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/wood-ash-plates/wood-ash-plates-4.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
       'Hand-built round plates in a blend of black porcelain and stoneware clays, slips gathered from Dulwich Woods finished with stone carvings with oak and walnut ashes glazes.',
    dimensions: 'Approx. 20cm Dia. x 2cm H',
  },
  {
    sku: 'blue-bowl',
    pre: 'Blue Bowl',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/blue-bowl/blue-bowl-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/blue-bowl/blue-bowl-1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/blue-bowl/blue-bowl-2.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/blue-bowl/blue-bowl-3.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
       'Wheel thrown stoneware bowl with a white and blue crater glaze, fired 4 times.',
    dimensions: 'Approx. 15cm Dia. x 3cm H',
  },
  {
    sku: 'soil-&-ash-plates-series',
    pre: 'Soil & Ash Plates Series',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.large,
    thumbnail: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-1.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-2.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-3.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-4.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-5.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-6.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-7.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-8.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-9.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-10.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-11.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-12.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-14.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-15.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-16.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-17.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/soil-&-ash-plates-series/soil-&-ash-plates-series-18.jpg',
        ...dimensions.landscape.large,
      },
    ],
    description:
       'Hand-built round plates each made from a blend of clays embedded with sand, stones and crushed fired clay, sealed with transparent, wood and grasses ash glazes.',
       dimensions: 'Approx. 20cm Dia. x 1cm H',
  },
  {
    sku: 'tea-cup-series',
    pre: 'Tea Cup Series',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/tea-cup-series/tea-cup-series-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/tea-cup-series/tea-cup-series-1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-2.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-3.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-4.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-5.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-6.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-7.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-8.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-9.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-10.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-11.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-12.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-13.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-14.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-15.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/tea-cup-series/tea-cup-series-16.jpg',
        ...dimensions.landscape.large,
      },
    ],
    description:
       ' Hand-built tea cups in a blend of clays embedded crushed granite, unglazed and various other glazes such as dried flowers and wood ash.',
    dimensions: 'Approx. 10cm Dia. x 10cm H',
  },
  {
    sku: 'sake-cup-series',
    pre: 'Sake Cup Series',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.large,
    thumbnail: '/images/products/sake-cup-series/sake-cup-series-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/sake-cup-series/sake-cup-series-1.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-2.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-3.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-4.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-5.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-6.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-7.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-8.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-9.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-10.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-11.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-12.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-13.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-14.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-15.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-16.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-17.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/sake-cup-series/sake-cup-series-18.jpg',
        ...dimensions.landscape.large,
      },
    ],
    description:
       'Hand-built sake cups in a blend of clays embedded crushed granite, unglazed and various glazes including wood and grasses ash glazes.',
    dimensions: 'Approx. 8cm Dia. x 10cm H',
  },
  {
    sku: 'chawan-series',
    pre: 'Chawan Series',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.large,
    thumbnail: '/images/products/chawan-series/chawan-series-1.jpg',
    imageCarousel: [
      {
        src: '/images/products/chawan-series/chawan-series-1.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/chawan-series/chawan-series-2.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/chawan-series/chawan-series-3.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/chawan-series/chawan-series-4.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/chawan-series/chawan-series-5.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/chawan-series/chawan-series-6.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/chawan-series/chawan-series-7.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/chawan-series/chawan-series-8.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/chawan-series/chawan-series-9.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/chawan-series/chawan-series-10.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/chawan-series/chawan-series-11.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/chawan-series/chawan-series-12.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/chawan-series/chawan-series-13.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/chawan-series/chawan-series-14.jpg',
        ...dimensions.landscape.large,
      },
      {
        src: '/images/products/chawan-series/chawan-series-15.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/chawan-series/chawan-series-16.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
       'Hand-built tea bowls in a blend of clays embedded crushed granite and other stones, unglazed/ various other glazes such as dried flowers and wood ash.',
    dimensions: 'Approx. 10cm Dia. x 10cm H',
  },
]