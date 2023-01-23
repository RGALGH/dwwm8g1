<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER double"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2lignes="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" arrondiAuto="vrai" totalAffichages="1000" totalBoucles="5000000" epaisseurPoint="2" epaisseurLigne="2" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="val EST_DU_TYPE NOMBRE" code="1#NOMBRE#val"/>
        <item algoitem="double EST_DU_TYPE NOMBRE" code="1#NOMBRE#double"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Entrer une valeur : &quot;" code="4#Entrer une valeur : #1"/>
        <item algoitem="LIRE val" code="2#val#pasliste"/>
        <item algoitem="// val PREND_LA_VALEUR  231" code="19# val PREND_LA_VALEUR  231"/>
        <item algoitem="double PREND_LA_VALEUR val * 2" code="5#double#val * 2#pasliste"/>
        <item algoitem="AFFICHER val" code="3#val#1#pasliste"/>
        <item algoitem="AFFICHER double" code="3#double#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
