
$(document).ready(function(){
	rowijanie_listy();
	rowijanie_listy_woj();
	zmiana_formularza();
	prawe_menu();

    zpp_module()
	
	$('.table-responsive table').each(function(){ 
       $(this).addClass('table'); 
    });
	//mobile menu
	menu_mobile()
	$('.menu-top-image img').click(function(){
        if($(".menu-top").hasClass('.open_top_menu'))
		{

			$(".menu-top").removeClass('.open_top_menu');
			$(".menu-top").slideUp();
		}
		else
		{

			$(".menu-top").addClass('.open_top_menu');
			$(".menu-top").slideDown();
		}
	})

	$("#go-top").click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: '0px'}, 1000, 'linear');
	});
	
	
});

function prawe_menu_2()
{	
	if($(window).width()<767)
	{
		$(".blok-ikon-single-first").click(function(){
			$(".prawe_menu_toggle").slideToggle();
			if($(this).hasClass("blok-ikon-single-first-c"))
			{
				$(this).removeClass("blok-ikon-single-first-c");
				$(this).addClass("blok-ikon-single-first-o");
			}
			else
			if($(this).hasClass("blok-ikon-single-first-o"))
			{
				$(this).removeClass("blok-ikon-single-first-o");
				$(this).addClass("blok-ikon-single-first-c");
			}
		
		})	
	}
}

function prawe_menu()
{
	if($(window).width()<767)
	{
		prawe_menu_2();
	}
	else
	if($(window).width()>=767)
	{

		if($(".blok-ikon-single-first").hasClass("blok-ikon-single-first-c"))
		{
			$(".blok-ikon-single-first").removeClass("blok-ikon-single-first-c");
		}
		if($(".blok-ikon-single-first").hasClass("blok-ikon-single-first-o"))
		{
			$(".blok-ikon-single-first").removeClass("blok-ikon-single-first-o");
		}
		$(".prawe_menu_toggle").slideDown();
	}
	
	
}

function tab_resp()
{
	$('.table-responsive .table tr').each(function(){   
        $(this).children('td').css('position', 'relative'); 
    });
};

function rowijanie_listy()
{
	$(".do-pobrania-zwijamy-more").click(function(){
		$(this).prev().stop().slideToggle();

	})
};

function zmiana_formularza()
{
	$(".select-div").click(function(){
		if($(this).hasClass("selected-div"))
		{

		}
		else
		{
			$(".select-div").each(function(){   
				$(this).removeClass("selected-div");
			});
			$(this).addClass("selected-div");
			
			console.log($(this).data("index"));
			
			$(".formularz_b_i").each(function(){   
				$(this).slideUp();
			});
			$(".formularz_b_i_"+$(this).data("index")).slideDown();

		}
	})
};

function rowijanie_listy_woj()
{
	$(".newsletter-input-1").click(function(){
		$(this).find(".woj").slideToggle();
	})
	$("li.woj-list").click(function(){
		$(".newsletter-input-1 .nazwa").html($(this).data("name")+'  <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>');
		console.log($(".input-hidden").val());
		$(".input-hidden").val($(this).data("name"));
		console.log($(".input-hidden").val());
	})
}

function menu_mobile()
{
	
	if($(window).width()>=992)
	{
		$(".menu-top").show();
		$(".menu-top-image").hide();
	}
	else
	{

		$("li.rozwijane").click(function() {
		  jQuery(this).children("ul").slideToggle()
		});
		$(".menu-top").hide();
		$(".menu-top-image").show();
	}	
	$(window).resize(function(){
		if($(window).width()>=992)
		{
			$(".menu-top").show();
			$(".menu-top-image").hide();			
		}
		else
		{
			if(!$(".menu-top").hasClass('.open_top_menu'))
			{
				$(".menu-top").hide();

			}
			$(".menu-top-image").show();
		}
	});	
	
}







function  zpp_module()
{
    if( $('.top-art-img').length>0)
    {
        $(".top-art-left-single").mouseover(function(){
            if(!$(this).hasClass("active")) 
            {
                    $('.top-art-left-single').each(function(){
						if($(this).hasClass("active"))
						{
							$(this).removeClass("active");
						}
					});
                var index = $(this).data("index");
                var image = $(this).data("image");
                $(".top-art-right").css("background-image", "url("+image+")");
                    $('.top-art-right-inner').each(function(){

					$(this).fadeOut('slow');
                    console.log("z");
						
					});
                    $('.top-art-right-inner').each(function(){
                        
						if( $(this).data("index") == index)
						{
							$(this).fadeIn('slow');
						}
					});
                $(this).addClass("active");
            }
		})
    }
}













