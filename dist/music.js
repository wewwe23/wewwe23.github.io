const ap = new APlayer({
    container: document.getElementById('aplayer'),
	fixed: true,
	autoplay: false,
    audio: [
	{
        name: 'The Way I Still Love You',      //歌名
        artist: 'Reynard Silva',  //歌手
        url: 'http://music.163.com/song/media/outer/url?id=28718313.mp3',    //mp3的url地址
        cover: 'https://p2.music.126.net/JyPsd_g00M-4mqXLLtHncw==/5984641790343690.jpg?' //歌的封面
    }
	]
});