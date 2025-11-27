export const dynamic = 'force-dynamic';

const receitas = [
  {
    "id": 1,
    "nome": "Feijoada",
    "ingredientes": ["feijão preto", "carne seca", "linguiça", "costelinha", "farinha de mandioca", "arroz", "laranja"],
    "modo_preparo": "Cozinhe o feijão preto com as carnes defumadas (carne seca, linguiça, costelinha) e temperos por um longo tempo até que o feijão e as carnes estejam muito macios. Sirva quente com arroz branco, farinha de mandioca (farofa) e fatias de laranja para equilibrar a gordura.",
    "imagem": "https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/feijoada-1920w.jpg"
  },
  {
    "id": 2,
    "nome": "Moqueca de Peixe",
    "ingredientes": ["peixe branco", "pimentão", "tomate", "cebola", "coentro", "leite de coco", "azeite de dendê"],
    "modo_preparo": "Refogue os pimentões, tomates, cebolas e coentro no azeite de dendê. Adicione o peixe branco em postas e o leite de coco. Cozinhe lentamente, em fogo baixo, até o peixe ficar macio e o caldo espesso, sem mexer muito para não desmanchar o peixe.",
    "imagem": "https://conteudo.imguol.com.br/c/entretenimento/02/2020/03/31/moqueca-de-peixe-1585666205541_v2_4x3.jpg"
  },
  {
    "id": 3,
    "nome": "Escondidinho de Carne Seca",
    "ingredientes": ["carne seca", "mandioca", "manteiga", "queijo", "cebola", "alho"],
    "modo_preparo": "Cozinhe a carne seca, dessalgue, desfie e refogue com cebola e alho. Cozinhe a mandioca (aipim ou macaxeira) até ficar macia e amasse para fazer um purê, adicionando manteiga. Em um refratário, monte camadas intercalando a carne seca refogada e o purê. Cubra com queijo ralado e leve ao forno para gratinar.",
    "imagem": "https://guiadacozinha.com.br/wp-content/uploads/2020/11/escondidinho-de-frigideira-1.jpg"
  },
  {
    "id": 4,
    "nome": "Arroz de Carreteiro",
    "ingredientes": ["arroz", "carne seca", "linguiça", "cebola", "alho", "cheiro-verde"],
    "modo_preparo": "Pique a carne seca e a linguiça e refogue-as em uma panela grande. Adicione cebola e alho picados para temperar. Acrescente o arroz e a água, cozinhando até secar e o arroz ficar no ponto. Finalize com cheiro-verde picado.",
    "imagem": "https://d1uz88p17r663j.cloudfront.net/original/c63d235dda5c15c6abbd9ec854d13728_arroz-carreteiro-receitas-nestle.jpg"
  },
  {
    "id": 5,
    "nome": "Bobó de Camarão",
    "ingredientes": ["camarão", "mandioca", "leite de coco", "azeite de dendê", "tomate", "pimentão", "cebola"],
    "modo_preparo": "Cozinhe a mandioca (aipim/macaxeira) e bata no liquidificador com um pouco de leite de coco para formar um creme. Refogue os camarões com tomate, pimentão e cebola no azeite de dendê. Junte o creme de mandioca ao refogado de camarão e cozinhe por mais alguns minutos até engrossar.",
    "imagem": "https://imgs.search.brave.com/GOI__0cPdX5mg2Xt-pVuf4RELqHmx2Cd-Cf97w5wbFg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWNl/aXRhc2RlcGVzb3Mu/Y29tLmJyL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzA2Lzg0/LTEuanBnLndlYnA"
  },
  {
    "id": 6,
    "nome": "Virada à Paulista",
    "ingredientes": ["arroz", "tutu de feijão", "bisteca", "linguiça", "ovo frito", "couve refogada"],
    "modo_preparo": "O prato é uma composição de diversos elementos: sirva o arroz branco, o tutu de feijão (feijão cozido e batido com farinha de mandioca ou milho), a bisteca suína frita ou grelhada, linguiça frita, ovo frito e couve refogada no alho.",
    "imagem": "https://guiadacozinha.com.br/wp-content/uploads/2023/01/virado-a-paulista.jpg"
  },
  {
    "id": 7,
    "nome": "Coxinha de Frango",
    "ingredientes": ["frango desfiado", "farinha de trigo", "caldo de galinha", "leite", "manteiga", "farinha de rosca"],
    "modo_preparo": "Prepare um caldo de galinha com temperos. Use esse caldo com leite e manteiga para fazer a massa, adicionando farinha de trigo e mexendo até soltar do fundo da panela. Deixe esfriar. Recheie a massa com frango desfiado e temperado. Modele em formato de gota, passe no ovo, na farinha de rosca e frite em óleo quente até dourar.",
    "imagem": "https://guiadacozinha.com.br/wp-content/uploads/2018/08/coxinhadefrangocremosa.webp"
  },
  {
    "id": 8,
    "nome": "Bolinho de Bacalhau",
    "ingredientes": ["bacalhau", "batata", "ovo", "salsa", "cebola"],
    "modo_preparo": "Dessalgue e desfie o bacalhau. Cozinhe e amasse a batata. Misture o bacalhau com a batata, ovo, salsa e cebola picadas. Tempere a gosto. Modele pequenas porções em formato de bolinho e frite em óleo quente.",
    "imagem": "https://cozinhaglobo.com.br/wp-content/uploads/2020/11/24-bolinho-bacalhau.jpg"
  },
  {
    "id": 9,
    "nome": "Acarajé",
    "ingredientes": ["feijão-fradinho", "cebola", "sal", "azeite de dendê", "vatapá", "camarão seco"],
    "modo_preparo": "Deixe o feijão-fradinho de molho, retire a casca e bata no processador com cebola e sal até obter uma massa homogênea. Frite colheradas dessa massa em abundante azeite de dendê quente. Sirva o bolinho frito e aberto, recheado com vatapá e camarão seco refogado.",
    "imagem": "https://guiadacozinha.com.br/wp-content/uploads/2008/01/acaraje.jpg"
  },
  {
    "id": 10,
    "nome": "Empadão de Frango",
    "ingredientes": ["farinha de trigo", "manteiga", "ovo", "frango desfiado", "milho", "ervilha"],
    "modo_preparo": "Prepare a massa com farinha de trigo, manteiga e ovo, amassando até ficar homogênea. Abra parte da massa para forrar uma forma, recheie com frango desfiado refogado com milho e ervilha. Cubra com o restante da massa e asse em forno pré-aquecido até dourar.",
    "imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOMOwSMvc1z8UGW8gdxLqquPo6t_zS55mw07JxxNaAbfeduQA_duudjGxcIH98yJ9XWUPb9b_kPCaJFFVowmI3OOmFUlWf1gtBStivgf4VeKJw07zy_0_2oL1fLNt3l39FONfhzQW95zvdJQ2622gdCZDPn6H2kHpuC-TwZH-mVQ0qKd5rL_fFCUSe/w1200/receita-de-empadao-de-frango.jpg"
  },
  {
    "id": 11,
    "nome": "Canjica",
    "ingredientes": ["milho para canjica", "leite", "leite condensado", "canela", "coco ralado"],
    "modo_preparo": "Deixe o milho para canjica de molho e cozinhe até ficar macio. Adicione o leite, leite condensado e coco ralado. Cozinhe em fogo baixo, mexendo ocasionalmente, até que o caldo engrosse e a canjica fique cremosa. Polvilhe canela em pó para servir.",
    "imagem": "https://www.receitas-sem-fronteiras.com/media/canjica-3_crop.jpg/rh/canjica-doce.jpg"
  },
  {
    "id": 12,
    "nome": "Pamonha",
    "ingredientes": ["milho verde", "açúcar", "sal", "leite", "manteiga"],
    "modo_preparo": "Rale as espigas de milho verde ou use o milho debulhado e bata no liquidificador com açúcar, um pouco de sal, leite e manteiga derretida. Coloque essa massa cremosa em trouxinhas feitas com as palhas do próprio milho e amarre. Cozinhe as trouxinhas em água fervente até a massa ficar firme.",
    "imagem": "https://guiadacozinha.com.br/wp-content/uploads/2019/10/pamonha-tradicional-768x619.jpg"
  },
  {
    "id": 13,
    "nome": "Farofa de Banana",
    "ingredientes": ["farinha de mandioca", "banana", "manteiga", "cebola", "sal"],
    "modo_preparo": "Derreta a manteiga em uma panela, refogue um pouco de cebola picada e adicione rodelas ou cubos de banana (nanica ou da terra) para refogar levemente. Acrescente a farinha de mandioca aos poucos, mexendo bem para incorporar a manteiga e o sabor da banana. Tempere com sal.",
    "imagem": "https://static.itdg.com.br/images/640-440/6933b79d02787587a3513b2b087cf7f7/shutterstock-1736736014.jpg"
  },
  {
    "id": 14,
    "nome": "Tapioca com Coco",
    "ingredientes": ["goma de tapioca", "coco ralado", "leite condensado"],
    "modo_preparo": "Aqueça uma frigideira antiaderente. Espalhe a goma de tapioca (hidratada) de maneira uniforme para formar um disco. Quando a massa se unir e soltar da frigideira, vire. Retire do fogo e recheie com coco ralado e regue com leite condensado. Dobre ao meio.",
    "imagem": "https://www.delicia.com.br/wp-content/uploads/fly-images/2027/media1150tapioca-de-coco-1366x500.jpg"
  },
  {
    "id": 15,
    "nome": "Brigadeiro",
    "ingredientes": ["leite condensado", "chocolate em pó", "manteiga", "granulado"],
    "modo_preparo": "Em uma panela, misture o leite condensado, chocolate em pó (ou cacau) e a manteiga. Leve ao fogo médio, mexendo sempre, até a mistura desgrudar do fundo da panela (ponto de enrolar). Deixe esfriar, enrole em bolinhas e passe no granulado de chocolate.",
    "imagem": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/1a884bcbc5b04d71476d2995d51d0140.jpg"
  },
  {
    "id": 16,
    "nome": "Beijinho",
    "ingredientes": ["leite condensado", "coco ralado", "manteiga", "açúcar cristal"],
    "modo_preparo": "Em uma panela, misture o leite condensado, coco ralado e a manteiga. Cozinhe em fogo médio, mexendo sempre, até a mistura soltar do fundo da panela. Deixe esfriar. Enrole em bolinhas, umedeça com cravo se desejar, e passe no açúcar cristal ou coco ralado fino.",
    "imagem": "https://admin.docepedia.com/site/uploads/2024/08/beijinho_d.jpg"
  },
  {
    "id": 17,
    "nome": "Quindim",
    "ingredientes": ["gemas", "açúcar", "coco ralado", "manteiga"],
    "modo_preparo": "Misture bem as gemas peneiradas, o açúcar, o coco ralado e a manteiga derretida. Caramelize as forminhas. Despeje a mistura nas forminhas e asse em banho-maria no forno até a superfície dourar e o doce firmar. Desenforme depois de frio.",
    "imagem": "https://www.seara.com.br/wp-content/uploads/2025/09/quindim-tradicional-portal-minha-receita.jpg"
  },
  {
    "id": 18,
    "nome": "Pudim de Leite",
    "ingredientes": ["leite condensado", "leite", "ovos", "açúcar"],
    "modo_preparo": "Prepare uma calda de caramelo com açúcar e água na forma. Bata no liquidificador o leite condensado, leite e os ovos. Despeje essa mistura na forma caramelizada. Asse em banho-maria no forno até que, ao espetar um palito, ele saia limpo. Deixe esfriar completamente antes de desenformar.",
    "imagem": "https://cozinhaglobo.com.br/wp-content/uploads/2023/07/pudim-de-leite-1024x682.jpg"
  },
  {
    "id": 19,
    "nome": "Torta de Limão",
    "ingredientes": ["biscoito", "manteiga", "leite condensado", "limão", "chantilly"],
    "modo_preparo": "Triture o biscoito de maisena e misture com manteiga derretida para forrar o fundo e as laterais de uma forma. Para o recheio, bata o leite condensado com suco de limão (o ácido do limão engrossa o leite condensado). Despeje o recheio sobre a base e leve à geladeira. Cubra com chantilly antes de servir.",
    "imagem": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/1d22d96039f98608bc9338debb1b4579.jpg"
  },
  {
    "id": 20,
    "nome": "Pão de Queijo",
    "ingredientes": ["polvilho azedo", "queijo minas", "leite", "ovo", "óleo"],
    "modo_preparo": "Cozinhe o leite, óleo e a água (se usar) e escalde o polvilho azedo. Adicione os ovos e o queijo minas ralado (ou outro queijo curado) e misture até a massa ficar homogênea. Modele pequenas bolinhas e asse em forno pré-aquecido até dourar e crescerem.",
    "imagem": "https://essareceitafunciona.com.br/wp-content/uploads/2022/07/Pao-de-queijo-Essa-Receita-Funciona-9.jpg"
  },
  {
    "id": 21,
    "nome": "Bolo de Cenoura",
    "ingredientes": ["cenoura", "açúcar", "farinha de trigo", "óleo", "ovos", "chocolate"],
    "modo_preparo": "Bata no liquidificador a cenoura picada, os ovos e o óleo. Despeje em uma tigela e misture o açúcar e a farinha de trigo com um fouet (batedor de arame). Adicione o fermento por último. Despeje na forma e asse. Faça uma calda de chocolate com manteiga, açúcar e chocolate em pó para cobrir o bolo.",
    "imagem": "https://receitasdebemcasado.com/wp-content/uploads/2025/05/receitas-com-bolo-de-cenoura.png"
  },
  {
    "id": 22,
    "nome": "Bolo de Fubá",
    "ingredientes": ["fubá", "açúcar", "farinha de trigo", "leite", "ovo", "fermento"],
    "modo_preparo": "Misture todos os ingredientes secos (fubá, açúcar, farinha de trigo e fermento). Adicione os ingredientes líquidos (leite, ovo, óleo/manteiga) e misture bem até a massa ficar homogênea. Despeje na forma untada e asse em forno médio até dourar e ficar firme.",
    "imagem": "https://conteudo.imguol.com.br/c/entretenimento/9f/2020/06/15/bolo-de-fuba-1592241605327_v2_4x3.jpg"
  },
  {
    "id": 23,
    "nome": "Manjar Branco",
    "ingredientes": ["leite", "amido de milho", "açúcar", "coco ralado e ameixas"],
    "modo_preparo": "Dissolva o amido de milho em parte do leite frio. Leve o restante do leite ao fogo com açúcar e coco ralado. Adicione a mistura de amido de milho e cozinhe, mexendo sempre, até engrossar. Despeje na forma e leve à geladeira. Prepare uma calda com ameixas em água e açúcar e despeje sobre o manjar depois de desenformado.",
    "imagem": "https://s2-receitas.glbimg.com/GSQvzjH2PnVAu_Z9T4p7egMxnuU=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/n/B/bPoyWeRS6jLvzWUAHeXA/manjar-branco-com-ameixas.jpg"
  },
  {
    "id": 24,
    "nome": "Arroz Doce",
    "ingredientes": ["arroz", "leite", "açúcar", "canela"],
    "modo_preparo": "Cozinhe o arroz em água até ficar macio. Adicione o leite, o açúcar e cozinhe em fogo baixo, mexendo ocasionalmente, até que o líquido reduza e o arroz fique cremoso. Sirva quente ou frio, polvilhado com canela.",
    "imagem": "https://cdn0.tudoreceitas.com/pt/posts/8/0/6/arroz_doce_tradicional_portugues_6608_orig.jpg"
  },
  {
    "id": 25,
    "nome": "Cuscuz Nordestino",
    "ingredientes": ["flocos de milho", "sal", "água"],
    "modo_preparo": "Misture os flocos de milho com água e sal e deixe hidratar por 10 a 15 minutos. Coloque a mistura solta na cuscuzeira (ou panela para cozimento a vapor) e cozinhe no vapor por cerca de 10 minutos. Sirva quente, geralmente com manteiga.",
    "imagem": "https://assets.unileversolutions.com/recipes-v2/53028.jpg"
  }
]; 

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