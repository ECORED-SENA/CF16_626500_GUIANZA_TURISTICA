<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 Para dar inicio al componente formativo, observe el siguiente video, el cual relaciona los elementos a tener en cuenta en el desarrollo de los conceptos:
    
    figure.mb-5
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/xAQ5ybjnM3E" title="Conectando al turista con la experiencia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
