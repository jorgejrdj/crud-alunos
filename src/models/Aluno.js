import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        Validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        Validate: {
          len: {
            args: [3, 255],
            msg: 'sobrenome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'email já existe',
        },
        Validate: {
          isEmail: {
            msg: 'email inválido',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        Validate: {
          isInt: {
            msg: 'idade precisa ser um número inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        Validate: {
          isFloat: {
            msg: 'Peso inválido',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        Validate: {
          isFloat: {
            msg: 'altura inválida',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
