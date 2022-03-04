
function toggleMenu(event) {
  var body = document.getElementById('body');
  var banner = document.getElementById('banner');
  if (banner.className == 'banner') {
    banner.className = 'banner expanded';
    body.style.overflow = 'hidden';
  } else {
    banner.className = 'banner';
    body.style.overflow = '';
  }
  event.preventDefault();
}

function searchFn(event) {

  var input  = document.getElementById('searchInput'),
      filter = input.value.toLowerCase(),
      li     = document.querySelectorAll("ul#nav li");

  // Loop through all list items, and hide those who don't match the search query
  for (var i = 0; i < li.length; i++) {
    var a = li[i].querySelector("a");

    if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
      li[i].style.backgroundColor = 'rgb(3, 169, 244, 0.25)';
    } else {
      li[i].style.backgroundColor = "transparent";
    }
  }
  event.preventDefault();
}