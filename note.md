RXJS: alternativa alla reattività di signal di angular

iniezione nel costruttore con private
al posto di fetch, usiamo get
al posto di then, usimo subscribe

api rest
get è uno dei modi per fare le chiamate web
verbi di chiamate api:
    .get - quando voglio info dal server
    .options - fetcha tutte le rest disponibili
    .post - creare nuova risorsa
    .put - update risorsa esistente
    .patch - update parziale della risorsa, non tutta 
    .delete - rimuovere risorsa

get mi permette di gestire anche un .pipe (equivale a fare una scala di .then uno dietro l'altro)

.pipe ===   .then()
            .then()
            .then()

comando.pipe - return children (perché il pipe collega genitore a processo figlio nella chiamata)

map -> mappa ogni cambiamento su signal e osservable :
((((((((((((((signal e observable sono array temporali, sono scatole che cambiano valore nel tempo))))))))))))))

change master - subscribe slave

behaviour start con subscribe, siccome ha un valore iniziale, gli lancia già un evento, mentre gli altri non lanciano niente perché non hanno nulla da comunicare 

se faccio change (tutti e tre) prima di subscribe non funziona
replay da tutto lo storico a seconda del buffer a disposizione (10) di tutti i cambiamenti avvenuti (change)

--- testalo un po' e chiedi a chatgpt le differenze 
