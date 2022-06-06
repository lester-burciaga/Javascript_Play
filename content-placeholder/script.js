const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const nameLabel = document.getElementById('name');
const dateLabel = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2200);

// This will set the data in the html tags and remove the gradient animation
function getData() {
  header.innerHTML = '<img src="./assets/laptop.jpg" alt="Work station" />';
  title.innerHTML = 'Lorem ipsum dolor asdas';
  excerpt.innerHTML = 'Lorem ipsum dolor asdas asdaptio moll asdikuhu';
  profile_img.innerHTML =
    '<img src="./assets/myPhoto.jpg" alt="Profile photo" />';
  nameLabel.innerHTML = 'Lester Burciaga Villa';
  dateLabel.innerHTML = 'May 25, 2022';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
