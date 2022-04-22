/*
 * @Author: your name
 * @Date: 2022-04-23 00:41:23
 * @LastEditTime: 2022-04-23 00:58:18
 * @LastEditors: Please set LastEditors
 * @Description: ��koroFileHeader�鿴���� ��������: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \undefinedd:\hexo\themes\next\source\js\fixedAplayer.js
 */
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
        {
            name: 'The Way I Still Love You',
            artist: 'Reynard Silva',
            url: 'https://music.163.com/song/media/outer/url?id=28718313.mp3',
            cover: 'https://p2.music.126.net/JyPsd_g00M-4mqXLLtHncw==/5984641790343690.jpg?',
        }
    ]
});
