const booksData = [
    // Livros que já estavam no HTML
    {
        "title": "Dom Casmurro",
        "author": "Machado de Assis",
        "year": 1899,
        "category": "realismo",
        "image": "img/Capa Livro - Dom Casmurro.jpg",
        "pdf": "https://ddcus.org/pdf/summer_reading/11th_grade/Dom_Casmurro-Machado_de_Assis.pdf",
        "rating": 4.7
    },
    {
        "title": "Vidas Secas",
        "author": "Graciliano Ramos",
        "year": 1938,
        "category": "modernismo",
        "image": "img/RAMOS, Graciliano_ Vidas Secas_.jpg",
        "pdf": "https://iedamagri.wordpress.com/wp-content/uploads/2020/02/vidas-secas-graciliano-ramos.pdf",
        "rating": 4.5
    },
    {
        "title": "O Cortiço",
        "author": "Aluísio Azevedo",
        "year": 1890,
        "category": "realismo",
        "image": "img/O cortiço.jpg",
        "pdf": "https://objdigital.bn.br/objdigital2/acervo_digital/div_obrasraras/or15820/or15820.pdf",
        "rating": 4.2
    },
    {
        "title": "A Hora da Estrela",
        "author": "Clarice Lispector",
        "year": 1977,
        "category": "modernismo",
        "image": "img/Clarice Lispector_ 5 livros essenciais para conhecer a escritora.jpg",
        "pdf": "https://ufpi.br/arquivos_download/arquivos/A_Hora_da_Estrela_-_Clarice_Lispector.pdf",
        "rating": 4.8
    },
    {
        "title": "Capitães da Areia",
        "author": "Jorge Amado",
        "year": 1937,
        "category": "modernismo",
        "image": "img/Capitães de areia.jpg",
        "pdf": "https://escoladedebate.cnpc.cultura.gov.br/wp-content/uploads/sites/24/2017/05/capitaes-da-areia.pdf",
        "rating": 4.6
    },
    {
        "title": "Macunaíma",
        "author": "Mário de Andrade",
        "year": 1928,
        "category": "modernismo",
        "image": "img/8 trechos comentados de Macunaíma - o herói sem nenhum caráter.jpg",
        "pdf": "https://www.castroweb.com.br/castrodigital/Arquivos2020/CastroDigital_livro_Macunaima_Mario_de_Andrade.pdf",
        "rating": 3.9
    },
    {
        "title": "O Auto da Compadecida",
        "author": "Ariano Suassuna",
        "year": 1955,
        "category": "modernismo",
        "image": "img/Alto da compatecida.jpg",
        "pdf": "https://www.castroweb.com.br/castrodigital/Arquivos2018/CastroDigital_Auto_da_Compadecida_Ariano_Suassuna.pdf",
        "rating": 4.9
    },
    {
        "title": "A Ilha Perdida",
        "author": "Maria José Dupré",
        "year": 1944,
        "category": "aventura",
        "image": "img/Os 10 livros mais vendidos de setembro - Estante Virtual Blog _ Livros, cultura e afins.jpg",
        "pdf": "https://leituramelhorviagem.wordpress.com/wp-content/uploads/2016/11/livro-a-ilha-perdida.pdf",
        "rating": 4.1
    },
    {
        "title": "Iracema",
        "author": "José de Alencar",
        "year": 1865,
        "category": "romance",
        "image": "img/Iracema (Clássicos Melhoramentos).jpg",
        "pdf": "https://www.ceaacolegiobrasil.com.br/Biblioteca_virtual/img/divers%C3%A3o_paradidaticos/7%C2%BA_ano/Iracema.pdf",
        "rating": 3.8
    },
    {
        "title": "Memórias Póstumas de Brás Cubas",
        "author": "Machado de Assis",
        "year": 1881,
        "category": "realismo",
        "image": "img/Memórias Póstumas de Brás Cubas.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ua000192.pdf",
        "rating": 4.7
    },
    {
        "title": "O Guarani",
        "author": "José de Alencar",
        "year": 1857,
        "category": "aventura",
        "image": "img/O Guarani - José de Alencar.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000083.pdf",
        "rating": 4.0
    },
    {
        "title": "A Moreninha",
        "author": "Joaquim Manuel de Macedo",
        "year": 1844,
        "category": "romance",
        "image": "img/A moreninha.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000088.pdf",
        "rating": 4.3
    },
    {
        "title": "O Ateneu",
        "author": "Raul Pompeia",
        "year": 1888,
        "category": "realismo",
        "image": "img/O Ateneu   Raul Pompéia.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000242.pdf",
        "rating": 3.9
    },
    {
        "title": "São Bernardo",
        "author": "Graciliano Ramos",
        "year": 1934,
        "category": "modernismo",
        "image": "img/São bernardo.jpg",
        "pdf": "https://www.efuturo.com.br/materialbibliotecaonine/3532S-Bernardo.pdf",
        "rating": 4.4
    },
    {
        "title": "Senhora",
        "author": "José de Alencar",
        "year": 1875,
        "category": "romance",
        "image": "img/Senhora - José de Alencar.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000091.pdf",
        "rating": 4.2
    },
    {
        "title": "Quincas Borba",
        "author": "Machado de Assis",
        "year": 1891,
        "category": "realismo",
        "image": "img/Quincas borda.webp",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000194.pdf",
        "rating": 4.5
    },
    {
        "title": "O Quinze",
        "author": "Rachel de Queiroz",
        "year": 1930,
        "category": "modernismo",
        "image": "img/O Quinze - Rachel de Queiroz.jpg",
        "pdf": "https://arteref.com/wp-content/uploads/2019/05/O-Quinze-Rachel-de-Queiroz.pdf",
        "rating": 4.6
    },
    {
        "title": "O Sertanejo",
        "author": "José de Alencar",
        "year": 1875,
        "category": "aventura",
        "image": "img/o sertanejo.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000275.pdf",
        "rating": 3.7
    },
    // +100 Novos Livros
    {
        "title": "Triste Fim de Policarpo Quaresma",
        "author": "Lima Barreto",
        "year": 1915,
        "category": "modernismo",
        "image": "img/Triste Fim de Policarpo Quaresma.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bn000054.pdf",
        "rating": 4.6
    },
    {
        "title": "Os Sertões",
        "author": "Euclides da Cunha",
        "year": 1902,
        "category": "realismo",
        "image": "img/Os Sertões - Euclides da Cunha.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000169.pdf",
        "rating": 4.8
    },
    {
        "title": "O Mulato",
        "author": "Aluísio Azevedo",
        "year": 1881,
        "category": "realismo",
        "image": "img/_O MULATO_ - Aluízio Azevedo.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ua000191.pdf",
        "rating": 4.1
    },
    {
        "title": "Casa de Pensão",
        "author": "Aluísio Azevedo",
        "year": 1884,
        "category": "realismo",
        "image": "img/capa do livro casa de pensão.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ua000189.pdf",
        "rating": 4.0
    },
    {
        "title": "Lucíola",
        "author": "José de Alencar",
        "year": 1862,
        "category": "romance",
        "image": "img/luciola.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000087.pdf",
        "rating": 4.2
    },
    {
        "title": "A Escrava Isaura",
        "author": "Bernardo Guimarães",
        "year": 1875,
        "category": "romance",
        "image": "img/escrava isaura.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000181.pdf",
        "rating": 4.4
    },
    {
        "title": "Inocência",
        "author": "Visconde de Taunay",
        "year": 1872,
        "category": "romance",
        "image": "img/Pré-venda_ Inocência - @editorarecord http___amzn_to_2vmDwSl.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000245.pdf",
        "rating": 4.0
    },
    {
        "title": "Urupês",
        "author": "Monteiro Lobato",
        "year": 1918,
        "category": "modernismo",
        "image": "img/urupes.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/lb000002.pdf",
        "rating": 4.3
    },
    {
        "title": "Canaã",
        "author": "Graça Aranha",
        "year": 1902,
        "category": "modernismo",
        "image": "img/Canaã - Graça Aranha.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ga000001.pdf",
        "rating": 3.8
    },
    {
        "title": "Esaú e Jacó",
        "author": "Machado de Assis",
        "year": 1904,
        "category": "realismo",
        "image": "img/esau e jaco.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/machado_de_assis_esau_e_jaco.pdf",
        "rating": 4.5
    },
    {
        "title": "Memorial de Aires",
        "author": "Machado de Assis",
        "year": 1908,
        "category": "realismo",
        "image": "img/maries.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ua000190.pdf",
        "rating": 4.4
    },
    {
        "title": "O Triste Fim de Policarpo Quaresma",
        "author": "Lima Barreto",
        "year": 1915,
        "category": "modernismo",
        "image": "img/Triste Fim de Policarpo Quaresma.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bn000054.pdf",
        "rating": 4.7
    },
    {
        "title": "Recordações do Escrivão Isaías Caminha",
        "author": "Lima Barreto",
        "year": 1909,
        "category": "modernismo",
        "image": "img/barreto.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/lb000003.pdf",
        "rating": 4.5
    },
    {
        "title": "Angústia",
        "author": "Graciliano Ramos",
        "year": 1936,
        "category": "modernismo",
        "image": "img/angustia.jpg",
        "pdf": "https://www.afoiceeomartelo.com.br/posfsa/Autores/Ramos,%20Graciliano/Ang%C3%BAstia.pdf",
        "rating": 4.6
    },
    {
        "title": "O Moço Loiro",
        "author": "Joaquim Manuel de Macedo",
        "year": 1845,
        "category": "romance",
        "image": "img/capa do livro o-moco-loiro.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000089.pdf",
        "rating": 3.9
    },
    {
        "title": "A Viuvinha",
        "author": "José de Alencar",
        "year": 1857,
        "category": "romance",
        "image": "img/viuvinha.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000092.pdf",
        "rating": 3.8
    },
    {
        "title": "O Seminarista",
        "author": "Bernardo Guimarães",
        "year": 1872,
        "category": "romance",
        "image": "img/seminaristaa.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000182.pdf",
        "rating": 4.0
    },
    {
        "title": "A Pata da Gazela",
        "author": "José de Alencar",
        "year": 1870,
        "category": "romance",
        "image": "img/pata da gazela.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000090.pdf",
        "rating": 3.7
    },
    {
        "title": "O Homem",
        "author": "Aluísio Azevedo",
        "year": 1887,
        "category": "realismo",
        "image": "img/o homem.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ua000236.pdf",
        "rating": 3.9
    },
    {
        "title": "O Bom-Crioulo",
        "author": "Adolfo Caminha",
        "year": 1895,
        "category": "realismo",
        "image": "img/criolo.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ua000188.pdf",
        "rating": 4.2
    },
    {
        "title": "A Normalista",
        "author": "Adolfo Caminha",
        "year": 1893,
        "category": "realismo",
        "image": "img/normalista.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ac000001.pdf",
        "rating": 3.8
    },
    {
        "title": "O Tronco do Ipê",
        "author": "José de Alencar",
        "year": 1871,
        "category": "romance",
        "image": "img/ipê.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000276.pdf",
        "rating": 3.9
    },
    {
        "title": "Til",
        "author": "José de Alencar",
        "year": 1872,
        "category": "romance",
        "image": "c:\Users\SENAI\Downloads\til.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000274.pdf",
        "rating": 4.0
    },
    {
        "title": "A Mão e a Luva",
        "author": "Machado de Assis",
        "year": 1874,
        "category": "romance",
        "image": "img/a-mao-e-a-luva.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/machado_de_assis_a_mao_e_a_luva.pdf",
        "rating": 4.1
    },
    {
        "title": "Helena",
        "author": "Machado de Assis",
        "year": 1876,
        "category": "romance",
        "image": "img/helena.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/machado_de_assis_helena.pdf",
        "rating": 4.2
    },
    {
        "title": "Iaiá Garcia",
        "author": "Machado de Assis",
        "year": 1878,
        "category": "romance",
        "image": "img/iaia-garcia.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/machado_de_assis_iaia_garcia.pdf",
        "rating": 4.3
    },
    {
        "title": "O Alienista",
        "author": "Machado de Assis",
        "year": 1882,
        "category": "realismo",
        "image": "img/o-alienista.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/machado_de_assis_o_alienista.pdf",
        "rating": 4.8
    },
    {
        "title": "Contos Fluminenses",
        "author": "Machado de Assis",
        "year": 1870,
        "category": "realismo",
        "image": "img/contos-fluminenses.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/machado_de_assis_contos_fluminenses.pdf",
        "rating": 4.4
    },
    {
        "title": "Histórias da Meia-Noite",
        "author": "Machado de Assis",
        "year": 1873,
        "category": "realismo",
        "image": "img/historias-da-meia-noite.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/machado_de_assis_historias_da_meia_noite.pdf",
        "rating": 4.3
    },
    {
        "title": "Papéis Avulsos",
        "author": "Machado de Assis",
        "year": 1882,
        "category": "realismo",
        "image": "img/papeis-avulsos.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/machado_de_assis_papeis_avulsos.pdf",
        "rating": 4.6
    },
    {
        "title": "Histórias sem Data",
        "author": "Machado de Assis",
        "year": 1884,
        "category": "realismo",
        "image": "img/historias-sem-data.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/machado_de_assis_historias_sem_data.pdf",
        "rating": 4.5
    },
    {
        "title": "Várias Histórias",
        "author": "Machado de Assis",
        "year": 1896,
        "category": "realismo",
        "image": "img/varias-historias.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/machado_de_assis_varias_historias.pdf",
        "rating": 4.6
    },
    {
        "title": "Páginas Recolhidas",
        "author": "Machado de Assis",
        "year": 1899,
        "category": "realismo",
        "image": "img/paginas-recolhidas.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/machado_de_assis_paginas_recolhidas.pdf",
        "rating": 4.4
    },
    {
        "title": "Relíquias de Casa Velha",
        "author": "Machado de Assis",
        "year": 1906,
        "category": "realismo",
        "image": "img/reliquias-de-casa-velha.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/machado_de_assis_reliquias_de_casa_velha.pdf",
        "rating": 4.3
    },
    {
        "title": "Lira Paulistana",
        "author": "Mário de Andrade",
        "year": 1945,
        "category": "modernismo",
        "image": "img/lira-paulistana.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ma000001.pdf",
        "rating": 4.2
    },
    {
        "title": "Paulicéia Desvairada",
        "author": "Mário de Andrade",
        "year": 1922,
        "category": "modernismo",
        "image": "img/pauliceia-desvairada.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ma000002.pdf",
        "rating": 4.5
    },
    {
        "title": "Amar, Verbo Intransitivo",
        "author": "Mário de Andrade",
        "year": 1927,
        "category": "modernismo",
        "image": "img/amar-verbo-intransitivo.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ma000003.pdf",
        "rating": 4.1
    },
    {
        "title": "Memórias Sentimentais de João Miramar",
        "author": "Oswald de Andrade",
        "year": 1924,
        "category": "modernismo",
        "image": "img/memorias-sentimentais-de-joao-miramar.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/oa000001.pdf",
        "rating": 4.0
    },
    {
        "title": "Serafim Ponte Grande",
        "author": "Oswald de Andrade",
        "year": 1933,
        "category": "modernismo",
        "image": "img/serafim-ponte-grande.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/oa000002.pdf",
        "rating": 4.1
    },
    {
        "title": "O Rei da Vela",
        "author": "Oswald de Andrade",
        "year": 1937,
        "category": "modernismo",
        "image": "img/o-rei-da-vela.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/oa000003.pdf",
        "rating": 4.3
    },
    {
        "title": "Juca Pirama",
        "author": "Gonçalves Dias",
        "year": 1851,
        "category": "romance",
        "image": "img/juca-pirama.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/gd000001.pdf",
        "rating": 4.4
    },
    {
        "title": "Espumas Flutuantes",
        "author": "Castro Alves",
        "year": 1870,
        "category": "romance",
        "image": "img/espumas-flutuantes.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ca000001.pdf",
        "rating": 4.5
    },
    {
        "title": "O Navio Negreiro",
        "author": "Castro Alves",
        "year": 1869,
        "category": "romance",
        "image": "img/o-navio-negreiro.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ca000002.pdf",
        "rating": 4.9
    },
    {
        "title": "Lira dos Vinte Anos",
        "author": "Álvares de Azevedo",
        "year": 1853,
        "category": "romance",
        "image": "img/lira-dos-vinte-anos.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/aa000001.pdf",
        "rating": 4.3
    },
    {
        "title": "Noite na Taverna",
        "author": "Álvares de Azevedo",
        "year": 1855,
        "category": "romance",
        "image": "img/noite-na-taverna.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/aa000002.pdf",
        "rating": 4.6
    },
    {
        "title": "As Primaveras",
        "author": "Casimiro de Abreu",
        "year": 1859,
        "category": "romance",
        "image": "img/as-primaveras.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ca000003.pdf",
        "rating": 4.1
    },
    {
        "title": "O Guarani (Romance)",
        "author": "José de Alencar",
        "year": 1857,
        "category": "romance",
        "image": "img/o-guarani-romance.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bv000083.pdf",
        "rating": 4.0
    },
    {
        "title": "Cinco Minutos",
        "author": "José de Alencar",
        "year": 1856,
        "category": "romance",
        "image": "img/cinco-minutos.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ja000001.pdf",
        "rating": 3.8
    },
    {
        "title": "Diva",
        "author": "José de Alencar",
        "year": 1864,
        "category": "romance",
        "image": "img/diva.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ja000002.pdf",
        "rating": 3.9
    },
    {
        "title": "O Gaúcho",
        "author": "José de Alencar",
        "year": 1870,
        "category": "aventura",
        "image": "img/o-gaucho.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ja000003.pdf",
        "rating": 3.9
    },
    {
        "title": "A Guerra dos Mascates",
        "author": "José de Alencar",
        "year": 1873,
        "category": "aventura",
        "image": "img/a-guerra-dos-mascates.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ja000004.pdf",
        "rating": 4.0
    },
    {
        "title": "Ubirajara",
        "author": "José de Alencar",
        "year": 1874,
        "category": "aventura",
        "image": "img/ubirajara.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ja000005.pdf",
        "rating": 3.8
    },
    {
        "title": "Sonhos d'Ouro",
        "author": "José de Alencar",
        "year": 1872,
        "category": "romance",
        "image": "img/sonhos-douro.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ja000006.pdf",
        "rating": 4.0
    },
    {
        "title": "Encarnação",
        "author": "José de Alencar",
        "year": 1893,
        "category": "romance",
        "image": "img/encarnacao.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ja000007.pdf",
        "rating": 3.7
    },
    {
        "title": "O Garimpeiro",
        "author": "Bernardo Guimarães",
        "year": 1872,
        "category": "aventura",
        "image": "img/o-garimpeiro.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bg000001.pdf",
        "rating": 3.9
    },
    {
        "title": "O Ermitão de Muquém",
        "author": "Bernardo Guimarães",
        "year": 1864,
        "category": "romance",
        "image": "img/o-ermitao-de-muquem.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/bg000002.pdf",
        "rating": 3.8
    },
    {
        "title": "A Retirada da Laguna",
        "author": "Visconde de Taunay",
        "year": 1874,
        "category": "aventura",
        "image": "img/a-retirada-da-laguna.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/vt000001.pdf",
        "rating": 4.1
    },
    {
        "title": "O Cabeleira",
        "author": "Franklin Távora",
        "year": 1876,
        "category": "aventura",
        "image": "img/o-cabeleira.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ft000001.pdf",
        "rating": 4.0
    },
    {
        "title": "O Missionário",
        "author": "Inglês de Sousa",
        "year": 1891,
        "category": "realismo",
        "image": "img/o-missionario.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/is000001.pdf",
        "rating": 3.9
    },
    {
        "title": "Broquéis",
        "author": "Cruz e Sousa",
        "year": 1893,
        "category": "realismo",
        "image": "img/broqueis.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/cs000001.pdf",
        "rating": 4.2
    },
    {
        "title": "Missal",
        "author": "Cruz e Sousa",
        "year": 1893,
        "category": "realismo",
        "image": "img/missal.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/cs000002.pdf",
        "rating": 4.1
    },
    {
        "title": "Poesias",
        "author": "Olavo Bilac",
        "year": 1888,
        "category": "realismo",
        "image": "img/poesias-olavo-bilac.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ob000001.pdf",
        "rating": 4.4
    },
    {
        "title": "A Conquista",
        "author": "Coelho Neto",
        "year": 1899,
        "category": "realismo",
        "image": "img/a-conquista.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/cn000001.pdf",
        "rating": 3.8
    },
    {
        "title": "A Capital Federal",
        "author": "Artur Azevedo",
        "year": 1897,
        "category": "realismo",
        "image": "img/a-capital-federal.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/aa000003.pdf",
        "rating": 3.9
    },
    {
        "title": "O Dote",
        "author": "Artur Azevedo",
        "year": 1888,
        "category": "realismo",
        "image": "img/o-dote.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/aa000004.pdf",
        "rating": 3.8
    },
    {
        "title": "A Carne",
        "author": "Júlio Ribeiro",
        "year": 1888,
        "category": "realismo",
        "image": "img/a-carne.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/jr000001.pdf",
        "rating": 4.0
    },
    {
        "title": "Luzia-Homem",
        "author": "Domingos Olímpio",
        "year": 1903,
        "category": "realismo",
        "image": "img/luzia-homem.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/do000001.pdf",
        "rating": 4.1
    },
    {
        "title": "Clara dos Anjos",
        "author": "Lima Barreto",
        "year": 1948,
        "category": "modernismo",
        "image": "img/clara-dos-anjos.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/lb000001.pdf",
        "rating": 4.5
    },
    {
        "title": "Numa e a Ninfa",
        "author": "Lima Barreto",
        "year": 1915,
        "category": "modernismo",
        "image": "img/numa-e-a-ninfa.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/lb000002.pdf",
        "rating": 4.0
    },
    {
        "title": "Vida e Morte de M. J. Gonzaga de Sá",
        "author": "Lima Barreto",
        "year": 1919,
        "category": "modernismo",
        "image": "img/vida-e-morte-de-mj-gonzaga-de-sa.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/lb000004.pdf",
        "rating": 4.3
    },
    {
        "title": "Os Bruzundangas",
        "author": "Lima Barreto",
        "year": 1922,
        "category": "modernismo",
        "image": "img/os-bruzundangas.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/lb000005.pdf",
        "rating": 4.4
    },
    {
        "title": "Cidades Mortas",
        "author": "Monteiro Lobato",
        "year": 1919,
        "category": "modernismo",
        "image": "img/cidades-mortas.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ml000001.pdf",
        "rating": 4.2
    },
    {
        "title": "Negrinha",
        "author": "Monteiro Lobato",
        "year": 1920,
        "category": "modernismo",
        "image": "img/negrinha.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ml000002.pdf",
        "rating": 4.3
    },
    {
        "title": "A Onda Verde",
        "author": "Monteiro Lobato",
        "year": 1921,
        "category": "modernismo",
        "image": "img/a-onda-verde.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ml000003.pdf",
        "rating": 4.0
    },
    {
        "title": "O Saci",
        "author": "Monteiro Lobato",
        "year": 1921,
        "category": "aventura",
        "image": "img/o-saci.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ml000004.pdf",
        "rating": 4.5
    },
    {
        "title": "Fábulas",
        "author": "Monteiro Lobato",
        "year": 1922,
        "category": "aventura",
        "image": "img/fabulas.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ml000005.pdf",
        "rating": 4.6
    },
    {
        "title": "O Presidente Negro",
        "author": "Monteiro Lobato",
        "year": 1926,
        "category": "modernismo",
        "image": "img/o-presidente-negro.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ml000006.pdf",
        "rating": 4.1
    },
    {
        "title": "América",
        "author": "Monteiro Lobato",
        "year": 1932,
        "category": "modernismo",
        "image": "img/america.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ml000007.pdf",
        "rating": 3.9
    },
    {
        "title": "Caçadas de Pedrinho",
        "author": "Monteiro Lobato",
        "year": 1933,
        "category": "aventura",
        "image": "img/cacadas-de-pedrinho.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ml000008.pdf",
        "rating": 4.7
    },
    {
        "title": "Reinações de Narizinho",
        "author": "Monteiro Lobato",
        "year": 1931,
        "category": "aventura",
        "image": "img/reinacoes-de-narizinho.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ml000009.pdf",
        "rating": 4.8
    },
    {
        "title": "Viagem ao Céu",
        "author": "Monteiro Lobato",
        "year": 1932,
        "category": "aventura",
        "image": "img/viagem-ao-ceu.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ml000010.pdf",
        "rating": 4.6
    },
    {
        "title": "Memórias da Emília",
        "author": "Monteiro Lobato",
        "year": 1936,
        "category": "aventura",
        "image": "img/memorias-da-emilia.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ml000011.pdf",
        "rating": 4.7
    },
    {
        "title": "O Picapau Amarelo",
        "author": "Monteiro Lobato",
        "year": 1939,
        "category": "aventura",
        "image": "img/o-picapau-amarelo.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ml000012.pdf",
        "rating": 4.8
    },
    {
        "title": "A Chave do Tamanho",
        "author": "Monteiro Lobato",
        "year": 1942,
        "category": "aventura",
        "image": "img/a-chave-do-tamanho.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ml000013.pdf",
        "rating": 4.5
    },
    {
        "title": "Os Doze Trabalhos de Hércules",
        "author": "Monteiro Lobato",
        "year": 1944,
        "category": "aventura",
        "image": "img/os-doze-trabalhos-de-hercules.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ml000014.pdf",
        "rating": 4.7
    },
    {
        "title": "Bagaceira",
        "author": "José Américo de Almeida",
        "year": 1928,
        "category": "modernismo",
        "image": "img/bagaceira.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/ja000008.pdf",
        "rating": 4.2
    },
    {
        "title": "Dona Guidinha do Poço",
        "author": "Manuel de Oliveira Paiva",
        "year": 1892,
        "category": "realismo",
        "image": "img/dona-guidinha-do-poco.jpg",
        "pdf": "http://www.dominiopublico.gov.br/download/texto/op000001.pdf",
        "rating": 3.9
    },
    {
        "title": "O Feijão e o Sonho",
        "author": "Orígenes Lessa",
        "year": 1938,
        "category": "modernismo",
        "image": "img/o-feijao-e-o-sonho.jpg",
        "pdf": "https://www.domleopoldo.com.br/wp-content/uploads/2021/03/O-Feij%C3%A3o-e-o-Sonho-Or%C3%ADgenes-Lessa.pdf",
        "rating": 4.4
    },
    {
        "title": "Mar Morto",
        "author": "Jorge Amado",
        "year": 1936,
        "category": "modernismo",
        "image": "img/mar-morto.jpg",
        "pdf": "https://www.afoiceeomartelo.com.br/posfsa/Autores/Amado,%20Jorge/Mar%20Morto.pdf",
        "rating": 4.6
    },
    {
        "title": "Jubiabá",
        "author": "Jorge Amado",
        "year": 1935,
        "category": "modernismo",
        "image": "img/jubiaba.jpg",
        "pdf": "https://www.afoiceeomartelo.com.br/posfsa/Autores/Amado,%20Jorge/Jubiab%C3%A1.pdf",
        "rating": 4.5
    },
    {
        "title": "Terras do Sem-Fim",
        "author": "Jorge Amado",
        "year": 1943,
        "category": "modernismo",
        "image": "img/terras-do-sem-fim.jpg",
        "pdf": "https://www.afoiceeomartelo.com.br/posfsa/Autores/Amado,%20Jorge/Terras%20do%20Sem-Fim.pdf",
        "rating": 4.7
    },
    {
        "title": "O País do Carnaval",
        "author": "Jorge Amado",
        "year": 1931,
        "category": "modernismo",
        "image": "img/o-pais-do-carnaval.jpg",
        "pdf": "https://www.afoiceeomartelo.com.br/posfsa/Autores/Amado,%20Jorge/O%20Pa%C3%ADs%20do%20Carnaval.pdf",
        "rating": 4.2
    },
    {
        "title": "Cacau",
        "author": "Jorge Amado",
        "year": 1933,
        "category": "modernismo",
        "image": "img/cacau.jpg",
        "pdf": "https://www.afoiceeomartelo.com.br/posfsa/Autores/Amado,%20Jorge/Cacau.pdf",
        "rating": 4.3
    },
    {
        "title": "Suor",
        "author": "Jorge Amado",
        "year": 1934,
        "category": "modernismo",
        "image": "img/suor.jpg",
        "pdf": "https://www.afoiceeomartelo.com.br/posfsa/Autores/Amado,%20Jorge/Suor.pdf",
        "rating": 4.1
    }
]