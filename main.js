let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#b5537f;">Estudio Ingeniería Química y, de vez en cuando me gusta programar</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
