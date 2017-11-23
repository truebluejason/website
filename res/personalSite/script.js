// Navigation Bar Animation
var items = [].slice.call(document.getElementsByTagName("li"));
items.forEach(animate);
function animate(item) {
    item.onmouseover = function() {
        item.style.color = "bisque";
    };
    item.onmouseout = function() {
        item.style.color = "beige";
    };
}
items[2].onmouseover = function() {
    items[2].style.color = "bisque";
    items[2].innerHTML = "Soon...";
    document.body.style.backgroundColor = "skyblue";
};
items[2].onmouseout = function() {
    items[2].style.color = "beige";
    items[2].innerHTML = "Press for Fun";
    document.body.style.backgroundColor = "azure";
};



// Please Don't
var dont = document.getElementById("dont");
dont.onclick = function() {
    alert("Please don't!");
}