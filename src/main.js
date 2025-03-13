import './style.css'
import { $api } from './script/api'
import generateAdviceHtml from './script/generate-html'

const adviceButton = document.querySelector('#generate-advice');

const generateAdvice = async() => {
  adviceButton.disabled = true;
  const data = await $api.get()
  const {id, advice} =  data.slip;
  generateAdviceHtml(id, advice);
  adviceButton.disabled = false;
}

generateAdvice();

adviceButton.addEventListener('click', generateAdvice)
