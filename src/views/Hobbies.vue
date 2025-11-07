<template>
  <div class="container">

    <div class="panel panel-default">
      <div class="panel-heading" style="text-align: center;">
        <h1>Hobbies</h1>
      </div>
      <div class="panel-body" style="background-color:#043055">

        <div class="row">
          <div class="col-sm-4" style="text-align: center; padding: 15px; ">

            <img :src="game" width="300px" height="200px" style="border-radius: 5%">
            <br />
            <p class="meuP"> <Strong>Video Games</Strong> — Sou apaixonado por jogos eletrónicos, especialmente títulos
              como League of
              Legends (LoL),PES, entre outros que exigem raciocínio estratégico, trabalho em equipa e tomada de decisões
              rápidas. Jogar é
              para mim uma forma de desafiar a mente, explorar universos digitais e manter o espírito competitivo ativo.
              Os jogos também me ajudam a compreender melhor a experiência do utilizador e a dinâmica das plataformas
              interativas conhecimentos que aplico na minha atuação técnica e educacional. </p>


          </div>
          <div class="col-sm-4" style="text-align: center; padding: 15px; ">
            <img :src="pesca" width="320px" height="200px" style="border-radius: 5%">
            <p class="meuP"><strong>Pesca Desportiva</strong> — A pesca é o meu refúgio. É onde encontro paz, paciência
              e conexão com a
              natureza. Praticar pesca desportiva permite-me desacelerar, refletir e renovar energias, cada jornada ao
              mar é uma oportunidade de contemplação e superação pessoal, onde a técnica e a tranquilidade se
              encontram. </p>
          </div>
          <div class="col-sm-4" style="text-align: center; padding: 15px; ">
            <img :src="viola" width="320px" height="200px" style="border-radius: 5%">
            <p class="meuP"><strong> Tocar Viola</strong> — A música é uma linguagem universal que me acompanha há anos.
              Tocar violão é
              uma das minhas formas favoritas de expressão artística. Seja interpretando melodias clássicas ou
              improvisando acordes, encontro na música um espaço de criatividade, sensibilidade e relaxamento. É também
              uma ponte para momentos em família que muito gostam. </p>
          </div>
        </div>
      </div>


    </div>
    <div class="panel-footer">
    <a href="https://www.facebook.com/marcelo.linguenhe" target="_blank"  class="fa fa-facebook"></a>
        <a href="https://www.linkedin.com/in/marcelo-linguenhe" target="_blank" class="fa fa-linkedin"></a>


    </div>
  </div>





</template>

<script setup>
import game from '@/assets/gaming.jpg'
import pesca from '@/assets/pesca.png'
import viola from '@/assets/viola.png'

</script>

<style scoped>
.Sobre {
  padding: 10px;
  text-align: center;
  max-width: 100%;
  margin: auto;
}

.meuP {
  padding-top: 10px;
  font-family: 'AR One Sans';
  font-size: 18px;
  color: whitesmoke;
  text-align: justify;
}

h1 {
  color: #f5b800;
  font-family: 'Akaya Telivigala'
}

.fa {
  padding: 10px;
  font-size: 15px;
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