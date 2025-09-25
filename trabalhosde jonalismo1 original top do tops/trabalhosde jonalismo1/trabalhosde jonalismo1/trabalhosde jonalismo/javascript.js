 function toggleMenu() {
            const menu = document.getElementById('side-menu');
            const overlay = document.getElementById('menu-overlay');
            if (menu.classList.contains('-translate-x-full')) {
                menu.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
            } else {
                menu.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        }

        function showMessage(messageText, onClose) {
   
    const message = document.createElement('div');
    message.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl text-center z-50';
    message.innerHTML = `
        <p class="text-lg font-bold mb-2">${messageText}</p>
        <button onclick="this.parentElement.remove(); ${onClose ? onClose() : ''}" class="mt-4 px-4 py-2 bg-[#2c3e50] text-white rounded-md">Fechar</button>
    `;
    
    document.body.appendChild(message);
}


function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    showMessage(`Login Clicado!<br>Email: ${email}`);
}


function handleReset() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    showMessage('Campos redefinidos.');
}
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const resetButton = document.getElementById('resetButton');

    
    if (loginButton) {
        loginButton.addEventListener('click', handleLogin);
    }

    if (resetButton) {
        resetButton.addEventListener('click', handleReset);
    }
});
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const messageBox = document.getElementById('message-box');
    const messageTitle = document.getElementById('message-title');
    const messageText = document.getElementById('message-text');

    if (email === 'admin@admin.com' && password === 'admin') {
        
        window.location.href = "segundapagina.html"; 
    } else {
        messageTitle.textContent = "Erro!";
        messageText.textContent = "Email ou senha incorretos. Por favor, tente novamente.";
        messageBox.classList.remove('hidden');
    }
});

document.getElementById('message-close').addEventListener('click', function() {
    document.getElementById('message-box').classList.add('hidden');
});
