# Class Compte
 - Créez une classe Compte modélisant un compte en banque. La classe possède deux attributs somme et taux correspondant à la somme placée sur le compte et au taux d'intérêt. Ces deux attributs doivent être affectés par le constructeur. 


 - Ajoutez une méthode affiche() qui affiche la somme et le taux comme ci-dessous :
```shell  
Compte | somme : 2000€ | taux : 2%
```


 - Ajoutez une méthode depot(x) qui ajoute x à la somme sur le compte. 


 - Ajoutez une méthode retrait(x) qui enlève x à la somme sur le compte. Elle pourra renvoyer une erreur si la somme sur le compte devient négative et annuler alors l'opération. 


 - Ajoutez une méthode interets() qui calcule les intérêts perçus en un an et les ajoute à la somme placée. Pour rappel les intérêts se calculent avec la formule interets = taux x somme / 100 


 - créer un script qui va créer un compte, lui faire un dépôt, un retrait et un calcul d’intérêt

 - bonus : construire une interface graphique