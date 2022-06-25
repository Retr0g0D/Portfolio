import { d } from '../common/util';
import anime from 'animejs';
export default function () {
  /** 
   * @param {Object} id 
   * @param {Number} movement 
  */
  const backgroundMouseMove = (id, movement = .01) => {
    d.body.addEventListener('mousemove', (event) => {
      const mouseX = event.pageX * movement;
      const mouseY = event.pageY * movement;
      if (d.getElementById(id)) {
        anime({
          targets: d.getElementById(id),
          translateX: '-' + mouseX,
          translateY: '-' + mouseY,
          translateZ: 0,
          easing: 'easeOutCirc'
        });
      }
    });
  }
  
  backgroundMouseMove('js_background', .03);
  backgroundMouseMove('js_background_star');
  backgroundMouseMove('js_background_text', .02);
  backgroundMouseMove('js_moon', .05);
  backgroundMouseMove('js_cloud_upperLeft', .04);
  backgroundMouseMove('js_cloud_upperRight', .03);
  backgroundMouseMove('js_cloud_lowerLeft', .07);
  backgroundMouseMove('js_cloud_lowerRight', .06);
  backgroundMouseMove('js_cloud_center', .08);
}