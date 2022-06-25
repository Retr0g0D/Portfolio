/** 
 * @param {Object} element 
 * @param {String} classList 
 * @param {String} className 
 */
export const setClasses = (element, classList = 'add', className = 'is_intersection') => {
  if (classList == null) return;
  if ({}.toString.call(element) === '[object NodeList]' || {}.toString.call(element) === '[object Array]') {
    [].slice.call(element).forEach((element) => {
      element.classList[classList](className);
    });
  } else {
    element.classList[classList](className);
  }
}