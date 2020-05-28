# Answers to technical questions

Answers to technical questions

## How long did you spend on the coding assignment? 

Analysis - 3 hours review and test API
Build responsive template including header - 1.5 hour
Design Header layout - 1 hours
Design filter layout - 1 hours
Design Restarant layout - 1 hour
Design filters - 1 hour
Design redux, actions, types 2 hours
Minor corrections for WCAG compliance - 1 hour
Testing - 2 hours
Documentation - 1.5 hours

## What would you add to your solution if you had more time?

I would spend time on layout, color and images to make it more appealing. I expect when I deliver this I will not have as much testing as I would prefer. The abilty to add tests using Cypress and Jest is amazing. Even though this is a simple app in basic design it is complex. 
Features:
Responsive design;
Chained responsive filtering;
Reusable TextField
Reusable AutoComplete

Also I believe there is the abiltity to improve reusability, add documentation.  

## If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add?

I would build a better API. This API has serious deficencies. It is just a demo API so it is what it is and is only for demonstration. The one major flaw is cities should be able to be filtered by region, country etc. Also part zip requests would be a nice addition. I initially had extra inputs but removed tham as they were not mentioned as a m=ust to deliver and I wanted to wrap this up.

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Object.fromEntries() is an extremely valuable new enhancement to javascript.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries

### Convert a Map to an Object
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }

### Convert an Array to an Object
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }


### How would you track down a performance issue in production? Have you ever had to do this?

One of my major skills has always been the ability to troubleshoot. I had one application where the inital designer was loading data into memory and as the data grew the app slowed down. I found the flaw and change the design to pull data from the DB rather than store it in memory. This took load time from minutes per unit as the data grew to 3-4 seconds per unit.

## How would you improve the API that you just used?
Cities should be able to be filtered by region, country etc. Also additional restaurant data such as cuisine type would be nice.

