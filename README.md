# PokeDex API

A series of exercises built around [Biuni's PokeDex Data Set](https://github.com/Biuni/PokemonGO-Pokedex/blob/master/pokedex.json).

"All" you have to do is complete the empty functions found in `/logic` directory.  The challenges require you to filter, map, search & reduce the pokemon dataset (early returns are your friend!).  Because these exercises are all about the data, take some time to investigate it before diving right in.  What do the schemas say? What do you find in the sample data?

Enjoy!


### Index

* [Learning Objectives](#learning-objectives)
    * [Programming Skills](#programming-skills)
    * [Other People's Code](#other-peoples-code)
    * [Working with Data](#working-with-data)
    * [API's](#apis)
* [Getting Started](#getting-started)
    * [Install & Dependencies](#install--dependencies)
    * [Running the API](#running-the-api)
    * [Running the Tests](#running-the-tests)
* [Your Task](#your-task)
    * [values-for-key.js](#values-for-keyjs)
    * [evolutions-of.js](#evolutions-ofjs)
    * [type-stats.js](#type-statsjs)
    * [find-by/id.js](#find-by/idjs)
    * [find-by/key-value.js](#find-by/key-valuejs)
    * [find-by/type.js](#find-by/typejs)
    * [find-by/value.js](#find-by/valuejs)
    * [find-by/weakness.js](#find-by/weaknessjs)
* [Extra Challenge](#extra-challenge)
* [Helpful Links](#helpful-links)
* [Contributors](#contributors)

---

## Learning Objectives

#### Programming Skills

* Debugging JavaScript in VSC
* Running tests from the terminal with _mocha_
* Working with modular code

#### Other People's Code

* Navigating larger directory structures
* Understanding code you didn't write
* Setting up and running other people's projects

#### Working with Data

* Exploring and understanding large data sets
* Reading and understanding JSON data
* Processing more data than you can read at once
* Deciphering JSON schemas

#### APIs

* Testing APIs in Postman
* URL Request parameters
* Using APIs to explore a large data set

---

## Getting Started

Before you start passing tests, you should install all dependencies and practice running.  It'll be much easier to solve the challenges after you are comfortable running and exploring the code base.

#### Install & Dependencies

1. clone the repo
2. `npm install`
3. `npm install -g mocha`

#### Running the Tests

* To test a single function at a time while writing your solutions:
    * `mocha logic/path-to-function/spec.js`
* To test all functions at once:
    * `npm run test`

Test results will be logged to the terminal and rendered to the folder called `/mochawesome-report`.  To explore the test results in your browser, open `/mochawesome-report/mochawesome.html` in your browser.

#### Running the API

* `npm run dev`

[TOP](#pokedex-api)

---

## Your Task

The good news is _almost_ all of the code is already written, and it already works!  All you need to write is the bodies for the 8 functions in `./logic`.  Each of the functions are used by the API to process the PokeDex data and return just the information a user needs.

Each function lives in it's own small directory with a descriptive name, and two files with standard names:
1. `index.js`: Contains the empty function you need to write.  Your function is exported from this file to be used in the routes.
2. `spec.js`: Test cases and mocha suites for each function are described in this file.  The test data is pulled from the sample data sets in `./data`.


Below are the 8 functions you need to write:

#### logic/values-for-key

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `key`: A string
* _RETURNS:_ Array of values
* _BEHAVIOR:_ This function will create a new array containing every unique value associated with the given `key`.  If two pokemon objects have the same value for the `key`, then the value will not be added twice.

#### logic/evolutions-of

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `name`: A string
* _RETURNS:_ Array of objects -> `{name: "string", num: "string"}`
* _BEHAVIOR:_ This function will return an array indicating all evolutions of the pokemon with `name`.  Each object in the array will contain only the .name and .num of each evolution.  If there is no pokemon with `name`, the function will return an empty array.

#### logic/type-stats

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `type`: A string
* _RETURNS:_ an object with three properties -> `{typeName: "string", typeCount: "number", weaknessCount: "number"}`
* _BEHAVIOR:_ This function will check every pokemon to build up the return value. The `.typeCount` property in the return value is a count of how many pokemon have this `type` in the .type array.  The `.weaknessCount` property shows how many pokemon have this `type` in their .weaknesses array.

#### logic/find-by/id

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `id`: A number
* _RETURNS:_ A pokemon object
* _BEHAVIOR:_ This function returns the pokemon object with the given `id`.  If no such pokemon exists, it returns an empty object.

#### logic/find-by/key-value

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `key`: A string
    1. `value`: A string
* _RETURNS:_ Array of objects -> `{name: "string", num: "string"}`
* _BEHAVIOR:_ This function returns an array indicating which pokemon objects have a key/value pair matching the `key` and `value` arguments. Because your req.params will always be strings (until you learn about req.body ;), the function will cast all saved values to String before comparing with `value`.

#### logic/find-by/type

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `type`: A string
* _RETURNS:_ Array of objects -> `{name: "string", num: "string"}`
* _BEHAVIOR:_ This function returns an array indicating which pokemon objects have the given `type` in their .type array. If there are no pokemon with this `type`, just return an empty array.

#### logic/find-by/value

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `value`: A string
* _RETURNS:_ Array of objects -> `{name: "string", num: "string"}`
* _BEHAVIOR:_ This function returns an array indicating which pokemon objects have  the given `value` stored in _any_ of their keys. Because your req.params will always be strings (until you learn about req.body ;), the function will cast all saved values to String before comparing with `value`.

#### logic/find-by/weakness

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `weakness`: A string
* _RETURNS:_ Array of objects -> `{name: "string", num: "string"}`
* _BEHAVIOR:_ This function returns an array indicating which pokemon objects have the given `weakness` in their .weaknesses array. If there are no pokemon with this `weakness`, just return an empty array.


[TOP](#pokedex-api)

---


## Helpful Links

> [pokedex-api step-through](https://youtu.be/9ZstC8YPt6A)

Before diving right into API's, Express and Servers it's worth spending a day or so just getting used to programming in Node.js.  While the core of JavaScript is still the same there are some new features available in Node.js that weren't available in the browser, and it will take a little time to get used to working with the JS debugger built into VSC.

To get a hang of programming in Node.js take some time to solve the first few of these ...
* [JavaScript Exercises](https://github.com/HackYourFutureBelgium/javascript-exercises)
None of the first exercises are very difficult (you've even solved a few of them already!) so they should be a good opportunity to review JS and get used to the Node JS environment.

> You aren't required to complete all of these exercises, but if you don't start them we will raise our eye-brows.  So please include a link to your fork of the `javascript-exercises` in your weekly issue so we can easily find it.

__Debugging JS In VSC__

* [VSC Debugger](https://code.visualstudio.com/docs/editor/debugging)

__Node.js Tutorials__

These tutorials will introduce you to a bunch of new features in Node that you haven't seen in the Browser.  While you're following these tutorials, it's important to remember that at it's core Node.js is still JavaScript.  Everything you've learned so far (except for the DOM & `fetch` :) is still true!  The Event Loop, Classes, Closure, Arrays, Objects, Variables, `this.`, it's all still the same.

The tutorials below will introduce to what's new and what's special about Node.  But don't forget to take some time and solve a few of the JavaScript Exercises above to get used to working with plain, vanilla JS in the terminal.

* [Traversy: Node for Absolute Beginners](https://www.youtube.com/watch?v=U8XF6AFGqlc)
* [Traversy: Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
* [Mosh: Node.js in 1 Hour](https://www.youtube.com/watch?v=TlB_eWDSMt4)

__API's and Express__

Node.js is a JavaScript runtime environment capable of writing Web Servers and API's all by itself.  But it's a bit annoying.  Express is a great and easy to use framework to help you write API's and Web Servers by handling all of the boring stuff for you so you can focus on what your app does.

> [JSON Server](https://github.com/typicode/json-server) - An NPM module that starts a RESTful API without you having to write a single line of code.  This can be helpful practice for getting the hang of API's and Postman without getting caught up with bugs and errors.

* [Traversy: Express Crash Course](https://www.youtube.com/watch?v=gnsO8-xJ8rs)
* [Mosh: Restful API's](https://www.youtube.com/watch?v=pKd0Rpw7O48)
* [FCC: Node.js & Express](https://www.youtube.com/watch?v=G8uL0lFFoN0)


[TOP](#pokedex-api)
