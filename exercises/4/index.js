const lis = document.querySelectorAll("li")
lis.forEach(li => {
    li.classList.add("corgi"),
    li.classList.remove("dog");
});