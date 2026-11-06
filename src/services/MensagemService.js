// Camada de regras de negócio: valida e cria as mensagens.
// As telas só conversam com o Service, nunca direto com o Repository.

import MensagemRepository from '../repositories/MensagemRepository';

class MensagemService {
  constructor(repository) {
    this.repository = repository;
  }

  // Consulta as mensagens de um contato (repassa para o Repository).
  getMensagens(contatoId) {
    return this.repository.getMensagens(contatoId);
  }

  // Valida, cria e armazena uma mensagem enviada pelo usuário.
  // Retorna a mensagem criada, ou null se o texto for vazio.
  enviarMensagem(contatoId, texto) {
    const textoLimpo = texto.trim();

    // Regra de negócio: mensagens vazias (ou só com espaços) não são permitidas.
    if (textoLimpo === '') {
      return null;
    }

    const mensagem = {
      id: Date.now().toString() + Math.random().toString(36).slice(2, 6), // id único
      contatoId,
      texto: textoLimpo,
      recebida: false, // enviada pelo usuário, fica alinhada à direita
    };

    this.repository.adicionarMensagem(mensagem);
    return mensagem;
  }
}

// Instância única (singleton): todas as telas importam este mesmo objeto,
// então as mensagens ficam compartilhadas entre as telas.
const mensagemService = new MensagemService(new MensagemRepository());

export default mensagemService;
