
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

function searchFn(event) {console.log({% site.nav_sections %})
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toLowerCase();
  // ul = document.getElementById("nav");
  // li = ul.getElementsByTagName("li");
  // for (i = 0; i < li.length; i++) {
  //     a = li[i].getElementsByTagName("a")[0];
  //     txtValue = a.textContent || a.innerText;
  //     if (txtValue.toLowerCase().indexOf(filter) > -1) {
  //         li[i].style.display = "";
  //     } else {
  //         li[i].style.display = "none";
  //     }
  // }
  // document.querySelectorAll('#nav').forEach((item, i) => {
  //   a = item[i].forEach(element => {
  //     a = element.getElementsByTagName("a")[0]
  //   });
  //     txtValue = a.textContent || a.innerText;
  //     if (txtValue.toLowerCase().indexOf(filter) > -1) {
  //         item[i].style.display = "";
  //     } else {
  //         item[i].style.display = "none";
  //     }
  // })
  event.preventDefault();
}