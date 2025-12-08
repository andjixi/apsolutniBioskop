### Kratak opis: 
Korisnik dolazi na blagajnu bioskopa kako bi kupio kartu, preuzeo prethodno rezervisanu kartu. Nakon kupljene karte, ili u slučaju gde korisnik već poseduje kartu, blagajnik korisniku nudi kupovinu grickalica i pića. Sistem evidentira sve obavljene transakcije i ažurira podatke u bazi.

### Akteri:
Korisnik - osoba koja dolazi na blagajnu. <br>
Blagajnik - zaposleni koji obavlja prodaju i interakciju sa korisnikom.

### Preduslovi: 
Bioskop je otvoren i blagajna je u funkciji. <br>
Korisnik je fizički prisutan na blagajni i bar jedan blagajnik je dostupan. <br>
Sistem je povezan sa bazom podataka o projekcijama, cenama, raspoloživim sedištima, grickalicama i pićima. <br>
Blagajnik je ulogovan u sistem.

### Postuslovi:
Korisnik je uspešno izvršio transakciju zbog koje je došao na blagajnu, a sistem je ažurirao sve relevantne podatke u bazi.

### Osnovni tok:
1. Korisnik prilazi slobodnom blagajniku.
2. Korisnik bira jednu od opcija:
    - Ukoliko želi da kupi kartu, prelazi se na podtok P1.
    - Ukoliko želi da preuzme prethodno rezervisanu kartu, prelazi se na podtok P2.
    - Ukoliko ne želi ni jedno ni drugo, prelazi se na korak 3.
3. Blagajnik pita korisnika da li želi da kupi grickalice ili piće.
    - Ukoliko korisnik ne želi ništa, prelazi se na korak 6.
4. Korisnik bira grickalice i/ili piće.
5. Blagajnik unosi izabrane artikle u porudžbinu.
6. Sistem prikazuje ukupnu cenu za izabrane artikle.
7. Blagajnik traži od korisnika način plaćanja.
8. Korisnik bira način plaćanja i daje potrebne podatke.
9. Sistem obrađuje plaćanje.
10. Sistem ažurira bazu podataka o prodaji karata i/ili grickalica i pića.
11. Sistem generiše račun i štampa ga.
12. Blagajnik predaje korisniku kupljene artikle i račun.

### Podtokovi: 
P1: Kupovina karte 
1. Blagajnik pita korisnika za film i termin koji želi da pogleda. 
2. Blagajnik zahteva podatke o traženom filmu i terminu. 
3. Sistem prikazuje dostupna sedišta za izabrani termin. 
4. Korisnik bira sedište/a koje želi da kupi. 
5. Blagajnik unosi izabrana sedišta u sistem. 
6. Blagajnik unosi karte u porudžbinu. 
7. Prelazi se na korak 4 osnovnog toka.

P2: Preuzimanje rezervisane karte 
1. Blagajnik traži od korisnika podatke o rezervaciji (npr. broj rezervacije, ime). 
2. Sistem pronalazi rezervaciju i prikazuje detalje. 
3. Blagajnik proverava validnost rezervacije.
    - Ukoliko je rezervacija validna prelazi se na korak 4 osnovnog toka.
    - Ukoliko rezervacija nije validna, blagajnik obaveštava korisnika i vraća se na korak 2 osnovnog toka. 
4. Blagajnik potvrđuje preuzimanje karte i unosi karte u porudžbinu. 
5. Prelazi se na korak 4 osnovnog toka.

### Alternativni tokovi:
A1: Nema slobodnih sedišta - Ukoliko nema slobodnih sedišta za izabrani termin, sistem obaveštava blagajnika koji zatim obaveštava korisnika i nudi alternativne termine ili filmove i prelazi na korak 1 podtoka P1. <br>
A2: Korisnik odustaje od procesa - U bilo kom momentu korisnik može odlučiti da ne nastavi sa kupovinom ili preuzimanjem karte, i blagajnik zatim završava interakciju. <br>
A3: Neuspelo plaćanje - Ukoliko plaćanje ne uspe, sistem obaveštava blagajnika koji zatim obaveštava korisnika i nudi opciju da pokuša ponovo ili odustane. <br>
A4: Nedostupnost artikala (grickalice i piće) - Ukoliko izabrani artikli nisu dostupni, blagajnik obaveštava korisnika i nudi alternativne artikle ili završava proces bez kupovine artikala. <br>
A5: Odustajanje od artikala - Korisnik u bilo kom momentu može da odluči da ne kupi neki od artikala iz porudžbine pre nego što se pređe na plaćanje, i blagajnik zatim ažurira porudžbinu u skladu sa tim.

### Specijalni zahtevi: /
### Dodatne informacije: /