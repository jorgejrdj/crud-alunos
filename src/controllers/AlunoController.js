import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    res.json('tudo ok, chefia');
  }
}

export default new AlunoController();
