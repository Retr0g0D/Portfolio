import { d, w, userAgentType, sliceCall } from '../common/util';
import { setClasses } from '../module/setClasses';
export default function () {
  /** 
   * slideFade
   * 
   * @param {Object} element 
   * @param {String} classList 
   * @param {String} target 
   */
  const slideFade = (element, classList, target = '.js_slideIn') => {
    sliceCall(d.querySelectorAll('#' + element.id + ' ' + target), (fadeElement) => {
      fadeElement.classList[classList]('is_active');
    });
  };

  /** 
   * currentNav
   * 
   * @param {Object} element 
   */
  const currentNav = (element) => {
    const currentActive = d.querySelector(".js_dot.is_active");
    if (currentActive !== null) currentActive.classList.remove("is_active");
    d.querySelector(`span[data-href='#${element.id}']`).parentNode.classList.add("is_active");
  }

  const aboutButton = d.querySelector('#about .js_btn');
  const slideInEvent = (entries) => {
    sliceCall(entries, (entries) => {
      if (entries.isIntersecting) {
        currentNav(entries.target);
        slideFade(entries.target, 'add');
      } else {
        slideFade(entries.target, 'remove');
        if (aboutButton && aboutButton.classList.contains('is_position')) setClasses(aboutButton, 'remove', 'is_position');
      }
    });
  };
  const slideInOptions = {
    root: null,
    rootMargin: "-50% 0px"
  };
  const slideInObserver = new IntersectionObserver(slideInEvent, slideInOptions);
  sliceCall(document.querySelectorAll('.js_slide'), (slideElement) => {
    slideInObserver.observe(slideElement);
  });


  const moonFadeEvent = (entries) => {
    sliceCall(entries, (entries) => {
      entries.isIntersecting ? slideFade(entries.target, 'add', '.js_moonItem') : slideFade(entries.target, 'remove', '.js_moonItem');
    });
  };
  
  const moonInOptionsSP = {
    root: null,
    rootMargin: '0px 0px -55% 0px'
  };
  const moonOutOptionsPC = {
    root: null,
    rootMargin: '-80% 0px 0px 0px'
  };
  const moonOutOptionsSP = {
    root: null,
    rootMargin: '-45% 0px 0px 0px'
  };
  const moonInObserver = new IntersectionObserver(moonFadeEvent, userAgentType.isMobile ? moonInOptionsSP : slideInOptions);
  moonInObserver.observe(d.querySelector('#js_slideMoon'));
  const moonOutObserver = new IntersectionObserver(moonFadeEvent, userAgentType.isMobile ? moonOutOptionsSP : moonOutOptionsPC);
  moonOutObserver.observe(d.querySelector('#js_slideMoon'));

  w.addEventListener('resize', () => {
    sliceCall(d.querySelectorAll('#js_slideMoon .js_moonItem'), (moon) => {
      moon.classList.add('is_active');
    });
  });
}