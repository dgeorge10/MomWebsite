$(document).ready(function() {

    //instagram.pixelunion.net
    var userFeed = new Instafeed({
        get: 'user',
        userId: '5728575989',
        limit: 42,
        resolution: 'standard_resolution',
        accessToken: '5728575989.1677ed0.932c985ab0bf4611ac2cae8683f2519d',
        sortBy: 'most-recent',
        template: '<div class="row gallery" align="center"><div class="col-xs-8"><img id="instaimg" src="{{image}}" alt ="{{caption}}"></img></div> <div class="col-xs-4" id="captions" align="center"> <h3>Listing</h3> <p>{{caption}}</p> <a class="btn btn-primary" href="#">Email about this hosue!</a></div> </div> <hr>'
     
    });

    userFeed.run();

     // This will create a single gallery from all elements that have class "gallery"
    // $('.gallery').magnificPopup({
    //     type: 'image',
    //     delegate: 'a',
    //     gallery: {
    //         enabled: true
    //     }
    // });

});

// '<div class="row"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid gallery"/> </a></div>'

// <div class="row">
//   <div class="col-md-7">
//     <a href="#">
//       <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="">
//     </a>
//   </div>
//   <div class="col-md-5">
//     <h3>Listing 1</h3>
//     <p>Here is a short description about this hosue</p>
//     <a class="btn btn-primary" href="#">Email about this hosue!</a>
//     </div>
// </div>
// <hr>