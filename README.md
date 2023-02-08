## Prerequisites: 

Have the following installed on your system: 
- Node.js LTS release 
- Git
- Watchman (macOS/Linux)

## To build: 
1) npm install 
2) npx expo start
    this starts a Metro Bundler 

#### If you want to use on your phone
Get Expo Go client app on Android/iOS device, create an account, login there + locally 


Note: we will use Expo CLI 
npx expo -h: see availbile commands in Expo CLI 


## Notable Dependencies 
  -  @expo/vector-icons: for icons 
  -  expo-image-picker: for image picker 
  - @react-navigation/bottom-tabs: for tab based navigation 
 - react-native-keychain: secure keystore library for React Native (NOT IMPLEMENTED YET, for now just using default AsyncStorage) https://fullstackserverless.github.io/docs/auth1-02

## Authentication (AWS Cognito)
User Pools: secure user directory that stores users, manages users who login/sign up 


Identity Pools: allows you to authorize users who are logged into application to access certain other AWS services 

User Pools and Identity pools work together. Workflow: 
1) Authenticate and get tokens from User Pool 
2) Exchange tokens for AWS credentials in Identity Pool 
3) Access AWS services with AWS credentials  ie. S3, etc. 


Cognito has various authentication methods 


## TODO (make into tickets eventually lol): 
- figure out AppRegistry properly, move everything into a src folder? do u need this with Expo? (currently doing in index.js)
https://www.geeksforgeeks.org/react-native-appregistry/

- have support for localization 
https://fullstackserverless.github.io/docs/auth1-01
- have some sort of animation for signing out of ur profile so it is not so choppy 

## RESOURCES: 
- for any custom authentication changes, see: https://fullstackserverless.github.io/docs/auth1-02



## Brainstorming: 
- get location permissions from uesr 
- add user properties (ie. Location, payment  methods, etc.)
- payment methods integration 
- figure out typescript 
- create a form component 

one-to-many relationship. User object with listings