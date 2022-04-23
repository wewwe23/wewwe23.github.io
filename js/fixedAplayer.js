/*
 * @Author: your name
 * @Date: 2022-04-23 00:41:23
 * @LastEditTime: 2022-04-23 11:07:48
 * @LastEditors: Please set LastEditors
 * @Description: ��koroFileHeader�鿴���� ��������: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \undefinedd:\hexo\themes\next\source\js\fixedAplayer.js
 */
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    loop: "all",
    order: "list",
    audio: [
        {
            name: 'The Way I Still Love You',
            artist: 'Reynard Silva',
            url: 'https://music.163.com/song/media/outer/url?id=28718313.mp3',
            cover: 'https://p2.music.126.net/JyPsd_g00M-4mqXLLtHncw==/5984641790343690.jpg?',
        },
        {
            name: 'Release My Soul',
            artist: 'Aimee Blackschleger',
            url: 'https://music.163.com/song/media/outer/url?id=498134.mp3',
            cover: 'https://p2.music.126.net/JbyZBW6Th0hbW8RsRXWVdA==/109951166197895701.jpg?',
        },
        {
            name: 'See You Again',
            artist: 'Wiz Khalifa / Charlie Puth',
            url: 'https://music.163.com/song/media/outer/url?id=30953009.mp3',
            cover: 'https://p2.music.126.net/AuE9HT1fBoRvT23II8Brzw==/109951166715465943.jpg?',
        }
    ]
});
