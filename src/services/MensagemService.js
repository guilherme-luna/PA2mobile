import MensagemRepository from '../repositories/MensagemRepository';

// Regras de negócio. As telas acessam os dados apenas por aqui.
class MensagemService {
  constructor() {
    this.repository = new MensagemRepository();
  }

  getMensagens(contatoId) {
    return this.repository.getMensagens(contatoId);
  }

  enviarMensagem(contatoId, texto) {
    const textoLimpo = texto.trim();
    if (!textoLimpo) {
      return null; // mensagem vazia não é permitida
    }

    const mensagem = {
      id: Date.now(),
      contatoId,
      texto: textoLimpo,
      recebida: false,
    };
    this.repository.adicionarMensagem(mensagem);
    return mensagem;
  }
}

// Instância única, compartilhada entre as telas.
export default new MensagemService();
