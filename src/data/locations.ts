export type Location = {
  slug: string
  city: string
  province: string
  address: string
  phone: string
  image: string
  mapUrl: string
  description: string
}

export const locations: Location[] = [
  {
    slug: 'san-luis',
    city: 'San Luis',
    province: 'San Luis',
    address: 'Ruta 7 km 791',
    phone: '0 800 4561-2345',
    image: '/images/ubi-sanLuis.jpg',
    mapUrl: 'https://maps.app.goo.gl/ehe8Tou9vrKt231s7',
    description: 'Base de operaciones de Transporte Libertador en San Luis.',
  },
  {
    slug: 'mendoza',
    city: 'Godoy Cruz',
    province: 'Mendoza',
    address: 'Carril Rodriguez Peña 2500',
    phone: '+54 9 261 512-5625',
    image: '/images/ubi-mendoza.jpg',
    mapUrl: 'https://www.google.com/maps/place/Carril+Rodr%C3%ADguez+Pe%C3%B1a+2500,+M5501+Godoy+Cruz,+Mendoza/@-32.9282344,-68.8124315,20.03z/data=!4m6!3m5!1s0x967e0bf868729ecb:0x94275a04f301de80!8m2!3d-32.9282305!4d-68.8122658!16s%2Fg%2F11lmqf1d77?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D',
    description: 'Centro logístico de Transporte Libertador en Godoy Cruz, Mendoza.',
  },
  {
    slug: 'rosario',
    city: 'Rosario',
    province: 'Santa Fe',
    address: 'Av. Alberdi 25',
    phone: '0 800 122-0060',
    image: '/images/ubi-rosario.jpg',
    mapUrl: 'https://www.google.com/maps/place/Estacion+Rio+de+Janeiro+2/@-32.9314675,-60.6695278,17z/data=!3m1!4b1!4m6!3m5!1s0x95b655fd869a86a5:0x3153b203ade7c60d!8m2!3d-32.931472!4d-60.6669475!16s%2Fg%2F11mvslpshk?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D',
    description: 'Centro de operaciones de Transporte Libertador en Rosario, Santa Fe.',
  },
  {
    slug: 'caseros',
    city: 'Caseros',
    province: 'Buenos Aires',
    address: 'Maestra Baldini 1710',
    phone: '0 800 122-0060',
    image: '/images/ubi-caseros.jpg',
    mapUrl: 'https://www.google.com/maps/place/HTN,+Maestra+Baldini+1710,+B1678+Caseros,+Provincia+de+Buenos+Aires/@-34.5974204,-58.572916,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb831433d7577:0xb6609271afe52fb!8m2!3d-34.5974248!4d-58.5703357!16s%2Fg%2F11mxzctjy7?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D',
    description: 'Centro operativo de Transporte Libertador en Caseros, Buenos Aires.',
  },
  {
    slug: 'pilar',
    city: 'Pilar',
    province: 'Buenos Aires',
    address: 'Calle 12 N° 477',
    phone: '0 800 122-0060',
    image: '/images/ubi-pilar.jpg',
    mapUrl: 'https://www.google.com/maps/place/TRANSPORTE+LIBERTADOR+SA/@-34.4039938,-58.9637383,15.49z/data=!4m14!1m7!3m6!1s0x95bb7d7485427421:0xa4d64088b075259a!2sC.+12+477,+Fatima,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.4048876!4d-58.9620627!3m5!1s0x95bb7d9e8816e34d:0xa024db07ba8d3f7f!8m2!3d-34.4091919!4d-58.9691075!16s%2Fg%2F11f10782c0?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D',
    description: 'Centro operativo de Transporte Libertador en Pilar, Buenos Aires.',
  },
  {
    slug: 'villa-soldati',
    city: 'Villa Soldati',
    province: 'Buenos Aires',
    address: 'Julio Troxler 3190',
    phone: '0 800 122-0060',
    image: '/images/ubi-caseros.jpg',
    mapUrl: 'https://www.google.com/maps/place/Julio+Troxler+3190,+C1437+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6681516,-58.4368155,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccb8959af7c77:0xeeaf9ee04da32a7c!8m2!3d-34.668156!4d-58.4342352!16s%2Fg%2F11jymjt6fy?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D',
    description: 'Centro operativo de Transporte Libertador en Villa Soldati, Buenos Aires.',
  },
]

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug)
}
