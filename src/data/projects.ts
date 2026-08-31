export interface Project {
  id: string
  slug: string
  provincia: string
  calle: string
  celular: string
  image: string
  ubicacion: string
}

export const projects: Project[] = [
  {
    id: 'ubicacion-san-luis',
    slug: 'san-luis',
    provincia: 'Capital - San Luis',
    calle: 'Ruta 7 km 791',
    celular: 'Tel: 0 800 4561-2345',
    image: '/images/ubi-sanLuis.jpg',
    ubicacion: 'https://maps.app.goo.gl/ehe8Tou9vrKt231s7',
  },
  {
    id: 'ubicacion-mendoza',
    slug: 'mendoza',
    provincia: 'Godoy Cruz - Mendoza',
    calle: 'Carril Rodriguez Peña 2500',
    celular: 'Tel: +54 9 261 512-5625',
    image: '/images/ubi-mendoza.jpg',
    ubicacion: 'https://www.google.com/maps/place/Carril+Rodr%C3%ADguez+Pe%C3%B1a+2500,+M5501+Godoy+Cruz,+Mendoza/@-32.9282344,-68.8124315,20.03z/data=!4m6!3m5!1s0x967e0bf868729ecb:0x94275a04f301de80!8m2!3d-32.9282305!4d-68.8122658!16s%2Fg%2F11lmqf1d77?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 'ubicacion-rosario',
    slug: 'rosario',
    provincia: 'Rosario - Santa Fe',
    calle: 'Av. Alberdi 25',
    celular: 'Tel: 0 800 122-0060',
    image: '/images/ubi-rosario.jpg',
    ubicacion: 'https://www.google.com/maps/place/Estacion+Rio+de+Janeiro+2/@-32.9314675,-60.6695278,17z/data=!3m1!4b1!4m6!3m5!1s0x95b655fd869a86a5:0x3153b203ade7c60d!8m2!3d-32.931472!4d-60.6669475!16s%2Fg%2F11mvslpshk?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 'ubicacion-caseros',
    slug: 'caseros',
    provincia: 'Caseros - Buenos Aires',
    calle: 'Maestra Baldini 1710',
    celular: 'Tel: 0 800 122-0060',
    image: '/images/ubi-caseros.jpg',
    ubicacion: 'https://www.google.com/maps/place/HTN,+Maestra+Baldini+1710,+B1678+Caseros,+Provincia+de+Buenos+Aires/@-34.5974204,-58.572916,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb831433d7577:0xb6609271afe52fb!8m2!3d-34.5974248!4d-58.5703357!16s%2Fg%2F11mxzctjy7?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 'ubicacion-pilar',
    slug: 'pilar',
    provincia: 'Pilar - Buenos Aires',
    calle: 'Calle 12 N° 477',
    celular: 'Tel: 0 800 122-0060',
    image: '/images/ubi-pilar.jpg',
    ubicacion: 'https://www.google.com/maps/place/TRANSPORTE+LIBERTADOR+SA/@-34.4039938,-58.9637383,15.49z/data=!4m14!1m7!3m6!1s0x95bb7d7485427421:0xa4d64088b075259a!2sC.+12+477,+Fatima,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.4048876!4d-58.9620627!3m5!1s0x95bb7d9e8816e34d:0xa024db07ba8d3f7f!8m2!3d-34.4091919!4d-58.9691075!16s%2Fg%2F11f10782c0?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 'ubicacion-soldati',
    slug: 'villa-soldati',
    provincia: 'Villa Soldati - Buenos Aires',
    calle: 'Julio Troxler 3190',
    celular: 'Tel: 0 800 122-0060',
    image: '/images/ubi-caseros.jpg',
    ubicacion: 'https://www.google.com/maps/place/Julio+Troxler+3190,+C1437+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6681516,-58.4368155,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccb8959af7c77:0xeeaf9ee04da32a7c!8m2!3d-34.668156!4d-58.4342352!16s%2Fg%2F11jymjt6fy?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D',
  },
] satisfies Project[]
