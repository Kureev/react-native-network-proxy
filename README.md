## 🛠 Network debug tool for react-native

Ever struggled with debugging network requests in React Native? Prefer console tools over GUI solutions (like [reactotron](https://github.com/infinitered/reactotron))?

![react-native-network-proxy](http://i.imgur.com/kNtLzUr.jpg)

## Getting started

- Install `react-native-network-proxy` by running

  ```bash
  $ yarn add react-native-network-proxy
  ```
  or 
  ```bash
  $ npm i react-native-netowrk-proxy --save
  ```
  
- Add `react-native-network-proxy` to your react-native application:

  ```js
  import { start as startNetworkDebugging } from 'react-native-network-proxy';

  startNetworkDebugging({
    host: 'localhost',
    port: 6969,
  });

  // or just startNetworkDebugging();
  ```
  
- Start `react-native-network-proxy` server:

  ```bash
  $ yarn react-native-network-proxy
  ```
  or
  ```bash
  $ npm run react-native-network-proxy
  ```
  
- That's it! Run your app and make your `fetch`/`XMLHttpRequest`! The request should appear in the console where the server is running

## Help

You can always reach me on [twitter (@kureevalexey)](https://twitter.com/@kureevalexey)
