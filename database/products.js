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
    id: '118',
    sku: 'crater-buff-chawan',
    pre: 'crater buff chawan',
    date: '2022',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/crater-buff-chawan/1.jpg',
    imageCarousel: [
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: '118',
    sku: 'porcelain-incision-bowls',
    pre: 'porcelain incision bowls',
    date: '2022',
    offsetX: offset.x.two,
    offsetY: -offset.y.five,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/porcelain-incision-bowls/1.jpg',
    imageCarousel: [
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: '118',
    sku: 'mixed-clay-bowls',
    pre: 'mixed clay bowls',
    date: '2022',
    offsetX: offset.x.one,
    offsetY: offset.y.five,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/mixed-clay-bowls/1.jpg',
    imageCarousel: [
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },

  {
    id: '118',
    sku: 'granite-bowl',
    pre: 'Mixed glazes and oxides',
    date: '2022',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.medium,
    thumbnail: '/images/products/granite-nude-bowls/1.jpg',
    imageCarousel: [
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: '118',
    sku: 'crater-reactive-chawan',
    pre: 'crater reactive chawan',
    date: '2022',
    offsetX: offset.x.two,
    offsetY: offset.y.two,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/crater-reactive-chawan/1.jpg',
    imageCarousel: [
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: '118',
    sku: 'granite-nude-bowl',
    pre: 'Mixed glazes and oxides',
    date: '2022',
    offsetX: offset.x.one,
    offsetY: offset.y.four,
    ...dimensions.landscape.medium,
    thumbnail: '/images/products/granite-nude-bowls/12.jpg',
    imageCarousel: [
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: '118',
    sku: 'sand-plates',
    pre: 'sand plates',
    date: '2022',
    offsetX: offset.x.two,
    offsetY: offset.y.two,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/sand-plates/1.jpg',
    imageCarousel: [
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: '118',
    sku: 'black-moon-bowl',
    pre: 'black moon bowl',
    date: '2022',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.landscape.medium,
    thumbnail: '/images/products/black-moon-bowl/1.jpg',
    imageCarousel: [
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: '118',
    sku: 'crank-buff-chawan',
    pre: 'crank buff chawan',
    date: '2022',
    offsetX: offset.x.two,
    offsetY: offset.y.two,
    ...dimensions.landscape.medium,
    thumbnail: '/images/products/crank-buff-chawan/1.jpg',
    imageCarousel: [
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },

  {
    id: '118',
    sku: 'metal-terracotta-chawan',
    pre: 'metal terracotta chawan',
    date: '2022',
    offsetX: offset.x.two,
    offsetY: offset.y.two,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/metal-terracotta-chawan/1.jpg',
    imageCarousel: [
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: '118',
    sku: 'sake-cups',
    pre: 'sake cups',
    date: '2022',
    offsetX: offset.x.three,
    offsetY: offset.y.five,
    ...dimensions.landscape.medium,
    thumbnail: '/images/products/sake-cups/1.jpg',
    imageCarousel: [
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: '118',
    sku: 'surface-of-the-moon',
    pre: 'surface of the moon',
    date: '2022',
    offsetX: offset.x.one,
    offsetY: offset.y.three,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/surface-of-the-moon/1.jpg',
    imageCarousel: [
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: '118',
    sku: 'terracotta-crater-chawan',
    pre: 'terracotta crater chawan',
    date: '2022',
    offsetX: offset.x.two,
    offsetY: offset.y.five,
    ...dimensions.portrait.medium,
    thumbnail: '/images/products/terracotta-crater-chawan/1.jpg',
    imageCarousel: [
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
      {
        src: '/images/products/crater-buff-chawan/1.jpg',
        ...dimensions.portrait.medium,
      },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
]
