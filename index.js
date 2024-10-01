const botao = document.getElementById('botao-tema')
const html = document.documentElement

botao.addEventListener('click', ()=>{
  html.classList.toggle('modo-escuro')
})