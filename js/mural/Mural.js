const Mural = (function (_render, Filtro) {
    "use strict"
    let cartoes = pegarCartoesUsuario();

    cartoes.forEach(cartao => {
        prepararCartao(cartao);

    });
    const render = () => _render({ cartoes: cartoes, filtro: Filtro.tagsETexto });
    render();

    function prepararCartao(cartao) {
        cartao.on("mudanca.**", saveCards)
        cartao.on("remocao", () => {
            cartoes = cartoes.slice(0)
            cartoes.splice(cartoes.indexOf(cartao), 1)
            saveCards();
            render()
        })
    }

    function saveCards() {
        localStorage.setItem(usuario, JSON.stringify(
            cartoes.map(cartao => ({
                conteudo: cartao.conteudo,
                tipo: cartao.tipo
            }))
        ));

    }

    function pegarCartoesUsuario() {
        let cartoesLocal = JSON.parse(localStorage.getItem(usuario));
        if (cartoesLocal) {
            return cartoesLocal.map(cardLocal => new Cartao(cardLocal.conteudo, cardLocal.tipo)) || [];
        } else {
            return []
        }
    }

    login.on('login', () => {
        cartoes = pegarCartoesUsuario();
        render();
    });

    login.on('logout', () => {
        cartoes = [];
        render();
    });

    function adiciona(cartao) {
        if (logado) {
            cartoes.push(cartao)
            saveCards();
            prepararCartao(cartao);
            render()
            return true
        } else {
            alert("você não esta logado")
        }
    }

    return Object.seal({
        adiciona
    })

})(Mural_render, Filtro)
