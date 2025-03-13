
export default function generateAdviceHtml(id, text) {
  const advice = document.querySelector('#advice');

  advice.innerHTML= `
  <h2 class="advice-header manrope-800">Advice #${id}</h2>
  <p class="advice-text manrope-800">${text}</p>
  `
}