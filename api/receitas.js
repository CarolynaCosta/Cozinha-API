import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "receitas.json");
  const data = fs.readFileSync(filePath, "utf8");
  const receitas = JSON.parse(data);

  const { alimento } = req.query;

  if (alimento) {
    const filtradas = receitas.filter((r) =>
      r.ingredientes.some((i) =>
        i.toLowerCase().includes(alimento.toLowerCase())
      )
    );
    return res.status(200).json(filtradas);
  }

  return res.status(200).json(receitas);
}
