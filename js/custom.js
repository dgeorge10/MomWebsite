$(document).ready(function() {

    //instagram.pixelunion.net
    var userFeed = new Instafeed({
        get: 'user',
        userId: '5728575989',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '5728575989.1677ed0.932c985ab0bf4611ac2cae8683f2519d',
        sortBy: 'most-recent',
        template: '<div class="img-thumbnail instaimg"> <a href="{{image}}" title="{{caption}}" target="_blank"> <img alt="{{caption}}" src="{{image}}"> </img> </a> <div class="caption"><h3>{{caption}}</h3><p><button class="btn-primary">Email About This House!</button></p></div> </div>'
     
    });

    userFeed.run();

     //This will create a single gallery from all elements that have class "gallery"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });

});

// '<div class="row"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid gallery"/> </a></div>'

// <div class="img-thumbnail">
//   <img style="width: 100%" src="http://placehold.it/700x300">
//   <div class="caption">
//     <h3>.caption h3</h3>
//     <p><a class="btn btn-primary" href="#">Email about this hosue!</a></p>
//   </div>
// </div>