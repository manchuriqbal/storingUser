// finding Elements 
const selectFontSize = document.querySelector('#selectFontSize');
const selectBgColor = document.querySelector('#selectBgColor');
const clearBtn = document.querySelector('#btn');
const mainElement = document.querySelector('main');

const shareStorage = (fontSize, bgColor)=> {
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
}



// load localStorage 

const savelocalStorage = () => {
    const fontSize = localStorage.getItem('fontSize');
    const bgColor = localStorage.getItem('bgColor');

    if (fontSize && bgColor) {
        shareStorage(fontSize, bgColor);
    }
    if (!fontSize && !bgColor) {
        shareStorage('16px', 'aqua');
    }
    if (fontSize && !bgColor) {
        shareStorage(fontSize, 'aqua');
    }
    if (!fontSize && bgColor) {
        shareStorage('16px', bgColor);
    }
    
}


// change Font Size

const changeFontSize = (event) => {
   const selectedFontSize = event.target.value;
   mainElement.style.fontSize = selectedFontSize;
   localStorage.setItem('fontSize', selectedFontSize);
}

// change BG Color

const changeBgColor = (event) => {
    const selectedBgColor = event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem('bgColor', selectedBgColor);
}
// reset clear Btn

const resetBtn = () => {
    localStorage.removeItem('bgColor');
    localStorage.removeItem('fontSize');
    shareStorage('16px', 'aqua')
}

// add event listaner 

selectFontSize.addEventListener('change', changeFontSize);
selectBgColor.addEventListener('change', changeBgColor);
clearBtn.addEventListener('click', resetBtn);

savelocalStorage();
