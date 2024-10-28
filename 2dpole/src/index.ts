// import * as process from 'process';
// import * as fn from './funkce';
// import * as fs from 'fs';

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import promptSync from 'prompt-sync';
let prompt = promptSync();

// A1: Vytvorit promennou do ktere priradite pole prirozenych cisel, od 1 do 10 vcetne

// A2: Udelejte funkci, ktera VYPISE obsah pole
function vypisPoleA2(pole : string[]) {
    // doplnit
    for (let index : number = 0; index < pole.length; index++) {

    }
}

// A3: funkce, ktera vypise obsah pole ... ale obracene, od posledniho prvku k prvnimu.
function vypisPoleObraceneA3(pole : string[]) {

}

// A4: Totez co A2, ale:
// - vypise vsechna slova na jediny radek (console.log vzdy odradkuje, takze se musi vytvorit nejprve text v promenne typu string):
// - texty od sebe oddeli carkami; presneji oddelovacem ", " (ta mezera je schvalne, aby to lepe vypadalo)
// - carky musi byt jen mezi slovy, text nesmi zacinat ani koncit carkou (budou nejake podminky)
function vypisPoleA4(pole : string[]) {
    // doplnit
    let vystup : string = '';

    // napoveda a zkraceni:
    vystup += '....';


    // a nakonec vypiseme vsechno:
    console.log(vystup);
}

// postupne poustej funkce A1-A4
vypisPoleA2( ['kobyla', 'ma', 'maly', 'bok' ]);

// A5: Funkce dostane jako vstup pole cisel. Spocita a vypise:
// - minimum
// - maximum
// - aritmeticky prumer
function minMaxPrumerA5(vstup : number[]) {
    // doplnit
}

minMaxPrumerA5([1, 2, 30, 3, -5, 22, 11, -50]);

// A6: funkce dostane jako vstup pole cisel. Jejim ukolem je v poli NAHRADIT licha cisla cisly s opacnym znamenkem. 
// Tedy 2 necha na pokoji, z 5 udela -5, a z -11 udela naopak 11.
function zapornaLichaCislaA6(cisla : number[]) {

}

let a1 = [2, 4, 5, 6, -11, 7];
zapornaLichaCislaA6(a1);
// vypiseme vysledek
console.log(a1);

// A7: Napiste funkci, ktera ZMENI zadane pole tak, aby prvky v nem byly v opacnem poradi nez puvodne
function obratPoleA7(texty : string[]) {
    // doplnit
}

let a6a = ['ahoj', 'zelvo', 'tady', 'zajic'];
obratPoleA7(a6a);
console.log(a6a);
let a6b = ['skakal', 'pes', 'pres', 'oves', 'pres', 'minove', 'pole'];
obratPoleA7(a6b);
console.log(a6b);

// A8: funkce dostane pole, a tim "zatoci" - vsechny prvky posune k nizsim pozicim, a prvni prvek da na
// konec pole. Napriklad z pole a6b udela ['pes', 'pres', 'oves', 'pres', 'minove', 'pole', 'skakal']

// A9: Napiste funkci, ktera se bude ptat uzivatele na cisla, a zapamatuje si (v poli) takova, ktera jsou vetsi nez 1.
// Funkce nakonec vypise zapamatovana cisla, ve stejnem poradi, jako je uzivatel zadal.

// A10: Totez jako A6, ALE .... funkce vypise zapamatovana cisla v OPACNEM poradi, nez je uzivatel puvodne zadal, pridava je na zacatek pole.

// A11: Napis funkci, ktera prijima pole textu jako parametr. Mezi nimi najde NEJDELSI text - vypise jeho delku, a take KOLIK takto dlouhych
// textu v zadanem poli je.
function pocetNejdelsichA11(texty : string[]) {
    // doplnit
}

pocetNejdelsichA11(['a', 'abeceda', 'abc', 'babka', 'zizalak' ]);

// A12: Proc se vice pouzivaji push/pop a mene shift/unshift ?

// A13: Napiste funkci, ktera mezi zadanymi texty najde NEJKRATSI a NEJDELSI text. Potom ten nejdelsi text umisti ZA nejkratsi.
// napoveda: pouzij funkci pole .splice. Kolik prvku se bude pri vkladani umazavat (2. parametr ?).
function nejdelsiZaNejkratsiA13(texty: string[]) : string[] {
    let nejdelsiPos = -1;
    let nejdelsiDelka = -1;

    let nejkratsiPos = -1;
    let nejkratsiDelka = -1;

    for (let p : number = 0; p < texty.length; p++) {
        let t = texty[p];

        if (t.length > nejdelsiDelka) {
            nejdelsiDelka = t.length;
            nejdelsiPos = p;
        }
        // chyba:
        if (t.length < nejkratsiDelka) {
            nejkratsiDelka = t.length;
            nejkratsiPos = p;
        }
    }

    // varianta 1: postavim nove pole, a "chytre" do nej budu nebo nebudu pridavat prvky; bez splice(), pro demonstraci:
    let vysledek : string[] = [];
    // zapamatuju si nejdelsi text
    let nejdelsiText : string = texty[nejdelsiPos];

    for (
        let p : number = 0; 
        p < texty.length;  
        p++) {
            let t = texty[0];

            // mam nejdelsi text ? Tak ten chci premistit "nekam jinam", takze jej do vysledku ted NEDAM:
            if (p != nejdelsiPos) {
                vysledek.push(t);
            }
            // a kdyz jsem zrovinka pridal do vysledku nejkratsi slovo, pridam nejdelsi ZA nej.
            if (p == nejkratsiPos) {
                vysledek.push(nejdelsiText);
            }
    }

    // varianta 2: budu is hrat PRIMO v tom poli
    let vysledek2 : string[] = texty;

    // pomoci splice() odstranim neco z pole: budu odstranovat 1 prvek (delka 1), a vsunout nechci nic:
    vysledek2.splice(nejdelsiPos, 1);

    // a (zapamatovany) text vsunu jinam - ZA (+1) nejkratsiPos
    let kam = nejkratsiPos + 1;
    // POZOR: co kdyz .... 
    // - mam zapamatovanou pozici "nejkratsiPos"; po vyhledani nejkratsiho/nejdelsiho je na teto zapamatovane pozici nejkratsi text.
    // - umazu neco PRED touto pozici ?
    // Prvky se posunou ...a nejkratsi text zmemni pozici ?
    
    vysledek2.splice(kam, 0, nejdelsiText);

    return vysledek2;
}

let a11 = ['skakal', 'pes', 'pres', 'oves', 'pres', 'granatove', 'pole'];
let a111 = ['skakal', 'pes', 'pres', 'oves', 'pres', 'minove', 'pole'];
let vysledekA11 = nejdelsiZaNejkratsiA13(a11);
console.log(vysledekA11);

// A14: Napis funkci, ktera najde v poli hledany text ... a vypise text PRED a ZA NIM (pokud takove existuji).
function najdiOkolniA14(texty: string[], hledam: string) {

}

najdiOkolniA14(a11, 'minove');
najdiOkolniA14(a11, 'pole');

// A15: Napis funkci, ktera za kazde slovo s delkou prave 4 znaky vlozi ","; ale ne pokud je slovo posledni
function vlozCarkyA15(slova : string[]) {
    for(let pos : number = 0; pos < slova.length; pos++) {
        let slovo = slova[pos];
        if (slovo.length == 4) {
            if (pos < slova.length -1) {
                // na pozici neodstranuji nic (0 prvku), ale vkladam novy
                slova.splice(pos + 1, 0, ",");
                // protoze jsem neco na dal pozici pos+1, musim posunout "pos" tak, aby pos++ preslo na soucasnou pos + 2
                pos++;
            }
        }
    }
}

// A16: napis funkci, ktera podle zadani v poli natiskne znaky. V poli za sebou nasleduji vzdy dvojice cisel, prvni je pocet mezer, 
// druhe pocet hvezdicek. Po kazde dvojici se natiskne konec radku. Funkce MUSI pouzita cisla z pole odstranit. Skonci, pokud jsou
// obe cisla 0.
// To znamena, ze v poli [1, 5, 0, 4 ] znamena: 
// - 1 mezera
// - 5 hvezdicek
// (konec radku)
// - 0 mezer
// - 4 hvezdicky
function tiskniZnakyA15(pocty: number[]) {

}
let predpis: number[] = [4, 1, 3, 3, 2, 5, 1, 7, 0, 9, 1, 7, 2, 5, 3, 3, 4, 1, 0, 0];
tiskniZnakyA15(predpis);

// A14 varianta: budu postupovat odzadu, tak budu carky vzdy davat do casti pole, ktere uz program "prozkoumal" - nehazi sam sobe klacky pod nohy
function vlozCarky2(slova : string[]) {
    // za posledni slovo (slova.length -1) se stejne carka nema davat, tak jej ani nebudu zkoumat, zacinam na slova.length -2 
    for(let pos : number = slova.length - 2; pos >= 0; pos--) {
        // doplnit
    }
}
let poleProCarky = ['Prsi', 'prsi', 'jen', 'se', 'leje', 'kam', 'konicky', 'pojedeme'];
vlozCarky2(poleProCarky);
console.log(poleProCarky.join(" "));

// A15: Napis funkci, ktera z celeho pole ODSTRANI zaporna cisla - a vlozi je za nejvyssi cislo, ktere v poli zbude
function usporadejCisla(cisla : number[]) {

}

import * as s from './resene_priklady';

console.log(s.sachovnice(10));