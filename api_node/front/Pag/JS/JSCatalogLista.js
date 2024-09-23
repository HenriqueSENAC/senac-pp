document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('https://localhost:3005/api/get/catalog');
    const result = await response.json();

    console.log(result);
})