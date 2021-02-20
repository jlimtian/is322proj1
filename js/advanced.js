// add alt attributes to the images

var carded = 'carded';

(function () {
    var carded = 'ill';
    console.log(carded);
    console.log(window.carded);

    var mockDatabase = [
        {image:'../images/arrow_lamp.jpg', name:'Arrow Lamp', _price:'$17.95', _popularity:'005'},
        {image:'../images/balloon_lamp.jpg', name:'Balloon Lamp', _price:'$28.95', _popularity:'004'},
        {image:'../images/birds_lamp.jpg', name:'Bird Lamp', _price:'$65.95', _popularity:'002'},
        {image:'../images/deluxe_jellyfish_lamp.jpg', name:'Jellyfish Lamp', _price:'$1200.95', _popularity:'001'},
        {image:'../images/ducky_lamp.jpg', name:'Ducky Lamp', _price:'$456.95', _popularity:'003'},
        {image:'../images/horse_lamp.jpg', name:'Horse Lamp', _price:'$2.95', _popularity:'006'}
    ];

    function renderList (results) {
        // Grab the div to place the cards, clear it out in case it was already populated
        var cardBody = document.querySelector('#container');
        cardBody.innerHTML = '';

        // Maps all attributes to a card
        var tableRows = results.map(function (result, index) {
            return '<div class="card"><div><img src="' + result.image + '"></div><div>' + result.name + '</div><div>' +
                result._price + '</div><div>' + result._popularity + '</div></div>';
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
