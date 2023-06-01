const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const loveMessage = document.getElementById("love-message");

noBtn.addEventListener("click", function() {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
  noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
});

yesBtn.addEventListener("click", function() {
  noBtn.classList.add("hidden");
  loveMessage.classList.remove("hidden");
  setTimeout(() => {
    window.location.href = "https://api.whatsapp.com/send?l=pt-BR&phone=5575991688886&text=eu%20te%20amo%2C%20Teagar%2C%20voc%C3%AA%20%C3%A9%20o%20meu%20tudo.%20Aceito%20me%20casar%20com%20voc%C3%AA%F0%9F%92%8D%F0%9F%92%9E";
  }, 3500);
});
