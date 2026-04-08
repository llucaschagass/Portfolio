export const portfolioData = {
  personalInfo: {
    name: "Lucas Chagas",
    roles: ["Desenvolvedor Frontend", "Desenvolvedor Backend"],
    description: "Sou estudante de Engenharia da Computação e estou buscando conhecimento, sempre buscando evoluir a cada dia dando meu melhor para entregar bons resultados.",
    about: "Tenho a ambição de me tornar um desenvolvedor fullstack com conhecimento em outras áreas como análise de dados e IOT. Atualmente me dedico a estudar Back-end com foco em C# e Java, enquanto melhoro de forma exponencial meus conhecimentos em Front-End.",
    email: "lucasgschagas@gmail.com",
    phone: "(31) 99694-7978",
    location: "Ibirité - Minas Gerais - Brasil",
    socials: {
      github: "https://github.com/llucaschagass",
      linkedin: "https://www.linkedin.com/in/llucaschagass/",
      whatsapp: "https://api.whatsapp.com/send?phone=5531996947978&text=Olá Lucas! Estou entrando em contato pelo seu portfólio"
    },
    cvUrl: "/Curriculo_2023.pdf" // Note: need to move this later
  },
  stats: [
    { label: "Projetos Completos", value: "5+" },
    { label: "Ano de experiência", value: "1+" },
    { label: "Tecnologias estudadas", value: "5+" },
    { label: "Cursos Complementares", value: "4+" }
  ],
  skills: [
    { name: "JavaScript", level: "Intermediário", percentage: 40 },
    { name: "CSS3", level: "Intermediário", percentage: 60 },
    { name: "HTML5", level: "Intermediário", percentage: 80 },
    { name: ".Net", level: "Intermediário", percentage: 40 },
    { name: "MySQL", level: "Básico", percentage: 20 },
    { name: "Office", level: "Avançado", percentage: 80 }
  ],
  experience: [
    {
      title: "Engenharia de Computação",
      institution: "Centro Universitário UNA",
      duration: "2021/08 - Atualmente",
      description: "Desenvolvimento, implementação e manutenção de sistemas computacionais. Foco em C# e Java para produtos e sistemas."
    },
    {
      title: "Técnico em Eletrônica",
      institution: "CEFET",
      duration: "2018 - 2019",
      description: "Projetos eletrônicos, manutenção de dispositivos e lógica de programação."
    }
  ],
  projects: [
    {
      title: "Estacionamento",
      githubUrl: "https://github.com/llucaschagass/Desafio-Sistema-de-Estacionamento.git",
      image: "/projects/github.png"
    },
    {
      title: "Scratch Code",
      githubUrl: "https://github.com/llucaschagass/Projeto-Scratch-Code.git",
      image: "/projects/github.png"
    },
    {
      title: "Pokedex",
      githubUrl: "https://github.com/llucaschagass/Pokedex.git",
      image: "/projects/github.png"
    }
  ]
};
