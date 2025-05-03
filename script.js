function startBuild() {
  const responseBox = document.getElementById('responseBox');
  responseBox.innerText = 'Tavi%Ai: Procesez fișierul...';
  setTimeout(() => {
    responseBox.innerHTML = 'APK generat cu succes! <br><a href="#" style="color:#00ff00">Descarcă APK</a>';
  }, 3000);
}