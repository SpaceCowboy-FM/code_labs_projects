let book = {
  title: "When Worlds Collide",
  author: "Felix Mobley",
  publicationYear: "TBD",
  genre: "Science Fiction",
};

function addPublisher(book, publisherString) {
  book.publisher = publisherString;
}

addPublisher(book, "Self Published");
alert(book.publisher);

function modifyPublicationYear(book, publicationYear) {
  book.publicationYear = publicationYear;
}

modifyPublicationYear(book, 2054);
alert(book.publicationYear);

function deletePublisher(book) {
  delete book.publisher;
}

deletePublisher(book);
alert(book.publisher);
