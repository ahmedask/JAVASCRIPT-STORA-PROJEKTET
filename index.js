const searchFrom = document.querySelector('.search'); // Det är för search
const input = document.querySelector('.input'); // Det är för input
const newsList = document.querySelector('.news-list'); // Det är för nyhetslistan

searchFrom.addEventListener('submit', retrieve)// det gör att den laddar sidan

function retrieve (e) { // efter den proccen så funkar denna funktion

    newsList.innerHTML = ''; // uppdatera sidan när man söker så att först meningen man söker försvinner

    e.preventDefault() //den hindra att den inte gör reloading. Man får topic man söker driekt istället

    const apiKey = '073630094ffe430aa72734ba6aaf3655' // hämtade denna information från apinews

    let topic = input.value; // topic är nyheterna vi vill ha från input
    //  console.log(topic)
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}` // hämtade url från newsapi där efter skriv in topic och apiKey med ${} för att få den att funka
   

    fetch(url)// det är js fetch api som är byggt in
    .then((res) =>{ 
        return res.json()// man vill få tbx resp json for map
    }).then((data)=>{ // man for json data här tex det artiklar man söker tex.
    console.log(data)
    data.articles.forEach(article=>{
        let li = document.createElement('li');
        let a = document.createElement ('a');
        a.setAttribute('href', article.url);
        a.setAttribute('target', 'blank')
        a.textContent = article.title; // när man söker efter nått så kommer huvudrubrik/titlet på det man har sökt
        li.appendChild(a);
        newsList.appendChild(li);
    })

})

    }
