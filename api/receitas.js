import receitas from "../receitas.json" assert { type: "json" };

export default function handler(req, res) {
  const { alimento } = req.query;

  if (!alimento) {
    return res.status(200).json(receitas);
  }

  const filtro = alimento.toLowerCase();
  const filtradas = receitas.filter(
    (r) =>
      r.nome.toLowerCase().includes(filtro) ||
      (r.ingredientes && r.ingredientes.some((i) => i.toLowerCase().includes(filtro)))
  );

  if (filtradas.length === 0) {
    return res.status(404).json({ mensagem: "Nenhuma receita encontrada para esse alimento." });
  }

  res.status(200).json(filtradas);
}
