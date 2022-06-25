/**
 * 
 * @param {Object} observeTarget 
 * @param {Object} isIntersectingFunc 
 * @param {Object} unIntersectingFunc 
 * @param {Object} fixedTarget 
 * @param {Object} root 
 * @param {String} rootMargin 
*/
export const inView = (observeTarget, isIntersectingFunc = null, unIntersectingFunc = null, fixedTarget = null, root = null, rootMargin = '0px') => {
 
  const callback = (entries) => {
    [].slice.call(entries).forEach((entry) => {
      if (entry.isIntersecting) {
        if (isIntersectingFunc === null) return;
        fixedTarget !== null ? isIntersectingFunc(fixedTarget) : isIntersectingFunc(entry.target);
      } else {
        if (unIntersectingFunc === null) return;
        fixedTarget !== null ? unIntersectingFunc(fixedTarget) : unIntersectingFunc(entry.target);
      }
    })
  };

  const init = new IntersectionObserver(callback, {
    root: root,
    rootMargin: rootMargin
  });

  if ({}.toString.call(observeTarget) === '[object NodeList]' || {}.toString.call(observeTarget) === '[object Array]') {
    [].slice.call(observeTarget).forEach((observeTarget) => {
      init.observe(observeTarget);
    })
  } else {
    init.observe(observeTarget);
  }
}