# Étapes de développement

### Création du squelette de l'application.
`npx react-native init myapp --template react-native-template-typescript`

### Installation de AdMob
Installation de firebase avec : 
`npm install --safe @react-native-firebase/app`
L'installation nécessite l'installation de "superstruct" pour continuer : 
`npm install --safe superstruct`
Une fois l'installation compléter c'est au tour de AdMob : 
`npm install --safe @react-native-firebase/admob`

### Création d'un compte AdMob
Création de notre projet sur Firebase.
Création d'une application sur AdMob.
Création de notre annonce publicitaire.
Récupération de nos clés RSA : 
- [ ]  ID d'application `ca-app-pub-3629798182288364~3313283267`
- [ ]  ID d'annonce `ca-app-pub-3629798182288364/6621972884`

### Configuration de Firebase
Modification de `/android/build.gradle`.
Modification de `/android/app/build.gradle`.

### Rebuild de l'application
`npx react-native run-android`
Une dépendance est nécessaire pour procéder `multiDexEnabled true`.

### Création du fichier APK
Ouvrez une invite de commande en administrateur.
Rendez vous dans `d:\myfirstdev\myapp\android`
Création d'un APK release et debug : 
- [ ] Pour release `gradlew assembleRelease`
- [ ] Pour debug `gradlew assembleDebug`