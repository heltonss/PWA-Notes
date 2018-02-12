let logado = JSON.parse(localStorage.getItem('logado'));
let usuario = JSON.parse(localStorage.getItem('usuario'));
let login = new EventEmitter2();

LoginUsuario_render({
    logado: logado,
    usuario: localStorage.getItem('nameUser'),
    onLogin: (nameUser) => {
        logado = true;
        localStorage.setItem('logado', true);
        localStorage.setItem('nameUser', nameUser);
        usuario = nameUser
        login.emit('login')
    },
    onLogout: () => {
        logado = false;
        localStorage.setItem('logado', false);
        localStorage.removeItem('nameUser');
        login.emit('logout')
    }
})
