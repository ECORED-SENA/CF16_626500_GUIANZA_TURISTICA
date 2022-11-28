<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1  Comunicación verbal

    .row.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        p.mb-4 Es un proceso que permite establecer relaciones y vínculos sociales con las personas con quienes usted se relaciona en la sociedad, tiene la finalidad de socializar los puntos de vista que usted construye durante el desarrollo de la vida y de aprender de los referentes que otras personas construyen en su desarrollo. La comunicación verbal está mediada por el lenguaje y es vista como una conducta que permite a las personas relacionarse con el mundo que les rodea, y en ese proceso de relación, los seres humanos construyen los cimientos comportamentales de las sociedades y diseñan los contextos en los que habitan.
        .cajon.color-primario(style='background-color: #FFE6A1').p-4.mb-4
          p.mb-0 De esta manera, el habla permite reconocer, a través de su entonación, los diferentes estados de ánimo, lo que permite leer sentimientos y emociones que están relacionados con la personalidad, aquellos mismos que no siempre tienen que expresarse a través de la palabra, sino en el tono usado para la comunicación. 
        p.mb-0 Observe el siguiente video, donde se destaca la importancia de la voz y su manejo en la comunicación verbal:
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/vec1.svg', alt='Texto que describa la imagen')
    
    figure.mb-5(data-aos="fade")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/nnWDGmn62YI" title="La importancia de la voz y su manejo en la comunicación verbal para el guía turístico" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-12
        .bloque-texto-g1.color-verde.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.jpg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p Es importante tener en cuenta que la respiración consta de una parte activa (la inspiración) y otra pasiva (la espiración). Mediante esta última función, la espiración, se produce el habla. De allí la importancia de la educación respiratoria. La vibración de los bordes cordales aumenta por la presión del aire (presión subglótica), generando en esta zona el sonido laríngeo puro y/o fundamental de la voz, que luego es amplificado por las cavidades de resonancia (garganta, huesos, paladar, partes blandas, etc.) hasta salir. Las cuerdas vocales necesitan estar lubricadas con una capa delgada de mucosidad para poder vibrar eficientemente. (Gómez, s. f., p. 5)
    .row.mb-5(data-aos="fade")
      .col-lg-5.col-md-8.col-10
        .row 
          .col-10
            .tarjeta.color-secundario.p-2
              h3.mb-0.text-center.text-white El aparato fonador y sus cuidados
    p.mb-4(data-aos="fade-right") Las emisiones del habla son producidas por el aparato fonatorio, compuesto por el sistema respiratorio, la laringe, las cuerdas vocales y la cavidad bucal.

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Figura 7
          span Aparato fonador
      .col-lg-6(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema2/fig1.png', alt='Texto que describa la imagen')
        figcaption.mb-4 Nota. Castañeda (s. f.).
    p.mb-4(data-aos="fade-right") La emisión de sonidos se produce por el funcionamiento de varios elementos que están engranados y sincronizados y logran producir la voz, estos son:

    .row.mb-4
      .col-lg-12(data-aos="fade")
        .tabla-a.color-acento-contenido
          table
            caption Nota. Castañeda, (s. f.).
            thead
              tr
                th.anch2
                th.anch ELEMENTOS QUE INTERVIENEN EN LA PRODUCCIÓN DE SONIDOS
                th 
            tbody
              tr
                td.text-center <b>NOMBRE </b>
                td.text-center <b>DESCRIPCIÓN</b> 
                td.text-center <b>PROCESO</b>
              tr
                td.text-center Corriente de aire 
                td.text-center Producida por los pulmones y músculos respiratorios.
                td.text-center Los pulmones suministran la columna de aire que, atravesando los bronquios y la tráquea, va a sonorizar las cuerdas vocales que se encuentran en la laringe. 
              tr
                td.text-center Vibrador sonoro 
                td.text-center Conformado por las cuerdas vocales que se localizan en la laringe.
                td.text-center Es en la laringe donde propiamente se produce la voz en su tono fundamental. 
              tr
                td.text-center Resonador 
                td.text-center Está constituido por la boca, la nariz y la faringe.
                td.text-center La voz sufre una modificación en la caja de resonancia de la nariz, la boca y la garganta. Aquí se forma el timbre de voz.
              tr
                td.text-center Articuladores 
                td.text-center Están conformados por los labios, los dientes, paladar duro, velo del paladar y mandíbula.
                td.text-center Los órganos articuladores van a moldear la columna sonora, transformándola en sonidos y articulaciones del habla. 
    p.mb-4(data-aos="fade-right") Para aportar a la formación profesional del guía, se enuncian las acciones para el cuidado de la voz:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        TabsA.color-acento-contenido.mb-3      
          .tarjeta.clr-verde.p-5(titulo="Alimentación")
            h4 Alimentación
            ul.lista-ul--color
              li
                i.fas.fa-circle
                | Masticar e ingerir alimentos lentamente.
              li
                i.fas.fa-circle
                | Evitar ingerir alimentos con condiciones de temperatura extremas (caliente - frío).
              li
                i.fas.fa-circle
                | Ingerir alimentos bajos en grasa, con poca sal, para evitar la retención de líquidos.
              li
                i.fas.fa-circle
                | Emplear condimentos suaves.

          .tarjeta.clr-verde.p-4(titulo="Hidratación")
            h4 Hidratación
            p Estar hidratado, beber entre 6 y 8 vasos de agua al día.

          .tarjeta.clr-verde.p-4(titulo="Psicoactivos")
            h4 Psicoactivos
            p No fumar o consumir bebidas alcohólicas.

          .tarjeta.clr-verde.p-4(titulo="Médicos")
            h4 Médicos
            p Visitar al médico de manera preventiva o cuando se genere alguna condición que afecte la voz, como afonía (pérdida de la voz) o disfonía (alteración de la voz).

          .tarjeta.clr-verde.p-5(titulo="Psicológicos")
            h4 Psicológicos
            ul.lista-ul--color
              li
                i.fas.fa-circle
                | Haga pausas activas y descanse la voz durante el día.
              li
                i.fas.fa-circle
                | Hable en intervalos, no de manera prolongada.
              li
                i.fas.fa-circle
                | Realice ejercicios para el control de la ansiedad.
              li
                i.fas.fa-circle
                | Mantener un buen estado físico, emocional y social.
      .col-lg-4.col-md-8.col-8(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/1.png', alt='Texto que describa la imagen')         
    p.mb-4(data-aos="fade-right") La base de la comunicación verbal es la voz, las técnicas del manejo son de indiscutible importancia en la profesión del guía, que debe practicar con ejercicios para afinarla y usarla como herramienta de apoyo discursivo. <b> <FONT COLOR="#FD6300"> A continuación, algunas actividades técnicas a tener en cuenta para fortalecerla: </FONT> </b>

    .row.mb-4(data-aos="fade-up")
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-amarilla")
        .row(titulo="Respiratoria")
          .col-lg-1
            span
          .col-lg-7.mb-4
            p La respiración diafragmática consiste en tomar aire por la nariz y llevarla directamente al estómago, sin elevar los hombros. Se mantiene el aire por unos segundos en el estómago y se expulsa dejando salir el aire por la boca.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img1.png', alt='Texto que describa la imagen')

        .row(titulo="Tensión y distensión")
          .col-lg-1
            span
          .col-lg-7.mb-4
            p Consiste en tensionar los músculos de la boca, rostro, cuello, tórax y abdomen durante unos segundos y distensionarlos. Esta acción permite que las personas identifiquen sensaciones de dolor en su cuerpo y, al ser percibidas, se generan alertas que le informan a la persona que algo no está funcionando bien y así comenzar a realizar los procesos de regulación a través de la respiración o de la tensión - distensión.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img2.png', alt='Texto que describa la imagen')

        .row(titulo="Vocalización")
          .col-lg-1
            span
          .col-lg-7.mb-4
            p Pronuncie de manera enfática, con tono medio, las siguientes palabras: crisis, fijación, torbellino, rastrojos, trascendente, intercontinental, deleznable, horripilante, gerundio, agrupación, tristeza, tetraedro, crioterapia, potable, transparente, trasatlántico, satisfactorio, condensación, simétrico. También para el estiramiento facial, son ideales los trabalenguas, con movimientos exagerados del rostro. Trabalenguas 1. Un tigre, dos tigres, tres. Tres tristes tigres comían trigo en un trigal. Trabalenguas 2. El gerente diligente llamaba urgente al regente. Y un agente ágilmente vigilaba entre la gente. Trabalenguas 3. Pablito clavó un clavito. ¿Qué clavito clavó Pablito? (Aguilar, 2016).
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')

        .row(titulo="Calentamiento del aparato fonador")
          .col-lg-1
            span
          .col-lg-7.mb-4
            p Se pueden realizar estiramientos de la lengua fuera de la boca y en todas direcciones. Después, se estiran los labios hacia el frente, atrás y a los lados; luego, se estiran las mejillas, soplando con la boca cerrada. Una vez se estiran esos músculos faciales y de la boca, se hacen ejercicios de vibración de las cuerdas vocales con las vocales (a, e, i, o, u), de manera prolongada y jugando con el incremento en el sonido (bajo - medio - alto).
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img4.png', alt='Texto que describa la imagen')

        .row(titulo="Control de la ansiedad")
          .col-lg-1
            span
          .col-lg-7.mb-4
            p Realice los ejercicios de respiración diafragmática, de tensión y distensión, y de calentamiento del aparato fonador, antes de comenzar a hablar en público. Por otra parte, neutralice sus ideas, los supuestos o prejuicios que tenga de las personas a quienes va a abordar durante el momento en que se va a expresar. 
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img5.png', alt='Texto que describa la imagen')

        .row(titulo="Prepárese para la intervención que va a realizar")
          .col-lg-1
            span
          .col-lg-7.mb-4
            p Estudiar el tema a desarrollar con el público es un factor fundamental; es importante que usted planee la temática con antelación, esto le va permitir controlar sus estados de ansiedad. 
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img6.png', alt='Texto que describa la imagen')
    p.mb-4(data-aos="fade-right") Para educar la voz como aliada de la profesión, se debe trabajar en hacerla clara, es decir, perceptible. Se espera que en el discurso todas y cada una de las palabras se escuchen, inclusive cuando la voz tiene tono bajo y de menor intensidad. Para hacerlo, el hablante debe articular perfectamente todos los sonidos, con las diferencias naturales que existen entre ellos, para evitar confusiones del mensaje. La comprensión de las características de la voz ayuda a identificar cómo usarla y manejarla optimizándola, vea:

    .slyderB_bg_01.px-4.py-3.mb-5(data-aos="fade")
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-4.mb-4.mb-lg-0.pt-4.pt-0.position-relative
            .number(data-number="01")
              h4.ps-4 Proyección
              p.ps-4.mb-0 Para Vargas (2008), es la capacidad de emitir la voz de una manera clara y natural a un auditorio. Para tener una buena proyección de la voz, es fundamental el manejo de la respiración, la dicción o la forma de pronunciar, el manejo del volumen, la velocidad con la que se expresan los mensajes, el tono de la voz, la pronunciación, el énfasis o la entonación de las ideas, el timbre y las pausas que emplea el interlocutor. 
          .col-8.col-lg-8
            figure
              img(src='@/assets/curso/tema2/img7.png')

        .row.justify-content-center.my-lg-4
          .col-lg-4.mb-4.mb-lg-0.pt-4.pt-0.position-relative
            .number(data-number="02")
              h4.ps-4 Tono
              p.ps-4.mb-0 Según el diccionario de la Real Academia (2001), citado por Vargas (2008, p. 87), el tono es reconocido como la inflexión de la voz o la forma de expresar una idea o mensaje, y que puede variar según el estado emocional de la persona que lo emite teniendo como base la entonación. 
          .col-8.col-lg-8
            figure
              img(src='@/assets/curso/tema2/img8.png')

        .row.justify-content-center.my-lg-4
          .col-lg-4.mb-4.mb-lg-0.pt-4.pt-0.position-relative
            .number(data-number="03")
              h4.ps-4 Timbre
              p.ps-4.mb-0 El timbre es la calidad vocal o resonancia de la voz producida principalmente como resultado de la forma de las cavidades orales. La gente se diferencia en esas características. Algunas personas tienen voces muy finas, nasales, mientras que otras tienen voces resonantes. Las personas con voces muy finas son percibidas, en general, de forma más negativa que aquellas que poseen voces más resonantes. Según Knapp (1982), citado por Ortego et al. (s. f., p. 17), a los hombres con voces guturales se les considera más realistas, maduros, sofisticados y bien adaptados, mientras que a las mujeres con voces guturales se las tiende a juzgar como más masculinas y toscas. 
          .col-8.col-lg-8
            figure
              img(src='@/assets/curso/tema2/img9.png')

        .row.justify-content-center.my-lg-4
          .col-lg-4.mb-4.mb-lg-0.pt-4.pt-0.position-relative
            .number(data-number="04")
              h4.ps-4 Ritmo
              p.ps-4.mb-0 El ritmo está íntimamente ligado con el tiempo. Las funciones básicas de nuestra vida, la respiración y la circulación se realizan rítmicamente a través de funciones repetidas y alternantes. El ritmo vital está íntimamente ligado a la producción del lenguaje, el aparato fonador tiene una doble función: garantizar el oxígeno y la comunicación. Además del ritmo natural, hay un ritmo planificado en el lenguaje, creado por el hombre y, por ende, artificial.  El ritmo está constituido básicamente por la repetición de un patrón y es esencial para la percepción de los acontecimientos que ocurren en el tiempo. Se da entonces, como vimos, en la vida humana, pero también en la música y en el lenguaje.
          .col-8.col-lg-8
            figure
              img(src='@/assets/curso/tema2/img10.png')

        .row.justify-content-center.my-lg-4
          .col-lg-4.mb-4.mb-lg-0.pt-4.pt-0.position-relative
            .number(data-number="04")
              h4.ps-4 Inflexión
              p.ps-4.mb-0 El diccionario de la Real Academia (1997), citado por Ortego et al. (s. f., p. 17), define la inflexión como: “la elevación o atenuación que se hace con la voz quebrándola o pasando de un tono a otro”. Sirve para comunicar sentimientos y emociones. Poca entonación, con un volumen bajo, indica aburrimiento o tristeza. Un patrón que no varía puede ser aburrido o monótono. Se percibe a la gente como más dinámica y extrovertida cuando cambian el tono y la inflexión de sus voces a menudo durante una conversación.
          .col-8.col-lg-8
            figure
              img(src='@/assets/curso/tema2/img11.png')

    .bg_grad-05
      p.mb-4(data-aos="fade-right") El guía de turismo debe acostumbrar a impostar su voz, se trata de usar, adecuadamente, los órganos de la voz, proyectando el sonido de forma agradable, sin denotar duda o temblor evidenciando miedo al público, que sea poderosa y agradable al mismo tiempo y que hasta la última fila del auditorio escuche, inclusive sin equipos de ampliación de sonido. <b> <FONT COLOR="#FD6300"> La respiración y sacar el máximo provecho de la caja de resonancia harán que resuene la voz dentro de la cara, proyectando firmeza y seguridad; algunas de estas acciones son: </FONT> </b>
      br
      .row.align-items-center.mb-2
        .col-lg-7(data-aos="fade-right")
          .row.align-items-center.mb-2
            .col-lg-2.col-md-2.col-2
              figure
                img(src='@/assets/curso/tema2/num1.svg')
            .col-lg-10.col-md-10.col-10
              h4.mb-4 Cantar y abrir los brazos
              p.mb-2 la exhalación vocal tiene también tendencia a hacer que los brazos se cierren en torno al pecho. Intente lo opuesto: sople o cante abriendo los brazos, lo que ayuda a las costillas a mantenerse abiertas. 
          .row.justify-content-center.mb-2
            .col-lg-11
              .lineagris
          .row.align-items-center.mb-2
            .col-lg-2.col-md-2.col-2
              figure
                img(src='@/assets/curso/tema2/num2.svg')
            .col-lg-10.col-md-10.col-10
              h4.mb-4 Alternar tres vocales, pronunciando cada una así
              p.mb-2 vocal "o" con los labios en la posición de silbar. Luego, en esa posición, abra un poco la boca como para decir "ooo". Partiendo con la boca cerrada, separe lentamente las comisuras de los labios al tiempo que abre un poco la boca, la lengua se aproxima al paladar y no deja abierta más que una rendija horizontal para que pase el aire, moldeando la “i”. Para la forma de la "a", bajar la mandíbula y sentir cómo la lengua se extiende a los lados entre los dientes de abajo. Si juegas alternando estas tres vocales con precisión, la caja de resonancia de la boca se verá rápidamente optimizada.
          .row.justify-content-center.mb-0
            .col-lg-11
              .lineagris
          .row.align-items-center.mb-2
            .col-lg-2.col-md-2.col-2
              figure
                img(src='@/assets/curso/tema2/num3.svg')
            .col-lg-10.col-md-10.col-10
              h4.mb-4 Los sonidos espontáneos y su valor
              p.mb-2 bocarriba, flexionar el tronco con un impulso y levantar brazos y piernas, todo a la vez. Dejar salir un sonido espontáneo: es el movimiento el que lleva al sonido. Percibir cómo la zona abdominal (que puede deformarse, pero no comprimirse) influye en la voz.
        .col-lg-5(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema2/2.png')
      .row 
        .col-lg-12
          span

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
