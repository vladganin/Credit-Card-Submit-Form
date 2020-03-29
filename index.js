/* Handling the card number */
document.addEventListener("DOMContentLoaded", e => {
    let card_number_input = document.querySelector("#cardnumber"),
        card_number_display = document.querySelector("#cardnumber-display");

    let card_holder_input = document.querySelector("#cardholder"),
        card_holder_display = document.querySelector("#cardholder-display");

    let month_expiry_input = document.querySelector("#month"),
        year_expiry_input = document.querySelector("#year"),
        card_expiry_display = document.querySelector("#expiry-display");


    /* -------------------------------------------- */
    card_number_input.onkeydown = e => {
        let code = e.keyCode || e.charCode;

        let digit_ok = (code >= 48 && code <= 57) || (code >= 96 && code <= 105);
        let backspace_delete = code == 8 || code == 46;

        if (digit_ok || backspace_delete) {
            let grab_text = e.target.value;
            let text_length = grab_text.length;

            if (digit_ok && (text_length == 4 || text_length == 9 || text_length == 14))
                card_number_input.value = grab_text + " ";
        }
        else return false;
    }

    /* --------------------------------------------- */

    card_number_input.onkeyup = e => {
        let code = e.keyCode || e.charCode;

        let digit_ok = (code >= 48 && code <= 57) || (code >= 96 && code <= 105);
        let backspace_delete = code == 8 || code == 46;

        if (digit_ok || backspace_delete) {
            let grab_text = e.target.value;
            let text_length = grab_text.length;
            let digits = "XXXX XXXX XXXX XXXX".split('');

            if (digit_ok && (text_length == 4 || text_length == 9 || text_length == 14)) {
                digits[text_length] = " ";
            };
            for (let i = 0; i < text_length; i++) {
                digits[i] = grab_text.charAt(i);
            };
            card_number_display.innerText = digits.join('');
        }
        else return false;
    }
    /* --------------------------------------------- */

    card_holder_input.onkeyup = e => {
        card_holder_display.innerText = e.target.value;
    };

    /* --------------------------------------------- */

    month_expiry_input.onchange = e => {
        card_expiry_display.innerText = month_expiry_input.value;
    }

    year_expiry_input.onchange = e => {
        if (card_expiry_display.innerText.length > 3 || card_expiry_display.innerText == '') {
            card_expiry_display.innerText = '';
            return false;
        }
        else {
            card_expiry_display.innerText += '/' + year_expiry_input.value;
        }
    }
});