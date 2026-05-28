// productos.js - Catálogo de APEX TIME
export const listaProductos = [
  {
    id: "-1.1-E-C",
    name: "Daytona S-Clon Gold",
    brand: "ROLEX",
    line: "SUIZOS-S",
    price: 3499000,
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779291658/nano-banana-2_hazlo_ver_c%C3%B3mo_presentaci%C3%B3n_de_lujo._fondo_negro_premium_anuncio.-0_1_2_ejumav.jpg",
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779291679/20251129_153935_f3xmcj.jpg"
    ],        
    description: "Maquinaria suiza, acero 904L, Cristal de zafiro, Resitente al agua, Logos en ato y bajo relieve, Vidrio con logo grabado.",
    warranty: "2 años"
  },
  {
    id: "-1.2-E-C",
    name: "Datejust",
    brand: "ROLEX",
    line: "SUIZOS-S",
    price: 1850000,
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779292975/nano-banana-2_hazlo_ver_c%C3%B3mo_presentaci%C3%B3n_de_lujo._fondo_negro_premium_anuncio.-0_2_lafh7h.jpg",
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779293165/20260418_131228_ntkclr.jpg",
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779293164/20260223_105423_vxxtzu.jpg"
    ],
    description: "Movimiento automático, Bisel cerámico, resistant al agua.",
    warranty: "1 año"
  },
  {
    id: "-2.0", 
    name: "", 
    brand: "SKMEI",
    line: "ORIGINALES",
    price: 108000,
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903668/IMG_20260523_202836_501_cm1hlz.jpg", 
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903670/IMG_20260523_202836_179_d7n0v0.jpg"
    ],
    description: "Caja en acero, Pulso en acero, Sumergible.",
    warranty: "3 meces" 
  },
  {
    id: "-2", // ID Único: [Proveedor].[Consecutivo]-[Letras]
    name: "SKMEI 1712", // Ejemplo: "Daytona S-Clon Gold"
    brand: "SKMEI", // Ejemplo: "ROLEX" (Debe coincidir con tus filtros)
    line: "ORIGINALES", // Opciones exactas: "SUIZOS-S", "PREMIUM 1.1", "AAA" o "ORIGINALES"
    price: 119000, // Número limpio sin puntos ni comas (Ejemplo: 3500000)
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903667/IMG_20260523_202353_457_uozb1n.jpg", // Imagen principal (la que se ve en el catálogo)
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903668/IMG_20260523_202358_024_u9ljlc.jpg" // Segunda imagen para la galería del modal
    ],
    description: "Pulso en acero, a prueba de agua, Formato 12H-24H.",
    warranty: "Garantia por fltracion de agua y funcionamiento" // Tiempo de garantía (Ejemplo: "2 años" o "1 año")
  },
  {
    id: "-2.1",
    name: "Skmei supervivencia 1155",
    brand: "SKMEI",
    line: "ORIGINALES",
    price: 119000, // Pon aquí el precio real
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1778808365/IMG_20260514_202236_793_hy3wkr.jpg",
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779329960/IMG_20260520_211814_402_vfkn1v.jpg",
      "https://res.cloudinary.com/debewjkqh/image/upload/v1778808365/IMG_20260514_202247_731_cpdukp.jpg"
    ],
    description: "Hora analogica, Digital, Cronometro, Alarma y Luz, Cuerda militar, Brujula, Pedernal de magnecio.",
    warranty: "3 meces"
  },
  {
    id: "-2.2", // ID Único: [Proveedor].[Consecutivo]-[Letras]
    name: "SKMEI 2355", // Ejemplo: "Daytona S-Clon Gold"
    brand: "SKMEI", // Ejemplo: "ROLEX" (Debe coincidir con tus filtros)
    line: "ORIGINALES", // Opciones exactas: "SUIZOS-S", "PREMIUM 1.1", "AAA" o "ORIGINALES"
    price: 129900, // Número limpio sin puntos ni comas (Ejemplo: 3500000)
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903675/IMG_20260523_204444_964_njz939.jpg", // Imagen principal (la que se ve en el catálogo)
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903675/IMG_20260523_204440_170_kqfqjb.jpg", // Segunda imagen para la galería del modal
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903677/IMG_20260523_204454_420_yqeqqq.jpg"  // Tercera imagen (puedes meter las que quieras)
    ],
    description: "Dual time, Pulso en silicona, A prueva de agua.",
    warranty: "Garantia por filtracion de agua y Maquinaria" // Tiempo de garantía (Ejemplo: "2 años" o "1 año")
  },
  {
    id: "-2.3", // ID Único: [Proveedor].[Consecutivo]-[Letras]
    name: "RELOJ DRAGON", // Ejemplo: "Daytona S-Clon Gold"
    brand: "SKMEI", // Ejemplo: "ROLEX" (Debe coincidir con tus filtros)
    line: "ORIGINALES", // Opciones exactas: "SUIZOS-S", "PREMIUM 1.1", "AAA" o "ORIGINALES"
    price: 139000, // Número limpio sin puntos ni comas (Ejemplo: 3500000)
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779904500/IMG_20260523_203202_528_ce6o21.jpg", // Imagen principal (la que se ve en el catálogo)
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779904497/IMG_20260523_203155_665_e70rkg.jpg", // Segunda imagen para la galería del modal
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779904501/IMG_20260523_203211_042_cxl234.jpg",
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779904497/IMG_20260523_203148_633_mccf7h.jpg"
    ],
    description: "Analogo, Caja de acero, Pulso en acero inoxidable, Las manecillas brillan en la ozcuridad.",
    warranty: "3 meces" // Tiempo de garantía (Ejemplo: "2 años" o "1 año")
  },
  {
    id: "-2.4", // ID Único: [Proveedor].[Consecutivo]-[Letras]
    name: "SKMEI BINARIO", // Ejemplo: "Daytona S-Clon Gold"
    brand: "SKMEI", // Ejemplo: "ROLEX" (Debe coincidir con tus filtros)
    line: "ORIGINALES", // Opciones exactas: "SUIZOS-S", "PREMIUM 1.1", "AAA" o "ORIGINALES"
    price: 99900, // Número limpio sin puntos ni comas (Ejemplo: 3500000)
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779905085/IMG_20260523_200621_800_wvp8xd.jpg", // Imagen principal (la que se ve en el catálogo)
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779905085/IMG_20260523_200617_848_utuxwj.jpg"
    ],
    description: "Hora en luz led, Pulso en acero inoxidable, Impermeable.",
    warranty: "3 meces" // Tiempo de garantía (Ejemplo: "2 años" o "1 año")
  },
  {
    id: "-2.5", // ID Único: [Proveedor].[Consecutivo]-[Letras]
    name: "SKMEI Astronauta", // Ejemplo: "Daytona S-Clon Gold"
    brand: "SKMEI", // Ejemplo: "ROLEX" (Debe coincidir con tus filtros)
    line: "ORIGINALES", // Opciones exactas: "SUIZOS-S", "PREMIUM 1.1", "AAA" o "ORIGINALES"
    price: 100000, // Número limpio sin puntos ni comas (Ejemplo: 3500000)
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779905414/IMG_20260523_200514_661_hwpwzd.jpg", // Imagen principal (la que se ve en el catálogo)
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779905415/IMG_20260523_200458_755_o804jr.jpg"
    ],
    description: "Hora digital, Pulso en silicona, Formato 12H-24H, Resistente al agua.",
    warranty: "3 meces" // Tiempo de garantía (Ejemplo: "2 años" o "1 año")
  },
  {
    id: "-2.20", // ID Único: [Proveedor].[Consecutivo]-[Letras]
    name: "SKMEI 2328", // Ejemplo: "Daytona S-Clon Gold"
    brand: "SKMEI", // Ejemplo: "ROLEX" (Debe coincidir con tus filtros)
    line: "ORIGINALES", // Opciones exactas: "SUIZOS-S", "PREMIUM 1.1", "AAA" o "ORIGINALES"
    price: 129000, // Número limpio sin puntos ni comas (Ejemplo: 3500000)
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903672/IMG_20260523_204207_684_zqoxmf.jpg", // Imagen principal (la que se ve en el catálogo)
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903673/IMG_20260523_204243_806_qsx6un.jpg"
    ],
    description: "Dual time, Pulso en silicona, A prueva de agua.",
    warranty: "Garantia por filtracion de agua y Funcionamiento" // Tiempo de garantía (Ejemplo: "2 años" o "1 año")
  },
  {
    id: "-2.21",
    name: "Sanda 6162",
    brand: "SANDA",
    line: "ORIGINALES",
    price: 139000, // Pon aquí el precio real
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1778718789/seedream-4.0_hazlo_ver_c%C3%B3mo_presentaci%C3%B3n_de_lujo._fondo_negro_premium_anuncio.-0_isbuhk.jpg",
      "https://res.cloudinary.com/debewjkqh/image/upload/v1778718789/IMG_20260513_192745_351_cqbkil.jpg",
      "https://res.cloudinary.com/debewjkqh/image/upload/v1778718789/IMG_20260513_192748_671_bdr3lt.jpg",
      "https://res.cloudinary.com/debewjkqh/image/upload/v1778718788/IMG_20260513_192753_981_uqqo0i.jpg",
      "https://res.cloudinary.com/debewjkqh/image/upload/v1778718789/IMG_20260513_192739_367_b7a1pr.jpg"
    ],
    description: "A prueba de agua, pulso de silicona en alta resistencia, dual time.",
    warranty: "Garantia por filtracion de agua y Funcionamiento"
  },
  {
    id: "-2.22", // ID Único: [Proveedor].[Consecutivo]-[Letras]
    name: "", // Ejemplo: "Daytona S-Clon Gold"
    brand: "SANDA", // Ejemplo: "ROLEX" (Debe coincidir con tus filtros)
    line: "ORIGINALES", // Opciones exactas: "SUIZOS-S", "PREMIUM 1.1", "AAA" o "ORIGINALES"
    price: 109000, // Número limpio sin puntos ni comas (Ejemplo: 3500000)
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779904413/IMG_20260523_203121_332_avxodo.jpg", // Imagen principal (la que se ve en el catálogo)
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779904414/IMG_20260523_203121_737_oele5v.jpg" // Segunda imagen para la galería del modal
    ],
    description: "Hora digital, Pulso en silicona, Resistente al agua.",
    warranty: "3 meces" // Tiempo de garantía (Ejemplo: "2 años" o "1 año")
  },
  {
    id: "-2.23",
    name: "Sanda 6008",
    brand: "SANDA",
    line: "ORIGINALES",
    price: 129000, // Pon aquí el precio real
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1778808412/IMG_20260514_202342_672_wdcuxy.jpg",
      "https://res.cloudinary.com/debewjkqh/image/upload/v1778808411/IMG_20260514_202331_328_rvxy4d.jpg",
      "https://res.cloudinary.com/debewjkqh/image/upload/v1778808410/IMG_20260514_202335_811_wpcekf.jpg"
    ],
    description: "Pulso en silicona de alta resistencia, Doble hora, Incluye estuche.",
    warranty: "3 meses"
  },
  {
    id: "-2.24", // ID Único: [Proveedor].[Consecutivo]-[Letras]
    name: "", // Ejemplo: "Daytona S-Clon Gold"
    brand: "SANDA", // Ejemplo: "ROLEX" (Debe coincidir con tus filtros)
    line: "ORIGINALES", // Opciones exactas: "SUIZOS-S", "PREMIUM 1.1", "AAA" o "ORIGINALES"
    price: 119000, // Número limpio sin puntos ni comas (Ejemplo: 3500000)
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779904417/IMG_20260523_203918_853_epaeka.jpg", // Imagen principal (la que se ve en el catálogo)
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779904418/IMG_20260523_203918_641_hm3afn.jpg" // Segunda imagen para la galería del modal
    ],
    description: "Doble Hora, Resistente al agua, Pulso en silicona.",
    warranty: "3 meces" // Tiempo de garantía (Ejemplo: "2 años" o "1 año")
  },
  {
    id: "-2.40", // ID Único: [Proveedor].[Consecutivo]-[Letras]
    name: "Sanda 3302", // Ejemplo: "Daytona S-Clon Gold"
    brand: "SANDA", // Ejemplo: "ROLEX" (Debe coincidir con tus filtros)
    line: "ORIGINALES", // Opciones exactas: "SUIZOS-S", "PREMIUM 1.1", "AAA" o "ORIGINALES"
    price: 99000, // Número limpio sin puntos ni comas (Ejemplo: 3500000)
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779904420/IMG_20260523_210336_065_xbyryf.jpg", // Imagen principal (la que se ve en el catálogo)
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779904421/IMG_20260523_210335_748_wmo31p.jpg" // Segunda imagen para la galería del modal
    ],
    description: "Dual Time, Formato 12H-24H, a Prueva de Agua, Pulso en Silicona de Alta Resistencia.",
    warranty: "Garantia por filtracion de agua y funcionamiento" // Tiempo de garantía (Ejemplo: "2 años" o "1 año")
  },
  {
    id: "-2.41", // ID Único: [Proveedor].[Consecutivo]-[Letras]
    name: "SCOTTIE 1669", // Ejemplo: "Daytona S-Clon Gold"
    brand: "SCOTTIE", // Ejemplo: "ROLEX" (Debe coincidir con tus filtros)
    line: "ORIGINALES", // Opciones exactas: "SUIZOS-S", "PREMIUM 1.1", "AAA" o "ORIGINALES"
    price: 129000, // Número limpio sin puntos ni comas (Ejemplo: 3500000)
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903501/IMG_20260523_202845_545_jc0k15.jpg" // Imagen principal (la que se ve en el catálogo)    
    ],
    description: "Sumergible, Caja de acero, Pulso en acero.",
    warranty: "3 meces" // Tiempo de garantía (Ejemplo: "2 años" o "1 año")
  },
  {
    id: "-2.42", // ID Único: [Proveedor].[Consecutivo]-[Letras]
    name: "", // Ejemplo: "Daytona S-Clon Gold"
    brand: "SCOTTIE", // Ejemplo: "ROLEX" (Debe coincidir con tus filtros)
    line: "ORIGINALES", // Opciones exactas: "SUIZOS-S", "PREMIUM 1.1", "AAA" o "ORIGINALES"
    price: 135000, // Número limpio sin puntos ni comas (Ejemplo: 3500000)
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903501/IMG_20260523_203719_752_puvcwf.jpg", // Imagen principal (la que se ve en el catálogo)
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903502/IMG_20260523_203719_666_itxcjn.jpg"
    ],
    description: "Hora analogica, Calendario funncional, Pulso en silicona.",
    warranty: "3 meces" // Tiempo de garantía (Ejemplo: "2 años" o "1 año")
  },
  {
    id: "-2.43", // ID Único: [Proveedor].[Consecutivo]-[Letras]
    name: "SCOTTIE 1146", // Ejemplo: "Daytona S-Clon Gold"
    brand: "SCOTTIE", // Ejemplo: "ROLEX" (Debe coincidir con tus filtros)
    line: "ORIGINALES", // Opciones exactas: "SUIZOS-S", "PREMIUM 1.1", "AAA" o "ORIGINALES"
    price: 139900, // Número limpio sin puntos ni comas (Ejemplo: 3500000)
    images: [
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903507/IMG_20260523_205954_097_hbdemy.jpg", // Imagen principal (la que se ve en el catálogo)
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903505/IMG_20260523_205147_280_ilm2pf.jpg", // Segunda imagen para la galería del modal
      "https://res.cloudinary.com/debewjkqh/image/upload/v1779903506/IMG_20260523_205146_615_l1t3eb.jpg"  // Tercera imagen (puedes meter las que quieras)
    ],
    description: "Dual time, Pulso en acero, A prueva de agua.",
    warranty: "Garantia por filtracion de agua y Funcionamiento" // Tiempo de garantía (Ejemplo: "2 años" o "1 año")
  },
  {
    id: "-1.3-E-C",
    name: "Big Bang Chronograph",
    brand: "HUBLOT",
    line: "SUIZOS-S",
    price: 2100000, // Pon aquí el precio real
    images: [
      "TU_URL_DE_CLOUDINARY_AQUÍ"
    ],
    description: "Maquinaria suiza cronógrafa funcional, caja de titanio y correa de caucho premium.",
    warranty: "2 años"
  }
];
