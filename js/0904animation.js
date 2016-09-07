/*
@by niaogege
github niaogege
time:0904
*/
$(document).ready(function(){
	 //显示作者和浏览评论信息以及边框效果
  $(".post-img").bind('mouseenter',function(event){ 
    $(this).children('.post-info-front').stop(true,false).animate({'top':'170px'},200);
    $(this).children('.border-top').stop(true,false).animate({'left':0},300);
    $(this).children('.border-right').stop(true,false).animate({'top':0},300);
    $(this).children('.border-bottom').stop(true,false).animate({'left':0},300);
    $(this).children('.border-left').stop(true,false).animate({'top':0},500);
    $(this).css({'border':'1px solid #ddd'});
  });
  $(".post-img").bind('mouseleave',function(){
    $(".post-info-front").animate({'top':'200px'},200);
    $(this).children('.border-top').stop(true,false).animate({'left':'-100%'},300);
    $(this).children('.border-right').stop(true,false).animate({'top':'100%'},300);
    $(this).children('.border-bottom').stop(true,false).animate({'left':'298.4px'},300);
    $(this).children('.border-left').stop(true,false).animate({'top':'-100%'},500);
    $(this).css({'border':'1px solid #ddd'});
  });
	  //标签云hover效果
    var color;
    $('.st-tags').bind('mouseenter',function(){
      color = $(this).css('color');
      $(this).css({'color':'#ff2a33'});
    });
    $('.st-tags').bind('mouseleave',function(){
      $(this).css({'color':color});
    });
    //banner滑动效果
                       var x = 0;
						var timer;
						var width = Number($(".hotnew-posts ul li").css('width').split('px')[0]);
					    var speed = 1000;
					    function moveleft(){
					      if(x == 2){
					      	 x = 0;
					      	 $(".hotnew-posts ul").stop(true,true).animate({'left':0},speed);
					      }else{
					      	 $(".hotnew-posts ul").stop(true,true).animate({'left':-(++x)*width+'px'},speed);
					      }
					    }
					    function moveright(){
					    	if(x == 0){
					    		x=2;
					    		$(".hotnew-posts ul").stop(true,true).animate({'left':-x*width+'px'},speed);
					    	}else{
					    		$(".hotnew-posts ul").stop(true,true).animate({'left':-(--x)*width+'px'},speed);
					    	}
					    }
					    timer = setInterval(moveleft,5000);
					    $('.hotnew-posts').bind('mouseenter',function(){
					    	clearInterval(timer);
					    });
					    $('.hotnew-posts').bind('mouseleave',function(){
					    	timer = setInterval(moveleft,5000);
					    });
					    $(".img-right").bind('click',function(){
					    	moveleft();
					    });
					    $(".img-left").bind('click',function(){
					    	moveright();
					    });	
	
})