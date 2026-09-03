document.getElementById("formularyContact").addEventListener('submit', function(e) {
    e.preventDefault()
    
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    
    alert("Nombre: "+name.value +", Correo: "+email.value)
})