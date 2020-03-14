/**
 * Treehouse FSJS Techdegree
 * Crossword Vocab Exercise
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

// Initialize current puzzle, puzzle matrix and data store
let currentPuzzle = {};
let puzzleMatrix = [];
let puzzleData = {};

// Initialize toggle to alternate between adding words from their beginning and their end
let sideToggle = true;

/**
 * Initialize crossword puzzle
 * @param { {} } puzzle 
 */
const initPuzzle = (puzzle, size) => {

  // Set initial data
  currentPuzzle = puzzle.puzzle;
  const currentTitle = currentPuzzle.title;
  const clues = Object.values(currentPuzzle);
  const answers = Object.keys(currentPuzzle);
  const sortedAnswers = answers.map((a) => a.toUpperCase()).sort((a, b) => b.length - a.length);
  const longest = sortedAnswers[0].length;
  const buffer = Math.floor((longest / 2));


  /**
   * Create empty matrix to store puzzle answer, off which the display will be based
   * @param { number } size 
   */
  const createMatrix = (size) => {
    const createRow = () => {
      const row = [];
      for (let i = 0; i < size; i++) { row.push(''); }
      return row;
    }

    const matrix = [];
    for (let i = 0; i < size; i++) { matrix.push(createRow()); }
    return matrix;
  }

  puzzleMatrix = createMatrix(size || (longest * 2) - 2);

  /**
   * Add answer to matrix and store answer data in puzzle data object
   * @param { [] } matrix 
   * @param { string } answer 
   * @param { string } orientation 
   * @param { number } ri 
   * @param { number } ci 
   */
  const insertAnswer = (matrix, answer, orientation, ri, ci) => {
    const answerStats = {
      answer: answer,
      orientation: orientation,
      start: [ri, ci],
      end: (orientation === 'across') ? [ri, ci + (answer.length - 1)] : [ri + (answer.length - 1), ci],
      coordinates: []
    };
    [...answer].forEach((letter, i, arr) => {
      if (orientation === 'across') {
        matrix[ri][ci + i] = letter;
        answerStats.coordinates.push([ri, ci + i]);
      }
      if (orientation === 'down') {
        matrix[ri + i][ci] = letter;
        answerStats.coordinates.push([ri + i, ci]);
      }
    });
    return answerStats;
  }

  // Kick off puzzle by adding first word to matrix and storing its data
  const firstWord = sortedAnswers.shift();
  puzzleData[firstWord] = insertAnswer(puzzleMatrix, firstWord, 'down', buffer, buffer * 2);

  /**
   * Loop over coordinates and check check perimeter of location in matrix to see if answer will fit
   * @param { [] } matrix 
   * @param { string } answer 
   * @param { string } orientation 
   * @param { [] } coordinates 
   */
  const willFit = (matrix, answer, orientation, coordinates) => {
    for (let i = 0, j = coordinates.length; i < j; i++) {
      const r = coordinates[i][0];
      const c = coordinates[i][1];
      const pm = matrix;
      const mc = pm[r][c];
      const compass = {
        n: pm[r - 1][c],
        s: pm[r + 1][c],
        w: pm[r][c - 1],
        e: pm[r][c + 1],
        start: [coordinates[0][0], coordinates[0][1]],
        end: [coordinates[coordinates.length - 1][0], coordinates[coordinates.length - 1][1]]
      }
      const before = orientation === 'down' ? 
                    pm[compass.start[0] - 1][compass.start[1]] : 
                    pm[compass.start[0]][compass.start[1] - 1];
      const after = orientation === 'down' ? 
                    pm[compass.end[0] + 1][compass.end[1]] : 
                    pm[compass.end[0]][compass.end[1] + 1];
      if (mc !== '' && mc !== answer[i]) return false;
      if (before !== '' || after !== '') return false;
      if (orientation === 'across' && mc === '') if (compass.n !== '' || compass.s !== '') return false;
      if (orientation === 'down' && mc === '') if (compass.w !== '' || compass.e !== '') return false;
    }
    return true;
  }

  /**
   * Find the location for answer, check if it will fit and add to the puzzle
   * @param { string } newAnswer 
   * @param { string } existingAnswer 
   */
  const placeNewAnswer = (newAnswer, existingAnswer) => {
    const ti = (sideToggle) ? 0 : newAnswer.length;
    const tj = (sideToggle) ? newAnswer.length : 0;
    for (let i = ti, j = tj; (sideToggle) ? i < j : j < i; (sideToggle) ? i++ : i--) {
      for (let ii = 0, jj = existingAnswer.length; ii < jj; ii++) {
        if (newAnswer[i] === existingAnswer[ii]) {
          const matchCoordinates = puzzleData[existingAnswer].coordinates[ii];
          const r = matchCoordinates[0];
          const c = matchCoordinates[1];
          const existingAnswerOrientation = puzzleData[existingAnswer].orientation;
          const newAnswerOrientation = (existingAnswerOrientation === 'down') ? 'across' : 'down';
          const newStartCoordinates = (existingAnswerOrientation === 'down') ? [r, c - i] : [r - i, c];
          const nr = newStartCoordinates[0];
          const nc = newStartCoordinates[1];
          const newAnswerCoordinates = [];
          for (let iii = 0, jjj = newAnswer.length; iii < jjj; iii++) {
            const rc = (existingAnswerOrientation === 'down') ? [nr, nc + iii] : [nr + iii, nc];
            newAnswerCoordinates.push(rc);
          }
          if (willFit(puzzleMatrix, newAnswer, newAnswerOrientation, newAnswerCoordinates)) {
            puzzleData[newAnswer] = insertAnswer(puzzleMatrix, newAnswer, newAnswerOrientation, nr, nc);
            sideToggle = !sideToggle;
            return true;
          }
        }
      }
    }
    return false;
  }

  /**
   * Loop over all answers and add them all to the puzzle
   * @param { [] } answerList 
   */
  const populatePuzzle = (answerList) => {
    let newAnswer = answerList.shift();
    let placedAnswer;
    for (let key in puzzleData) {
      placedAnswer = placeNewAnswer(newAnswer, puzzleData[key].answer);
      if (placedAnswer) {
        if (answerList.length) {
          return populatePuzzle(answerList);
        } else {
          console.log("I think it's all done and we're all good and all the answers are in the grid, glory be to the code gods and praise their names, HALLELUJAH!");
          return;
        }
      }
    }
  }

  populatePuzzle(sortedAnswers);
};