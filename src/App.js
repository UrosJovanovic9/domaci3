import "./App.css";
import Filmovi from "./components/Filmovi";
import NavigationBar from "./components/NavigationBar";
import HarryPotterDvoranaTajni from "./img/HarryPotterDvoranaTajni.jpg";
import HarryPotterIKamenMudrosti from "./img/Harry_Potter_and_the_Philosophers_Stone.jpg";
import HarryPotterIRelikvijeSmrti from "./img/HarryPoterIRelikvijeSmrti2.jpg";
import HarryPotterIPolukrvniPrinc from "./img/HarryPotterIPolukrvniPrinc.jpg";
import HarryPotterIZatvorenik from "./img/Harry_Potter_Тhe_Prisoner_of_Azkaban.jpg";
import HarryPotterIVatreniPehar from "./img/Harry_Potter_and_the_Goblet_of_Fire.jpg";
import GospodarPrstenova1 from "./img/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring.jpg";
import GospodarPrstenova2 from "./img/The_Lord_of_the_Rings_The_Two_Towers.jpg";
import GospodarPrstenova3 from "./img/The_Lord_of_the_Rings_The_Return_of_the_King.jpg";
import Kum1 from "./img/The_Godfather.jpg";
import Kum2 from "./img/The_Godfather_Part_II.jpg";
import Kum3 from "./img/The_Godfather_III.jpg";
import Matriks3 from "./img/Matrix_revolutions_ver2.jpg";
import { useState } from "react";
import Pregled from "./components/Pregled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Forma from "./components/Forma";
import FormaPrijava from "./components/FormaPrijava";
import FormaRegistracija from "./components/FormaRegistracija";

function App() {
  const [pregledFilmovi, setPregledFilmovi] = useState([]);
  const [pregledFilmovi1, setPregledFilmovi1] = useState([]);
  const [filmovi] = useState([
    {
      id: 1,
      pregled: 0,
      naziv: "Hari Poter i dvorana tajni",
      opis: "2002 | avanturistički",
      slika: HarryPotterDvoranaTajni,
      ocena: "7.4",
      opisFilma: "Posle dugog letnjeg raspusta s užasnim Darslijevima, Hari Poter ne uspeva da se ukrca na voz za Hogvorts, školu čarobnjaštva i magije, kako bi pošao u drugu godinu. Harijeva jedina mogućnost transporta jeste čarobni leteći automobil, ali nažalost njime udara u vrednu (i problematičnu) Mlatarajuću vrbu. Ipak, sve to je mačji kašalj u poređenju s onim što čeka Harija te jeseni unutar ukletih zidova Hogvortsa. Jezivi, zlobni glasovi šapuću sa zidova samo Hariju i izgleda izvesno da će ga Drako Melfoj srediti. Uskoro nije samo Hari zabrinut za svoj opstanak dok se zastrašujuće stvari dešavaju u školi. Misteriozna svetlucava slova na zidu govore: Dvorana tajni je otvorena. Neprijatelji naslednika, čuvajte se. Ali šta to tačno znači?"
    },
    {
      id: 2,
      pregled: 0,
      naziv: "Hari Poter i Kamen mudrosti",
      opis: "2001 | avanturistički",
      slika: HarryPotterIKamenMudrosti,
      ocena: "7.6",
      opisFilma: "Bestseler Dž. K. Rouling prerasta u ovu divnu fantastičnu avanturu Krisa Kolambusa. Na svoj 11. rođendan, Hari Poter (Danijel Redklif), koji živi nesrećno sa tetkom i tečom koji ga ne žele, od džina Hagrida (Robi Koltrejn) saznaje da je on zapravo siroče moćnih čarobnjaka. Ponuđeno mu je mesto u prestižnom Hogvortsu, internatu za čarobnjake koji postoji u svetu magije i fantazije izvan dosadnog sveta normalaca. U Hogvortsu, Hari brzo stiče nove prijatelje i počinje da sklapa kockice misteriozne smrti svojih roditelja, koja izgleda uopšte nije bila slučajna."
    },
    {
      id: 3,
      pregled: 0,
      naziv: "Hari Poter i vatreni pehar",
      opis: "2011 | avanturistički",
      slika: HarryPotterIVatreniPehar,
      ocena: "8.1",
      opisFilma: "Ovo je Hari Poterova četvrta godina u školi čarobnjaštva Hogvorts! Hari, Ron i Hermion jedva čekaju međunarodno finale u kvidiču. Hari mašto o tome kako provodi vreme sa zavodljivom Čo Čang. On želi da bude normalan četrnaestogodišnji čarobnjak... Ali Hari nije normalan čak ni prema čarobnjačkim standardima. Ove godine, prvi put u više stotina godina, takmičenje će se održati između tri čarobnjačke škole, a takmičari će biti odabrani čarolijom u veoma opasnom događaju. Sada, dok Harija peče njegov ožiljak od munje, ukazujući na prisustvo zlog lorda Voldemorta, Vatreni pehar bira poslednjeg učesnika takmičenja, Harija Potera"
    },
    {
      id: 4,
      pregled: 0,
      naziv: "Hari Poter i polukrvni princ",
      opis: "2009 | avanturistički",
      slika: HarryPotterIPolukrvniPrinc,
      ocena: "7.6",
      opisFilma: "I dok Smrtožderi, ohrabreni povratkom Lorda Voldemorta prave haos i u svetu Normalaca i u svetu Čarobnjaka, Hari sumnja da nove opasnosti leže unutar samog Hogvortsa. Dambldor se žuri da pripremi Harija za konačni obračun za koji zna da se brzo približava i šalje ga na opasnu misiju da nađe ključ kojim će se otključati Voldemortova odbrana. U međuvremenu, učenike napada drugačiji neprijatelj, dok njihovi tinejdžerski hormoni divljaju: Harijevo prijateljstvo sa Đinom Vizli prerasta u nešto dublje, Lavender Braun gaji simpatije prema Ronu, Hermiona se guši od ljubomore... A kutija čokolade sa ljubavnim napitkom završava u pogrešnim rukama. Film je nominovan za Oskara za najbolje ostvarenje u kinematografiji."
    },
    {
      id: 5,
      pregled: 0,
      naziv: "Hari Poter i zatvorenik",
      opis: "2004 | avanturistički",
      slika: HarryPotterIZatvorenik,
      ocena: "7.9",
      opisFilma: "Mladoj 13-godišnjoj čarobnjačkoj zvezdi ovo je treća godina kako ide u školu za čarobnjake Hogvorts, a mračni događaji ni ovoga puta nisu daleko. Serijski ubica Sirius Blek pobegao je iz tvrđave Azkaban - čarobnjačkog zatvora. Herijev život je u opasnosti kada sazna da je ludog ubicu verovatno poslao lord Voldemort da uradi ono što on nije uradio pre 13 godina tj. da ubije Potera! U cilju Harijeve zaštite, Azkaban šalje stotine Dementora, čudovišnih mističnih zatvorskih čuvara, da ga uhvate. Pitanje je da li će Dementori biti od pomoći. Stvari se još više zakomplikuju kada Poter sazna da je Blek povezan sa njegovom prošlošću i odlučuje da ga sam pronađe i suoči se sa mračnim događajem koji se dogodio u noći prije 13 godina."
    },
    {
      id: 6,
      pregled: 0,
      naziv: "Gospodar prstenova I",
      opis: "2001 | avanturistički",
      slika: GospodarPrstenova1,
      ocena: "8.8",
      opisFilma: "U prvom delu čuvenog remek-dela Dž.R.R. Tolkina, “Gospodar prstenova”, stidljivi mladi hobit Frodo nasleđuje običan zlatni prsten. On zna da prsten poseduje moć, ali ne i da se u njegovim rukama nalazi tajna opstanka – ili propasti – celog sveta. Sada, uz pomoć čarobnjaka, vilenjaka, patuljka, dvoje ljudi i trojice odanih prijatelja hobita, Fordo mora da postane najveći heroj koga je svet ikada video, da spasi zemlju i ljude koje voli."
    },
  ]);

  const [filmovi1] = useState([
    {
      id: 7,
      pregled: 0,
      naziv: "Gospodar prstenova II",
      opis: "2003 | avanturisticki",
      slika: GospodarPrstenova2,
      ocena: "8.4",
      opisFilma: "U drugom delu Tolkinove trilogije, Frodo Bagins i ostali članovi Družine nastavljaju svoju misiju da unište Jedinstveni Prsten – ali njihovi putevi se razilaze. Njihove sudbine će biti ispisane kod kule Ortank u Izengardu, gde ih čeka zli čarobnjak Saruman, i Sauronove tvrđave kod Barad-dura, duboko u mračnoj zemlji Mordor."
    },
    {
      id: 8,
      pregled: 0,
      naziv: "Gospodar prstenova III",
      opis: "2004 | avanturisticki",
      slika: GospodarPrstenova3,
      ocena: "9.1",
      opisFilma: "U poslednjem nastavku čuvenog remek-dela Dž.R.R. Tolkina, “Gospodar prstenova”, dok se vojske okupljaju za poslednju bitku koja će odlučiti sudbinu sveta – a moćne, drevne sile Svetlosti i Tame se nadmeću za konačni ishod – otkriva se da je jedan član Družine prstena naslednik prestola Kraljevstva ljudi. Ipak, jedina nada za pobedu nad silama zla je hrabri hobit, Frodo, koji u pratnji svog odanog prijatelja Sema i izobličenog, pokvarenog Goluma, zalazi sve dublje u mračno središte Mordora, u naizgled nemogućem poduhvatu da uništi Moćni Prsten"
    },
    {
      id: 9,
      pregled: 0,
      naziv: "Kum I",
      opis: "1972 | krimić, drama",
      slika: Kum1,
      ocena: "9.2",
      opisFilma: "Čuveno remek-delo Fransisa Forda Kopole, u kome Oskarovac Marlon Brando glumi glavu porodice Korleone. Reditelj Kopola je oslikao jeziv portret uspona sicilijanskog klana i njegovu borbu za očuvanje moći u Americi, majstorski praveći paralelu između života porodice Korleone i ružnog kriminala kojim se bave. Zasnovan na bestseleru Marija Puza i sa karijernim ulogama Al Paćina, Džejmsa Kana i Roberta Duvala, ovaj izražajni i briljantni film imao je deset nominacija za Oskara, a osvojio je tri, uključujući i Oskara za najbolji film 1972."
    },
    {
      id: 10,
      pregled: 0,
      naziv: "Kum II",
      opis: "1974 | krimić, drama",
      slika: Kum2,
      ocena: "9.0",
      opisFilma: "Ovaj nastavak jednog od najpoznatijih holivudskih filmova s pravom je postao blokbaster. Priča prati tri generacije mafijaške dinastije Korleone, usredsređujući se na Majkla (Al Paćino), dok konsoliduje porodičnu moć, istovremeno prateći i imigraciju njegovog oca Vita u Njujork početkom 20. veka. Film je dobio šest Oskara 1974. godine, uključujući one za najbolju fotografiju, najbolju režiju (Fransis Ford Kopola) i najbolju sporednu mušku ulogu (Robert De Niro)."
    },
    {
      id: 11,
      pregled: 0,
      naziv: "Kum III",
      opis: "1990 | krimić, drama",
      slika: Kum3,
      ocena: "7.6",
      opisFilma: "U poslednjem nastavku trilogije „Kum“, ostareli don Majkl Korleone (Al Paćino) pokušava da legalizuje porodični mafijaški posao i povuče se iz nasilnog sveta podzemlja, ali u tome ga stalno sprečavaju ambicije mlađih. Dok pokušava da postigne finansijski dogovor s Vatikanom, Majkl mora da se izbori sa spletkama gladnijeg gangstera koji želi da poremeti postojeći mafijaški poredak, kao i sa ljubavnom aferom svog mladog štićenika i svoje ćerke."
    },
    {
      id: 12,
      pregled: 0,
      naziv: "Matriks III",
      opis: "2003 | naučna fantastika",
      slika: Matriks3,
      ocena: "6.8",
      opisFilma: "U eksplozivnom poslednjem poglavlju trilogije Matriks, Neo (Kijanu Rivs), Morfijus (Lorens Fišburn) i Triniti (Keri-En Mos) se bore da odbrane Sion, poslednji pravi grad na Zemlji, od žestokog napada mašina koje su porobile ljudsku rasu. Sada, kad Neo zna više o svojim herojskim moćima – uključujući sposobnost da vidi kodove predmeta i ljudi – on se suočava sa posledicama odluka koje je doneo u prethodnom delu trilogije."
    },
  ]);

  function prikaz() {
    let brojFilmova = filmovi.filter((f) => f.pregled > 0);
    setPregledFilmovi(brojFilmova);
  }
  function prikaz1() {
    let brojFilmova1 = filmovi1.filter((f1) => f1.pregled > 0);
    setPregledFilmovi1(brojFilmova1);
  }

  function dodajPregled1(id) {
    filmovi1.forEach((f) => {
      if (f.id === id) {
        f.pregled++;
      }
      // console.log(f.pregled);
    });
    prikaz1();
  }

  function dodajPregled(id) {
    filmovi.forEach((f) => {
      if (f.id === id) {
        f.pregled++;
      }
      // console.log(f.pregled);
    });
    prikaz();
  }

  return (
    <BrowserRouter className="App">
      <div className="Appdiv">
        <NavigationBar></NavigationBar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filmovi filmovi={filmovi} povecajZaJedan={dodajPregled} />
                <Filmovi filmovi={filmovi1} povecajZaJedan={dodajPregled1} />
              </>
            }
          />
          <Route
            path="/pregled/*"
            element={
              <>
                <Pregled filmovi={pregledFilmovi}  />
                <Pregled filmovi={pregledFilmovi1}/>
              </>
            }
          />
          <Route path="/prijava/*" element={<FormaPrijava />} />
          <Route path="/registracija/*" element={<FormaRegistracija />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
