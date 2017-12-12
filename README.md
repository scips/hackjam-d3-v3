# HackJam D3js v3

HackJam for learning D3 v3 through koans.

## Getting Started

**Make sure you have Node version >= 6.0 and NPM >= 3**

To start, clone this repo to a new directory:

```bash
cd new directory
```

and run the command to install all your dependencies:

```bash
npm install # or yarn 
```

## Usage

#### To run all tests :

```bash
npm start # or yarn start
```
#### To watch for file changes and run all tests:

```bash
npm run start:watch # or yarn start:watch
```

#### To run a specific test file :

```bash
npm start  -- ./src/fileName.spec.js # or yarn start -- ./src/fileName.spec.js
```

#### To watch  a file change and run the test:

```bash
npm run start:watch -- ./src/fileName.spec.js # or yarn start:watch -- ./src/fileName.spec.js
```

#### To run the demo mode to visualise the rendering of  some exercises ( see below), run:

```bash
npm run demo # yarn demo
```

You will see failing tests that you should fix :)

Need help? Ask the Hackages Mentors.


## Exercises

Follow the order, the comment and implement all functions in files below:

```text
├── 01-getting-started.js
├── 02-selection.js
├── 03-element-crud.js
├── 04-handling-events.js
├── 05-join-and-update-pattern-numbers-display.js
├── 06-join-and-update-pattern-simple-bar-chart.js
├── 07-scale.js
```

Every file has an associated test file finishing by *.spec.js. You should not edit it!
```text
├── 01-getting-started.spec.js
├── 02-selection.spec.js
├── 03-element-crud.spec.js
├── 04-handling-events.spec.js
├── 05-join-and-update-pattern-numbers-display.spec.js
├── 07-scale.spec.js
```

> Note: for 05-join-and-update-pattern-numbers-display and 06-join-and-update-pattern-simple-bar-chart, 
you should run `npm run demo` to see the rendering

## Contributing

Feel free to send us PRs

Happy coding!

[Hackages Team](http://hackages.io)