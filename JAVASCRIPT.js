const knopa = document.querySelector('.knopa');
const pole = document.querySelector('.pole')
const slovar = document.querySelector('.slovar')
const translit = document.querySelector('.translit')
slovar.style.cssText = `
text-align: center;
`
translit.style.cssText = `
text-align: center;
`

/* knopa.onclick = function () {
    let val = pole.value
    slovar.innerHTML = val
}
 */

knopa.addEventListener('click', event => {
    event.preventDefault()
    let val = pole.value
    let ruDiv = document.createElement('div')
    ruDiv.style.cssText = `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`
    let enDiv = document.createElement('div')
    enDiv.style.cssText = `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`
    ruDiv.innerText = val
    ruDiv.title = val
    enDiv.innerText = translitRuEng(val)
    enDiv.title = translitRuEng(val)
    slovar.appendChild(ruDiv)
    translit.appendChild(enDiv)
})



function translitRuEng(word){
    let answer = '';
    let converter = {
        'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
        'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
        'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
        'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
        'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
        'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
        'э': 'e',    'ю': 'yu',   'я': 'ya',
 
        'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
        'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
        'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
        'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
        'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
        'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
        'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
    };
 
    for (let i = 0; i < word.length; ++i ) {
        if (converter[word[i]] === undefined){
            answer += word[i];
        } else {
            answer += converter[word[i]];
        }
    }
 
    return answer;
}




    
    

