# PA2 Mobile — App de Mensagens

App simples de mensagens (inspirado no WhatsApp) em **React Native + Expo**, com foco em navegação entre telas, passagem de parâmetros, componentes reutilizáveis e organização em camadas (Service / Repository).

## Requisitos

- **HomeScreen**: pelo menos 4 contatos fictícios; ao tocar, navega para o chat passando `id` e `nome` (`navigation.navigate()` / `route.params`).
- **ChatScreen**: nome do contato, lista de mensagens (enviadas à direita, recebidas à esquerda), campo de texto + botão enviar. Limpa o campo após enviar e não permite mensagens vazias. Usa `useState`.
- **Componente `Mensagem`**: props `mensagem` (texto) e `recebida` (boolean → alinhamento/estilo).
- **`MensagemRepository`**: array em memória de `{ id, contatoId, texto, recebida }`; métodos `getMensagens(contatoId)` e `adicionarMensagem(mensagem)`.
- **`MensagemService`**: `getMensagens(contatoId)` e `enviarMensagem(contatoId, texto)` (valida, cria e armazena). Instância única compartilhada; a UI só acessa o Service.
- **Navegação**: React Navigation com Stack Navigator (Home → Chat e voltar).
- Sem MQTT, API ou banco — dados só em memória, sem persistência.

## Estrutura

```
App.js
src/
  screens/       HomeScreen.js, ChatScreen.js
  components/    Mensagem.js
  services/      MensagemService.js
  repositories/  MensagemRepository.js
```

## Como rodar

```
npm install
npx expo start
```

Abra o app **Expo Go** no celular e leia o QR code.

## Integrantes

- Guilherme Cardoso
