document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3005/api/get/catalog');
    const result = await response.json();

    // console.log(result);

    if(results.success) {
        
    }
})