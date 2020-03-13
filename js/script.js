/**
 * Treehouse FSJS Techdegree
 * Crossword Vocab Exercise
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

const puzzleSelector = document.querySelector('#puzzle-selector');
const acrossDisplay = document.querySelector('#clue-container-across');
const downDisplay = document.querySelector('#clue-container-down');
const answersDisplay = document.querySelector('#answers-container');
const overlay = document.querySelector('#overlay');
const overlayButton = document.querySelector('#overlay-button');
const blurry = document.querySelector('#blur');
const info = document.querySelector('#info-overlay');
const infoOpenButton = document.querySelector('#info-open-button');
const infoCloseButton = document.querySelector('#info-close-button');

// Create and append option elements for each puzzle in puzzles.js 
for (let key in puzzles) {
  const option = document.createElement('OPTION');
  let title = puzzles[key].title;
  if (title.includes('-')) {
    const index = title.indexOf('-');
    const firstHalf = title.slice(0, index);
    const otherHalf = title.slice(index + 1);
    const newString = firstHalf + otherHalf;
    title = newString;
  }
  option.value = title;
  option.textContent = title;
  puzzleSelector.appendChild(option);
}

/**
 * Reset puzzle data and display
 */
const reset = () => {
  currentPuzzle = {};
  puzzleMatrix = [];
  puzzleData = {};
  acrossDisplay.innerHTML = '<h5>Across</h5>';
  downDisplay.innerHTML = '<h5>Down</h5>';
  answersDisplay.innerHTML = '';
  blurry.classList.remove('blur');
  overlay.classList.remove('blur-others')
}

// Puzzle selector
puzzleSelector.addEventListener('change', e => {
  reset();
  if (e.target.value.toLowerCase() === 'unittwo') sideToggle = false;
  if (e.target.value.toLowerCase() === 'unitthree') sideToggle = false;
  initPuzzle(puzzles[e.target.value.toLowerCase()]);
  initDisplay();
});

// Close overlay button
overlayButton.addEventListener('click', e => {
  overlay.style.opacity = '0';
  setTimeout(() => {overlay.style.display = 'none'}, 200);
  overlay.classList.remove('blur-others');
  blurry.classList.remove('blur');
});

// Open info button
infoOpenButton.addEventListener('click', e => {
  info.style.display = 'block'
  info.style.opacity = '1';
  info.classList.remove('zoomOut');
  info.classList.add('zoomIn');
  info.classList.add('blur-others');
  blurry.classList.add('blur');
})

// Close info button
infoCloseButton.addEventListener('click', e => {
  info.style.opacity = '0';
  setTimeout(() => {info.style.display = 'none'}, 300);
  info.classList.remove('zoomIn');
  info.classList.add('zoomOut');
  info.classList.remove('blur-others');
  blurry.classList.remove('blur');
})