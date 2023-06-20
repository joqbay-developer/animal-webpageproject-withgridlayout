
const tabcontent = document.getElementsByClassName('tab-content');
const tablinks = document.getElementsByClassName('tablinks');
const buttonSaude = document.getElementById('button-saude');
const buttonTemperamento = document.getElementById('button-temperamento');
const buttonInteligencia = document.getElementById('button-inteligencia');
const buttonCuidados = document.getElementById('button-cuidados');
const buttonCuriosidades = document.getElementById('button-curiosidades');


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
