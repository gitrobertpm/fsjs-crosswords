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
      addeventlistener: `Method used on DOM elements to listen for user interaction`,
      manipulation: `DOM ___ is the act of changing something in the DOM`,
      document: `What does the D in DOM stand for?`,
      object: `What does the O DOM stand for?`,
      model: `What does the M in DOM stand for?`,
      descendant: `A li element is a ___ of the ul element that contains it`,
      ancestor: `The body element is an ___ of all the elements it contains`,
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
      preventdefault: `Method called on the event object to prevent some default behavior from taking place`,
      expressions: `Regular ___ are patterns used to match character combinations in strings`,
      ecmascript: `The official name used to refer to versions of the JavaScript language`,
      typescript: `A typed superset of JavaScript that compiles to plain JavaScript`,
      validation: `This checks the value and state of form inputs before allowing a form to submit`,
      checkboxes: `Form inputs that let you mark small boxes in order to make multiple selections`,
      vanilla: `Plain old JavaScript with no libraries or frameworks`,
      jquery: `A popular JavaScript library`,
      submit: `The ___ event fires on the form element and submit the form data`,
      change: `The ___ event listener works best with select elements and checkboxes`,
      fieldset: `Form element that breaks a form up into sections`,
      legend: `Form element used as a heading for a fieldset element`,
      event: `The ___ object comes into play when a user interacts with a web page`,
      options: `Direct children of a select element`,
      labels: `The are usually used in tandem with form inputs to display what the input is called`,
      radio: `___ buttons are similar to checkboxes except only one selection is allowed`
    }
  },
  unitfour: {
    title: `Unit-Four`,
    puzzle: {
      instantiating: `What we call it when we create an instance of a class`,
      programming: `What does the P in OOP stand for?`,
      constructor: `A special method in a class declaration for defining the object created and initialized by the class`,
      javascript: `Coolest coding language on the web`,
      properties: `Collection of values associated with an object`,
      callback: `A function passed to another function as an argument, that is then called in the outer function to complete an action`,
      oriented: `What does the second O in OOP stand for?`,
      method: `Object property containing a function definition`,
      object: `What does the first O in OOP stand for?`,
      bracket: `Use ___ notation to access object properties programmatically or with a string`,
      getter: `Method that provides the option of including logic when getting a property of an object`,
      setter: `Method that provides the option of including logic when setting a property of an object`,
      foreach: `Method that calls a function once for each element in an array`,
      reduce: `Method for reducing an array to a single value`,
      filter: `Method for creating an array of items from another array that pass a specified test`,
      map: `Method that creates a new array that is the result of calling a function on every item in the original array`,
      class: `A special JavaScript function that defines a template of an object which can be easily instantiated with the 'new' keyword`,
      dot: `Use ___ notation to directly access properties of an object`,
    }
  },
  unitfive: {
    title: `Unit-Five`,
    puzzle: {
      asynchronous: `What does the first A in AJAX stand for?`,
      javascript: `What does the J in AJAX stand for?`,
      protocol: `What does the P in HTTP stand for?`,
      notation: `What does the N in JSON stand for?`,
      transfer: `What does the second T in HTTP stand for?`,
      response: `When a server delivers a resource to the client`,
      request: `When the client asks a server for a resource`,
      telnet: `Fun piece of software for testing HTTP requests`,
      object: `What does the O in JSON stand for?`,
      hyper: `What does the H in HTTP stand for?`,
      text: `What does the first T in HTTP stand for?`,
      post: `HTTP method used to send data to a server to create or update a resource`,
      get: `HTTP method for requesting data from a specified resource `,
      xml: `What does the X in AJAX stand for?`,

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
      round: `Math method for rounding a floating point number`,
      floor: `Math method for rounding down`,
      ceil: `Math method for rounding up`,
      plus: `Unary ___ operator is the fastest and preferred way to turn something into a number`, 
    }
  }
}

