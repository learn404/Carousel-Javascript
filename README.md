# Carousel en JavaScript

Bienvenue dans l'exercice de carousel en JavaScript ! Dans cet exercice, vous allez apprendre à créer un carousel d'images simple en utilisant JavaScript. Cela vous aidera à pratiquer la gestion des interactions utilisateur, la manipulation du DOM et la mise à jour de l'interface utilisateur en fonction des actions de l'utilisateur.

## Objectifs
- Comprendre comment sélectionner et manipuler des éléments du DOM en utilisant JavaScript.
- Apprendre à ajouter des écouteurs d'événements pour gérer les interactions utilisateur.
- Implémenter des fonctionnalités pour naviguer entre différentes images dans un carousel.

## Instructions

### Configurer la structure HTML
Créez un fichier `index.html` avec la structure de base suivante :
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Carousel JS</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="carousel">
            <button class="carousel-button prev" aria-label="Previous Slide">&lt;</button>
            <div class="carousel-track-container">
                <ul class="carousel-track">
                    <li class="carousel-slide current-slide">
                        <img src="https://via.placeholder.com/600x300?text=Slide+1" alt="Slide 1">
                    </li>
                    <li class="carousel-slide">
                        <img src="https://via.placeholder.com/600x300?text=Slide+2" alt="Slide 2">
                    </li>
                    <li class="carousel-slide">
                        <img src="https://via.placeholder.com/600x300?text=Slide+3" alt="Slide 3">
                    </li>
                </ul>
            </div>
            <button class="carousel-button next" aria-label="Next Slide">&gt;</button>
            <div class="carousel-nav">
                <button class="carousel-indicator current-slide"></button>
                <button class="carousel-indicator"></button>
                <button class="carousel-indicator"></button>
            </div>
        </div>
        <script src="script.js"></script>
    </body>
    </html>
```

### Styliser le Carousel et le Contenu
Créez un fichier `style.css` pour styliser votre carousel. Voici un exemple de base pour commencer :

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.carousel {
    position: relative;
    width: 600px;
    max-width: 100%;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel-track-container {
    overflow: hidden;
}

.carousel-track {
    display: flex;
    transition: transform 0.3s ease-in-out;
}

.carousel-slide {
    min-width: 100%;
    box-sizing: border-box;
}

.carousel-slide img {
    display: block;
    width: 100%;
}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    user-select: none;
}

.carousel-button.prev {
    left: 10px;
}

.carousel-button.next {
    right: 10px;
}

.carousel-nav {
    text-align: center;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}

.carousel-indicator {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
}

.carousel-indicator.current-slide {
    background-color: white;
}
```

### Implémenter la Logique JavaScript
Créez un fichier `script.js` où vous écrirez le JavaScript pour gérer le changement d'image dans le carousel :

Étapes pour compléter l'exercice :

1. Sélectionnez les éléments DOM nécessaires :

- Utilisez document.querySelector et document.querySelectorAll pour sélectionner les boutons de navigation, les éléments de slide, et le conteneur de la piste de carousel.

2. Ajoutez des écouteurs d'événements :

- Ajoutez des écouteurs d'événements click aux boutons de navigation "prev" et "next".


3. Gérez la navigation des slides :

- Dans l'écouteur d'événement du bouton "prev", décrémentez l'index de la slide actuelle, assurez-vous que l'index reste dans les limites (0 à nombre total de slides - 1). Appliquez la transformation de la piste du carousel pour afficher la slide précédente.
- Dans l'écouteur d'événement du bouton "next", incrémentez l'index de la slide actuelle, assurez-vous que l'index reste dans les limites. Appliquez la transformation de la piste du carousel pour afficher la slide suivante.
4. Mettez à jour l'état actif :
-Assurez-vous de mettre à jour les classes des slides et des indicateurs pour refléter l'état actuel après chaque navigation.

### Tester Votre Solution
- Ouvrez le fichier index.html dans votre navigateur.
- Cliquez sur les boutons pour naviguer entre les slides et assurez-vous que le comportement est correct.

### Défis Supplémentaires 
- Ajoutez du CSS pour indiquer visuellement quelle slide est actuellement active.
- Implémentez la même fonctionnalité en utilisant la délégation d'événements.
- Rendez le carousel accessible en permettant la navigation au clavier.


### Ressources Supplémentaires
[MDN Web Docs : Document Object Model (DOM)]('https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model')
[MDN Web Docs : EventTarget.addEventListener()]('https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener')
[MDN Web Docs : querySelector()]('https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector')