        // var audio_music=document.getElementById('audio_music'); 
        // var audio_record=document.getElementById('audio_record'); 
        
        // if(typeof(music_json['music_select'])!='undefined' && music_json['music_select']!='null' && music_json['music_select']!=''){
        //     if(music_json['music_select']=='m_online' && music_json['m_online_url']!='null' && music_json['m_online_url']!=''){ //选择在线列表
        //         $('#audio_music').attr('src',music_json['m_online_url']);
        //     }
        //     if(music_json['music_select']=='m_upload' && music_json['m_upload_url']!='null' && music_json['m_upload_url']!=''){ //选择在线列表并且上传了歌曲
        //         $('#audio_music').attr('src',music_json['m_upload_url']);
        //     }
        //     if(music_json['music_select']=='m_upload' && (music_json['m_upload_url']=='null' || music_json['m_upload_url']=='')){ //选择在线列表但是没有上传歌曲
        //         console.log('music_select m_upload but m_upload_url is null, set defaulted music');
        //         var random_music=random_music_as();
        //         $('#audio_music').attr('src',random_music);
        //     }
        //     if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
        //         audio_music.play(); 
        //     }else{
        //         audio_music.pause();
        //         console.log('audio_list && no start');
        //     }
        // }else{ 
        //     console.log('set random music');
        //     var random_music=random_music_as();
        //     $('#audio_music').attr('src',random_music);
        //     if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
        //         audio_music.play();
        //     }else{
        //         audio_music.pause();
        //         console.log('audio_list && no start');
        //     }
        // }

        // if(typeof(record_json['record_bool'])!='undefined' && record_json['record_bool']!='null' && record_json['record_bool']!=''){
        //     if(record_json['record_bool']=='r_true' && record_json['r_wechat_url']!='null' && record_json['r_wechat_url']!=''){ 
        //         $('#audio_record').attr('src',record_json['r_wechat_url']);
        //     }
        //     if(record_json['record_bool']=='r_true' && (record_json['r_wechat_url']=='null' || record_json['r_wechat_url']=='')){ 
        //         $('#div_record').hide(); 
        //         $('#div_record_tips').hide();
        //     }
        //     if(record_json['record_bool']=='r_false'){ 
        //         $('#div_record').hide();
        //         $('#div_record_tips').hide();
        //     }
        // }else{
        //     if(theme_content['bool_save']==false){ 
        //         console.log('set random record');
        //         $('#audio_record').attr('src','./music.mp3');
        //     }else{ 
        //         $('#div_record').hide();
        //         $('#div_record_tips').hide();
        //     }
        // }



        // function random_music_as(){ 
        //     // console.log('random_words_as'); 
        //     var random_num=Math.floor(Math.random()*(array_as_music.length)); 
        //     var random_music=array_as_music[random_num];
        //     return random_music;
        // }

       
        // var img_music=document.getElementById('img_music');
        // var timeout_music;
        // function music_switch(){ 
        //     clearTimeout(timeout_music);  
        //     if(audio_music.paused){
        //         console.log('switch music to play');
        //         audio_music.play();
        //         audio_record.pause();              
        //         img_music.style.webkitAnimation="music_play_rotate 1s linear infinite";
        //         $(".div_music_tips").html("Now Playing").show();                
        //         timeout_music=setTimeout(function(){$(".div_music_tips").hide()}, 2500);
        //     }else{
        //         console.log('switch music to paused'); 
        //         audio_music.pause();
        //         // audio_record.play(); //
        //         img_music.style.webkitAnimation="";
        //         $(".div_music_tips").html("Paused").show();  
        //         timeout_music=setTimeout(function(){$(".div_music_tips").hide()}, 2500); 
        //     } 
        }

        var timeout_record;
        var div_record=document.getElementById('div_record');
        function record_switch(){ 
            clearTimeout(timeout_record);
            if(audio_record.paused){
                console.log('switch record to play'); 
                audio_record.play();
                audio_music.pause(); //
                img_music.style.webkitAnimation="";
                div_record.style.webkitAnimation="btn_rotate 1s linear infinite";
                $(".div_record_tips").html("Now Playing").show(); 
                timeout_record=setTimeout(function(){$(".div_record_tips").hide()}, 2500);
            }else{
                console.log('switch record to pause');  
                audio_record.pause(); 
                audio_music.play();                
                img_music.style.webkitAnimation="music_play_rotate 1s linear infinite";
                div_record.style.webkitAnimation="";
                $(".div_record_tips").html("Paused").show();  
                timeout_record=setTimeout(function(){$(".div_record_tips").hide()}, 2500); 
            } 
        }



       

        // wx.ready(function(){
        //     console.log('wx.ready success to start');
        //     audio_music.play(); 
        //     wx.checkJsApi({
        //         jsApiList: ['updateAppMessageShareData','updateTimelineShareData'], 
        //         success: function(res) {
        //             console.log('wx.checkJsApi success');
        //             if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
        //                 audio_music.play(); 
        //             }else{
        //                 audio_music.pause();
        //                 console.log('audio_list && no start');
        //             }
        //         },
        //         complete: function(res) {
        //             console.log('wx.checkJsApi complete');
        //             if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
        //                 audio_music.play(); 
        //             }else{
        //                 audio_music.pause();
        //                 console.log('audio_list && no start');
        //             }
        //         }
        //     });
        // });

        // wx.error(function(res){
        //     console.log('wx.error -> '+res);
        //     audio_music.play();  
        //     wx.checkJsApi({
        //         jsApiList: ['updateAppMessageShareData','updateTimelineShareData'], 
        //         success: function(res) {
        //             console.log('wx.checkJsApi success');
        //             if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
        //                 audio_music.play(); 
        //             }else{
        //                 audio_music.pause();
        //                 console.log('audio_list && no start');
        //             }
        //         },
        //         complete: function(res) {
        //             console.log('wx.checkJsApi complete');
        //             if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
        //                 audio_music.play(); 
        //             }else{
        //                 audio_music.pause();
        //                 console.log('audio_list && no start');
        //             }
        //         }
        //     });                  
        // });

        

        


        