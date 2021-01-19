
        window.onscroll = function () {
            scroll();
        }
        function scroll() {
            let btn = document.getElementById("botaotop")
            if (document.documentElement.scrollTop > 50) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        }
        function backtotop() {
            document.documentElement.scrollTop = 0;
        }
        
        //mudar cor do site        
        var dark = document.getElementById('btnDark');
        var light = document.getElementById('btnLight');
        var body = document.querySelector('body');
        var lista = document.querySelector("#lista")
        var lista1 = document.querySelector("#lista1")
        var lista2 = document.querySelector("#lista2")
        var lista3 = document.querySelector("#lista3")
        var lista4 = document.querySelector("#lista4")
        var titulo = document.querySelector("#titulo")
        var texto = document.querySelector("#texto")
        var texto2 = document.querySelector("#texto2")
        var objetivos = document.querySelector("#objetivos")
        var sobremim = document.querySelector("#sobremim")
        var conhecimentos = document.querySelector("#conhecimentos")
        var ponto = document.querySelector("#ponto")
        var ponto1 = document.querySelector("#ponto1")
        var ponto2 = document.querySelector("#ponto2")
        var ponto3 = document.querySelector("#ponto3")
        var creditos = document.querySelector("#creditos")
        var nome = document.querySelector("#nome")






        dark.onclick = function(){
        body.className = "dark";
        titulo.className= "titulo_dark";
        lista.className = "lista_dark";
        lista1.className = "lista_dark1";
        lista2.className = "lista_dark2";
        lista3.className = "lista_dark3";
        lista4.className = "lista_dark4";
        texto.className ="texto_dark";
        texto2.className ="texto_dark2";
        objetivos.className = "objetivos_dark";
        sobremim.className = "sobremim_dark";
        conhecimentos.className = "conhecimentos_dark";
        ponto.className = "ponto_dark";
        ponto1.className = "ponto_dark1";
        ponto2.className = "ponto_dark2";
        ponto3.className = "ponto_dark3";
        creditos.className = "creditos_dark";
        nome.className = "nome_dark";
        }

        light.onclick = function(){
        body.className = "light";
        titulo.className = "titulo_light";
        lista.className = "lista_light";
        lista1.className = "lista_light1";
        lista2.className = "lista_light2";
        lista3.className = "lista_light3";
        lista4.className = "lista_light4";
        texto.className = "texto_light";
        texto2.className = "texto_light2";
        objetivos.className = "objetivos_light";
        sobremim.className = "sobremim_light";
        conhecimentos.className = "conhecimentos_light";
        ponto.className = "ponto_light";
        ponto1.className = "ponto_light1";
        ponto2.className = "ponto_light2";
        ponto3.className = "ponto_light3";
        creditos.className = "creditos_light";
        nome.className = "nome_light";
    }