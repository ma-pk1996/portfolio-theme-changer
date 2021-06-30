
let theme = localStorage.getItem('theme')

if (theme == null) {
    settheme('light')
}else{
    settheme(theme)
}

let themedot = document.getElementsByClassName('theme-dot');


for (var index = 0; themedot.length > index ; index++) {
    themedot[index].addEventListener('click',function(){
        let mode = this.dataset.mode 
        console.log('option clicked:',mode);
        settheme(mode);
    });
    
}

function settheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'
    }
    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'themeone.css'
    }
    if (mode == 'green') {
        document.getElementById('theme-style').href = 'themetwo.css'
    }
    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'themethree.css'
    }
    localStorage.setItem('theme',mode)
}