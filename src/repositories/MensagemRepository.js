// Armazena as mensagens em memória.
export default class MensagemRepository {
  constructor() {
    this.mensagens = [
      { id: 1, contatoId: 1, texto: 'Oi, tudo bem?', recebida: true },
      { id: 2, contatoId: 2, texto: 'Vamos estudar hoje?', recebida: true },
      { id: 3, contatoId: 3, texto: 'Me manda o link da aula', recebida: true },
      { id: 4, contatoId: 4, texto: 'O trabalho é para hoje?', recebida: true },
    ];
  }

  getMensagens(contatoId) {
    return this.mensagens.filter((m) => m.contatoId === contatoId);
  }

  adicionarMensagem(mensagem) {
    this.mensagens.push(mensagem);
  }
}
