let joke = document.getElementById("jokes");
const newJokes = async () => {
    var txt = "jokes.txt";
    const data = await fetch(txt);
    // console.log( data);
    const alldata = await data.json();
    const newData = Math.floor(Math.random() * alldata.length);
    const NextJokes = alldata[newData].joke;
    joke.innerHTML = NextJokes;
}
newJokes()
