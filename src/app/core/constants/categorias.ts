import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Make up',
    id: 1,
    fotoUrl: "",
    productos: [
      {
        nombre: "Dior Diorshow Iconic Overcurl",
        id: 1,
        precio: 36800,
        descripcion: "máscara de pestañas icónicade la Maison, ahora recargable y con una fórmula enriquecida con aguafloral de aciano. Contribuye a nutrir yfortalecer las pestañas, desplegándolas para un volumen y una curvaespectaculares durante 24 horas.Tono090 Black. ",
        imagen: "https://cdn.vesira.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/d/i/dior-diorshow-iconic-overcurl-waterproof-mascara-090-over-black.jpg",
      
      },
      {
        nombre: "Maybelline Lifter Gloss",
        id:2, 
        precio: 9557,
        descripcion: "Lip Gloss with hyaluronic Acid - Dreamskinhaven - 80 ml",
        imagen: "https://dreamskinhaven.co.ke/wp-content/uploads/2022/05/Maybelline-Lifter-Gloss-Lipgloss-.jpg"

      },
      {
        nombre: "Clinique Beyond perfecting foundation + concealer",
        precio: 38390,
        id:3,
        descripcion: "Una base de maquillaje y corrector en una formanatural, dejando un look más que perfecto que dura por 24 horas. Un poco sirve para mucho! 30 ml - Nuestra filosofía de pureza Sin parabenos. Sinftalatos. Sin fragancia. Piel simplemente feliz.",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_762457-MLU69888771196_062023-O.webp"

      },
      {
        nombre: "Dior forever skin correct",
        id:4,
        precio: 33000,
        descripcion: "Dior Forever Skin Correct es el corrector antiojeras clean* de altaperfección Dior que ofrece 24 horas de duración e hidratación. La cobertura del corrector Dior Forever Skin Correct es modulable:ligera, al aplicarse de forma específica, o alta, cuando se utiliza entodo el rostro.Textura líquida. Color 2,5. ",
        imagen: "https://www.dior.com/couture/var/dior/storage/images/folder-media/folder-videos/folder-makeup/diorparfums_forever_concealer_inter_10s_169/38658924-1-int-EN/diorparfums_forever_concealer_inter_10s_169_1440_1200.jpg"
      },
      {
        nombre: "Chanel les beiges poudre SFP15 ",
        id:5,
        precio: 55500,
        descripcion: "Tamaño: 12 G, color N40",
        imagen: "https://s.cdnsbn.com/images/products/l/24489580202-1.jpg"
      },
      {
        nombre: "Dior backstage eye palette",
        id:6,
        precio: 47290,
        descripcion: "Inspirada en la energía detrás del escenario en los desfiles de Dior, esta paleta de maquillaje combina 9 sombras de ojos ultrapigmentadas y fáciles de difuminar con acabados mate, nacarados, metálicos, holográficos y brillantes. Cada armonía es la interpretación de un tema cromático, disponible en tonos complementarios para lograr multitud de looks.",
        imagen: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwc0cd47cc/Y0012000/Y0012000_C001200011_E01_ZHC.jpg?sw=1800&sh=1200"
      },
    ]
  },
  {
    nombre: 'Skincare',
    id: 2,
    fotoUrl: "",
    productos: [
      {
        nombre: 'The Ordinary Serum',
        id:7,
        precio: 28000,
        descripcion: "Acido Salicilico 2% Solution. Exfoliante hipoalergenico, sin proteccion solar, y libre de parabenos - 30 ml.",
        imagen:
          'https://s.yimg.com/ny/api/res/1.2/3e3GLHrQMZqY6UicYZgvcw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM0NQ--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/8b17f7b0-9d7d-11ed-b5f9-59ffbb5b842a',
      },
      {
        nombre: 'MAC prep + prime fix + finishing mist',
        id:8,
        precio: 53940,
        descripcion: "Formula ligera y rica en minerales que refresca la piel y termina el maquillaje mientras ayuda a crear una superficie uniforme para una aplicacion de maquillaje suave. El producto es de 3.4 onzas.",
        imagen:
          'https://www.adorebeauty.com.au/pim_media/000/399/886/M.A.C_COSMETICS_Prep__Prime_Fix_Mattifying_Mist.png',
      },
      {
        nombre: 'Dior prestige La crème',
        id:9,
        precio: 80000,
        descripcion: "La primera crema de alta reparación que revierte visiblemente los signos de la edad.La textura aterciopelada de esta crema, compuesta por un 94 % de ingredientes de origen natural, revela una firma olfativa única al servicio de la piel y los sentidos: al aplicarla, Dior Prestige LaCrèmeproporciona un estado de relajación excepcional.",
        imagen: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwde7035c1/Y0661530/Y0661530_E02_GHC.jpg?sw=1850&sh=1850"
      },
      {
        nombre: 'Aquaphor Lip repair',
        id:10,
        precio: 14000,
        descripcion: "Repara, protege y calma los labios secos y agrietados. Crea una barrera protectora ideal para favorecer una rápida regeneración de la piel de los labios. Contiene 1 unidad",
        imagen:
          'https://images-us.eucerin.com/~/media/eucerin%20relaunch%20media/media-center-items/b/b/f/fba75489cab348fa978d08b552cbeafc-screen.jpg',
      },
      {
        nombre: 'Neutrogena Hydro boost',
        id:11,
        precio: 75000,
        descripcion: "Con ácido hialurónico, provitamina B5 y glicerina, hidratantes que se encuentran naturalmente en la piel. Refuerzo de hidratación liviana durante 24 horas, clínicamente comprobado, para una piel saludable y radiante. Más del 78% de las personas coinciden en que este suero no deja sensación grasa en la piel. Sin fragancia, apto para todo tipo de piel y aprobado para piel sensible.",
        imagen:
          'https://neutrogena.imgix.net/pdp/6811356/6811356-how-to-use-1.jpg',
      },
      {
        nombre: 'Crema hidratante de ojos',
        id:12,
        precio: 40800,
        descripcion: "Una crema para ojos con ingredientes como retinol para proteger contra los signos del envejecimiento, reduciendo la apariencia de las arrugas e iluminando la apariencia de las ojeras. Para tipo de piel normal, seca, mixta y grasa. Preocupaciones sobre el cuidado de la piel: líneas finas, arrugas y ojeras",
        imagen:
          'https://images.ctfassets.net/wlke2cbybljx/5I5jnQukh5VTDOs5ROCSl7/b5d3b298a76fe6da9cb5cb4105b391e6/Magic_Cream_Eye_Rescue_Still_Life.png',
      },
    ]

  },
  {
    nombre: 'Fragancias',
    id: 3,
    fotoUrl: "",
    productos: [
      {
        nombre: 'Dior J`ADORE EDP',
        id:13,
        precio: 72400,
        descripcion: "30 ml - Un aroma floral luminoso, alegre, asentado y decidido. Armonizaflorescomo la Champaca (variedad de magnolia de la India, de olorfresco,afrutado y exótico), la violeta de Francia y la orquídeacristalizada.Como fondo, la madera de amaranto, cuyo aroma recuerda al delclavelconmás madera y suavidad; se armoniza con una nota de vino dulce deBanyulsy ciruela confitada.",
        imagen: "https://cdn.vnda.com.br/delmondostore/2020/08/26/11_8_4_431_4a8eb1530bd146519427b85d297a0834jadoredioreaudeparfumperfumefeminino.png?v=1598453096"
      },
      {
        nombre: 'Dior HOMME NEW EDT',
        id:14,
        precio: 77400,
        descripcion: "50 ml - Su fragancia es intensamente amaderada y masculina,deja una huella duradera. De diseño artístico y sofisticado, Dior Hommerepresenta a un hombre seguro de su energía, pero también de su ternura.Una nueva y masculina sensualidad es redefinida por la armonía de lamadera cruda y suave.",
        imagen:
          'https://juleriaque.vtexassets.com/arquivos/ids/212150/1000631_03.jpg?v=638178416131370000',
      },
      {
        nombre: 'CH 212 vip black smiley',
        id:15,
        precio: 82000,
        descripcion: "fragancia para hombre de edición limitada, creada para celebrar el 50 aniversario del icónico Smiley, un símbolo universal de positividad y felicidad. Con su fresco aroma estimulante y divertido y su frasco adornado con Smileys, esta fragancia descarada para hombre es la prueba de que no hay nada más poderoso que enfrentarse al mundo con una gran sonrisa.",
        imagen:
          'https://www.saul.com.uy/content/images/thumbs/0077900_carolina-herrera-212-vip-men-black-smiley-edt-100-ml_450.jpeg',
      },
      {
        nombre: 'CH Good Girl EDP',
        id:16,
        precio: 106400,
        descripcion: "80 ml - La fragancia GOOD GIRL está inspirada por la visión única de CarolinaHerrera de la dualidad de la mujer moderna: audaz y sexy, elegante yenigmática, buena y mala. Siempre forzando y traspasando los límites, lamisteriosa sensualidad de GOOD GIRL hace que sea una fragancia moderna ysofisticada a la vez. Notas de entrada: Almendra. Notas de corazón:Ylang-ylang y Jazmín Sambac. Notas de salida: Haba Tonka y Cocoa.Aroma: Oriental / Floral.",
        imagen:
          'https://www.aromasyrecuerdos.com/wp-content/uploads/2022/10/GOOD-GIRL-Eau-de-Parfum-150ml.jpg',
      },
      {
        nombre: 'Versace Eros EDT',
        id:17,
        precio: 145400,
        descripcion: "200 ml - Eros EDT es la fragancia que interpreta la sublime masculinidad atravésde un aura luminosa con una frescura intensa, vibrante yresplandeciente, obtenida de la combinación de hojas de menta, cáscarade limón italiano y manzana verde. Una adictiva sensualidad gracias alas notas orientales, intrigantes y envolventes de las habas tonka, elámbar, la flor de geranio y la vainilla. Una enérgica virilidadsimbolizada por maderas como el cedro de Atlas y Virginia, el vetiveryel musgo de roble, que proporcionan intensidad y potencia.",
        imagen:
          'https://ifragranceofficial.com/wp-content/uploads/2023/07/versace-eros-flankers.png',
      },
      {
        nombre: 'Marc Jacob Daisy Eau so fresh EDT',
        id:18,
        precio: 82000,
        descripcion: "Notas de salida: frambuesa natural, pomelo, pera. Notas medias:violetas, rosa salvaje, flor de manzano. Notas de fondo: almizcles,cedro, ciruela.",
        imagen:
          "https://cdn.media.amplience.net/i/Marc_Jacobs/DAISY_CONTENT_SLOT?qlt=70",
      },
    ]
  },
]