
        window.onscroll = function () {
            scroll();
        }
        function scroll() {
            let btn = document.getElementById("botaotop")
            if (document.documentElement.scrollTop > 65) {
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
        var tradutor = document.getElementById('btnTradutor');
        var tradutorPort = document.getElementById('btnTradutorPort')
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
        var botao = document.querySelector("#botaotop")







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
        botao.className= "botao_dark";
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
        botao.className= "botao_light";

    }



    tradutor.onclick = function(){
        titulo.textContent = 'Welcome to my profile';

        sobremim.textContent = 'A little about me:';    
        texto.textContent = 'My contact with technology started since I was a baby, since then as always I was a very curious person, i started trying to understand this world of programs and programming at the computer that I had at home and with the passing of time I have been creating a taste for the computer area, and today I have already completed two courses in person, the first one in 2017 of computer maintenance at SABSA and the second that was from 2019 until the end of 2020 which is the technical course of Analysis and development of systems at ETEC CPS, and I have also studied for several online courses by Udemy, Video Course, Digital Innovation One. As I realized along the courses that this is what I wanted for my life, in 2021 I entered in a university to study system of information and I am always trying to improve my knowledge everyday.'; 
        lista.textContent = 'ease of learning';
        lista1.textContent = 'good at teamwork';
        lista2.textContent = 'improving knowledge every day';
        lista3.textContent = 'I am a self-taught person';
        lista4.textContent = 'ease of communication';

        objetivos.textContent = 'professional goals:';
        texto2.textContent = 'I am always looking for learning and continuous improvement, looking for a place where I can work that I leave my comfort zone every day to always have evolution, and also that I can offer a good life to my family';

        conhecimentos.textContent = 'Knowledges:';
        ponto.textContent = 'Fluent English';
        ponto1.textContent = 'Strong knowledge in: C #, HTML, CSS, MySql, TypeScript, React Native, Git.';
        ponto2.textContent = 'Average knowledge in: JavaScript, ReactJS, PHP';
        ponto3.textContent = 'Low knowledge in: Java, Python';  
        
        creditos.textContent = "Website developed by Vitor Faccio"
    }

    tradutorPort.onclick = function(){
        titulo.textContent = 'Bem vindo ao meu perfil!';

        sobremim.textContent = 'Um pouco sobre mim:';
    
        texto.textContent = 'Meu contato com a tecnologia começou desde bebê, desde então como sempre fui uma pessoa muito curiosa, comecei a fuçar no computador que tinha em casa e com o passar do tempo fui criando gosto pela área da informática, e hoje em dia ja completei dois cursos presenciais e, o primeiro em 2017 de manutenção de computadores no SABSA e o segundo que foi de 2019 até final de 2020 que é o curso técnico de Análise e desenvolvimento de sistemas na ETEC CPS, e também ja estudei por diversos cursos online pela Udemy, Curso Em Video, Digital Innovation One. Como percebi ao longo dos cursos que era isso que eu queria pra minha vida, em 2021 me matriculei em uma universidade para estudar sistema da informação e sempre tentando melhorar meus conhecimentos a cada dia.'; 
        lista.textContent = 'Tenho facilidade para aprender';
        lista1.textContent = 'Bom em equipe';
        lista2.textContent = 'Melhorando conhecimentos a cada dia';
        lista3.textContent = 'Autodidata';
        lista4.textContent = 'Facilidade de comunição';

        objetivos.textContent = 'Objetivos profissionais:';
        texto2.textContent = 'Estou sempre em busca de aprendizado e de melhoria continua, em busca de um lugar que eu possa trabalhar onde eu saiá da minha zona de conforto todos os dias para que sempre haja evolução, e também que eu possa oferecer uma vida boa à minha familia.';

        conhecimentos.textContent = 'Conhecimentos:';
        ponto.textContent = 'Inglês fluente';
        ponto1.textContent = 'Conhecimento forte em: C#, HTML, CSS, MySql, TypeScript, React Native, Git.';
        ponto2.textContent = 'Conhecimento médio em: JavaScript, ReactJS, PHP';
        ponto3.textContent = 'Conhecimento baixo em: Java, Python';     
        
        creditos.textContent = 'Site desenvolvido por Vitor Faccio';
    }