


$(function(){

    
	
	const $body = $(document.body),
      	$html = $(document.documentElement);

	function formPopup($btn,$wrap){

		let closeForm = $('.formExtraWrapper .close-form'),
		    formWrap = $($wrap),
		    formBtn = $($btn),
		    formOpened = 'opened',
		    overflowHidden = 'oveflowHidden';

		closeForm.on('click', function() {
		    formWrap.removeClass(formOpened);
		    $html.removeClass(overflowHidden);
		});
		formBtn.on('click', function(event) {
		    formWrap.addClass(formOpened);
		    $html.toggleClass(overflowHidden);
		    event.preventDefault();
		});

		$html.on('keyup', function(event) {
		    if (formWrap.hasClass(formOpened) && event.keyCode == 27) {
		        formWrap.removeClass(formOpened);
		        $html.removeClass(overflowHidden);
		    }
		});
		$body.on('click touchstart', function(a) {
		    if ($(a.target).closest('.formExtraWrapper').length || $(a.target).closest(formBtn).length) return;
		    if (formWrap.hasClass(formOpened)) {
		        formWrap.removeClass(formOpened);
		        $html.removeClass(overflowHidden);
		    }
		});
	}

	formPopup('.link_partner','.partners_popup');
})

$(function(){
    var $html = $(document.documentElement),
        menuBtn = $('.burger'),
        menuWrapper = $('.menu_burger'),
        menuClose = $('.menuClose'),        
        openedMenu = 'opened',
        overflowHidden = 'oveflowHidden';

    menuBtn.on("click", function(event) {
        menuWrapper.toggleClass(openedMenu);
        menuBtn.toggleClass(openedMenu);
        $html.toggleClass(overflowHidden);
        $html.toggleClass('open_menu');
    });
    menuClose.on("click", function(event) {
        menuWrapper.removeClass(openedMenu);
        menuBtn.removeClass(openedMenu);
        $html.removeClass(overflowHidden);
        $html.removeClass('open_menu');
    });

    $(document).on('click touchstart', function(e){
        if( $(e.target).closest(menuBtn).length || $(e.target).closest(menuWrapper).length) 
          return;
        if (menuBtn.hasClass(openedMenu)){
            menuWrapper.removeClass(openedMenu);
            menuBtn.removeClass(openedMenu);
            $html.removeClass(overflowHidden);
            $html.removeClass('open_menu');
        }
    });
});


