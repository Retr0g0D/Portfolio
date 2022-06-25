import { d, useId } from '../common/util';
import { setClasses } from '../module/setClasses';
import { inView } from '../module/inView';
export default function () {
  /** 
   * 
   * 
   * @param  {Object} observe 
   */
  const addClass = (observe) => {
    setClasses(observe, 'add');
  }
  const removeClass = (observe) => {
    setClasses(observe, 'remove');
  }
  
  // 可視範囲でクラス付け替え
  const hero = d.getElementById('js_hero');
  inView(hero, removeClass, addClass, useId.header);
  inView(hero, removeClass, addClass, d.getElementById('js_arrowIcon'));
  inView(hero, removeClass, addClass, d.getElementById('js_scrollDown'));
  inView(d.querySelectorAll('.js_progressBar'), addClass, null);
};