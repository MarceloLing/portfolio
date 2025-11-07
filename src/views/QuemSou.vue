<template>


  <div class="container">

    <div class="panel panel-default">
      <div class="panel-heading" style="text-align: center;">
        <h1>Quem Sou Eu?</h1>
      </div>
      <div class="panel-body" style="background-color:#043055">

        <div class="row">

          <div class="col-sm-3" style="border-radius: 10%; padding-top: 160px;padding-left: 50px;"><img :src="myPhoto" width="200px" height="200px" style="border-radius: 10%; 
          "></div>
          <div class="col-sm-8">
            <div style="text-align: justify;   padding-top: 40px;">
              <p class="meuP">Meu nome é Marcelo Ubirá da Silva Linguenhe,
                nascido em 30 de dezembro de 1990. Sou angolano, natural e residente no Lubango,
                província da Huíla. Sou casado e pai de três filhos, valores que me inspiram diariamente
                a construir um futuro sólido e inovador.
                Sou Engenheiro Informático com sólida experiência em tecnologias digitais
                e atualmente mestrando em Engenharia Informática e Tecnologias Web pela Universidade Aberta.
                Minha trajetória combina formação técnica com visão estratégica,
                voltada para o desenvolvimento de soluções tecnológicas que respondem às necessidades locais e globais.
                Tenho especial interesse em projetos que envolvem educação digital, empreendedorismo tecnológico,
                desenvolvimento web, e inovação aplicada. Acredito no poder da tecnologia como motor de transformação
                social e económica,
                e estou comprometido em contribuir para o crescimento sustentável da minha região e do país. </p>
            </div>


          </div>
        </div>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>


      </div>
      <div class="panel-footer">
        <a href="https://www.facebook.com/marcelo.linguenhe" target="_blank"  class="fa fa-facebook"></a>
        <a href="https://www.linkedin.com/in/marcelo-linguenhe" target="_blank" class="fa fa-linkedin"></a>

      </div>
    </div>
  </div>


</template>

<script setup>
import myPhoto from '@/assets/myPhoto.jpg'
</script>

<style scoped>
.Sobre {
  text-align: center;
  padding: 50px;
  max-width: 100%;
  margin: auto;
}

.meuP {
  font-family: 'AR One Sans';
  font-size: 22px;
  color: whitesmoke;
}

h1 {
  color: #f5b800;
  font-family: 'Akaya Telivigala'
}


.fa {
  padding: 10px;
  font-size: 25px;
  width: 60px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}


.fa-linkedin {
  background: #007bb5;
  color: white;
}
</style>