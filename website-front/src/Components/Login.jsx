import "../CSS/Login.css";
import React from "react";
import A from "../CSS/App.module.css"
import { useState } from "react";
import { Link, Redirect} from "react-router-dom";
//import {Redirect} from "react-router/ts4.0";

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginInfo = { email, password};
        console.log(loginInfo);
        fetch('http://cstudent.ddns.net:8080/api/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body:JSON.stringify(loginInfo)
        }).then(res => {
            console.log(res);
            if(!res.ok){
                throw Error("could not fetch the data");
            }
            window.location ='/';
            console.log('Successfully Login');
        }).catch(err => {
            console.log('Failed Login');
            console.log(err.message);
        })

    };
    return (
    <div className={A.Login} >
      <form className="labelStyle">
        <div>
          <h6>E-mail:
          <input className="inputStyle"
                 type="text"
                 required
                 onChange={(e) => setEmail(e.target.value)}
                 value={email} /></h6>
          <h7>Parola:
          <input className="inputStyle"
                 type="password"
                 required
                 onChange={(e) => setPassword(e.target.value)}
                 value={password} /></h7>
          <br />
            <button className="buttonsLoginStyle" onClick={handleSubmit}>Log-in</button>
          <input
            className="buttonsLoginStyle2"
            type="submit"
            value="Parola uitata"
            onClick={() =>
              alert(
                "O parola noua va fi trimisa pe mail dupa ce vom lua legatura cu tine"
              )
            }
          />
        </div>
      </form>
            <a className="newAccount" href="http://cstudent.ddns.net:3000/signup">Cont nou</a>
        <div>
        <input
          className="termsStyle"
          type="submit"
          value="Termeni si Conditii"
          onClick={() => alert("TERMENI SI CONDITII GDPR\n" +
              "\n" +
              "Conditii Generale pentru utilizarea site-ului CStudent.ddns.net\n" +
              "\n" +
              "ACCEPTAREA CONDITIILOR\n" +
              "\n" +
              "Prin accesarea acestui site web si/sau a oricarei pagini a acestuia sunteti de acord cu aceste conditii de utilizare. Daca nu sunteti de acord cu acesti termeni si conditii de utilizare, nu accesati acest site.\n" +
              "\n" +
              "DESCRIEREA SERVICIILOR\n" +
              "\n" +
              "Siteul nostru va pune la dispozitie informatiile din acest site web in scop informativ general si nu garanteaza de exactitatea lor la un moment dat, desi se va incerca pe cat posibil ca la publicarea lor pe site toate informatiile sa fie exacte.\n" +
              "\n" +
              "INTRODUCERE\n" +
              "Prezentele Conditii Generale definesc conditiile de utilizare a site-ului CStudent.ddns.net de catre potentialii vizitatori sau clienti. Acces??nd si navig??nd pe acest site, acceptati termenii de utilizare descrisi ??n continuare.\n" +
              "\n" +
              "DREPTURILE ASUPRA CONTINUTULUI SITE-ULUI\n" +
              "S.C. AtlaSoftware S.R.L (denumita ??n continuare AtlaSoftware), nu va transfera titlul de proprietate asupra aplicatiilor software .\n" +
              "\n" +
              "AtlaSoftware detine drepturi complete si depline asupra titlului de proprietate si prin aceasta toate drepturile de autor si cele brevetate. Nu aveti dreptul sa redistribuiti, vindeti, decompilati, dezasamblati aplicatia software ??ntr-o forma perceptibila de catre oameni.\n" +
              "\n" +
              "Toate informatiile, produsele sau aplicatiile continute ??n acest site sunt proprietatea AtlaSoftware, care ??si rezerva dreptul de a modifica continutul si/sau structura site-ului ??n orice moment si fara nici o informare prealabila.\n" +
              "\n" +
              "??ntregul continut al site-ului CStudent.ddns.net este protejat prin legea drepturilor de autor, toate drepturile fiind rezervate. Toate drepturile referitoare la pagini, continutul si prezentarea site-ului sunt detinute de AtlaSoftware. Este interzisa copierea, modificarea, afisarea, distribuirea, transmiterea, publicarea, comercializarea, licentierea, crearea unor materiale derivate sau utilizarea continutului site-ului ??n orice scop fara confirmarea scrisa din partea AtlaSoftware.\n" +
              "\n" +
              "Accesul si utilizarea paginii CStudent.ddns.net sunt gratuite si au scopul de a veni in ajutorul utilizatorilor pentru a gasi informatiile necesare ??n cel mai usor si rapid mod posibil, conform cerintelor fiecaruia.\n" +
              "\n" +
              "Informatiile prezente pe CStudent.ddns.net sunt de interes general si sunt puse la dispozitia utilizatorilor ??n mod gratuit. Prin termenul ???utilizator??? al acestei pagini se ??ntelege orice persoana fizica sau juridica care va accesa pagina. Puteti copia si tipari continutul paginii CStudent.ddns.net pentru folosinta dumneavoastra personala, fara intentii comerciale. ??n orice alte situatii, continutul CStudent.ddns.net nu poate fi reprodus, modificat sau exploatat fara consimtam??ntul explicit al reprezentantilor CStudent.ddns.net.\n" +
              "\n" +
              "NEANGAJAREA RASPUNDERII\n" +
              "Continutul informatiilor se refera la descrierea ??ntr-un anumit grad de detaliere a activitatilor, produselor si serviciilor AtlaSoftware. AtlaSoftware nu va acorda nici o garantie referitoare la:\n" +
              "\n" +
              "??? evitarea utilizarii anevoioase sau ??ntreruperii ??n utilizare a site-ului;\n" +
              "??? neafectarea ??n sens negativ a altor sisteme prin utilizarea site-ului;\n" +
              "??? inexistenta pe site-ul pus la dispozitie a virusilor sau alte componente care ar putea dauna utilizatorilor.\n" +
              "\n" +
              "Astfel, AtlaSoftware nu poate fi responsabila pentru nici un fel de daune directe sau indirecte produse prin utilizarea site-ului sau.\n" +
              "Toate informatiile prezentate pe site cu privire la produsele CStudent.ddns.net, preturi, informatii, campanii si promotii de marketing, aspecte tehnice, sunt prezentate cu titlu informativ. Nimic din continutul site-ului CStudent.ddns.net nu poate constitui o oferta ferma de a contracta si nu poate angaja raspunderea Amigio ??n lipsa unor acorduri ulterioare.\n" +
              "\n" +
              "Continutul paginii web CStudent.ddns.net, a informatiilor si a altor materiale prezentate de Comunitatea CStudent.ddns.net nu reprezinta o consultatie juridica ??n sensul Legii nr. 51/1995.\n" +
              "\n" +
              "GDPR este un set de reguli bazat pe principii complexe, care este deschis la interpretare si cotine, de asemenea, numeroase domenii ??n care statele membre sunt invitate sa intervina. ??n prezent exista foarte putine ??ndrumari cu privire la implementarea GDPR si este posibil ca Autoritatile de Supraveghere sa aiba puncte de vedere diferite fata de cele exprimate ??n acest ?ablon. ??n ciuda eforturilor noastre de a oferi cele mai bune servicii, nu putem anticipa cu exactitate modul ??n care Autoritatea de Supraveghere sau instan?ele de judecata vor interpreta Regulamentul.\n" +
              "\n" +
              "CStudent.ddns.net nu face nicio declaratie, promisiune sau garantie cu privire la exactitatea, exhaustivitatea sau caracterul adecvat al prezentului continut, al ??ndrumarilor si a consultantei, nu ??si asuma nicio obligatie de rezultat sau diligenta fata de nicio persoana, exclud ??n mod expres si neaga raspunderea pentru orice cost, pierdere sau daunele suferite ca urmare a utilizarii continutului.\n" +
              "\n" +
              "OBIECTIVUL CONTINUTULUI SITE-ULUI\n" +
              "Obiectivul continutului site-ului este de a transmite informatii actualizate si exacte.\n" +
              "\n" +
              "AtlaSoftware nu poate garanta ca prezentele pagini nu contin erori, si asigura ca va depune toate diligentele pentru realizarea unei informari corecte si remedierea eventualelor erori.\n" +
              "\n" +
              "Orice persoana care doreste sa-si procure unul din serviciile sau produsele prezentate ??n site este rugata sa contacteze AtlaSoftware prin unul din mijloacele afisate ??n pagina de Contact a site-ului, pentru a se informa at??t asupra disponibilitatii serviciului sau produsului ??n cauza c??t si asupra conditiilor contractuale, tarifelor si informatiilor tehnice sau de alta natura.\n" +
              "\n" +
              "INFORMATII PERSONALE\n" +
              "C??nd prin intermediul prezentului site va sunt solicitate informatii, aceasta are ca scop identificarea dumneavoastra sau posibilitatea de a va contacta. Acest lucru este cu at??t mai necesar ??n cazul folosirii aplicatiilor disponibile pe site.\n" +
              "\n" +
              "Natura informatiilor solicitate se refera ??n special la date personale (nume, adresa, numere de telefon), adresa de e-mail, modul ??n care sunt utilizate sau intentioneaza sa fie utilizate produsele si/sau serviciile AtlaSoftware, dar poate include si alte informatii aflate ??n str??nsa legatura cu utilizarea serviciilor si/sau produselor solicitate.\n" +
              "\n" +
              "Cu scopul de a raspunde mai bine nevoilor si ??ntrebarilor utilizatorilor site-ului, informatiile solicitate prin intermediul acestui site vor face obiectul unei stocari si prelucrari electronice.\n" +
              "\n" +
              "LEGATURA CU ALTE SITE-URI\n" +
              "Prezentul site poate contine legaturi sau trimiteri catre alte site-uri considerate de AtlaSoftware utile ??n legatura cu continutul site-ului sau si care nu se afla sub controlul sau ??ndrumarea sa. ??n cazul utilizarii acestor legaturi sau trimiteri se vor aplica conditiile generale de utilizare corespunzatoare acelor site-uri.\n" +
              "\n" +
              "AtlaSoftware nu poate garanta/controla actualitatea/exactitatea informatiilor prezente pe site-urile unor terti, la care se face trimitere de pe site-ul sau.\n" +
              "\n" +
              "INFORMATIILE OFERITE PRIN INTERMEDIUL SITE-ULUI\n" +
              "Orice persoana care viziteaza site-ul CStudent.ddns.net si care ofera date sau informatii cu caracter personal prin intermediul acestui site ??si manifesta acordul ??n mod expres si neechivoc pentru urmatoarele: prelucrarea acestor date si informatii personale de catre AtlaSoftware; transmiterii de materiale promotionale specifice operatiunilor de marketing direct; solutionarea de catre AtlaSoftware a cererilor, ??ntrebarilor si reclamatiilor adresate (a se vedea pagina Contact din site); alte activitati ??ntreprinse de AtlaSoftware si permise de lege, ce nu fac obiectul unei aprobari din partea destinatarului.\n" +
              "\n" +
              "AtlaSoftware va pastra confidentialitatea acestor informatii.\n" +
              "\n" +
              "Utilizarea ??n continuare a acestui site constituie acordul expres si neechivoc al dumneavoastra ??n conformitate cu prevederile legii 677/2001 si directivelor GDPR pentru protectia persoanelor cu privire la prelucrarea datelor cu caracter personal si libera circulatie a acestor date.\n" +
              "\n" +
              "Pentru orice nelamurire ??n legatura cu exercitarea drepturilor dumneavoastra referitoare la utilizarea site-ului si la protectia utilizarii va rugam sa ne contactati prin intermediul sectiunii Contact din site.")}
        />
        <input
          className="contactStyle"
          type="submit"
          value="Contact"
          onClick={() => alert("date de contact")}
        />
      </div>
    </div>
  );
};


