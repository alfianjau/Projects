$(function () {

    //Set up instafeed
    var feed = new Instafeed({
        clientId: 'e3ad0187712f4b9382ceef840f0e2d51',
        target: 'instafeed',
        get: 'tagged',
        tagName: 'pinksugargallery',
        links: true,
        limit: 32,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" id="blow"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();

});


//animate
$(document).ready(function () {
//start hover h1
    $("h1 span").click(
        function () {
            $(this).addClass("animated tada");
        },
        function () {
            $(this).removeClass("animated tada");
        });
//end hover h1

    
});




