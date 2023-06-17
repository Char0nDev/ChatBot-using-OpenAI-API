const btn = document.querySelector(".fa-paper-plane");
const input = document.querySelector(".input");
const content = document.querySelector(".content");
const req = document.querySelector('.req')

var i = 0;
btn.addEventListener("click", () => {
    bot()
    input.value = ''
});
  
function bot(){
    i++;
    var newarr = input.value.toString().split();
    content.innerHTML += `<div class="you"><h1>${newarr[0]}</h1><img src="/Layer 2.svg" width="30px"></div>`;
    content.innerHTML += `<div  style=" width: 100%; display: flex; gap: 15px ; align-items: center;"><img src="/Layer 2.svg" width="30px"><h1 class="Bot${i}" style="display: flex; justify-content: flex-start; font-weight: 400; font-size: 1.2rem; position: relative; top: 20px; background-color: #e4e4e4; padding: 5px 25px; color: #326BD6; border-radius: 15px;">thinking...</h1></div>`;
    generationRps();
}
input.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {

    i++;
    var newarr = input.value.toString().split();
    content.innerHTML += `<div class="you"><h1>${newarr[0]}</h1><img src="/Layer 2.svg" width="30px"></div>`;
    content.innerHTML += `<div  style=" width: 100%; display: flex; gap: 15px ; align-items: center;"><img src="/Layer 2.svg" width="30px"><h1 class="Bot${i}" style="display: flex; justify-content: flex-start; font-weight: 400; font-size: 1.2rem; position: relative; top: 20px; background-color: #e4e4e4; padding: 5px 25px; color: #326BD6; border-radius: 15px;">thinking...</h1></div>`;
    generationRps();
    input.value = ''
  }

})

var generationRps = () => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const apiKey = "Your API Key"; // go to your account on openai and copy your api key 
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      temperature: 0.7,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: `${input.value}` }],
    }),
  };
  fetch(API_URL, request)
    .then((res) => res.json())
    .then((data) => {
      var message = data.choices[0].message.content.replace(/\n/g, "<br>");

      document.querySelector(`.Bot${i}`).innerHTML = `${message}`;
    })
    .catch((err) => {
      console.log(err);
    });
};

