const display = document.getElementById('display');
display.value = 0;

const keys = document.getElementsByClassName('key');
Array.from(keys).forEach(key => {
    key.addEventListener('click', (e) => {
        const keyValue = e.target.textContent;

        if(keyValue === 'AC') {
            display.value = 0;
            return
        }

        if(keyValue === 'DE') {
            display.value = display.value.length > 1 ? display.value.slice(0, -1) : 0;
            return
        }

        if(keyValue === '=') {
            try {
                display.value = display.value.replace(/x/g, '*');
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Invalid input';
            }
            return
        }

        if(/[+-\/X.]/.test(keyValue) && /[+-\/X.]$/.test(display.value)) {
            return
        }

        const lastNumber = display.value.split(/[\+\-X\/]/).pop();
        if(keyValue === '.' && lastNumber.includes('.')) {
            return;
        }
        

       if(display.value === '0' && /\d/.test(keyValue)) {
        display.value = keyValue;
       } else {
        display.value += keyValue;
       }
    })
});


