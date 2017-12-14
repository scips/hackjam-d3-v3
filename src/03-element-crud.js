// After learning how to select element. Let's modify it

/**
 * Get the href link of <a id="hackages-link"/>
 */
export const getHrefOfHackagesLink = d3 => {
  return d3.select('#hackages-link').attr('href');
};

/**
 * Set "https://d3js.org/" to the href of <a id="d3-link"/>
 * return the selection
 */
export const setHrefOfD3Link = d3 => link => {
  return d3.select('#d3-link').attr('href', link);
};

// NOTE : Most of methods has a dual purpose, getters and setters, based on the parameter you provide

/**
 * Select all <a /> and add them the "link" class name
 * return the selection
 */
export const selectAllLinkAndAddLinkClass = d3 => {
  
};

/**
 * Toggle the checked state of  <input type="checkbox" id="toggleChecked" /> i.e if the input is
 * checked, we unchecked it else we checked
 * return selection
 */
export const toggleChecked = d3 => {
  return d3.select('#toggleChecked').attr('checked', function () {
    // !!! d3 bind this so => functions does not work here
    return !d3.select(this).attr('checked');
  })
};

/**
 * Set the background-color red to <p id="i-am-red"/>
 * return selection
 */
export const setBackgroundColorRed = d3 => {
  
};

/**
 * Get the color style of <p style="color:blue;" id="i-am-blue" > da ba dee da ba daa </p>
 * return selection
 */
export const getColorOfIAmBlue = d3 => {
  return d3.select('#i-am-blue').style('color');
};

// Note: .style, it is kinds of .attr but deals with styles rather than attributes
// From here, YOU MUST NOT USE .attr()
/**
 * Get the disabled state of <button disabled="true" id="disabled-button"/>
 * return selection
 */
export const getDisabledStatus = d3 => {
  return d3.select('#disabled-button').property('disabled');
};

/**
 * Check <input type="checkbox" id="check-me"/>
 * return selection
 */
export const checkCheckMe = d3 => {

};

/**
 * Remove the "btn" class on <input type="submit" class="btn"/>
 * return selection
 */
export const removeBtnClass = d3 => {
  return d3.select('input[type="submit"')
    .classed('btn', false)
    //.classed('btn2', true)  
};

/**
 * Apply the "btn btn-lg" class on <button id="style-me"/>
 * return selection
 */
export const applyBtnAndBtnLgClass = d3 => {};

/**
 * Get the innerText of <a id="hackages-link" />
 * return selection
 */
export const getTheInnerTextOfHackagesLink = d3 => {};

/**
 * Get the innerHTML of <a id="d3-link" />
 * return selection
 */
export const getTheInnerHtmlOfD3Link = d3 => {
  return d3.select('#d3-link').html();
};

/**
 * Set the innerText of <a id="hackages-link" to D3/>
 * return selection
 */
export const setTheInnerTextOfHackagesLink = d3 => {};

/**
 * Set the innerHTML of <a id="d3-link" /> to hackages
 * return selection
 */
export const setTheInnerHtmlOfD3Link = d3 => {};

// From here, YOU COULD AGAIN use .attr() :)

/**
 * Append a <p id="appended"/> to <div id="demo-selection-element-crud" />
 * return selection
 */
export const appendPToDivDemoSelectionElementCrud = d3 => {};

/**
 * Append a <span class="appended-to-link"/> to all <a/>
 * return selection
 */
export const appendSpanToAllLink = d3 => {
  return d3.selectAll('a').append('span').classed('appended-to-link', true);
};

/**
 * Append a <p id="appended"/> to <div id="demo-selection-element-crud" /> without using .append
 * return selection
 */
export const addPToDivDemoSelectionElementCrudWithoutAppendMethod = d3 => {};

/**
 * Append a <h2/> to <div id="demo-selection-element-crud" /> in the first position
 * return selection
 */
export const appendInTheFirstPositionToDivDemoSelectionElementCrud = d3 => {};

/**
 * Remove <div id="demo-selection-element-crud" />
 * return selection
 */
export const removeDivDemoSelectionElementCrud = d3 => {};

/*
  Summary:
*/
