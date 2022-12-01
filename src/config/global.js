export default {
  global: {
    componenteFormativo: 'Conectando al turista con la experiencia.',
    descripcionCurso:
      'La comunicación y su importancia para el logro de los objetivos de la guianza, centrada en la satisfacción del cliente, se refleja en la política pública, es así como el componente formativo aporta a la implementación de técnicas de experiencia al cliente, la comunicación y las herramientas, para acercarse a la plena satisfacción esperada por el turista del siglo XXI.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Implementación de la experiencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Herramientas de comunicación interpretativa',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Comunicación no verbal en el guionaje ',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Comunicación verbal',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aguilar, J. (2016). Promoción y ventas de servicios turísticos. Editorial CEP.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50984?page=327',
    },
    {
      referencia:
        'Álvarez, A. (s. f.). Análisis de la oralidad: una poética del habla cotidiana. Estudios de Lingüística del Español, 15.',
      link: 'http://elies.rediris.es/elies15/cap26.html',
    },
    {
      referencia:
        'Castañeda, P. (s. f.). El Lenguaje verbal del niño: ¿cómo estimular, corregir y ayudar para que aprenda a hablar bien? Universidad Nacional Mayor de San Marcos [UNMSM].',
      link:
        'https://sisbib.unmsm.edu.pe/BibVirtualData/Libros/Linguistica/Leng_Nino/pdf/Explor_Producc.pdf',
    },
    {
      referencia:
        'Gallego, S. (2000). La importancia de los sentidos en la comunicación interpretativa. Boletín de Interpretación, (3).',
      link:
        'https://boletin.interpretaciondelpatrimonio.com/index.php/boletin/article/view/43',
    },
    {
      referencia:
        'Gomez, R. (s. f.). La voz y su utilización en el ámbito profesional. Coordinación Riesgos Laborales.',
      link:
        'https://docplayer.es/28918834-La-voz-y-su-utilizacion-en-el-ambito-profesional.html',
    },
    {
      referencia:
        'Izaguirre, M. (2018). Neuromarketing turístico y hotelero. AlfaOmega.',
      link:
        'https://www.alphaeditorialcloud.com/reader/neuromarketing-turistico-y-hotelero',
    },
    {
      referencia:
        'Jiménez-Marín, G., Bellido-Pérez, E. y López-Cortés, Á. (2019). Marketing sensorial: El concepto, sus técnicas y su aplicación en el punto de venta. Vivat Academia, 21(148), p. 121-147.',
      link: 'https://doi.org/10.15178/va.2019.148.121-147',
    },
    {
      referencia:
        'López, M. (2015). Persuasión a través del marketing sensorial y experiencial. Opción, 31(2), p. 463-478.',
      link: 'https://www.redalyc.org/articulo.oa?id=31045568027',
    },
    {
      referencia:
        'Ministerio de Educación de Colombia. (2012). Teatro: Educación artística. Julián Hernandez Taller de Diseño. ',
      link:
        'https://redes.colombiaaprende.edu.co/ntg/men/archivos/Referentes_Calidad/Modelos_Flexibles/Secundaria_Activa/Guias_del_estudiante/Educacion_Artistica/ART_Teatro.pdf',
    },
    {
      referencia:
        'Ortego, M., López, S. y Álvarez, M. (s. f.). Tema 6. La comunicación. Universidad de Cantabria.',
      link:
        'https://ocw.unican.es/pluginfile.php/1420/course/section/1836/tema_06.pdf',
    },
    {
      referencia:
        'Palomo, G. y Martínez, A. (2018). El uso de dispositivos para la interpretación de los bienes culturales en Andalucía. International journal of scientific management and tourism, 4(1), p. 589-630.',
    },
    {
      referencia:
        'Perales, F. y Jiménez, J. (2002). Las ilustraciones en la enseñanza-aprendizaje de las ciencias. Análisis de libros de texto. Enseñanza de las Ciencias: revista de investigación y experiencias didácticas, 20(3), p. 20.',
      link: 'https://doi.org/10.5565/rev/ensciencias.3954',
    },
    {
      referencia:
        'Puente, M. (2019). Análisis gestual y de la expresión no verbal. Editorial UOC.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/120283?page=140',
    },
    {
      referencia:
        'Rey, P. (2010). El estilo de comunicar de Barack Obama. Cuadernos De Información y Comunicación, 15, p. 263-285.',
      link:
        'https://login.bdigital.sena.edu.co/login?url=https://www.proquest.com/scholarly-journals/el-estilo-de-comunicar-barack-obama/docview/813139566/se-2',
    },
    {
      referencia:
        'Rivas, M., Bastanzuri, M. y Olivera, M. (2013). El cuidado de la voz en la actividad docente. Revista Habanera de Ciencias Médicas, 12(5), p. 74-81.',
      link: 'http://www.revhabanera.sld.cu/index.php/rhab/article/view/44',
    },
    {
      referencia:
        'Vargas, A. (2008). Impostación de la voz. Ensayos Pedagógicos, 4(1), p. 79-100. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5409481',
    },
    {
      referencia:
        'Vilches, F. y Sarmiento, R. (2016). Lenguaje jurídico – administrativo. Una lengua de especialidad. Dykinson.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/58289?page=66',
    },
    {
      referencia:
        'Villagrá, M. (2021). Sicilia on the road. Conexiones emocionales y motivación en un ejemplo de comunicación interpretativa informal. Círculo de Lingüística Aplicada a la Comunicación, 86.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_crossref_primary_10_5209_clac_75502',
    },
  ],
  glosario: [
    {
      termino: 'Audioguía',
      significado:
        'Una audioguía es una guía sonora del espacio turístico y patrimonial visitado por turistas individuales. Se desarrolla un guion y, en la locución, se aportan valores emocionales que se mezclan con sonido y música, para trasladar al oyente a otras épocas o lugares. Se realiza en varios idiomas (Palomo y Martínez, 2018).',
    },
    {
      termino: 'BPM',
      significado:
        'En Colombia, las BPM, o Buenas Prácticas de Manufactura, están definidas por el Decreto 3075 del Ministerio de Protección Social. Adicionalmente, este decreto reglamenta los principios básicos y prácticas generales de higiene en la manipulación, preparación, elaboración, envasado, almacenamiento, transporte y distribución de alimentos para el consumo humano.',
    },
    {
      termino: 'Dopamina',
      significado:
        'Es un neurotransmisor responsable del deseo o motivación directamente relacionada con la recompensa que esperaría obtener el turista en el destino turístico (Izaguirre, 2018).',
    },
    {
      termino: 'Espacio personal',
      significado:
        'Se denomina al área con “límites invisibles” que rodea a la persona. (Puente, 2019).',
    },
    {
      termino: 'Expresión',
      significado:
        'Es una declaración de algo para darlo a entender. Puede tratarse de una locución, un gesto o un movimiento corporal.',
    },
    {
      termino: 'Fonación',
      significado:
        'Es el trabajo muscular realizado para emitir sonidos inteligibles, es decir, para que exista la comunicación oral.',
    },
    {
      termino: 'Gesto',
      significado:
        'Se denomina gesto a una manifestación corporal de un estado de ánimo, de una actitud, de un énfasis a una idea.',
    },
    {
      termino: 'Oral',
      significado: 'Que se manifiesta mediante la palabra hablada.',
    },
    {
      termino: 'Playback',
      significado:
        'Emisión del sonido grabado o la imitación del canto del ave, para facilitar su avistamiento. Se recomienda no usarlo o limitarlo para usos muy especializados.',
    },
    {
      termino: 'Podcast',
      significado:
        'Es una publicación digital periódica en audio, y en ocasiones en video, transmitida online.',
    },
    {
      termino: 'Pragmática',
      significado:
        'Disciplina que estudia el lenguaje en relación con el contexto donde se desarrolla la idea.',
    },
    {
      termino: 'Ritmo',
      significado:
        'Puede definirse como la combinación armoniosa de sonidos, voces o palabras, que incluye las pausas, los silencios y los cortes necesarios para que resulte grato a los sentidos.',
    },
    {
      termino: 'Rol',
      significado:
        'El papel o función que alguien o algo cumple. En el caso del teatro, se puede desempeñar el rol de actor protagónico o secundario, de director, de técnico, de maquillista, entre otros.',
    },
    {
      termino: 'Sistema de viaje inalámbrico',
      significado:
        'Es un sistema de comunicación que consiste en un transmisor y varios receptores que no tiene cableado y que facilita que los usuarios escuchen la información del guía sin necesidad de estar cerca de él.',
    },
    {
      termino: 'Volumen',
      significado:
        'El volumen es la intensidad auditiva con que un sonido es proyectado.',
    },
  ],
  complementario: [
    {
      tema: 'Herramientas de comunicación interpretativa',
      referencia:
        'Biblioteca Nacional de Colombia. (s. f.). Biblioteca digital.',
      tipo: 'Biblioteca digital',
      link: 'https://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd',
    },
    {
      tema: 'Herramientas de comunicación interpretativa',
      referencia:
        'Biblioteca Virtual del Banco de la República. (s. f.). Podcast y otras producciones de audio. Colecciones digitales.',
      tipo: 'Audios y podcast',
      link: 'https://babel.banrepcultural.org/digital/collection/p17054coll25',
    },
    {
      tema: 'Herramientas de comunicación interpretativa',
      referencia:
        'Radio Nacional de Colombia. (2021). Radio Nacional de Colombia.',
      tipo: 'Audios',
      link: 'https://www.radionacional.co/',
    },
    {
      tema: 'Herramientas de comunicación interpretativa',
      referencia:
        'Villagrá, M. (2021). Sicilia on the road. Conexiones emocionales y motivación en un ejemplo de comunicación interpretativa informal. Círculo de Lingüística Aplicada a la Comunicación, 86.',
      tipo: 'Documento',
      link: 'https://dx.doi.org/10.5209/clac.75502',
    },
    {
      tema: 'Herramientas de comunicación interpretativa',
      referencia:
        'Traverso, J. (1996). Comunicación interpretativa: variable clave en el marketing mix de las empresas de turismo rural. Estudios Turísticos, 130, p. 37-50.',
      tipo: 'Documento',
      link: '/downloads/comunicacioninterpretativa.pdf',
    },
    {
      tema: 'Herramientas de comunicación interpretativa',
      referencia:
        'Asociación para la Interpretación del Patrimonio [AIP]. (2000). Boletín de Interpretación Número 3. ',
      tipo: 'Artículo ',
      link: '/downloads/boletininterpretacion.pdf',
    },
    {
      tema: 'Comunicación no verbal en el guionaje',
      referencia:
        'Brook, P. (1997). La puerta abierta. Reflexiones sobre la interpretación y el teatro. Alba Editorial.',
      tipo: 'Libro',
      link: 'https://docer.com.ar/doc/cnxv0v',
    },
    {
      tema: 'Kinestésica',
      referencia:
        'TEDx Talks. (2015). Lenguaje corporal | Emiliano Salas | TEDxAvDivDelNorte [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/1FUHSMFUUGU',
    },
    {
      tema: 'Paralingüística',
      referencia:
        'Choque Cultural India-Perú. (2019). Explicando gestos de la India [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/VRZpwHfkR_M',
    },
    {
      tema: 'Paralingüística',
      referencia:
        'Calais-Germain, B. (2020). 11 ejercicios para mejorar tu voz y conectar con ella. CuerpoMente.',
      tipo: 'Sitio web',
      link:
        'https://www.cuerpomente.com/salud-natural/ejercicios/ejercicios-mejorar-voz_1730',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Fabian Zarate',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniel Polanco',
        cargo: 'Validación Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Gomez Delgado',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Botello',
        cargo: 'Validación de Maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Actividades didácticas',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Camilia Ovalle',
        cargo: 'Validación Contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de Gestión de Repositorio',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
