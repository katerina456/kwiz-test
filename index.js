let title = document.querySelector('.step-title');
let step = +title.querySelector('span').textContent;

let blocks = document.querySelectorAll('.step-block-item');
for (let i = 0; i < step; i++) {
    blocks[i].style.backgroundColor = '#FFC930';
}


let buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {       
        let flag = btn.classList.contains('button-yellow');

        if (flag) {
            let input = document.querySelector('input');
            let check = checkInputs(input);

            if (!check) {
                let mistake = document.querySelector('.mistake');
                showMistake(mistake);
                setTimeout(() => hideMistake(mistake), 2000);
            }

            if (step > 1 && step < 6 && check) {
                let href = step === 3? `step6.html` : `step${step + 1}.html`;
                window.location.href = href;
            } else if (step === 1 && check) {
                window.location.href = 'pages/step2.html'
            }   
        } else if (step !== 1){
            let href = step - 1 === 1 ? '../index.html' : `step${step - 1}.html`;
            href = step === 6 ? 'step3.html' : href;
            window.location.href = href;
        }
    })
});


if (step === 6) {
    let countBox = document.querySelector('.step-count');
    let count = countBox.querySelector('span');
    let slider = document.querySelector('.slider');
    slider.addEventListener('input', () => {
        count.textContent = slider.value;
        slider.style.background = `linear-gradient(to right, #FFC930 ${(slider.value-1)*100/24}%,  #F6F6F6 ${(slider.value-1)*100/24}%)`
    })
}


function checkInputs(input) {
    if (input.type === 'radio' || input.type === 'checkbox') {
        let a = document.querySelector(`input[name=${input.name}]:checked`);
        return a !== null;
    } else {
        return true;
    }
}

function showMistake(mistake) {
    mistake.style.display = 'block';
}

function hideMistake(mistake) {
    mistake.style.display = 'none';
}
