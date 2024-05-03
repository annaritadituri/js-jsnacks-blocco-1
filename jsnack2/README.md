<!--
TRACCIA

L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

-->

<!--
ACQUISIRE GLI INPUT DALL'UTENTE
-->
-Creare un ciclo for che chieda l'input all'utente e lo inserisca in un array

<!--
CALCOLARE LUNGHEZZA
-->
-Creare un array vuoto in cui si possa andare ad aggiungere i valori di lunghezza delle parole
--Creare un ciclo for per calcolare la lunghezza di entrambe le parole

<!--
CONFRONTARE LE DUE LUNGHEZZE E STAMPARE LE PAROLE IN ORDINE DI LUNGHEZZA ASCENDENTE
-->
-Creare un controllo per le lunghezze
    SE la prima parola è più corta della seconda
        -stampare la prima, con il valore numerico della lunghezza
        -stampare la seconda, con il valore numerico della lunghezza
    ELSE SE la prima parola è uguale alla seconda
        -stampare "Le parole sono della stessa lunghezza"
        -stampare entrambi gli input con i rispettivi valori
    ELSE
        -stampare la seconda, con il valore numerico della lunghezza
        -stampare la prima, con il valore numerico della lunghezza
