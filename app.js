
const getJoke = document.querySelector('#getJoke');
const content = document.querySelector('#contentHere')

const joke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        let funny = res.data.joke;
        return jokeDisplay(funny);
    }
    catch (e) {
        const oops = `Oops, you have an error ${e}`;
        return jokeDisplay(oops)
    }
}

const jokeDisplay = (val) => {
    content.textContent = val;
}

getJoke.addEventListener('click', joke)

