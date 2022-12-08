

function myFunction() {
    let x = document.getElementById("slid");
    if (x.className === "navigation") {

        x.className += " open";
    } else {
        x.className = "navigation";
    }

    let btn = document.getElementById("fixBtn");
    if (btn.className === "fix-btn") {
        btn.className += " btnDissappper";
    } else {
        btn.className = "fix-btn";
    }

    let slide = document.getElementById("divsearch");

    if (slide.className === "had-search") {
        slide.className += " had-searchClose";
    } else {
        slide.className = "had-search";
    }
}