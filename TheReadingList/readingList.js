class BookList {

  constructor (){
      this.notReadedBooks = []
      this.readedBooks = []
      this.allBooks = []
      this.numOfRead = 0
      this.numOfNotRead = 0
      this.currentBook = []
      this.lastBook = []
      this.nextBook = []
  }

  add(book){
      this.allBooks = [...this.allBooks, book]
      book.read ? this.readedBooks = [...this.readedBooks, book] : this.notReadedBooks = [...this.notReadedBooks, book]
      this.lastBook = this.notReadedBooks[0]
      this.countBooks()
      this.setReadingOrder()

      return (this.allBooks)
  }

  finishCurrentBook(){
      this.notReadedBooks[0].read = true;
      this.notReadedBooks[0].readDate = Date();
      this.readedBooks = [...this.readedBooks, this.notReadedBooks[0]];
      this.lastBook = this.notReadedBooks[0]
      this.notReadedBooks = this.notReadedBooks.slice(1)
      this.setReadingOrder();
      this.countBooks()
  }

  countBooks(){
      this.numOfRead = this.readedBooks.length
      this.numOfNotRead = this.notReadedBooks.length
  }

  setReadingOrder(){
      this.currentBook = this.notReadedBooks[0]
      this.nextBook = this.notReadedBooks[1]
  }
}

class Book {
  constructor(title, genre, author, read, readDate){
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.read = read;
      this.readDate = readDate
  }

}

let meusLivros = new BookList;
let harryPotter = new Book('Harry Potter', 'Fantasia', 'JKRowling', true, '23/08/20')
let senhorDosAneis = new Book('Senhor do Aneis', 'Fantasia', 'JRRTolkien', false)
let percyJackson = new Book('Percy Jackson', 'Fantasia', 'Rick Riordan', false)
let jogosVorazes = new Book('Jogos Vorazes', 'Fantasia', 'Suzanne Collins', true)
let got = new Book('Game Of Thrones', 'Fantasia', 'George R R Martin', false)
let narnia = new Book('As crônicas de nárnia','Fantasia','CS Lewis', true )

meusLivros.add(harryPotter)
meusLivros.add(senhorDosAneis)
meusLivros.add(percyJackson)
meusLivros.add(jogosVorazes)
meusLivros.add(got)
meusLivros.add(narnia)