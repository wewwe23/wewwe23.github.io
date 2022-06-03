/*
 * @Author: wewwe23 2016925686@qq.com
 * @Date: 2022-06-03 22:38:15
 * @LastEditors: wewwe23 2016925686@qq.com
 * @LastEditTime: 2022-06-03 22:40:04
 * @FilePath: \undefinedd:\hexo\themes\next\source\js\text.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var a_idx = 0;
jQuery(document).ready(function ($) {
  $("body").click(function (e) {
    var a = new Array("樱花", "满地", "集于", "我心", "楪舞", "纷飞", "祈愿", "相随");
    var $i = $("<span/>").text(a[a_idx]);
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 99999,
      "top": y - 28,
      "left": x - a[a_idx].length * 8,
      "position": "absolute",
      "color": "#ff7a45"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    }, 1500, function () {
      $i.remove();
    });
    a_idx = (a_idx + 1) % a.length;
  });
});