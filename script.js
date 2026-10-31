function checkAnswer() {

    let selected = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (selected === null) {
        document.getElementById("rezultati").innerHTML =
            "Zgjidhni nje nga opsionet!";
    }
    else if (selected.value === "2") {
        document.getElementById("rezultati").innerHTML =
            "Sakt!";
    }
    else {
        document.getElementById("rezultati").innerHTML =
            "Gabim!";
    }

}