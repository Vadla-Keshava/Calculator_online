
let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {

        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                if (string !== "") {
                    let expression = string
                        .replace(/×/g, "*")
                        .replace(/÷/g, "/")
                        .replace(/%/g, "/100");

                    string = String(eval(expression));
                    input.value = string;
                }
            } catch {
                input.value = "Error";
                string = "";
            }
        }

        else if (value === "AC") {
            string = "";
            input.value = "";
        }

        else if (value === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else {
            string += value;
            input.value = string;
        }

    });
});
