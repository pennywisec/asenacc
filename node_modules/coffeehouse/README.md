# CoffeeHouse API Wrapper for JavaScript

This is a very simple API Wrapper for the CoffeeHouse API. Using
This Library only supports the V1IVA2.0 CoffeeHouse API which is based from
this [Documentation](https://gist.github.com/Netkas/e8977b26f482ca40911a949df7dd286f)


## Installation
```sh
npm i coffeehouse
```
or [Github Packages](https://github.com/Quiec/CoffeeHouse/packages/523647)
```sh
npm i @quiec/coffeehouse
```

## Lydia Example

```js
const { LydiaAI } = require('coffeehouse');

async function speak(apikey, text) {
    const api = new LydiaAI(apikey);
    const session = await api.createSession();
    console.log('Session ID: ' + session.id);
    session.think_thought(text).then(data => console.log(data.data.payload.output));
}

speak('ur api key', 'Merhaba Dünya');
```