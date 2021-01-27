import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rafael',
      sobrenome: 'Nogueira',
      email: 'nogueirar@gmail.com',
      idade: 25,
      peso: 110,
      altura: 1.8,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
