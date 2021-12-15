var message = document.getElementById('showmsg');

setTimeout(()=>{
    message.innerHTML = 10;
    setTimeout(()=>{
        message.innerHTML = 9;
        setTimeout(()=>{
            message.innerHTML = 8;
            setTimeout(()=>{
                message.innerHTML = 7;
                setTimeout(()=>{
                    message.innerHTML = 6;
                    setTimeout(()=>{
                        message.innerHTML = 5;
                        setTimeout(()=>{
                            message.innerHTML = 4;
                            setTimeout(()=>{
                                message.innerHTML = 3;
                                setTimeout(()=>{
                                    message.innerHTML = 2;
                                    setTimeout(()=>{
                                        message.innerHTML = 1;
                                            setTimeout(()=>{
                                                message.innerHTML = 'Happy Independence Day';
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
},1000)

