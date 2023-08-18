async function getData(url) {
    const contextUnorderdList = document.getElementById('characterList')
    try {
        const characterData = await (await fetch(url)).json()
        const results = (characterData.results).slice(0, 20)
        for (let item of results) {
            contextUnorderdList.innerHTML +=
                `
                <li>
                <h3>${item.name}</h3>
                <img src='${item.image}' alt= '${item.name}'>
                <p>Location: ${item.location.name}</p>
                <p>Species: ${item.species}</p>
                <p>Gender: ${item.gender}</p>
                </li>
            `
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        characterList.innerHTML = '<p>An error occurred while fetching data.</p>';
    }
}

getData('https://rickandmortyapi.com/api/character?status=alive')