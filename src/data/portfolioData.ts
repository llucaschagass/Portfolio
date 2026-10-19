export const portfolioData = {
  personalInfo: {
    name: "Lucas Chagas",
    roles: ["Desenvolvedor Frontend", "Desenvolvedor Backend"],
    description: "Sou estudante de Engenharia da Computação e estou buscando conhecimento, sempre buscando evoluir a cada dia dando meu melhor para entregar bons resultados.",
    about: [
      "Sou formado em Engenharia da Computação e trabalho como desenvolvedor Full Stack, sempre atrás de soluções eficientes, escaláveis e bem escritas.",
      "Minha paixão por tecnologia começou na infância, de tanto querer entender como os aparelhos eletrônicos funcionavam por dentro. No curso técnico em Eletrônica escrevi meu primeiro código, em C para microcontroladores, e foi ali que o software me conquistou.",
      "Depois vieram HTML, CSS e JavaScript e, com o tempo, TypeScript, SQL, Java, C#, Angular e Flutter, construindo e mantendo aplicações web, APIs e integrações.",
      "Hoje busco evoluir sempre, cuidar da qualidade do código e resolver problemas com soluções que unam performance, boa arquitetura e uma boa experiência para quem usa."
    ],
    email: "lucasgschagas@gmail.com",
    phone: "(31) 99694-7978",
    location: "Betim - Minas Gerais - Brasil",
    socials: {
      github: "https://github.com/llucaschagass",
      linkedin: "https://www.linkedin.com/in/llucaschagass/",
      whatsapp: "https://api.whatsapp.com/send?phone=5531996947978&text=Olá Lucas! Estou entrando em contato pelo seu portfólio"
    },
    cvUrl: "/Curriculo_Lucas_Chagas.pdf"
  },
  stats: [
    { label: "Projetos Completos", value: "20+" },
    { label: "Anos de experiência", value: "3+" },
    { label: "Tecnologias estudadas", value: "5+" }
  ],
  skills: [
    { name: "Angular", level: 4 },
    { name: "React", level: 4 },
    { name: "Flutter", level: 3 },
    { name: "Node.js", level: 4 },
    { name: "Java", level: 4 },
    { name: ".NET", level: 3 },
    { name: "Python", level: 3 },
    { name: "Bancos relacionais e não relacionais", level: 4 }
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
      title: "Byte",
      description: "Sistema de gerenciamento de comandas e automação para restaurantes, desenvolvido como projeto de conclusão do curso de Engenharia da Computação. O nome une bite (mordida) e byte, refletindo a integração entre software e hardware.",
      tech: ["C#", ".NET 10", "ASP.NET Core", "PostgreSQL", "EF Core", "Docker", "Swagger"],
      frontendUrl: "https://github.com/llucaschagass/Byte-Frontend",
      backendUrl: "https://github.com/llucaschagass/Byte-Backend"
    },
    {
      title: "Oak System",
      description: "Sistema de controle de estoque para empresas comerciais, desenvolvido como trabalho acadêmico. Permite gerenciar produtos e categorias, registrar movimentações de entrada e saída e gerar relatórios de gestão.",
      tech: ["React", "TypeScript", "Java 21", "Spring Boot", "JPA/Hibernate", "MySQL", "Swagger"],
      frontendUrl: "https://github.com/llucaschagass/Oak-System-Frontend",
      backendUrl: "https://github.com/llucaschagass/Oak-System-Backend"
    },
    {
      title: "Sealth",
      description: "SEALTH (Sistema Eficaz de Administração Logística e Tecnologia Hospitalar) é uma plataforma de gestão hospitalar centrada no paciente. O portal permite agendar consultas, consultar prescrições médicas e receber lembretes de medicamentos.",
      tech: ["Angular", "TypeScript", "Java", "Spring Boot"],
      frontendUrl: "https://github.com/llucaschagass/Sealth-Frontend",
      backendUrl: "https://github.com/llucaschagass/Sealth-Backend"
    }
  ]
};
