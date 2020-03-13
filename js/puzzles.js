/**
 * Treehouse FSJS Techdegree
 * Crossword Vocab Exercise
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

/**
 * Puzzles object
 * schema: {
 *   `puzzleName`: {
 *     title: title,
 *     puzzle: {
 *       answer: clue 
 *     }
 *   }
 * }
 */

const puzzles = {
  unitone: {
    title: `Unit-One`,
    puzzle: {
      conditionals: `Term used to describe if and if else statements`,
      concatenate: `Join two or more strings together`,
      javascript: `Language used to add functionality to a web page`,
      iterate: `We use loops to ___ over a collection`,
      array: `List-like object of comma separate values`,
      random: `Method called on the Math object to get a random number between zero and one`,
      object: `Everything in JavaScript is an ___`,
      github: `Popular web app for creating, storing and tracking a repository of code`,
      bracket: `Use ___ notation to access items in an array`,
      slack: `Popular remote communication tool used by many tech companies`,
      html: `Language used to build the elements of a web page`,
      css: `Language used to style a web page`,
      dot: `Use ___ notation to access properties of an object`,
      return: `In a function, nothing runs after a ___ statement has run`,
      ceil: `Math method for rounding up`,
      floor: `Math method for rounding down`,
    }
  },
  unittwo: {
    title: `Unit-Two`,
    puzzle: {
      documentobjectmodel: `What does DOM stand for?`,
      addeventlistner: `Method used on DOM elements to listen for user interaction`,
      descendant: `A li element is a ___ of the ul element that contains it`,
      ancestor: `The body element is an ___ of all the elements it contains`,
      manipulation: `DOM ___ is the act of changing something in the DOM`,
      traversal: `DOM ___ is the act of using one DOM element to target and access neighboring DOM elements`,
      parameters: `___ go in the parens when we define a function`,
      arguments: `___ go in the parens when we call or invoke a function`,
      innerhtml: `Property used on DOM elements to insert text`,
      invoke: `Another word for calling a function`,
      console: `We use log statements to print information to the ___`,
      elements: `The ___ panel in Chrome's DevTools is a where we can inspect the DOM`,
      global: `Variables declared outside of any functions live in the ___ scope`,
      local: `Variables declared inside of a functions have ___ scope`,
      comments: `Good code is clean, organized and has great code ___`,
      arrow: `Modern ES2015 functions are called ___ functions`,
      const: `ES2015 keyword used to declare a constant value whose type cannot change`,
      let: `ES2015 keyword used to declare mutable variables whose type can change`
    }
  },
  unitthree: {
    title: `Unit-Three`,
    puzzle: {
      regularexpressions: `Patterns used to match character combinations in strings`,
      preventdefault: `Method called on the event object to prevent some default behavior from taking place`,
      ecmascript: `The official name used to refer to versions of the JavaScript language`,
      javascript: `Coolest coding language on the web`,
      typescript: `A typed superset of JavaScript that compiles to plain JavaScript`,
      validation: `This checks the value and state of form inputs before allowing a form to submit`,
      checkboxes: `Form inputs that let you mark small boxes in order to make multiple selections`,
      vanilla: `Plain old JavaScript with no libraries or frameworks`,
      jquery: `A popular JavaScript library`,
      submit: `The ___ event fires on the form element and submit the form data`,
      change: `The ___ event listener works best with select elements and checkboxes`,
      event: `The ___ object comes into play when a user interacts with a web page`,
      options: `Direct children of a select element`,
      labels: `The are usually used in tandem with form inputs to display what the input is called`,
    }
  },
  strings: {
    title: `Strings`,
    puzzle: {
      javascript: `The coolest coding language on the web`,
      string: `An immutable sequence of characters`,
      object: `JavaScript treats a string as an ___`,
      primitive: `Strings in JavaScript are ___ data types`,
      length: `Property that tells how long a string is`,
      index: `The location of a given character in a string or array`,
      interpolate: `Insert something of a different type into a string`,
      concatenate: `Join two or more strings together`,
      split: `Method to split a string into an array of substrings`,
      slice: `Method to extract part of a string and return it as a new string`,
      trim: `Method to remove white space from both sides of a string`,
      join: `Method to turn an array into a string`,
      includes: `Method to check if a string contains a certain value`,
    }
  },
  math: {
    title: `Math`,
    puzzle: {
      calculator: `With JavaScript, you can create your own custom ___`,
      javascript: `Coolest coding language on the web`,
      increment: `Commonly accomplished with the ++ operator`,
      decrement: `Commonly accomplished with the -- operator`,
      parseint: `Method that parses a string and returns a number`,
      modulus: `Handy operator that returns the remainder a division remainder`,
      random: `Math method for getting a random number between zero and one`,
      number: `Primitive data type that is not a string, boolean, null or undefined`,
      isnan: `Method for checking if something is not a number`,
      round: `Math method cor rounding a floating point number`,
      floor: `Math method for rounding down`,
      ceil: `Math method for rounding up`,
      plus: `Unary ___ operator is the fastest and preferred way to turn something into a number`, 
    }
  }
}

