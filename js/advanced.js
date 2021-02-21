// add alt attributes to the images

var carded = 'carded';

(function () {
    var carded = 'ill';
    console.log(carded);
    console.log(window.carded);

    var mockDatabase = [
        {image:'../images/arrow_lamp.jpg', alt:'Lamp made of Arrows.', name:'Arrow Lamp', _price:'$17.95', _popularity:'005', animal: false, item: true},
        {image:'../images/balloon_lamp.jpg', alt:'Red Balloon Lamp.', name:'Balloon Lamp', _price:'$28.95', _popularity:'004', animal: false, item: true},
        {image:'../images/birds_lamp.jpg', alt:'Perched Birds Lamp.', name:'Bird Lamp', _price:'$65.95', _popularity:'002', animal: true, item: false},
        {image:'../images/deluxe_jellyfish_lamp.jpg', alt:'Deluxe Jellyfish Lamp.', name:'Jellyfish Lamp', _price:'$1,200.95', _popularity:'001', animal: true, item: false},
        {image:'../images/ducky_lamp.jpg', alt:'Cute Duck Lamp.', name:'Ducky Lamp', _price:'$456.95', _popularity:'003', animal: true, item: false},
        {image:'../images/horse_lamp.jpg', alt:'Black Horse Lamp.', name:'Horse Lamp', _price:'$2.95', _popularity:'006', animal: true, item: false}
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

    function orderBy(sortValue) {
        var sortedResults = (sortValue === 'name') ?
            mockDatabase.sort(function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                // Sort alphabetically
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }) :
            mockDatabase.sort(function (a, b) {
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }
    document.querySelector('#orderBy').addEventListener('change', function (event){
        orderBy(event.target.value);
    });

    // i couldn't get this to work. i don't think the code is wrong, it may be because we have these values as strings
    // (not done after i tried to treat these as strings) this also didn't work but i don't think this is the solution. it might just need to not be strings
    function orderPrice(sortValue) {
        var sortedResults = (sortValue === '_price')
            mockDatabase.sort(function (a, b) {
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }
    document.querySelector('#orderPrice').addEventListener('change', function (event){
        orderPrice(event.target.value);
    });

    function orderPop(sortValue) {
        var sortedResults = (sortValue === '_popularity')
        mockDatabase.sort(function (a, b) {
            return a[sortValue] - b[sortValue];
        });
        renderList(sortedResults);
    }
    document.querySelector('#orderPop').addEventListener('change', function (event){
        orderPop(event.target.value);
    });

    // can we make animals and items different drop downs like in the published example
    function toggleAnimals(showAnimals) {
        var filteredResults = mockDatabase.filter(function (result) {
            return showAnimals || result.animal;
        });
        renderList(filteredResults);
    }
    document.querySelector('#animal').addEventListener('change', function (event){
        var value = event.target.value === 'true';
        toggleAnimals(value);
    });

    function toggleItems(showItems) {
        var filteredResults = mockDatabase.filter(function (result) {
            return showItems || result.item;
        });
        renderList(filteredResults);
    }
    document.querySelector('#item').addEventListener('change', function (event){
        var value = event.target.value === 'true';
        toggleItems(value);
    });

})();
