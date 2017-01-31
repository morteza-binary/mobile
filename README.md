
# Tick Trade Mobile Application

- Make sure you have node.js installed

## Setting up the App

```
// Fork the repo in GitHub
git clone git@github.com:[your git username]/mobile.git
cd mobile
git remote add upstream git@github.com:binary-com/mobile.git

npm install -g bower gulp cordova ionic ios-sim
npm install
```

## Running the App - localhost
```
// In project root
git pull upstream master
bower update
ionic serve
```

## Running the App - iOS Emulator
```shell
ionic emulate ios
```

## Running The App - iOS Device
```shell
cordova run ios --device
```

## Running the App - Android Emulator
```shell
ionic emulate android
```

## Running the App - Android Device
```
cordova run android --device
```

## Submitting the code
```shell
git push origin master
// Create a pull request from your fork in GitHub
```

## Working with SCSS
To update SCSS files, run the following command in another terminal
```shell
gulp sass  // compiles scss files to css
gulp watch // compiles scss files to css everytime a scss file gets changed
```

## Deploy new web version

We build with [Gulp](http://gulpjs.com/) and deploy to [GitHub Pages](https://pages.github.com/)

```
cd build
npm install or npm update (may need sudo)
gulp deploy
```

## How to use code-push to push new version

```shell
1. Install code-push
2. Modify `www/versions.json` file and add details of new version on it.
2. Use gulp to push the release

  `$gulp code-push --app <registered appName in code-push> --deployment <deploymentName> --platform <[android, ios]>`
```

## How to use white-label tool

1. Install electron globally `npm install -g electron`
2. Change your current directory to `tools/white-label`
3. Run `electron .`
