let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = (link unavailable);
        switch (value) {
            case 'clear':
                display.value = '';
                break;
            case 'backspace':
                display.value = display.value.slice(0, -1);
                break;
            case 'equals':
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
                break;
            default:
                display.value += value;
        }
    });
});
