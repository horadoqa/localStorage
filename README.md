# localStorage

`localStorage` é um recurso do navegador que permite **salvar dados no computador/celular do usuário**, associados a um determinado site.

 Ele é muito usado para guardar coisas como:

- Preferências do usuário (tema claro/escuro).
- Dados simples de configurações.
- Itens de um carrinho.
- Tokens ou informações de sessão **quando apropriado** (com alguns cuidados de segurança).

## Como usar

O `localStorage` funciona como uma espécie de **chave → valor**.

### 1\. Salvar um valor

```
localStorage.setItem("nome", "Hora do QA");
```

 Aqui estamos salvando `"Hora do QA"` na chave `"nome"`.

### 2\. Recuperar o valor

```
const nome = localStorage.getItem("nome");

console.log(nome);
// Hora do QA
```

### 3\. Remover um valor

```
localStorage.removeItem("nome");
```

### 4\. Limpar tudo

```
localStorage.clear();
```

⚠️ Isso remove **todos os dados do localStorage daquele site**.

## E se eu quiser salvar um objeto?

Existe uma particularidade importante: o `localStorage` armazena valores como **strings**.

Então, para salvar um objeto, usamos `JSON.stringify()`:

```
const usuario = {
  nome: "João",
  idade: 25
};

localStorage.setItem("usuario", JSON.stringify(usuario));
```

Para recuperar:

```
const usuario = JSON.parse(
  localStorage.getItem("usuario")
);

console.log(usuario.nome);
// João
```

## Um exemplo prático

Imagine que você tenha um botão para escolher tema:

```
function mudarTema(tema) {
  document.body.className = tema;

  localStorage.setItem("tema", tema);
}
```

Quando o usuário voltar ao site, você pode recuperar a preferência:

```
const tema = localStorage.getItem("tema");

if (tema) {
  document.body.className = tema;
}
```

Assim, mesmo que ele **feche o navegador e abra novamente**, a preferência continua salva.

### `localStorage` vs. variável

```
let nome = "João";
```

Essa variável desaparece quando a página é recarregada.

Já:

```
localStorage.setItem("nome", "João");
```

 continua disponível depois de recarregar a página e, normalmente, depois de fechar e abrir o navegador.

 **Regra prática:** use `localStorage` para dados pequenos e não sensíveis que precisam persistir no navegador. Para informações sensíveis, especialmente credenciais e tokens de autenticação, é preciso avaliar alternativas mais seguras, como cookies `HttpOnly`.
