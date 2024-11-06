import './style.css';

//FUNCTION

// Scrivi una funzione chiamata descriptionCountry che accetta tre parametri: paese, popolazione e capitale. Sulla base di questo input, la funzione restituisce una stringa con questo formato: "La Finlandia ha 6 milioni di abitanti e la sua capitale è Helsinki".Chiama questa funzione 3 volte, con dati di input per 3 paesi diversi. Memorizza i valori restituiti in 3 variabili diverse e registrali sulla console.

// La popolazione mondiale è di 7900 milioni di persone. Crea una dichiarazione di funzione chiamata percentualeDiMondo1 che riceve un valore di popolazione e restituisce la percentuale della popolazione mondiale rappresentata dalla popolazione specificata. Ad esempio, la Cina ha 1.441 milioni di abitanti, ovvero circa il 18,2% della popolazione mondiale.Per calcolare la percentuale, dividi il valore della popolazione indicato per 7900 e poi moltiplicalo per 100. Chiama percentOfWorld1 per 3 popolazioni di paesi di tua scelta, memorizza i risultati in variabili e registrali sulla console. Crea un'espressione di funzione che fa esattamente la stessa cosa, chiamata percentualeOfWolrd2, e chiamala anche con 3 popolazioni di paesi (possono essere le stesse popolazioni).

// Ricrea l'ultimo compito, ma questa volta crea una funzione freccia chiamata percentualeDiMondo3.

//FUNCTIONS CALLING OTHER FUNCTIONS

// Crea una funzione chiamata descriptionPopulation. Utilizza il tipo di funzione che ti piace di più. Questa funzione accetta due argomenti: paese e popolazione, e restituisce una stringa come questa: "La Cina ha 1.441 milioni di abitanti, ovvero circa il 18,2% della popolazione mondiale".Per calcolare la percentuale, descriptionPopulation chiama la percentualeOfWorld1 creata in precedenza. Chiama descriptionPopulation con dati per 3 paesi a tua scelta.

//ARRAY

// Crea un array contenente 4 valori di popolazione di 4 paesi a tua scelta. Puoi utilizzare i valori che hai utilizzato in precedenza. Memorizza questo array in una variabile chiamata popolazioni.Registra sulla console se l'array ha 4 elementi o meno (vero o falso).Crea un array chiamato percentuali contenente le percentuali della popolazione mondiale per questi 4 valori di popolazione. Utilizza la funzione percentualeDiMondo1 creata in precedenza per calcolare i 4 valori percentuali NO LOOP.

// Crea un array contenente tutti i paesi confinanti di un paese di tua scelta. Scegli un paese che abbia almeno 2 o 3 vicini. Memorizza l'array in una variabile chiamata neighbours.Ad un certo punto, un nuovo paese chiamato "Utopia" viene creato nelle vicinanze del paese selezionato, quindi aggiungilo alla fine dell'array dei vicini.Sfortunatamente, dopo un po' di tempo il nuovo paese viene sciolto, quindi rimuovilo dalla fine dell'array.Se l'array dei vicini non include il paese "Germania", accedi alla console: "Probabilmente non è un paese dell'Europa centrale: D".Cambia il nome di uno dei paesi vicini. Per fare ciò, trova l'indice del paese nell'array dei vicini, quindi usa quell'indice per modificare l'array in quella posizione dell'indice. Ad esempio, puoi cercare "Svezia" nell'array e quindi sostituirlo con "Repubblica di Svezia".

//OBJECT

// Crea un oggetto chiamato myCountry per un paese a tua scelta, contenente le proprietà paese, capitale, lingua, popolazione e vicini (un array come quello che abbiamo usato nei compiti precedenti).

//Utilizzando l'oggetto dell'incarico precedente, registra una stringa come questa sulla console: "La Finlandia ha 6 milioni di persone di lingua finlandese, 3 paesi confinanti e una capitale chiamata Helsinki".Aumenta la popolazione del paese di due milioni utilizzando la notazione punto, quindi diminuiscila di due milioni utilizzando la notazione tra parentesi.

//Aggiungi un metodo chiamato description all'oggetto myCountry. Questo metodo registrerà una stringa sulla console, simile alla stringa registrata nell'assegnazione precedente, ma questa volta utilizzando la parola chiave "this".Chiama il metodo description.Aggiungi un metodo chiamato checkIsland all'oggetto myCountry. Questo metodo imposterà una nuova proprietà sull'oggetto, chiamata isIsland. isIsland sarà vero se non ci sono paesi vicini e falso se ce ne sono. Utilizzare l'operatore ternario per impostare la proprietà.

//FOR LOOP

// Ci sono le elezioni nel tuo paese! in una piccola città ci sono solo 50 elettori. Utilizza un ciclo for per simulare le 50 persone che votano, registrando una stringa come questa sulla console (per i numeri da 1 a 50): 'L'elettore numero 1 sta attualmente votando'.

//Riportiamo l'array delle popolazioni da un compito precedente.Utilizza un ciclo for per calcolare un array chiamato percentuali2 contenente le percentuali della popolazione mondiale per i 4 valori della popolazione. Utilizza la funzione percentualeWOrld1 creata in precedenza. Conferma che percentuali2 contenga esattamente gli stessi valori dell'array di percentuali che abbiamo creato manualmente nel compito precedente e rifletti su quanto sia migliore questa soluzione.

//Memorizza questo array di array in una variabile chiamata listOfNeighbours:

// [['Canada', 'Messico'], ['Spagna'], ['Norvegia', 'Svezia', 'Russia']];
// Registra sulla console solo i paesi vicini, uno per uno, non gli interi array. Registra una stringa come "Vicino: Canada" per ogni paese. Avrai bisogno di un loop all'interno di un loop per questo.

//Ricrea la sfida della lezione Looping Arrays, Breaking and Continuing, ma questa volta utilizzando un ciclo while (chiama l'array percents3).Rifletti su quale soluzione preferisci per questo compito: il ciclo for o il ciclo while?
