## Slučaj upotrebe: Dodavanje novih zaposlenih

**Kratak opis:**

Na osnovu zahteva od strane Menadžera, Sistem administrator unosi podatke o novom zaposlenom u sistem, dodeljujući mu odgovarajuća prava pristupa.

**Akteri:**
* Sistem administrator
* Menadžer

**Preduslovi:**
* Sistem administrator je ulogovan u sistem i ima privilegije za upravljanje korisnicima.
* Menadžer je dostavio sve potrebne podatke o novom zaposlenom (Ime, Uloga, Kontakt, itd.).

**Postuslovi:**
* Novi nalog za zaposlenog je kreiran sa dodeljenom ulogom.
* Podaci su trajno upisani u bazu podataka.
* Zaposleni je obavešten o početnim kredencijalima.

**Osnovni tok:**
1. Sistem administrator prima zvanični zahtev (dokument ili digitalnu formu) od Menadžera za kreiranje naloga novog zaposlenog.
2. Sistem administrator pristupa sekciji za upravljanje zaposlenima (Administrativni panel).
3. Administrator bira opciju "Dodaj novog zaposlenog".
4. Sistem prikazuje formu za unos podataka.
5. Administrator unosi sve potrebne podatke (Ime, Prezime, JMBG, Email, Uloga, Početna lozinka) na osnovu zahteva Menadžera.
6. Sistem validira ispravnost formata unetih podataka.
    * *Ukoliko podaci nisu u ispravnom formatu, izvršava se Alternativni tok A1.*
7. Sistem proverava u bazi podataka da li već postoji nalog sa unetim JMBG-om ili Email-om.
    * *Ukoliko zaposleni već postoji u sistemu, izvršava se Alternativni tok A2.*
8. Sistem proverava da li Administrator ima dozvolu (autorizaciju) da dodeli izabranu ulogu (npr. da li može da kreira drugog Menadžera ili Admina).
    * *Ukoliko Administrator nema dovoljne privilegije za kreiranje te uloge, izvršava se Alternativni tok A3.*
9. Sistem trajno upisuje podatke o novom zaposlenom, početnoj lozinci i dodeljenoj ulozi u bazu podataka.
10. Sistem generiše potvrdu o uspešnom kreiranju naloga i šalje početne kredencijale novom zaposlenom putem emaila.
11. Sistem obaveštava Menadžera da je nalog uspešno kreiran i spreman za upotrebu.

**Podtokovi:**
* /

**Alternativni tokovi:**
* **A1: Nevalidni podaci:** Sistem obaveštava Administratora o grešci u formatu (npr. neispravan email). Administrator mora da ispravi podatke ili da traži ispravku od Menadžera.
* **A2: Zaposleni već postoji:** Sistem obaveštava Administratora da je prijava nevažeća zbog dupliranih identifikatora (JMBG/Email). Administrator obaveštava Menadžera.
* **A3: Nedovoljne privilegije:** Sistem odbija kreiranje naloga sa izabranom ulogom (npr. ako Menadžer zahteva, ali Admin ne sme da kreira Admina).

**Specijalni zahtevi:**
* Sistem mora da zahteva promenu lozinke prilikom prvog logovanja novog zaposlenog.
* JMBG se mora koristiti kao jedinstveni identifikator prilikom provere duplikata.

**Dodatne informacije:**
* /
