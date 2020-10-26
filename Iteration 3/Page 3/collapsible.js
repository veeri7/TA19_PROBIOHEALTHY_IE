var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
          this.innerText = 'Expand more';
        } else {
          content.style.display = "block";
          this.innerText = 'Collapse';
        }
    });
}