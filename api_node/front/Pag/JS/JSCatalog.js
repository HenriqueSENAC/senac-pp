let button = document.getElementById("handleSubmit")

button.onclick = async function() {
    let form = document.getElementById("formulario");
    let dadosForm = new FormData(form);
    
    const response = await fetch('http://localhost:3005/api/store/catalog', {
        method: "POST",
        body: dadosForm
    })

    let content = await response.json();

    if(content.success) {
        alert("Success!")
    } else {
        alert("Não deu certo!!!")
        console.log(content.sql);
    }
}

