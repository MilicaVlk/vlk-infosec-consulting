VLK InfoSec Consulting — kompletan sajt

Ovo je poslednja verzija sajta za pregled, sa svim HTML stranicama, CSS/JavaScript fajlovima i slikama.

SADRZAJ
public/ — kompletan staticki sajt, spreman za hosting

LOKALNI PREGLED
Raspakujte ZIP. U folderu public pokrenite lokalni web-server, na primer ako imate Python:
python -m http.server 8000
Zatim otvorite http://localhost:8000
Koristite web-server umesto direktnog otvaranja HTML fajla, jer sajt koristi putanje koje pocinju sa /.

CLOUDFLARE PAGES
Framework preset: None
Build command: ostaviti prazno
Build output directory: public
Root directory: koren repozitorijuma
Production branch: main
Za rucni upload koristite sadrzaj foldera public, tako da index.html bude na korenu objavljenog sajta.

NAPOMENE O FUNKCIONALNOSTI
Kontakt/upitnik otvara pripremljen email u aplikaciji posetioca. Nije implementirano serversko slanje, verifikacija email adrese ni anti-bot provera. Potrebno je obezbediti prijemnu adresu service-enquiries@vlk-infosec.com.
Politike su oznacene kao nacrti. Banner najavljuje septembarsko lansiranje.
ZIP ne sadrzi hosting pristupne podatke, Git istoriju ni DNS podesavanja.
