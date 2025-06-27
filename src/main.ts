// 🏆 Snack 1
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
// Se è una stringa: stampala in maiuscolo
// Se è un numero: moltiplicalo per due e stampalo
// Se è un booleano: stampa “Sì” o “No” in base al suo valore
// In tutti gli altri casi: stampa “Tipo non supportato”

// 🎯 BONUS
// Se è null: stampa “Il dato è vuoto”
// Se è un array: stampa la sua lunghezza
// Se è una Promise: attendi che si risolva e stampa il valore del resolve.

let response: unknown;
if (typeof response === "string") {
  console.log(response.toUpperCase());
} else if (typeof response === "number") {
  console.log(response * 2);
} else if (typeof response === "boolean") {
  console.log(response ? "Sì" : "No");
} else if (response === null) {
  console.log("Il dato è vuoto");
} else if (Array.isArray(response)) {
  console.log(response.length);
} else {
  console.log("Tipo non supportato");
}