
    window.onscroll = function () {
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
        
    document.getElementById('btnDark').onclick = function(){
        document.querySelector('body').className = "dark";
        document.querySelector("#botaotop").className= "botao_dark";

        document.querySelector("#nome").className = "nome_dark";

        document.querySelector("#titulo").className= "titulo_dark";

        document.querySelector("#sobremim").className = "conhecimentos_dark";
        document.querySelector("#texto").className ="lista_dark";
        document.querySelector("#lista").className = "lista_dark";
        document.querySelector("#lista1").className = "lista_dark";
        document.querySelector("#lista2").className = "lista_dark";
        document.querySelector("#lista3").className = "lista_dark";
        document.querySelector("#lista4").className = "lista_dark";

        document.querySelector("#objetivos").className = "conhecimentos_dark";
        document.querySelector("#texto2").className ="lista_dark";

        document.querySelector("#experienciaProfissional").className = "conhecimentos_dark";
        document.querySelector("#empresa1").className = "lista_dark";
        document.querySelector("#textExp1").className = "lista_dark";
        document.querySelector("#textExp2").className = "lista_dark";

        document.querySelector("#conhecimentos").className = "conhecimentos_dark";
        document.querySelector("#ponto").className = "lista_dark";
        document.querySelector("#ponto1").className = "lista_dark";
        document.querySelector("#ponto2").className = "lista_dark";

        document.querySelector("#creditos").className = "creditos_dark";
    }

    document.getElementById('btnLight').onclick = function(){
        document.querySelector('body').className = "light";
        document.querySelector("#botaotop").className= "botao_light";

        document.querySelector("#titulo").className = "titulo_light";

        document.querySelector("#nome").className = "nome_light";

        document.querySelector("#sobremim").className = "conhecimentos_light";
        document.querySelector("#texto").className = "lista_light";
        document.querySelector("#lista").className = "lista_light";
        document.querySelector("#lista1").className = "lista_light";
        document.querySelector("#lista2").className = "lista_light";
        document.querySelector("#lista3").className = "lista_light";
        document.querySelector("#lista4").className = "lista_light";

        document.querySelector("#objetivos").className = "conhecimentos_light";         
        document.querySelector("#texto2").className = "lista_light";


        document.querySelector("#experienciaProfissional").className = "conhecimentos_light";
        document.querySelector("#empresa1").className = "lista_light";
        document.querySelector("#textExp1").className = "lista_light";
        document.querySelector("#textExp2").className = "lista_light";

        document.querySelector("#conhecimentos").className = "conhecimentos_light";
        document.querySelector("#ponto").className = "lista_light";
        document.querySelector("#ponto1").className = "lista_light";
        document.querySelector("#ponto2").className = "lista_light";

        document.querySelector("#creditos").className = "creditos_light";
    }


    document.getElementById('btnTradutor').onclick = function(){
        document.querySelector("#titulo").textContent = 'Welcome to my profile';

        document.querySelector("#sobremim").textContent = 'A little about me:';    
        document.querySelector("#texto").textContent = 'My contact with technology started since I was a baby, since then as always I was a very curious person, i started trying to understand this world of programs and programming at the computer that I had at home and with the passing of time I have been creating a taste for the computer area, and today I have already completed two courses in person, the first one in 2017 of computer maintenance at SABSA and the second that was from 2019 until the end of 2020 which is the technical course of Analysis and development of systems at ETEC CPS, and I have also studied for several online courses by Udemy, Video Course, Digital Innovation One. As I realized along the courses that this is what I wanted for my life, in 2021 I entered in a university to study system of information and I am always trying to improve my knowledge everyday.'; 
        document.querySelector("#lista").textContent = 'ease of learning';
        document.querySelector("#lista1").textContent = 'good at teamwork';
        document.querySelector("#lista2").textContent = 'improving knowledge every day';
        document.querySelector("#lista3").textContent = 'I am a self-taught person';
        document.querySelector("#lista4").textContent = 'ease of communication';

        document.querySelector("#objetivos").textContent = 'Professional goals:';
        document.querySelector("#texto2").textContent = 'I am always looking for learning and continuous improvement, looking for a place where I can work that I leave my comfort zone every day to always have evolution, and also that I can offer a good life to my family';

        document.querySelector("#experienciaProfissional").textContent = 'Professional Experiences'
        document.querySelector("#textExp1").textContent = '->Intern (01/02/2021 - 03/08/2021)'
        document.querySelector("#textExp2").textContent = '->Trainee developer (04/08/2021 - Until now)'

        document.querySelector("#conhecimentos").textContent = 'Knowledges:';
        document.querySelector("#ponto").textContent = 'Advanced English';
        document.querySelector("#ponto1").textContent = 'Greatest experiences in: C#, WebApi, MicroServiços, .NET/.NET Core e Git.';
        document.querySelector("#ponto2").textContent = 'Experiences in: Docker, ASP NET/ ASP NET CORE, SqlServer, MongoDB, HTML, CSS, JavaScript, React Native, Typescript.';
        
        document.querySelector("#creditos").textContent = "Website developed by Vitor Faccio"
    }

    document.getElementById('btnTradutorPort').onclick = function(){

        document.querySelector("#titulo").textContent = 'Bem vindo ao meu perfil!';

        document.querySelector("#sobremim").textContent = 'Um pouco sobre mim:';
    
        document.querySelector("#texto").textContent = 'Meu contato com a tecnologia começou desde bebê, desde então como sempre fui uma pessoa muito curiosa, comecei a fuçar no computador que tinha em casa e com o passar do tempo fui criando gosto pela área da informática, e hoje em dia ja completei dois cursos presenciais e, o primeiro em 2017 de manutenção de computadores no SABSA e o segundo que foi de 2019 até final de 2020 que é o curso técnico de Análise e desenvolvimento de sistemas na ETEC CPS, e também ja estudei por diversos cursos online pela Udemy, Curso Em Video, Digital Innovation One. Como percebi ao longo dos cursos que era isso que eu queria pra minha vida, em 2021 me matriculei em uma universidade para estudar sistema da informação e sempre tentando melhorar meus conhecimentos a cada dia.'; 
        document.querySelector("#lista").textContent = 'Tenho facilidade para aprender';
        document.querySelector("#lista1").textContent = 'Bom em equipe';
        document.querySelector("#lista2").textContent = 'Melhorando conhecimentos a cada dia';
        document.querySelector("#lista3").textContent = 'Autodidata';
        document.querySelector("#lista4").textContent = 'Facilidade de comunição';

        document.querySelector("#objetivos").textContent = 'Objetivos profissionais:';
        document.querySelector("#texto2").textContent = 'Estou sempre em busca de aprendizado e de melhoria continua, em busca de um lugar que eu possa trabalhar onde eu saiá da minha zona de conforto todos os dias para que sempre haja evolução, e também que eu possa oferecer uma vida boa à minha familia.';

        document.querySelector("#conhecimentos").textContent = 'Conhecimentos:';
        document.querySelector("#ponto").textContent = 'Inglês avançado';
        document.querySelector("#ponto1").textContent = 'Maioires experiências em: C#, WebApi, MicroServiços, .NET/.NET Core e Git.';
        document.querySelector("#ponto2").textContent = 'Experiências em: Docker, ASP NET/ ASP NET CORE, SqlServer, MongoDB, HTML, CSS, JavaScript, React Native, Typescript.';
        
        document.getElementById("creditos").textContent = 'Site desenvolvido por Vitor Faccio';
    }