function Osoba(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;

    this.przedstawSie = function ()
    {
        console.log('Nazywam się ' + this.imie + ' ' + this.nazwisko);
    }

}

let osoba =  new Osoba('Jan', 'Kowalski'); //osoba - to zmienna opisująca obiekt
osoba.przedstawSie();

