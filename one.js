function play() {
    const audio = document.createElement("audio");
    audio.src = "./music/BGM.mp3";
    audio.play().then(function(){
        var my_name = prompt("你好！你叫甚麼名字")
        var yes = confirm('白白是你老婆嗎？');

        if (!yes) {
            window.close()
        } else{
            if (my_name === '史萊姆') {
                document.write('沒錯！')
            } else { 
                alert('該醒了')
            }
            audio.pause()
        }

        
    });
    
}
