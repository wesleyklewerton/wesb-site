$(function(){
    var $nav = $('#header');

    $nav.scrollspy({
        min: $nav.offset().top,
        onEnter: function(element, position) {
            window.console.log('Scrollspy: Entering the navigation menu');
            $("#logo-small").hide();
        },
        onLeave: function(element, position) {
            window.console.log('Scrollspy: Leaving the navigation menu');
            $("#logo-small").show();
        }
    });

    // for each element with the class 'color'
    $('article').each(function eachElement() {
        // cache the jQuery object
        var $this = $(this);
        var position = $this.position();

        $this.scrollspy({
            min: position.top,
            max: position.top + $this.height(),
            onEnter: function onEnter(element/*, position*/) {
                $(".current").removeClass("current");
                if(element.id == "about"){
                    $('a[href="#page-wrapper"]').parent().addClass("current");
                }else{
                    $('a[href="#'+element.id+'"]').parent().addClass("current");
                }

                window.console.log('Entering ' + element.id);
            },
            onLeave: function onLeave(element/*, position*/) {
                // Nao fazer nada
            }
        });
    });

    function resizeBanner(){
        $("#banner").height($( window ).height()-220);
    }

    resizeBanner();

    $( window ).resize(function() {
        resizeBanner();
    });

});
