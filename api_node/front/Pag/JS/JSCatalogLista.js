document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3005/api/get/catalog');
    const result = await response.json();

    console.log(result);

    if(result.success) {
        const catalogList = document.querySelector('.catalog-list');
        result.data.forEach(catalog => {
            const card = document.createElement('div');
            card.className = 'catalog-card';

            const img = document.createElement('img');
            img.src = catalog.item_img;

            const infoDiv = document.createElement('div');
            infoDiv.className = 'info';

            const name = document.createElement('h2');
            name.textContent = catalog.item_name;

            const description = document.createElement('p');
            description.textContent = catalog.item_description;

            const pLink = document.createElement('p');
            pLink.textContent = catalog.item_link;

            infoDiv.appendChild(name);
            infoDiv.appendChild(description);
            infoDiv.appendChild(pLink);

            card.appendChild(img);
            card.appendChild(infoDiv);

            catalogList.appendChild(card);
        })
    } else {
        console.log(err);
    }
})