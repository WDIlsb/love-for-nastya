function startWish() {
  // 1. Получаем элементы
  const banner = document.getElementById("bannerScreen");
  const animScreen = document.getElementById("animScreen");
  const resultScreen = document.getElementById("resultScreen");
  const audio = document.getElementById("wishSound");
  const flash = document.querySelector(".flash");

  // 2. Включаем звук (если браузер разрешит)
  if (audio) {
    audio.volume = 0.5;
    audio.play().catch((e) => console.log("Нужен клик для звука"));
  }

  // 3. Скрываем баннер, показываем анимацию
  banner.style.display = "none";
  animScreen.style.display = "flex";

  // 4. Тайминги анимации
  // Через 2 секунды (когда метеорит упал) делаем вспышку
  setTimeout(() => {
    flash.style.transition = "opacity 0.2s";
    flash.style.opacity = "1";
  }, 1800);

  // Через 2.2 секунды меняем экран на результат
  setTimeout(() => {
    animScreen.style.display = "none";
    resultScreen.style.display = "flex";

    // Убираем вспышку плавно
    flash.style.opacity = "0";
  }, 2200);
}
