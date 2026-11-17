const cv = {
    foto: "foto.jpg.jpeg",
    nome: "Lukas Heldt",
    cargo: "Estagiário de TI Full stack",
    contatos: [
      "Suzano, São Paulo - Brasil",
      '<a href="mailto:lukasheldt09@gmail.com">lukasheldt09@gmail.com</a>',
      "(11) 94508-0813",
      '<a href="https://github.com/lukasheldt09" target="_blank">github.com/lukasheldt09</a>',
      '<a href="https://www.linkedin.com/in/lukas-heldt-612ba026b/" target="_blank">LinkedIn</a>'
    ],
    resumo: "Tenho 19 anos e sou estudante do 2º semestre de Análise e Desenvolvimento de Sistemas (ADS). Estou em busca da minha primeira oportunidade profissional na área de Tecnologia da Informação (TI), especialmente como estagiário, para colocar em prática meus conhecimentos, desenvolver novas habilidades e adquirir experiência no mercado de trabalho. Sou dedicado, responsável, proativo e tenho muita vontade de aprender e crescer profissionalmente.",
    experiencia: [
      {
        titulo: "Prefeitura Municipal de Suzano",
        data: "Set/2024 - Atual",
        detalhe: "Bolsista | Suzano",
        texto: "Realizo diversas tarefas diarias administrativas como organização de documentos, produção de planilhas e entre outros, lido bem com trabalho em grupo e tenho habilidades como comunicação clara e pacote Oficce  "
      }
    ],
    formacao: [
      {
        titulo: "Análise e Desenvolvimento de Sistemas (ADS) - Ensino Superior",
        data: "Cursando - 2º semestre",
        detalhe: "Instituição: UNIPIAGET"
      }
    ],
    projetos: [
      {
        titulo: "Tabela de comidas",
        detalhe: "Tecnologias: HTML, CSS, JavaScript, GitHub Pages",
        texto: "Desenvolvi uma tabela de comidas utilizando HTML, CSS e JavaScript, hospedado no GitHub Pages. O projeto apresenta uma tabela organizada com informações sobre comidas, incluindo nome, preço  e categoria. Utilizei HTML para estruturar a página, CSS para estilizar e organizar a interface e GitHub Pages para disponibilizar o projeto online. Essa experiência contribuiu para aprimorar meus conhecimentos em desenvolvimento web, organização de informações e versionamento de projetos.",
        link: "https://lukasheldt09.github.io/comidas/"
      }
    ],
    tecnicas: ["HTML - Básico", "CSS - Básico", "JavaScript - Básico"],
    ferramentas: ["Git", "VS Code"],
    comportamentais: [
      "Trabalho em equipe", "Comunicação", "Aprendizado rápido", "Responsabilidade",
      "Proatividade", "Organização", "Resolução de problemas", "Adaptabilidade"
    ],
    idiomas: ["Português - Nativo", "Inglês - Intermediário"],
    adicionais: [
      "Disponibilidade: imediata",
      "Modelo de trabalho: qualquer modelo",
      "Disponibilidade para viagens: sim",
      "Interesse: estagiário de TI, em qualquer setor",
      "Locais: Suzano, Mogi das Cruzes, São Paulo e remoto"
    ]
  };
  
  const $ = (id) => document.getElementById(id);
  
  document.title = cv.nome + " - Currículo";
  $("nome").textContent = cv.nome;
  $("cargo").textContent = cv.cargo;
  $("resumo").textContent = cv.resumo;
  
  const foto = $("foto");
  foto.alt = "Foto de " + cv.nome;
  foto.onerror = () => {
    console.log("Foto não encontrada: " + cv.foto + ". Confira o nome do arquivo na pasta.");
    foto.style.display = "none";
  };
  foto.src = cv.foto;
  
  ["contatos", "tecnicas", "ferramentas", "comportamentais", "idiomas", "adicionais"].forEach((id) => {
    $(id).innerHTML = cv[id].map((item) => `<li>${item}</li>`).join("");
  });
  
 ["experiencia", "formacao", "projetos"].forEach((id) => {
    $(id).innerHTML = cv[id].map((i) => `
      <div class="item">
        <div class="item-topo">
          <h3>${i.titulo}</h3>
          <span class="data">${i.data || ""}</span>
        </div>
        ${i.detalhe ? `<p class="detalhe">${i.detalhe}</p>` : ""}
        ${i.texto ? `<p>${i.texto}</p>` : ""}
        ${i.link ? `<p><a href="${i.link}" target="_blank">${i.link.replace("https://", "")}</a></p>` : ""}
      </div>`).join("");
  });