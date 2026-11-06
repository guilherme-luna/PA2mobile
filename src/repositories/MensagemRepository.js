// Camada de armazenamento: guarda as mensagens em memória (um array de objetos).
// Não tem regra de negócio aqui, só guardar e buscar.
// Cada mensagem tem: { id, contatoId, texto, recebida }

export default class MensagemRepository {
  constructor() {
    // Mensagens iniciais "recebidas", para cada conversa já começar com algo.
    this.mensagens = [
      { id: '1', contatoId: '1', texto: 'Oi! Tudo bem?', recebida: true },
      { id: '2', contatoId: '1', texto: 'Já viu a atividade de mobile?', recebida: true },
      { id: '3', contatoId: '2', texto: 'Bora estudar hoje à noite?', recebida: true },
      { id: '4', contatoId: '3', texto: 'Me manda o link da aula, por favor', recebida: true },
      { id: '5', contatoId: '3', texto: 'Esqueci de anotar 😅', recebida: true },
      { id: '6', contatoId: '4', texto: 'Bom dia! O trabalho é pra hoje?', recebida: true },
    ];
  }

  // Retorna apenas as mensagens do contato informado.
  // O filter cria um array novo, então quem chama não altera o array interno.
  getMensagens(contatoId) {
    return this.mensagens.filter((m) => m.contatoId === contatoId);
  }

  // Armazena uma nova mensagem no array.
  adicionarMensagem(mensagem) {
    this.mensagens.push(mensagem);
  }
}
