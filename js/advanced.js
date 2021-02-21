// add alt attributes to the images

var carded = 'carded';

(function () {
    var carded = 'ill';
    console.log(carded);
    console.log(window.carded);

    var mockDatabase = [
        {image:'../images/arrow_lamp.jpg', alt:'Lamp made of Arrows.', name:'Arrow Lamp', _price:'$17.95', _popularity:'005'},
        {image:'../images/balloon_lamp.jpg', alt:'Red Balloon Lamp.', name:'Balloon Lamp', _price:'$28.95', _popularity:'004'},
        {image:'../images/birds_lamp.jpg', alt:'Perched Birds Lamp.', name:'Bird Lamp', _price:'$65.95', _popularity:'002'},
        {image:'../images/deluxe_jellyfish_lamp.jpg', alt:'Deluxe Jellyfish Lamp.', name:'Jellyfish Lamp', _price:'$1,200.95', _popularity:'001'},
        {image:'../images/ducky_lamp.jpg', alt:'Cute Duck Lamp.', name:'Ducky Lamp', _price:'$456.95', _popularity:'003'},
        {image:'../images/horse_lamp.jpg', alt:'Black Horse Lamp.', name:'Horse Lamp', _price:'$2.95', _popularity:'006'}
    ];

    function renderList (results) {
        // Grab the div to place the cards, clear it out in case it was already populated
        var cardBody = document.querySelector('#container');
        cardBody.innerHTML = '';

        // Maps all attributes to a card
        var tableRows = results.map(function (result) {
            return '<div class="card"><a href="#"><div><img src="' + result.image + '" alt="' + result.alt + '"></div><div class="card-label"><div class="card-name">' + result.name + '</div><div class="card-price">' +
                result._price + '</div></div></a></div>';
        });

        // Set the contents of the table body to the new set of rendered HTML rows
        tableRows.forEach(function (card) {
            cardBody.innerHTML += card; // += adds to HTML instead of overwriting it entirely.
        });

        // Lower level scope once again overwrites what's above it.
        var carded = 'renderList';
        console.log(carded);
    }

    renderList(mockDatabase);
})();
