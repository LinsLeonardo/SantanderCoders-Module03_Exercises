# SantanderCoders-Module03_Exercises

# Reading List

- Classe BookList: Criação de uma lista de livros
- Classe Book: Criação de livros a serem adicionados na lista de livros

• BookList:

- Método add(book): Adiciona um livro ao array com todos os livros, e também verifica
  se o livro foi lido e direciona para um segundo array específico.
  Além disso, chama dois novos métodos para atualização da ordem de leitura.
- Método finishCurrentBook(): Seleciona o primeiro objeto do array de livros não lidos e
  define como lido, passando a data atual e mudando o livro de lista.
- Método countBooks(): Usado para definir o número de livros a serem lidos e livros já lidos.
  Este método é chamado sempre ao adicionar um novo livro e ao finalizar a leitura atual, pois em ambos os casos há variação nos arrays.
- Método setReadingOrder(): Método usado para definir a ordem de leitura dos livros, sendo o
  livro atual o da posição inicial do array notReadedBooks.
