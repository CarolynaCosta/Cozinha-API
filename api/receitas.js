export const dynamic = 'force-dynamic';

const receitasOriginais = [
  {
    "id": 1,
    "nome": "Feijoada",
    "ingredientes": ["feijão preto", "carne seca", "linguiça", "costelinha", "farinha de mandioca", "arroz", "laranja"],
    "modo_preparo": "Cozinhe o feijão com as carnes defumadas e temperos. Sirva com arroz, farofa e laranja.",
    "imagem": "https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/feijoada-1920w.jpg"
  },
  {
    "id": 2,
    "nome": "Moqueca de Peixe",
    "ingredientes": ["peixe branco", "pimentão", "tomate", "cebola", "coentro", "leite de coco", "azeite de dendê"],
    "modo_preparo": "Refogue os temperos no dendê, adicione o peixe e o leite de coco. Cozinhe até o peixe ficar macio.",
    "imagem": "https://conteudo.imguol.com.br/c/entretenimento/02/2020/03/31/moqueca-de-peixe-1585666205541_v2_4x3.jpg"
  },
  {
    "id": 3,
    "nome": "Escondidinho de Carne Seca",
    "ingredientes": ["carne seca", "mandioca", "manteiga", "queijo", "cebola", "alho"],
    "modo_preparo": "Cozinhe e desfie a carne seca. Faça um purê de mandioca e monte camadas intercalando carne e purê.",
    "imagem": "https://guiadacozinha.com.br/wp-content/uploads/2020/11/escondidinho-de-frigideira-1.jpg"
  },
  {
    "id": 4,
    "nome": "Arroz de Carreteiro",
    "ingredientes": ["arroz", "carne seca", "linguiça", "cebola", "alho", "cheiro-verde"],
    "modo_preparo": "Refogue a carne e os temperos, adicione o arroz e cozinhe até secar.",
    "imagem": "https://d1uz88p17r663j.cloudfront.net/original/c63d235dda5c15c6abbd9ec854d13728_arroz-carreteiro-receitas-nestle.jpg"
  },
  {
    "id": 5,
    "nome": "Bobó de Camarão",
    "ingredientes": ["camarão", "mandioca", "leite de coco", "azeite de dendê", "tomate", "pimentão", "cebola"],
    "modo_preparo": "Cozinhe a mandioca, bata com leite de coco e junte ao refogado de camarão e dendê.",
    "imagem": "https://br.freepik.com/fotos-gratis/deliciosa-refeicao-de-camarao-de-angulo-alto_11312104.htm#fromView=search&page=1&position=1&uuid=9a8ce636-f082-4ebd-a460-6171f630af52&query=Bob%C3%B3+de+Camar%C3%A3o"
  },
  {
    "id": 6,
    "nome": "Virado à Paulista",
    "ingredientes": ["arroz", "tutu de feijão", "bisteca", "linguiça", "ovo frito", "couve refogada"],
    "modo_preparo": "Sirva o arroz com tutu, bisteca e acompanhamentos.",
    "imagem": "https://guiadacozinha.com.br/wp-content/uploads/2023/01/virado-a-paulista.jpg"
  },
  {
    "id": 7,
    "nome": "Coxinha de Frango",
    "ingredientes": ["frango desfiado", "farinha de trigo", "caldo de galinha", "leite", "manteiga", "farinha de rosca"],
    "modo_preparo": "Prepare a massa com leite e farinha, recheie com frango e frite até dourar.",
    "imagem": "https://guiadacozinha.com.br/wp-content/uploads/2018/08/coxinhadefrangocremosa.webp"
  },
  {
    "id": 8,
    "nome": "Bolinho de Bacalhau",
    "ingredientes": ["bacalhau", "batata", "ovo", "salsa", "cebola"],
    "modo_preparo": "Misture o bacalhau desfiado com batata e temperos, molde e frite.",
    "imagem": "https://cozinhaglobo.com.br/wp-content/uploads/2020/11/24-bolinho-bacalhau.jpg"
  },
  {
    "id": 9,
    "nome": "Acarajé",
    "ingredientes": ["feijão-fradinho", "cebola", "sal", "azeite de dendê", "vatapá", "camarão seco"],
    "modo_preparo": "Bata o feijão com cebola, frite no dendê e recheie com vatapá e camarão.",
    "imagem": "https://guiadacozinha.com.br/wp-content/uploads/2008/01/acaraje.jpg"
  },
  {
    "id": 10,
    "nome": "Empadão de Frango",
    "ingredientes": ["farinha de trigo", "manteiga", "ovo", "frango desfiado", "milho", "ervilha"],
    "modo_preparo": "Prepare a massa, recheie com frango e legumes, cubra e asse até dourar.",
    "imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOMOwSMvc1z8UGW8gdxLqquPo6t_zS55mw07JxxNaAbfeduQA_duudjGxcIH98yJ9XWUPb9b_kPCaJFFVowmI3OOmFUlWf1gtBStivgf4VeKJw07zy_0_2oL1fLNt3l39FONfhzQW95zvdJQ2622gdCZDPn6H2kHpuC-TwZH-mVQ0qKd5rL_fFCUSe/w1200/receita-de-empadao-de-frango.jpg"
  },
  {
    "id": 11,
    "nome": "Canjica",
    "ingredientes": ["milho para canjica", "leite", "leite condensado", "canela", "coco ralado"],
    "modo_preparo": "Cozinhe o milho e adicione os ingredientes até engrossar.",
    "imagem": "https://www.receitas-sem-fronteiras.com/media/canjica-3_crop.jpg/rh/canjica-doce.jpg"
  },
  {
    "id": 12,
    "nome": "Pamonha",
    "ingredientes": ["milho verde", "açúcar", "sal", "leite", "manteiga"],
    "modo_preparo": "Bata o milho com os ingredientes, coloque nas palhas e cozinhe em água fervente.",
    "imagem": "https://guiadacozinha.com.br/wp-content/uploads/2019/10/pamonha-tradicional-768x619.jpg"
  },
  {
    "id": 13,
    "nome": "Farofa de Banana",
    "ingredientes": ["farinha de mandioca", "banana", "manteiga", "cebola", "sal"],
    "modo_preparo": "Refogue a banana na manteiga, adicione a farinha e mexa bem.",
    "imagem": "https://static.itdg.com.br/images/640-440/6933b79d02787587a3513b2b087cf7f7/shutterstock-1736736014.jpg"
  },
  {
    "id": 14,
    "nome": "Tapioca com Coco",
    "ingredientes": ["goma de tapioca", "coco ralado", "leite condensado"],
    "modo_preparo": "Aqueça a frigideira, espalhe a goma e recheie com coco e leite condensado.",
    "imagem": "https://www.delicia.com.br/wp-content/uploads/fly-images/2027/media1150tapioca-de-coco-1366x500.jpg"
  },
  {
    "id": 15,
    "nome": "Brigadeiro",
    "ingredientes": ["leite condensado", "chocolate em pó", "manteiga", "granulado"],
    "modo_preparo": "Cozinhe o leite condensado com chocolate e manteiga, enrole e passe no granulado.",
    "imagem": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/1a884bcbc5b04d71476d2995d51d0140.jpg"
  },
  {
    "id": 16,
    "nome": "Beijinho",
    "ingredientes": ["leite condensado", "coco ralado", "manteiga", "açúcar cristal"],
    "modo_preparo": "Cozinhe até soltar da panela, enrole e passe no açúcar.",
    "imagem": "https://admin.docepedia.com/site/uploads/2024/08/beijinho_d.jpg"
  },
  {
    "id": 17,
    "nome": "Quindim",
    "ingredientes": ["gemas", "açúcar", "coco ralado", "manteiga"],
    "modo_preparo": "Misture tudo, coloque em forminhas e asse em banho-maria.",
    "imagem": "https://www.seara.com.br/wp-content/uploads/2025/09/quindim-tradicional-portal-minha-receita.jpg"
  },
  {
    "id": 18,
    "nome": "Pudim de Leite",
    "ingredientes": ["leite condensado", "leite", "ovos", "açúcar"],
    "modo_preparo": "Bata tudo, despeje em forma caramelizada e asse em banho-maria.",
    "imagem": "https://cozinhaglobo.com.br/wp-content/uploads/2023/07/pudim-de-leite-1024x682.jpg"
  },
  {
    "id": 19,
    "nome": "Torta de Limão",
    "ingredientes": ["biscoito", "manteiga", "leite condensado", "limão", "chantilly"],
    "modo_preparo": "Monte a base com biscoito e manteiga, recheie e cubra com chantilly.",
    "imagem": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/1d22d96039f98608bc9338debb1b4579.jpg"
  },
  {
    "id": 20,
    "nome": "Pão de Queijo",
    "ingredientes": ["polvilho azedo", "queijo minas", "leite", "ovo", "óleo"],
    "modo_preparo": "Misture os ingredientes, modele bolinhas e asse até dourar.",
    "imagem": "https://essareceitafunciona.com.br/wp-content/uploads/2022/07/Pao-de-queijo-Essa-Receita-Funciona-9.jpg"
  },
  {
    "id": 21,
    "nome": "Bolo de Cenoura",
    "ingredientes": ["cenoura", "açúcar", "farinha de trigo", "óleo", "ovos", "chocolate"],
    "modo_preparo": "Bata a cenoura com ovos e óleo, misture o restante e asse. Cubra com calda de chocolate.",
    "imagem": "https://receitasdebemcasado.com/wp-content/uploads/2025/05/receitas-com-bolo-de-cenoura.png"
  },
  {
    "id": 22,
    "nome": "Bolo de Fubá",
    "ingredientes": ["fubá", "açúcar", "farinha de trigo", "leite", "ovo", "fermento"],
    "modo_preparo": "Misture tudo, despeje na forma e asse até dourar.",
    "imagem": "https://conteudo.imguol.com.br/c/entretenimento/9f/2020/06/15/bolo-de-fuba-1592241605327_v2_4x3.jpg"
  },
  {
    "id": 23,
    "nome": "Manjar Branco",
    "ingredientes": ["leite", "amido de milho", "açúcar", "coco ralado e ameixas"],
    "modo_preparo": "Cozinhe até engrossar, coloque na forma e leve à geladeira e depois de gelado jogue a calda de ameixas por cima.",
    "imagem": "https://s2-receitas.glbimg.com/GSQvzjH2PnVAu_Z9T4p7egMxnuU=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/n/B/bPoyWeRS6jLvzWUAHeXA/manjar-branco-com-ameixas.jpg"
  },
  {
    "id": 24,
    "nome": "Arroz Doce",
    "ingredientes": ["arroz", "leite", "açúcar", "canela"],
    "modo_preparo": "Cozinhe o arroz com leite e açúcar até engrossar.",
    "imagem": "https://cdn0.tudoreceitas.com/pt/posts/8/0/6/arroz_doce_tradicional_portugues_6608_orig.jpg"
  },
  {
    "id": 25,
    "nome": "Cuscuz Nordestino",
    "ingredientes": ["flocos de milho", "sal", "água"],
    "modo_preparo": "Hidrate o cuscuz, coloque na cuscuzeira e cozinhe por 10 minutos.",
    "imagem": "https://assets.unileversolutions.com/recipes-v2/53028.jpg"
  }
]; 

const receitas = receitasOriginais.map(receita => ({
    ...receita,
    imagem: `https://picsum.photos/id/${(receita.id % 100) + 1}/100/100` 
}));

const normalizarTexto = (texto) => {
  if (typeof texto !== 'string') return '';
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

export async function GET(request) {
  
  const { searchParams } = new URL(request.url);
  
  const termoBusca = searchParams.get('alimento') || searchParams.get('ingrediente');
  
  if (!termoBusca) {
    return new Response(
      JSON.stringify(receitas),
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' 
        }
      }
    );
  }
  
  const termoBuscaNormalizado = normalizarTexto(termoBusca);
  
  const receitasFiltradas = receitas.filter(receita => {
    
    const nomeContem = normalizarTexto(receita.nome).includes(termoBuscaNormalizado);

    const ingredientesString = receita.ingredientes.map(i => normalizarTexto(i)).join(' ');
    const ingredientesContem = ingredientesString.includes(termoBuscaNormalizado);
    
    return nomeContem || ingredientesContem;
  });

  return new Response(
    JSON.stringify(receitasFiltradas),
    {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
}