### Folder Asset

Good

```
assets
├── ...
├── assets
│   ├── bg-headline.jpg
│   ├── requirement.png
│   └── ...
├── kertas.png
├── gunting.png
└── ...
```

Good

```
assets
├── ...
├── bg-headline.jpg
├── requirement.png
├── kertas.png
├── gunting.png
└── ...
```

Good

```
assets
├── ...
├── landing-page
│   ├── bg-headline.jpg
│   ├── requirement.png
│   └── ...
├── game
│   ├── kertas.png
│   ├── gunting.png
│   └── ...
└── ...
```

### Simplify Code

Before

```js
if (player == "batu" && com == "gunting") {
  result = "PLAYER WIN";
} else if (player == "batu" && com == "kertas") {
  result = "COM WIN";
} else if (player == "gunting" && com == "batu") {
  result = "COM WIN";
} else if (player == "gunting" && com == "kertas") {
  result = "PLAYER WIN";
} else if (player == "kertas" && com == "gunting") {
  result = "COM WIN";
} else if (player == "kertas" && com == "batu") {
  result = "PLAYER WIN";
} else {
  result = "DRAW";
}
return result;
```

After

```js
let result = "DRAW";

if (
  (player == "batu" && com == "gunting") ||
  (player == "gunting" && com == "kertas") ||
  (player == "kertas" && com == "batu")
) {
  result = "PLAYER WIN";
} else if (
  (player == "batu" && com == "kertas") ||
  (player == "gunting" && com == "batu") ||
  (player == "kertas" && com == "gunting")
) {
  result = "COM WIN";
}
return result;
```

Before

```js
if (this.itemName === "Batu" && comHand === "Gunting") {
  resultGame.playResult = "Win";
  resultGame.playResultMessage = "Player 1 Win";
} else if (this.itemName === "Kertas" && comHand === "Batu") {
  resultGame.playResult = "Win";
  resultGame.playResultMessage = "Player 1 Win";
} else if (this.itemName === "Gunting" && comHand === "Kertas") {
  resultGame.playResult = "Win";
  resultGame.playResultMessage = "Player 1 Win";
} else if (this.itemName === comHand) {
  resultGame.playResult = "Draw";
  resultGame.playResultMessage = "Draw";
} else {
  resultGame.playResult = "Lose";
  resultGame.playResultMessage = "Com Win";
}
```

After

```js
if (
  (this.itemName === "Batu" && comHand === "Gunting") ||
  (this.itemName === "Kertas" && comHand === "Batu") ||
  (this.itemName === "Gunting" && comHand === "Kertas")
) {
  resultGame.playResult = "Win";
  resultGame.playResultMessage = "Player 1 Win";
} else if (this.itemName === comHand) {
  resultGame.playResult = "Draw";
  resultGame.playResultMessage = "Draw";
} else {
  resultGame.playResult = "Lose";
  resultGame.playResultMessage = "Com Win";
}
```

### All File Push to GIT

- css folder and file
- html and js file
- asset like image

### GIT create new brnach

1. create new branch

   ```
   git checkout -b challenge-5
   ```

2. Commit and push to origin

   ```
   git add .
   git commit -m "add asset"
   git push
   ```

3. Pull Request to master
4. Merge

Example
```html
<!-- Ready to merge -->
https://github.com/rizqyfarhan/Challenge-Binar/pull/1
```

```html
<!-- Pull Request and Merge -->
https://github.com/pamuji0/CH-3/tree/main
```

