
// creates a random x position, y position, and degree of rotation
function getRandomPosition(element) {
  let x = document.body.offsetHeight-element.clientHeight;
  let y = document.body.offsetWidth-element.clientWidth;
  let randomX = Math.floor(Math.random()*x);
  let randomY = Math.floor(Math.random()*y);
  let randomDeg = Math.floor(Math.random()*50);
  return [randomX,randomY,randomDeg];
}
// assigns the random position to each card
window.onload = function() {
  let chef = document.getElementById('chef-space');
  let split = document.getElementById('split-it');
  let ui = document.getElementById('ui-kit');
 // for chef-space card
 document.body.appendChild(chef);
  let chefPos = getRandomPosition(chef);
  chef.style.top = chefPos[0] + 'px';
  chef.style.left = chefPos[1] + 'px';
  chef.style.transform = `rotate(${chefPos[2]}deg)`;
  // for split-it card
  document.body.appendChild(split);
  let splitPos = getRandomPosition(split);
  split.style.top = splitPos[0] + 'px';
  split.style.left = splitPos[1] + 'px';
  split.style.transform = `rotate(${splitPos[2]}deg)`;
  // for ui-kit card
  document.body.appendChild(ui);
  let uiPos = getRandomPosition(ui);
  ui.style.top = uiPos[0] + 'px';
  ui.style.left = uiPos[1] + 'px';
  ui.style.transform = `rotate(${uiPos[2]}deg)`;
  // for ui-kit card
}
