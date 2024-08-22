// Cadastro
async function cadastrar(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;  
    let senhaAuth = document.getElementById("senhaAuth").value;
    let cel = document.getElementById("cel").value;  

    if(email.trim() === '' || senha.trim() === '' || cel.trim() === '') {
        alert('Porfavor preencha os campos necessários!');
    } else {
        if(senhaAuth.trim() != senha.trim()) {
            alert('Senhas não concidem');
        } else {
            let data = {email, senha, cel}

            const response = await fetch('http://localhost:3005/api/store/user', {
                method: "POST",
                headers: {"Content-type": "application/json;charset=UTF-8"},
                body: JSON.stringify(data)
            });

            let content = await response.json();    
                console.log("content")
            if(content.success) {
                alert("Sucesso")
            } else {
                alert('Erro');
            }
        }
    }
}


// Login
let button = document.getElementById("handleSubmit");

button.onclick = async function() {
  let email = document.getElementById("emailLogin").value;
  let senha = document.getElementById("senhaLogin").value;  
   

    if(email.trim() === '' || senha.trim() === '') {
        alert('Credenciais incorretas');
    } else {
        let data = {email,senha}

        const response = await fetch('http://localhost:3005/api/auth/login', {
          method: "POST",
          headers: {"Content-type": "application/json;charset=UTF-8"},
          body: JSON.stringify(data)
        });

        let content = await response.json();    

        if(content.success) {
          alert("Login feito");
          window.location.replace("MainPage.html")

        } else {
          alert('Error')
        }
    }}


// ShowPSSWRD
// Card Cadastro
function SignInFunction() {
    var x = document.getElementById("senha");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    };
};

// Card Login
function LoginFunction() {
    var x = document.getElementById("senhaLogin");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}   