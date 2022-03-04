
function toggleMenu(event) {
  var body = document.getElementById('body');
  var banner = document.getElementById('banner');
  if (banner.className == 'banner') {
    banner.classList.add('expanded');
    body.style.overflow = 'hidden';
  } else {
    banner.classList.remove('expanded');
    body.style.overflow = '';
  }
  event.preventDefault();
}

function searchFn(event) {
  var input = document.getElementById('searchInput'),
    filter = input.value.toLowerCase(),
    li = document.querySelectorAll("ul#nav li");
  closeBtn = document.getElementById('close-btn');
  if (filter) {
    closeBtn.style.visibility = 'visible';
  } else {
    closeBtn.style.visibility = 'hidden';
  }
  // Loop through all list items, and hide those who don't match the search query
  for (var i = 0; i < li.length; i++) {
    var a = li[i].querySelector("a");

    if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
      li[i].style.fontWeight = '600';
    } else {
      li[i].style.fontWeight = "";
    }
    if (filter === '') {
      li[i].style.fontWeight = "";
    }
  }
  event.preventDefault();
}

function clearSearch(event) {
  document.getElementById('searchInput').value = '';
  searchFn(event);
}


function onScroll() {
  var banner = document.getElementById('banner');
  var topBtn = document.getElementById("topBtn");

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.className = 'show';
    banner.classList.remove('notScrolled');
  } else {
    topBtn.className = '';
    banner.classList.add('notScrolled');
  }
}

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}