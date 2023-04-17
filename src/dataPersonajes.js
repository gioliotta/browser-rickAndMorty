const PERSONAJE_DATA = [
  {
    nombre: "Rick Sanchez",
    data: "Científico loco, alcohólico y extremadamente inteligente que viaja a través de diferentes dimensiones y planetas con su nieto Morty. Rick es conocido por su cinismo, su falta de empatía y su desprecio por las convenciones sociales. Aunque su comportamiento a menudo es autodestructivo, Rick es capaz de crear tecnologías avanzadas y resolver problemas complejos en cuestión de segundos.",
  },
  {
    nombre: "Morty Smith",
    data: "Es el nieto de Rick Sanchez y es retratado como un adolescente tímido e inseguro, a menudo involucrado en las aventuras intergalácticas de su abuelo. A pesar de su falta de confianza en sí mismo, Morty a menudo muestra un gran coraje y lealtad hacia su familia y amigos cercanos.",
  },
  {
    nombre: "Summer Smith",
    data: "Es la hermana mayor de Morty. Ella es una adolescente inteligente y sarcástica que a menudo se siente desatendida por su familia. A pesar de su actitud despreocupada, Summer ha demostrado ser valiente y leal en numerosas ocasiones.",
  },
  {
    nombre: "Beth Smith",
    data: "Es la hija de Jerry y la esposa de Rick, y es una cirujana de equinos que trabaja en una clínica en el campo. Beth es descrita como una mujer inteligente pero emocionalmente inestable, y tiene una relación complicada con su padre, quien a menudo la ha decepcionado en el pasado. A lo largo de la serie, Beth lucha por equilibrar su vida personal y profesional, mientras trata de mantener a su familia unida y manejar su relación con Rick.",
  },
  {
    nombre: "Jerry Smith",
    data: "Es el esposo de Beth, el padre de Summer y Morty, y suegro de Rick. Jerry es retratado como un hombre inseguro, ansioso por ser aceptado por su familia y por mantener su posición de poder dentro de su hogar. A menudo se mete en situaciones cómicas debido a su falta de habilidades y confianza en sí mismo.",
  },
  {
    nombre: "Abadango Cluster Princess",
    data: "Es una princesa alienígena del planeta Abadango, que fue rescatada por Rick y Morty en un episodio de la segunda temporada. Tiene una apariencia similar a la de un insecto, con un cuerpo delgado y largo, patas finas y una cabeza con grandes ojos compuestos. Es amistosa y agradecida con Rick y Morty por salvarla, pero sufría de una enfermedad mortal que la hacía morir y resucitar constantemente. Su voz es interpretada por la actriz Tara Strong.",
  },
  {
    nombre: "Abradolf Lincler",
    data: "Es el resultado del intento de Rick de combinar el ADN de Abraham Lincoln y Adolf Hitler para crear un líder perfecto. Como resultado, Abradolf Lincler es un ser complejo y atormentado, que lucha con su propia identidad y propósito. Aparece en el episodio 'Lawnmower Dog' de la primera temporada.",
  },
  {
    nombre: "Adjudicator Rick",
    data: "Es un miembro de la Alianza Galáctica y su trabajo es juzgar y ejecutar a Ricks y Mortys que han violado las leyes de la Federación Galáctica. Aparece en el episodio 'The Ricklantis Mixup' de la tercera temporada. Es conocido por su actitud autoritaria y por su capacidad para mantener la calma en situaciones estresantes.",
  },
  {
    nombre: "Agency Director",
    data: "Líder de la agencia gubernamental responsable de mantener la ley y el orden en la ciudad de Atlantis, y toma decisiones difíciles para mantener la paz en la sociedad.",
  },
  {
    nombre: "Alan Rails",
    data: "Es un superhéroe con la capacidad de controlar los trenes y está basado en el actor Wesley Snipes. Aparece en el episodio 'Vindicators 3: El regreso de Worldender', donde Rick y Morty son convocados por los Vindicators, un grupo de superhéroes, para ayudarles a derrotar a un villano llamado Worldender. Alan Rails es uno de los miembros de los Vindicators y tiene una personalidad cínica y sarcástica.",
  },
  {
    nombre: "Albert Einstein",
    data: "Einstein se ha convertido en un líder de un culto llamado 'La Iglesia de la Ciencia', que cree que la ciencia es la única verdad y busca controlar y manipular a las personas mediante la tecnología. Einstein es presentado como un personaje autoritario y manipulador, que está obsesionado con la ciencia y el poder que puede proporcionarle. Sin embargo, cabe destacar que esta versión de Einstein es ficticia y no refleja la verdadera personalidad o acciones del famoso físico.",
  },
  {
    nombre: "Alexander",
    data: "",
  },
  {
    nombre: "Alien Googah",
    data: "",
  },
  {
    nombre: "Alien Morty",
    data: "Es un Morty alienígena de piel verde que se convierte en el líder de la rebelión de los Mortys de la Ciudadela después de la partida de Evil Morty. Alien Morty es valiente, decidido y astuto, y está dispuesto a liderar a los Mortys en su lucha contra el gobierno de la Ciudadela.",
  },
  {
    nombre: "Alien Rick",
    data: "Es una versión extraterrestre de Rick Sánchez. Es un científico brillante, despiadado y extremadamente egoísta que ha viajado por múltiples universos y dimensiones. Tiene una apariencia similar a la de Rick, pero con algunos rasgos alienígenas, como una piel de color verde claro y antenas en la cabeza. En su universo, probablemente también tiene su propio Morty.",
  },
  {
    nombre: "Amish Cyborg",
    data: "Es un cyborg que ha sido modificado con tecnología avanzada pero todavía sigue manteniendo la apariencia y estilo de vida de los Amish, una comunidad que se caracteriza por vivir de forma sencilla y tradicional sin utilizar la tecnología moderna. Aparece en el episodio 'The Ricklantis Mixup' de la tercera temporada, donde trabaja como guardia de seguridad en la ciudad de Atlantis.",
  },
  {
    nombre: "Annie",
    data: "Ella es la interés amoroso de Morty en la escuela y es retratada como una chica inteligente y reflexiva. Annie es vista por primera vez en el episodio 'Anatomy Park' y luego hace varias apariciones más a lo largo de la serie. Aunque Annie y Morty tienen una química evidente, su relación es complicada por la naturaleza caótica de la vida de Morty con Rick.",
  },
  {
    nombre: "Antenna Morty",
    data: "Es una versión alternativa de Morty que se caracteriza por tener una antena en la cabeza que le permite comunicarse con seres extraterrestres. Aparece en el episodio 'The Ricklantis Mixup' de la tercera temporada, donde es uno de los muchos Mortys que viven en la Ciudadela. Antenna Morty trabaja como recepcionista en la División de Asuntos Interdimensionales de la Ciudadela, y es visto ayudando a otros Mortys en varias ocasiones.",
  },
  {
    nombre: "Antenna Rick",
    data: "Es un Rick de una dimensión diferente que tiene una antena en su cabeza, lo que le permite sintonizar señales de televisión de todo el multiverso. Es parte de la policía de Ricks en la Ciudadela de Ricks, y trabaja en la oficina de desaparecidos junto con Morty C-137. Antenna Rick es muy cínico y desconfiado, y parece no tener mucha fe en la ley y el orden en la Ciudadela.",
  },
  {
    nombre: "Ants in my Eyes Johnson",
    data: "Es un vendedor de electrónica cuyo lema publicitario es '¡Tengo hormigas en mis ojos!', lo que sugiere que tiene una grave discapacidad visual. A pesar de su ceguera aparente, sigue vendiendo productos electrónicos y ofreciendo promociones locas a sus clientes. Su comercial se puede ver en varios episodios de la serie.",
  }
];

export default PERSONAJE_DATA;
