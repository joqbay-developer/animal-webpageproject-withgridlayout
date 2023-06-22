
const tabcontent = document.getElementsByClassName('tab-content');
const tablinks = document.getElementsByClassName('tablinks');


function showDescription(event, catDescription) {
     // Get all elements with class="tabcontent" and hide them
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(catDescription).style.display = "block";
  event.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();






//script for nav and button to top
var prevScrollpos = window.scrollY;

window.onscroll = function() {
  scrollFunction();
  hideNav();
};

//button top
let mybutton = document.getElementById('myBtn');
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function hideNav() {
  const currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-70px';
  }
  prevScrollpos = currentScrollPos;
}

function topFunction() {  
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
}
//script for nav and button to top



//closeads
// function cleseAds() {
//   document.getElementById('ads').style.display = "none";
// }

// const layout = document.getElementsByClassName('structure-container');
// function cleseAll() {
//   document.getElementById('all').style.display = 'none';
//   layout.className.replace(layout, 'change');
// }
