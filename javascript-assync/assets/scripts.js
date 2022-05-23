const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catIMg = document.getElementById('cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    } catch (error) {
        console.log(error.message);
    }
    
}

const loadImg = async () => {
    catIMg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();