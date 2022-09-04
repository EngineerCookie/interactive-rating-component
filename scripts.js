const rateOption = document.querySelectorAll('[data-rating]');
const rateWin = document.getElementById('rate-me');
const tyWin = document.getElementById('thank-you');
const submitBtn = document.querySelector('#submit-btn');
const warningMsg = document.getElementById('warning');

rateOption.forEach ((btn) => {
    btn.addEventListener('click', () => {
        rateOption.forEach ((option) => { //reset selected
            option.classList.remove('selected');
            option.setAttribute('aria-checked', false);
            warningMsg.classList.remove('active'); //warning message remove
            warningMsg.setAttribute('aria-hidden', true);
        });
        btn.classList.add('selected');
        btn.setAttribute('aria-checked', true);
    })
})

submitBtn.addEventListener('click', () => {
    const rateSelect = document.querySelector('.selected');
    if (rateSelect) {
        const rateValue = rateSelect.value;
        const message = document.querySelector('[data-result]');
        let result = `You selected ${rateValue} out of 5`;

        message.innerHTML = result;
        
        tyWin.classList.remove('hidden');
        rateWin.classList.add('hidden');

    } else {
        console.log('please select a rating')
        warningMsg.classList.add('active') //waning message add
        warningMsg.setAttribute('aria-hidden', false);
    }
    
})