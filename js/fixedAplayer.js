/*
 * @Author: your name
 * @Date: 2022-04-23 00:41:23
 * @LastEditTime: 2022-06-03 23:51:31
 * @LastEditors: wewwe23 2016925686@qq.com
 * @Description: ¨¦????????koroFileHeader¨¦????¡ì???¨¦?¡ã?????? ??????????????¡ì???: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \undefinedd:\hexo\themes\next\source\js\fixedAplayer.js
 */
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    volume: 0.6,
    mutex: true,
    loop: "all",
    order: "list",
    listFolded: false,
    theme: "#ad7a86",
    audio: [
        {
            name: 'Release My Soul',
            artist: 'Aimee Blackschleger',
            url: 'https://dlink.host/sharepoint/aHR0cHM6Ly9zbWFpbHh0dWVkdWNuLW15LnNoYXJlcG9pbnQuY29tLzp1Oi9nL3BlcnNvbmFsLzIwMTkwNTE5MDQxOF9zbWFpbF94dHVfZWR1X2NuL0VXWUhoZ1FXdHRSRnMyMGtjS3BqQ1N3QmtNXzF1cGt5Y1F1WTRXUDhRcEduQnc_ZT10OHJGRUo.mp3',
            cover: 'https://p2.music.126.net/JbyZBW6Th0hbW8RsRXWVdA==/109951166197895701.jpg?',
        },
        {
            name: 'βios',
            artist: '小林未郁',
            url: 'https://music.163.com/song/media/outer/url?id=498096.mp3',
            cover: 'https://p1.music.126.net/JbyZBW6Th0hbW8RsRXWVdA==/109951166197895701.jpg?',
        },
        {
            name: 'The Way I Still Love You',
            artist: 'Reynard Silva',
            url: 'https://music.163.com/song/media/outer/url?id=28718313.mp3',
            cover: 'https://p2.music.126.net/JyPsd_g00M-4mqXLLtHncw==/5984641790343690.jpg?',
        },
        {
            name: 'My Heart Will Go On',
            artist: 'Céline Dion',
            url: 'https://music.163.com/song/media/outer/url?id=2308499.mp3',
            cover: 'https://p2.music.126.net/mO1OUNjZtCEIvAGdr7YXaA==/813638604607979.jpg?',
        },
        {
            name: 'My Dearest',
            artist: 'supercell',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly9zbWFpbHh0dWVkdWNuLW15LnNoYXJlcG9pbnQuY29tLzp1Oi9nL3BlcnNvbmFsLzIwMTkwNTE5MDQxOF9zbWFpbF94dHVfZWR1X2NuL0VadkRkeWFGUE5CRnVZTmI1NGM0YVVZQl9MZTJDcjRKOFhkUVhSMGFVeGhvUUE_ZT1qdzB4azQ.mp3',
            cover: 'https://p2.music.126.net/u78AmmcaZCO3sKbafA_Gpw==/109951166200230737.jpg?',
        },
        {
            name: 'Departures ~あなたにおくるアイの歌~',
            artist: 'EGOIST',
            url: 'https://music.163.com/song/media/outer/url?id=31649312.mp3',
            cover: 'https://p1.music.126.net/6_U3BqyOyORzgT-Pk8EaJA==/7823025232375393.jpg?',
        },
        {
            name: 'That Girl',
            artist: 'Olly Murs',
            url: 'https://music.163.com/song/media/outer/url?id=440208476.mp3',
            cover: 'https://p2.music.126.net/20i3iOypDSK_4hEKmYj2mg==/109951165975751486.jpg??',
        },
        {
            name: 'You Are Not Alone',
            artist: 'Michael Jackson',
            url: 'https://music.163.com/song/media/outer/url?id=1697653.mp3',
            cover: 'https://p2.music.126.net/4fK_UU_c6IHbq7wrAW4Qow==/18715886929967779.jpg?',
        },
        {
            name: 'Bird',
            artist: '松下优也',
            url: 'https://music.163.com/song/media/outer/url?id=471048.mp3',
            cover: 'https://p2.music.126.net/5zUWgVhy2JOCVhG-7tdfnw==/826832744130708.jpg?',
        },
        {
            name: 'Long Long ago, 20th Century',
            artist: '坂井紀雄',
            url: 'https://music.163.com/song/media/outer/url?id=26137030.mp3',
            cover: 'https://p2.music.126.net/owiCkbm4sr7qoZLmvDlcjw==/2368348046254622.jpg?',
        },
        {
            name: '誰かが君を愛して你',
            artist: '宮内タカユキ',
            url: 'https://music.163.com/song/media/outer/url?id=444058093.mp3',
            cover: 'https://p2.music.126.net/Fh4zOJzFuWX-5D8MSewLsw==/18649916232054767.jpg?',
        },
        {
            name: 'Brave Shine',
            artist: 'Aimer',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly9zbWFpbHh0dWVkdWNuLW15LnNoYXJlcG9pbnQuY29tLzp1Oi9nL3BlcnNvbmFsLzIwMTkwNTE5MDQxOF9zbWFpbF94dHVfZWR1X2NuL0VaNzdJdG1RcmJWTnJpOWxWTnlnRW1BQlN1ajZQeDM5R2pXT2l4NW83czJJb0E_ZT1iSXJvYmI.mp3',
            cover: 'https://p2.music.126.net/2p5umLN0LK5rE2-6gye1Kw==/109951166863906891.jpg?',
        },
        {
            name: 'LAST STARDUST',
            artist: 'Aimer',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly9zbWFpbHh0dWVkdWNuLW15LnNoYXJlcG9pbnQuY29tLzp1Oi9nL3BlcnNvbmFsLzIwMTkwNTE5MDQxOF9zbWFpbF94dHVfZWR1X2NuL0VaUENqYUFrR0xkSmpSZ0c2UWJmQS04QnNhNlJwclJIWTV5anRsWi1kMFNoSVE_ZT1DUFZYQlU.mp3',
            cover: 'https://p1.music.126.net/-NpYyW2ejTr7kcb-BxwsSg==/109951166919049170.jpg?',
        },
        {
            name: '春はゆく',
            artist: 'Aimer',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly9zbWFpbHh0dWVkdWNuLW15LnNoYXJlcG9pbnQuY29tLzp1Oi9nL3BlcnNvbmFsLzIwMTkwNTE5MDQxOF9zbWFpbF94dHVfZWR1X2NuL0VmRHAzRDBiWF9kSmlfajVjNGRrVGEwQnBYcS1RYVZQQlNwb2tvN3htVGJESmc_ZT1Kc2FGMjM.mp3',
            cover: 'https://p2.music.126.net/vlJf7FKeMb5xGOHbqG043A==/109951166202230986.jpg?',
        },
        {
            name: "IT'S THE RIGHT TIME",
            artist: '三浦大知',
            url: 'https://music.163.com/song/media/outer/url?id=29771724.mp3',
            cover: 'https://p1.music.126.net/02yNM7DjINUIaOLT6v8AoA==/18499283139143651.jpg?',
        },
        {
            name: 'unravel',
            artist: 'TK from 凛として時雨',
            url: 'https://music.163.com/song/media/outer/url?id=29017078.mp3',
            cover: 'https://p2.music.126.net/9dRhDO4gjN0_KgTjPafIrw==/109951163316078250.jpg?',
        },
        {
            name: 'CHANGE THE WORLD',
            artist: 'V6',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly9zbWFpbHh0dWVkdWNuLW15LnNoYXJlcG9pbnQuY29tLzp1Oi9nL3BlcnNvbmFsLzIwMTkwNTE5MDQxOF9zbWFpbF94dHVfZWR1X2NuL0VVQ0s0NnNmN29sQ25ZZzAyVlRfUmcwQlFucnBlTHU5bEJPcExBNWJsMkpoUWc_ZT1XQUJMaXg.mp3',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000zNvQU1Ju73A_1.jpg?',
        },
        {
            name: '花海',
            artist: '周杰伦',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly9zbWFpbHh0dWVkdWNuLW15LnNoYXJlcG9pbnQuY29tLzp1Oi9nL3BlcnNvbmFsLzIwMTkwNTE5MDQxOF9zbWFpbF94dHVfZWR1X2NuL0VTTmFWLTFzTFRSQWh1WnhQcmJFVlU4QjMzdXF3NHBvLXJPUWp2X3VfTXlsVGc_ZT04amd4b20.mp3',
        },
        {
            name: '指纹',
            artist: '杜宣达',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly9zbWFpbHh0dWVkdWNuLW15LnNoYXJlcG9pbnQuY29tLzp1Oi9nL3BlcnNvbmFsLzIwMTkwNTE5MDQxOF9zbWFpbF94dHVfZWR1X2NuL0VjLUJKOWRkUHpCSWlKQVQ0TlNPMFFRQlBjb1FjSWV2ZG5TOWNiLWJIb0Eyd0E_ZT0zd0cxUDA.mp3',
        },
        {
            name: '给我一首歌的时间',
            artist: '周杰伦',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly9zbWFpbHh0dWVkdWNuLW15LnNoYXJlcG9pbnQuY29tLzp1Oi9nL3BlcnNvbmFsLzIwMTkwNTE5MDQxOF9zbWFpbF94dHVfZWR1X2NuL0VUb09xeDB5bHlkSmtfb01VN2lEaXZ3QnhVNThpdENRbng2bWFadGNPTHhNRGc_ZT0wZ0h3eWo.mp3',
        }

    ]
});
