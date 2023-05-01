fetch("/api/menu-items")
    .then(response => response.json())
    .then(function (response) {
        let menu = document.getElementById("menu")
        for (let el of response) {
            let li = document.createElement("li");
            li.classList.add("nav-item");
            li.innerHTML = "<a href='" + el.link + "' class='nav-link'>" + el.name + "</a>";
            menu.append(li);
        }
    })