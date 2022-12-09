function myFunction() {
    let x = document.getElementById("slid");
    if (x.className === "navigation") {

        x.className += " open";
    } else {
        x.className = "navigation";
    }

    let slide = document.getElementById("divsearch");

    if (slide.className === "had-search") {
        slide.className += " had-searchClose";
    } else {
        slide.className = "had-search";
    }


    let fixBtn = document.getElementById("fixBtn");
    if (fixBtn.className === "fix-btn") {
        fixBtn.className += " BtnGone";
    } else {
        fixBtn.className = "fix-btn";
    }

    let ShowBtn = document.getElementById("Btns")
    if (ShowBtn.className === "Btn") {
        ShowBtn.className += " BtnShow";
    } else {
        ShowBtn.className = "Btn";
    }

}

function myFunction2(){
    let x = document.getElementById("slid");
    if (x.className === "navigation") {

        x.className += " open";
    } else {
        x.className = "navigation";
    }

    let ShowBtn = document.getElementById("Btns")
    if (ShowBtn.className === "Btn") {
        ShowBtn.className += " BtnShow";
    } else {
        ShowBtn.className = "Btn";
    }

    let fixBtn = document.getElementById("fixBtn");
    if (fixBtn.className === "fix-btn") {
        fixBtn.className += " BtnGone";
    } else {
        fixBtn.className = "fix-btn";
    }






}