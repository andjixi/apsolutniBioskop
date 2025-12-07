## Slučaj upotrebe: Autorizacija

**Kratak opis:**

Proces identifikacije i provere prava pristupa aktera (korisnika ili zaposlenog) kako bi pristupili zaštićenim delovima sistema u skladu sa svojom ulogom.

**Akteri:**
* Korisnik
* Menadžer
* Sistem administrator
* Blagajnik

**Preduslovi:**
* Akter poseduje validan nalog u sistemu.
* Aplikacija je dostupna.

**Postuslovi:**
* Akter je uspešno ulogovan i sistem mu prikazuje odgovarajući meni u zavisnosti od uloge.

**Osnovni tok:**
1. Akter bira opciju za prijavu (Login).
2. Sistem prikazuje formu za unos kredencijala (Korisničko ime/Email i Lozinka).
3. Akter unosi svoje podatke i potvrđuje prijavu.
4. Sistem pristupa bazi podataka, proverava ispravnost lozinke.
    * *Ukoliko kombinacija kredencijala nije tačna, izvršava se Alternativni tok A1.*
5. Sistem proverava status naloga aktera (aktivan, blokiran, suspendovan).
    * *Ukoliko je nalog blokiran ili suspendovan, izvršava se Alternativni tok A2.*
6. Sistem utvrđuje ulogu aktera (Korisnik, Menadžer, Administrator, Blagajnik).
7. Sistem ažurira polje 'Poslednje prijavljivanje' (Last Login Time) u bazi podataka za taj nalog.
8. Sistem odobrava pristup i preusmerava aktera na odgovarajuću početnu stranicu/kontrolnu tablu.

**Podtokovi:**
* /

**Alternativni tokovi:**
* **A1: Pogrešni podaci:** Sistem obaveštava aktera o neuspešnoj prijavi. Akteru se omogućava ponovni pokušaj.
* **A2: Blokiran nalog:** Sistem prikazuje poruku o tome da je nalog neaktivan/blokiran i upućuje aktera na kontakt podrške ili povratak na početnu stranu.

**Specijalni zahtevi:**
* Sistem beleži pokušaje prijavljivanja i privremeno blokira nalog nakon pet neuspelih pokušaja.

**Dodatne informacije:**
* /
