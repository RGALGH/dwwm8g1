<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER ttc"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2lignes="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" arrondiAuto="vrai" totalAffichages="1000" totalBoucles="5000000" epaisseurPoint="2" epaisseurLigne="2" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="prixHT EST_DU_TYPE NOMBRE" code="1#NOMBRE#prixHT"/>
        <item algoitem="qte EST_DU_TYPE NOMBRE" code="1#NOMBRE#qte"/>
        <item algoitem="tva EST_DU_TYPE NOMBRE" code="1#NOMBRE#tva"/>
        <item algoitem="ttc EST_DU_TYPE NOMBRE" code="1#NOMBRE#ttc"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Prix HT ?&quot;" code="4#Prix HT ?#1"/>
        <item algoitem="LIRE prixHT" code="2#prixHT#pasliste"/>
        <item algoitem="AFFICHER &quot;Quantité ?&quot;" code="4#Quantité ?#1"/>
        <item algoitem="LIRE qte" code="2#qte#pasliste"/>
        <item algoitem="AFFICHER &quot;TVA ?&quot;" code="4#TVA ?#1"/>
        <item algoitem="LIRE tva" code="2#tva#pasliste"/>
        <item algoitem="AFFICHER &quot;choisir le taux de tva&quot;" code="4#choisir le taux de tva#1"/>
        <item algoitem="LIRE tva" code="2#tva#pasliste"/>
        <item algoitem="SI (tva == 0.055) ALORS" code="6#tva == 0.055">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="ttc PREND_LA_VALEUR (prixHT * qte) * (1 + 0.055)" code="5#ttc#(prixHT * qte) * (1 + 0.055)#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="SI (tva == 0.055) ALORS" code="6#tva == 0.055">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="ttc PREND_LA_VALEUR (prixHT * qte) * (1 + 0.055)" code="5#ttc#(prixHT * qte) * (1 + 0.055)#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="ttc PREND_LA_VALEUR (prixHT * qte) * (1 + tva)" code="5#ttc#(prixHT * qte) * (1 + tva)#pasliste"/>
        <item algoitem="AFFICHER &quot;Prix TTC&quot;" code="4#Prix TTC#1"/>
        <item algoitem="AFFICHER ttc" code="3#ttc#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
