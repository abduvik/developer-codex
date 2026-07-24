---
title: React Native
---

# React Native

## YouTube Video

## Summary

Expo is a framework that helps with developing React Native apps.

- `npx create-expo-app@54 <project_name>`
- `npx expo start`

You can install Expo Go for testing and running app on your phone as start of using expo dev-client to install your own
version of expo with native libraries which is the more recommended way.

- https://docs.expo.dev/develop/development-builds/create-a-build/
- https://medium.com/@pamudasansika/expo-go-vs-expo-dev-client-which-one-should-you-actually-use-1538f6aae194

### Creating iOS installation

You will need to create an `.ipa` file which has the package of the application.

You will need to install some applications on Mac:

```sh
# Install ruby env environment manager
brew install rbenv ruby-build
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc

# Install updated version of ruby
rbenv install 3.3.0
rbenv global 3.3.0

# Install cocoapods
gem install cocoapods -V
rbenv rehash
pod --version
```

Make sure xcode has iphone sdk installed:

XCode -> Settings -> Components -> iOS installation

Now we create the `.ipa` file

```sh
npx expo prebuild --platform ios
cd /ios
pod install # Install required packages

# Bundle the project
npx expo export:embed --entry-file='node_modules/expo-router/entry.js' --bundle-output='./ios/main.jsbundle' --dev=false --platform='ios'

xcodebuild -workspace ios/worktracker.xcworkspace \
  -scheme worktracker \
  -sdk iphoneos \
  -configuration Release \
  -archivePath ./build/worktracker.xcarchive \
  CODE_SIGN_IDENTITY="" \
  CODE_SIGNING_REQUIRED=NO \
  CODE_SIGNING_ALLOWED=NO \
  archive
```

Some quirks because it's Apple. You will need to enable the following on your iOS:

- Go to VPN and Device Management -> Trust your account
- Go to Privacy & Security -> Developer Mode -> Enable Developer mode
