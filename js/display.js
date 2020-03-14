/**
 * Treehouse FSJS Techdegree
 * Crossword Vocab Exercise
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

 /**
  * Initialize puzzle display
  */
const initDisplay = () => {

  /**
   * Check if move completes the puzzle
   */
  const checkForWin = () => {
    const inputs = document.querySelectorAll('.letter-input');

    for (let i = 0, j = inputs.length; i < j; i++) {
      if (![...inputs[i].classList].includes('correct') || [...inputs[i].classList].includes('wrong')) {
        return false;
      }
    }
    return true;
  }

  // Initialize variable to store previous cell filled in
  let prevCell;

  /**
   * Main Puzzle Functionality
   * Handle what happens when user interacts with puzzle
   */
  const puzzleListener = (e, space) => {
    const rows = document.querySelectorAll('tr');

    // Remove spaces
    if (e.target.value === ' ') {
      e.target.value = '';
    }

    // Initialize variables to store first and final row and column indexes
    let firstRowIndex;
    let firstColumnIndex;
    let finalRowIndex;
    let finalColumnIndex = rows[0].children[rows[0].children.length - 1];
    
    // Set first and final row indexes
    [...rows].forEach((row, i) => {
      if (firstRowIndex === undefined && row.children.length) firstRowIndex = i;
      if ( i > firstRowIndex && finalRowIndex === undefined && !row.children.length) finalRowIndex = i - 1;
    });

    // Set first and final column indexes
    [...rows[firstRowIndex].children].forEach((col, i) => {
      if (firstColumnIndex === undefined && [...col.classList].includes('show-column')) firstColumnIndex = i;
      if ( i > firstColumnIndex && finalColumnIndex === undefined && [...col.classList].includes('hide-column')) finalColumnIndex = i - 1;
    });

    // HELPFUL LOGS for first and final row and column indexes
    // console.log('firstRowIndex: ', firstRowIndex);
    // console.log('firstColumnIndex: ', firstColumnIndex);
    // console.log('finalRowIndex: ', finalRowIndex);
    // console.log('finalColumnIndex: ', finalColumnIndex);
    // console.log(' ')
    
    // Set current cell and current row and column indexes
    const currentCell = e.target;
    const currentRowIndex = e.target.getAttribute('data-row');
    const currentColumnIndex = e.target.getAttribute('data-column');
    
    // HELPFUL LOGS for current cell and current row and column indexes
    // console.log('currentCell: ', currentCell);
    // console.log('currentRowIndex: ', currentRowIndex);
    // console.log('currentColumnIndex: ', currentColumnIndex);
    // console.log(' ')

    // Set next and previous row and column indexes
    const nextRowIndex = (+currentRowIndex + 1) > finalRowIndex ? finalRowIndex : +currentRowIndex + 1;
    const nextColumnIndex = (+currentColumnIndex + 1) > finalColumnIndex ? finalColumnIndex : +currentColumnIndex + 1;
    const prevRowIndex = (+currentRowIndex - 1) < firstRowIndex ? firstRowIndex : +currentRowIndex - 1;
    const prevColumnIndex = (+currentColumnIndex - 1) < firstColumnIndex ? firstColumnIndex : +currentColumnIndex - 1;

    // HELPFUL LOGS for next and previous row and column indexes
    // console.log('nextRowIndex: ', nextRowIndex);
    // console.log('nextColumnIndex: ', nextColumnIndex);
    // console.log('prevRowIndex: ', prevRowIndex);
    // console.log('prevColumnIndex: ', prevColumnIndex);
    // console.log(' ')
    
    // Set next and prev row and column cells
    const nextAcrossCell = rows[currentRowIndex].children[nextColumnIndex];
    const nextDownCell = rows[nextRowIndex].children[currentColumnIndex];
    const prevAcrossCell = rows[currentRowIndex].children[prevColumnIndex];
    const prevDownCell = rows[prevRowIndex].children[currentColumnIndex];

    // HELPFUL LOGS for next and prev row and column cells
    // console.log('nextAcrossCell: ', nextAcrossCell);
    // console.log('nextDownCell: ', nextDownCell);
    // console.log('prevAcrossCell: ', prevAcrossCell);
    // console.log('prevDownCell: ', prevDownCell);

    // Add arrow key functionality
    if (e.keyCode > 36 && e.keyCode < 41) {
      if (e.keyCode === 37 && prevAcrossCell && prevAcrossCell.children[0]) prevAcrossCell.children[0].focus();
      if (e.keyCode === 38 && prevDownCell && prevDownCell.children[0]) prevDownCell.children[0].focus();
      if (e.keyCode === 39 && nextAcrossCell && nextAcrossCell.children[0]) nextAcrossCell.children[0].focus();
      if (e.keyCode === 40 && nextDownCell && nextDownCell.children[0]) nextDownCell.children[0].focus();
    }

    // Add functionality for letter keys
    if (e.keyCode === 32 || e.keyCode > 64 && e.keyCode < 91) {

      // Initialize variable to store next letter cell - where focus will go next
      let nextLetterCell;

      // Handle basic next across and next down 
      if (nextAcrossCell.innerHTML === '') nextLetterCell = nextDownCell.children[0];
      if (nextDownCell.innerHTML === '') nextLetterCell = nextAcrossCell.children[0];

      // Handle next across and next down at intersections
      if (nextAcrossCell.innerHTML !== '' && nextDownCell.innerHTML !== '') {
        
        if (prevCell) {
          if (prevCell === prevAcrossCell.children[0]) {
            nextLetterCell = nextAcrossCell.children[0];
          } else if (prevCell === prevDownCell.children[0]) {
            nextLetterCell = nextDownCell.children[0];
          } else {
            if (nextAcrossCell.innerHTML !== '') {
              nextLetterCell = nextAcrossCell.children[0];
            } else if (nextDownCell.innerHTML !== '') {
              nextLetterCell = nextDownCell.children[0];
            } else {
              nextLetterCell = currentCell;
            }
          }
        } else {
          if (nextAcrossCell.innerHTML !== '') {
            nextLetterCell = nextAcrossCell.children[0];
          } else if (nextDownCell.innerHTML !== '') {
            nextLetterCell = nextDownCell.children[0];
          } else {
            nextLetterCell = currentCell;
          }
        }

        // TODO: handle starting a down in the middle of an across
        // if (nextAcrossCell.innerHTML !== '') {

        // }
      }

      // Handle end of word and edge of puzzles
      if (nextAcrossCell.innerHTML === '' && nextDownCell.innerHTML === '') nextLetterCell = currentCell;
      if (nextAcrossCell.innerHTML !== '' && [...rows[+currentRowIndex + 1].classList].includes('hide-row')) {
        nextLetterCell = nextAcrossCell.children[0];
      }
      if (nextDownCell.innerHTML !== '' && [...rows[currentRowIndex].children[+currentColumnIndex + 1].classList].includes('hide-column')) { 
        nextLetterCell = nextDownCell.children[0];
      }

      // HELPFUL LOGS for checking prev and next across and down
      // console.log('prev across', prevAcrossCell.children[0], 'next across', nextAcrossCell.children[0]);
      // console.log('prev down', prevDownCell.children[0], 'next down', nextDownCell.children[0]);

      // Set focus on next letter
      nextLetterCell.focus();

      // Set previously clicked cell for next move
      prevCell = currentCell; 

      // Handle more than one letter
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(-1);
      }

      // Handle right and wrong letters
      if (e.target.value.toUpperCase() === space) {
        e.target.parentElement.style.borderColor = 'rgb(99, 208, 129)';
        e.target.classList.add('correct');
        e.target.classList.remove('wrong');
      } else {
        e.target.parentElement.style.borderColor = 'red';
        e.target.classList.add('wrong');
        e.target.classList.remove('correct');
      } 

      // Handle puzzle completion
      if (checkForWin()) {
        const overlay = document.querySelector('#overlay');
        const blur = document.querySelector('#blur');
        overlay.style.display = 'block'
        overlay.style.opacity = '1';
        overlay.classList.add('blur-others');
        blur.classList.add('blur');
      }
    }
  }

  // Initialize variable for answer counter
  let answerCounter = 1;

  /**
   * Create puzzles cells and inputs, add classNames, attributes, and listeners
   */
  const displayPuzzle = () => {

    const answerContainer = document.querySelector('#answers-container');
    const puzzleTable = document.createElement('TABLE');
    puzzleTable.setAttribute('id', 'puzzle-table');
    answerContainer.appendChild(puzzleTable);

    puzzleMatrix.forEach((row, i) => {
      const tr = document.createElement('TR');
      puzzleTable.appendChild(tr);

      if (row.join('').length === 0) {
        tr.classList.add('hide-row');
      } else {
        tr.classList.add('show-row');
        tr.setAttribute(`data-row`, i);
        row.forEach((space, ii) => {
          const column = [];

          puzzleMatrix.forEach((r, j) => column.push(puzzleMatrix[j][ii]));

          const td = document.createElement('TD');
          tr.appendChild(td);
          td.setAttribute(`data-row`, i);
          td.setAttribute(`data-column`, ii);

          if (column.join('').length === 0) {
            td.classList.add('hide-column');
          } else {
            td.classList.add('show-column');
            if (space !== '') {
              td.classList.add('letter');
              
              const input = document.createElement('INPUT');
              input.type = 'text';
              input.classList.add('letter-input');
              input.setAttribute(`data-row`, i);
              input.setAttribute(`data-column`, ii);
              td.appendChild(input);

              td.parentElement.addEventListener('focusin', e => {
                let val = e.target.value;
                if (val.length === 1) {
                  setTimeout(() => { 
                    e.target.value = '';
                    e.target.value = val;
                  }, 100);
                }
              });

              td.addEventListener('click', e => {
                let val = e.target.value;
                if (val.length === 1) {
                  setTimeout(() => { 
                    e.target.value = '';
                    e.target.value = val;
                  }, 100);
                }
              });

              td.addEventListener('keyup', e => puzzleListener(e, space));
              
            } else {
              td.classList.add('empty-space');
            }

            const ui = puzzleMatrix[i - 1][ii];
            const di = puzzleMatrix[i + 1][ii];
            const li = row[ii - 1];
            const ri = row[ii + 1];

            if (space !== '' && di !== '' && ui === '' || space !== '' && ri !== '' && li === '') {
              const span = document.createElement('SPAN');
              span.classList.add('answer-number');
              span.innerHTML = answerCounter;
              td.appendChild(span);
              answerCounter++;
            }
          }
        });
      } 
    });
  }

  displayPuzzle();

  /**
   * Add little numbers to puzzle for each word
   */
  const assignNumbersToAnswers = () => {
    const arrOfObjects = [];
    for (let key in puzzleData) {
      arrOfObjects.push(puzzleData[key]);
    }
    const sortedObjects = arrOfObjects.sort((a, b) => (a.start[0] === b.start[0]) ? a.start[1] - b.start[1] : a.start[0] - b.start[0]);
    let tieCount = 0;
    sortedObjects.forEach((obj, i) => {
      if (tieCount > 0) {
        puzzleData[obj.answer].number = (i - tieCount) + 1;
      } else {
        puzzleData[obj.answer].number = i + 1;
      }
      if ( i > 0 && sortedObjects[i - 1].start.join('') === puzzleData[obj.answer].start.join('')) {
        puzzleData[obj.answer].number = (i - 1) + 1;
        tieCount++;
      } 
    })
  }

  assignNumbersToAnswers();

  // Add focus to first letter of first word
  for (let key in puzzleData) {
    if (puzzleData[key].number === 1) {
      const ri = puzzleData[key].coordinates[0][0];
      const ci = puzzleData[key].coordinates[0][1];
      document.querySelector('#puzzle-table').children[ri].children[ci].children[0].focus();
    }
  }

 /**
  * Handle displaying clues
  */
  const displayClues = () => {
    const across = document.querySelector('#clue-container-across');
    const down = document.querySelector('#clue-container-down');
    const arrOfObjects = [];
    for (let key in puzzleData) {
      arrOfObjects.push(puzzleData[key]);
    }
    const sortedObjects = arrOfObjects.sort((a, b) => a.number - b.number);
    sortedObjects.forEach((obj, i) => {
      const p = document.createElement('P');
      p.innerHTML = `<span class="clue-number">${obj.number}.</span> ${currentPuzzle[obj.answer.toLowerCase()]}`;
      if (obj.orientation === 'across') across.appendChild(p);
      if (obj.orientation === 'down') down.appendChild(p);
    });
  }

  displayClues();
};