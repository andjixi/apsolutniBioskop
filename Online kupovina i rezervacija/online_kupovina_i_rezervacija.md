### Kratak opis: 
Korisnik pristupa aplikaciji kako bi pogledao repertoar bioskopa, odabrao film koji želi da pogleda i kupi ili rezerviše kartu za određeni termin.

### Akteri:
Korisnik - osoba koja koristi aplikaciju za kupovinu ili rezervaciju karata.
    
### Preduslovi: 
Korisnik je povezan na internet, registrovan i ulogovan je u aplikaciju. <br>
Sistem je povezan sa bazom podataka o projekcijama, cenama i raspoloživim sedištima.

### Postuslovi:
Korisnik je uspešno kupio ili rezervisao kartu za izabrani film i termin.

### Osnovni tok:
1. Korisnik pristupa aplikaciji.
2. Sistem prikazuje početnu stranicu sa opcijom za pregled repertoara bioskopa.
3. Korisnik bira opciju za pregled repertoara.
4. Sistem prikazuje listu dostupnih filmova sa terminima projekcija.
5. Korisnik bira film koji želi da pogleda.
6. Sistem prikazuje detalje o izabranom filmu, uključujući dostupne termine i cene karata.
7. Korisnik bira željeni termin projekcije.
8. Sistem prikazuje raspoloživa sedišta za izabrani termin.
9. Korisnik bira sedište koje želi da rezerviše ili kupi.
10. Sistem prikazuje opciju za kupovinu ili rezervaciju karte.
    - Ukoliko je korisnik izabrao kupovinu izvršava se podtok P1
    - Ukoliko je korisnik izabrao rezervaciju izvršava se podtok P2
11. Sistem šalje potvrdu o uspešnosti.

### Podtokovi: 
P1: Kupovina karte
1. Sistem proverava bonus poene korisnika i nudi popust ukoliko korisnik ima dovoljan broj poena na nalogu.
2. Sistem prikazuje konačnu cenu i opcije plaćanja.
3. Korisnik bira način plaćanja i unosi potrebne podatke
4. Korisnik unosi podatke o plaćanju.
5. Sistem obrađuje plaćanje.
6. Sistem ažurira raspoloživost sedišta u bazi podataka.
7. Sistem generiše elektronsku kartu i šalje je korisniku putem e-pošte i prikazuje na ekranu.
8. Sistem ažurira bonus poene korisnika na nalogu.

P2: Rezervacija karte
1. Korisnik potvrđuje rezervaciju.
2. Sistem obrađuje rezervaciju i čuva podatke o rezervisanom sedištu.
3. Sistem ažurira raspoloživost sedišta u bazi podataka.
4. Sistem šalje potvrdu o rezervaciji korisniku putem e-pošte i prikazuje na ekranu.

### Alternativni tokovi:
A1: Korisnik odustaje od procesa - U bilo kom momentu korisnik može prekinuti proces i sistem poništava rezervaciju pre potvrde. <br>
A2: Neuspelo plaćanje - Ukoliko plaćanje ne uspe, sistem obaveštava korisnika i nudi opciju da pokuša ponovo ili odustane.

### Specijalni zahtevi: /
### Dodatne informacije: /