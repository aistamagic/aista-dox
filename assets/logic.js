
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

  var topBtn = document.getElementById("topBtn");

  // When the user scrolls down 20px from the top of the document, show the button

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }

  console.log(document.body.scrollTop, document.documentElement.scrollTop)
}

function scrollToTop() {
  document.getElementById('body').scrollTo({
    top: 0,
    behavior: "smooth"
  });
}