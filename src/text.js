export function writeToScreen(){
    document.write('Hello world from Webpack!')
}

export function changeH1(text){
    document.querySelector('h1').innerText = text + '!'
}
