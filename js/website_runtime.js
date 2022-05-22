/*
 * @Author: your name
 * @Date: 2022-04-23 11:48:43
 * @LastEditTime: 2022-04-23 11:54:04
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \undefinedd:\hexo\themes\next\source\js\website_runtime.js
 */
function show_date_time() {
    window.setTimeout("show_date_time()", 1000);
    BirthDay = new Date("03/26/2022 00:00:00");
    today = new Date();
    timeold = (today.getTime() - BirthDay.getTime());
    sectimeold = timeold / 1000
    secondsold = Math.floor(sectimeold);
    msPerDay = 24 * 60 * 60 * 1000
    e_daysold = timeold / msPerDay
    daysold = Math.floor(e_daysold);
    e_hrsold = (e_daysold - daysold) * 24;
    hrsold = setzero(Math.floor(e_hrsold));
    e_minsold = (e_hrsold - hrsold) * 60;
    minsold = setzero(Math.floor((e_hrsold - hrsold) * 60));
    seconds = setzero(Math.floor((e_minsold - minsold) * 60));
    document
        .getElementById('days')
        .innerHTML = "已运行 " + daysold + " 天 " + hrsold + " 小时 " + minsold + " 分 " + seconds + " 秒";
}
function setzero(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}
show_date_time();