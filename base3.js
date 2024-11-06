import './style.css';
// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Computer Systems: A Programmer\'s Perspective',
//     author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65
//       }
//     }
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090
//       }
//     }
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0
//       }
//     }
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808
//       }
//     },
//     highlighted: true
//   }
// ];

// 1.1
// Destruttura l'array dei libri in due variabili chiamate firstBook e secondBook.

//1.2
// Destruttura l'array dei libri in una variabile chiamata terzoLibro. Devi saltare i primi due libri.

// 1.3
// Di seguito è riportato l'array di valutazioni nidificato che contiene altri due array. Destruttura gli array di valutazioni nidificate in due variabili denominate rating e ratingsCount. Come risultato della destrutturazione, la variabile ratings dovrebbe memorizzare il numero 4.19 e la variabile ratingsCount dovrebbe memorizzare il numero 144584.

// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

// 1.4
// Di seguito è riportato l'array ratingStars. Destrutturalo in tre variabili chiamate fiveStarRatings, oneStarRatings e threeStarRatings. Assegna alla variabile threeStarRatings un valore predefinito pari a 0.

// const ratingStars = [63405, 1808];

// 2.1
// Destruttura il primo oggetto libro dall'array libri in variabili chiamate titolo, autore e ISBN.

// 2.2
// Ogni oggetto libro ha la proprietà keywords. Destruttura il primo oggetto libro dall'array libri in una variabile chiamata tag. Alla variabile tags dovrebbe essere assegnato il valore della proprietà keywords.

//2.3
// Nel settimo libro dell'array books manca la proprietà programmingLanguage. Destruttura il settimo oggetto libro (libri[6]) in variabili chiamate linguaggio e linguaggio di programmazione. Assegnare alla variabile programmingLanguage il valore predefinito "sconosciuto".

// 2.4
// Di seguito sono riportate due variabili chiamate bookTitle e bookAuthor. Riassegnali con i valori del titolo e delle proprietà dell'autore del primo oggetto libro dall'array libri.

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';

// 2,5
// Ogni oggetto libro ha una proprietà di valutazione profondamente annidata.Destruttura il primo oggetto libro dall'array libri in una variabile chiamata bookRating. Come risultato della destrutturazione, alla variabile bookRating dovrebbe essere assegnato il valore della proprietà book[0].thirdParty.goodreads.rating.Si prega di svolgere la maggior parte del lavoro sul lato sinistro dell'operatore di assegnazione: const ... = libri[0];

// 2.6
// Scrivi una funzione chiamata printBookInfo che abbia tre parametri chiamati titolo, autore e anno. Questa funzione dovrebbe funzionare per un singolo oggetto passato come argomento e dovrebbe registrare nella console le informazioni sul libro in questo formato: "${titolo} di ${autore}, ${anno}".Se l'anno non è definito (non è stato superato), gli dovrebbe essere assegnato il valore predefinito "anno sconosciuto".

//printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });

//SPREAD OPERATOR
// 3.1
// Ogni oggetto libro ha la proprietà autore, che memorizza un array di stringhe (nomi degli autori) se ci sono più autori, o una singola stringa (nome dell'autore) se c'è un solo autore.

// Dichiara un array chiamato bookAuthors e riempilo con gli autori dei primi due libri dell'array books. L'array bookAuthors dovrebbe avere un solo livello (nessun array annidato).

// 3.2
// Scrivi una funzione chiamata spellWord che accetta una singola stringa come argomento. Questa funzione dovrebbe registrare sulla console ogni lettera dell'argomento separata da uno spazio.

// spellWord('JavaScript');

//REST PATTERNS
// 4.1
// Destruttura la proprietà keywords (array) del primo libro dall'array dei libri in variabili chiamate mainKeyword e rest. La prima parola chiave dovrebbe essere assegnata a mainKeyword e il resto di keywords dovrebbe essere assegnato alla variabile restante (dovrebbe essere un array).

//4.2
// Destruttura il secondo libro dall'array libri in una variabile chiamata bookPublisher. Alla variabile bookPublisher dovrebbe essere assegnato il valore della proprietà editore dell'oggetto libro. Assegna il resto delle proprietà alla variabile restOfTheBook.

// 4.3
// Scrivi una funzione chiamata printBookAuthorsCount che abbia due parametri chiamati titolo e autori. Il parametro autori dovrebbe accettare un numero qualsiasi di argomenti. Questa funzione dovrebbe registrare sulla console una stringa formattata in questo modo: "Il libro "${titolo}" ha ${autori.lunghezza} autori".

// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// 5.1
// Alcuni oggetti del libro hanno la proprietà programmingLanguage, che specifica ad esempio quale linguaggio di programmazione viene utilizzato nel libro
// Scrivi una funzione chiamata hasExamplesInJava che accetta come argomento un oggetto libro dall'array libri. Questa funzione dovrebbe restituire true se il libro utilizza Java, o una stringa "nessun dato disponibile" se utilizza un altro linguaggio o nessun linguaggio di programmazione.

// Utilizzare il short-circuiting.
// hasExamplesInJava(books[0]);

// 5.2
// Alcuni oggetti libro hanno la proprietà onlineContent, che può essere true o false. Esegui il loop sull'array dei libri e, per i libri che forniscono contenuto online, registra sulla console una stringa in questo formato: "${title}" fornisce contenuto online.

// 6.1
// Ci sono oggetti nell'array books che non hanno affatto la proprietà onlineContent. Esegui il loop sull'array dei libri e registra una stringa sulla console in questo formato: "${title}" non fornisce dati sul suo contenuto online.

// 7.1
// Utilizza il ciclo for-of per eseguire il loop sull'array dei libri e sommare le pagine di tutti i libri. Utilizza la variabile pageSum di seguito e la proprietà pagine degli oggetti libro.

// let pageSum = 0;

// 7.2
// Di seguito è riportata la variabile allAuthors che memorizza un array vuoto. Utilizza il ciclo for-of per riempire allAuthors con gli autori di ciascun libro dall'array books. Ricorda che ogni oggetto libro ha la proprietà autore, che può essere una stringa (se c'è un solo autore) o un array (se ci sono più autori). Potrebbe essere necessario utilizzare l'operatore typeof. Se necessario, puoi anche utilizzare più loop. L'array allAuthors dovrebbe avere un solo livello (nessun array annidato).

// const allAuthors = [];

// 7.3
// Utilizza il ciclo for-of insieme al metodo entrys() di Array per registrare ciascun autore da allAuthors sulla console insieme al suo indice. Fai in modo che l'indice inizi da 1, anziché da 0.

// 1. Robert Sedgewick
// 2. Kevin Wayne
// 3. Harold Abelson
//    ...
// 15. Cal Newport

// 8.1
// Di seguito è riportata la variabile entry che memorizza un array vuoto. Utilizza il ciclo for-of insieme al metodo Object.keys() per eseguire il ciclo sulla proprietà ThirdParty.goodreads (array) del primo oggetto libro dall'array di libri. Per ogni chiave, inserisci un nuovo array che contiene quella chiave nell'array delle voci.

// Alla fine, l'array delle voci dovrebbe essere riempito con array contenenti chiavi:
// [['rating'], ['ratingsCount'], ['reviewsCount'], ['fiveStartRatingCount'], ['oneStartRatingCount']]

// const entries = [];
