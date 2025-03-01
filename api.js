const URL = 'https://fun-facts1.p.rapidapi.com/api/fun-facts';
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '1490448b85msha4c285d5184fff6p1f2d17jsnd1b928b879ee', // Replace with your actual API key
        'x-rapidapi-host': 'fun-facts1.p.rapidapi.com'
    }
};

const getFacts = async () => {
    try {
        console.log("wait please...");
        let response = await fetch(URL, options);
        let result = await response.text();
        console.log(result);
        factPara.innerText = result;
    } catch (error) {
        console.error("Error data:", error);
    }
};

btn.addEventListener("click", getFacts);
