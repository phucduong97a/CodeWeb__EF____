let menu_c = document.querySelectorAll("#nav-lis>li");
for (let i = 0; i < menu_c.length; i++) {
    menu_c[i].addEventListener('click', function () {

        var menu = document.querySelectorAll("#nav-lis>li>ul");

        for (let j = 0; j < menu.length; j++) {
            menu[j].style.display = "none";
        }
        this.children[1].style.display = "block";
    });
}
