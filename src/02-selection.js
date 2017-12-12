// Selections are at the heart of D3.
// So much so that it's impossible to use D3 without them.

/**
 * Select a div using document.querySelector
 */
export const querySelectDiv = () => {
};

/**
 * Select the div with demo-selection id using document.querySelector
 */
export const querySelectDivWithDemoSelectionId = () => {
};

/**
 * Select an element with the "sample" class name
 */
export const querySelectElementWithSampleClassName = () => {
};

/**
 * Get the first <p> element  where the parent is a <div id="demo-selection"> element
 */
export const querySelectFirstPElement = () => {
};

/**
 * Get all <p> elements in the document
 */
export const querySelectAllP = () => {
};

/**
 * Get all elements with .sample
 */
export const querySelectAllElementWithSampleClassName = () => {
};

//=======================================================

// Let's do the same using d3 now

/**
 * Select a div using d3.select
 */
export const selectDiv = d3 => {
};

/**
 * Select the div with demo-selection id using d3.select
 */
export const selectDivWithDemoSelectionId = d3 => {
};

/**
 * Select an element with the "sample" class name
 */
export const selectElementWithSampleClassName = d3 => {
};

/**
 * Get the first <p> element  where the parent is a <div id="demo-selection"> element
 */
export const selectFirstPElement = d3 => {
};

/**
 * Get all <p> elements in the document
 */
export const selectAllP = d3 => {
};

/**
 * Get all elements with .sample
 */
export const selectAllElementWithSampleClassName = d3 => {
};

// Summary

/*
  If you want to select	              One Item	        Multiple Items
  Anywhere on the page	              d3.select	        d3.selectAll
  Within an existing selection	      selection.select	selection.selectAll
 */
