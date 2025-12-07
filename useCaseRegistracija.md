## Slučaj upotrebe: Registracija

**Kratak opis:**

Korisnik kreira novi nalog u sistemu kako bi dobio pristup funkcionalnostima kao što su rezervacija karata i sakupljanje bonus poena.

**Akteri:**
* Korisnik (Gost)

**Preduslovi:**
* Korisnik ima pristup internetu i aplikaciji.
* Korisnik nije ulogovan.

**Postuslovi:**
* Novi korisnički nalog je uspešno kreiran, aktiviran i sačuvan u bazi podataka.
* Korisnik je spreman za prijavu.

**Osnovni tok:**
1. Korisnik bira opciju za registraciju na početnoj stranici aplikacije.
2. Sistem prikazuje formu za unos podataka (Ime, Prezime, Email, Lozinka, Broj telefona).
3. Korisnik unosi tražene podatke i potvrđuje unos.
4. Sistem validira format unetih podataka (email, jačina lozinke).
    * *Ukoliko podaci nisu validni, izvršava se Alternativni tok A1.*
5. Sistem proverava da li korisnik sa unetim email-om već postoji u bazi.
    * *Ukoliko korisnik već postoji, izvršava se Alternativni tok A2.*
6. Sistem upisuje podatke o novom nalogu u bazu podataka sa statusom 'neaktivan'.
7. Sistem šalje potvrdni email (verifikacioni link) na unetu adresu.
8. Sistem obaveštava korisnika da proveri svoj email.
9. Korisnik pristupa svom email-u i klikće na verifikacioni link.
10. Sistem pronalazi nalog u bazi, menja status naloga na 'aktivan' i trajno beleži vreme aktivacije.
11. Sistem obaveštava korisnika o uspešnoj registraciji i aktivaciji.

**Podtokovi:**
* /

**Alternativni tokovi:**
* **A1: Nevalidni podaci:** Sistem prikazuje grešku o neispravnom formatu podataka i traži od korisnika da ih ispravi. Korisnik ispravlja podatke i tok se vraća na korak 3 osnovnog toka.
* **A2: Korisnik već postoji:** Sistem obaveštava korisnika da nalog sa tim email-om već postoji. Sistem nudi opciju za prelazak na prijavu (Login) ili reset lozinke.
* **A3: Odustajanje:** Korisnik u bilo kom trenutku može odustati od registracije povratkom na početnu stranu.

**Specijalni zahtevi:**
* Lozinka mora sadržati minimum 8 karaktera, jedno veliko slovo i jedan broj.
* Verifikacioni link važi 24 sata.

**Dodatne informacije:**
* /
