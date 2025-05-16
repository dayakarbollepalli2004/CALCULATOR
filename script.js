let string = ""; 
let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML.trim();

        if (value === '=') {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (err) {
                document.querySelector('input').value = "Error";
                string = "";
            }
        } else if (value.toUpperCase() === 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else {
            string += value;
            document.querySelector('input').value = string;
        }
    });
});

