var carded = 'carded';

(function () {
    var carded = 'ill';
    console.log(carded);
    console.log(window.carded);

    var mockDatabase = [
        {
            image: '../images/ducky_lamp.jpg',
            alt: 'Cute Duck Lamp.',
            name: 'Ducky Lamp',
            price: '456.95',
            popularity: '002',
            animal: true,
            item: false
        },
        {
            image: '../images/balloon_lamp.jpg',
            alt: 'Red Balloon Lamp.',
            name: 'Balloon Lamp',
            price: '28.95',
            popularity: '003',
            animal: false,
            item: true
        },
        {
            image: '../images/deluxe_jellyfish_lamp.jpg',
            alt: 'Deluxe Jellyfish Lamp.',
            name: 'Deluxe Jellyfish Lamp',
            price: '795.95',
            popularity: '001',
            animal: true,
            item: false
        },
        {
            image: '../images/pencil_lamp.jpg',
            alt: 'Large Pencil with Squiggle Lamp.',
            name: 'Pencil Lamp',
            price: '52.95',
            popularity: '003',
            animal: false,
            item: true
        },
        {
            image: '../images/arrow_lamp.jpg',
            alt: 'Lamp made of Arrows.',
            name: 'Arrow Lamp',
            price: '16.95',
            popularity: '005',
            animal: false,
            item: true
        },
        {
            image: '../images/birds_lamp.jpg',
            alt: 'Perched Birds Lamp.',
            name: 'Bird Lamp',
            price: '65.95',
            popularity: '002',
            animal: true,
            item: false
        }
    ];

    function renderList(results) {
        // Grab the div to place the cards, clear it out in case it was already populated
        var cardBody = document.querySelector('#container');
        cardBody.innerHTML = '';

        // Maps all attributes to a card
        var tableRows = results.map(function (result) {
            return '<div class="card"><a href="#"><div><img src="' + result.image + '" alt="' + result.alt + '"></div><div class="card-label"><div class="card-name">' + result.name + '</div><div class="card-price">$' +
                result.price + '</div></div></a></div>';
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

    document.querySelector('#orderBy').addEventListener('change', function (event) {
        orderBy(event.target.value);
    });

    function priceRange(showItems) {
        var filterResults = mockDatabase.filter(function (result) {
            if (showItems < 100) {
                return showItems;
            }
            if (showItems >= 100 && showItems <= 500) {
                return showItems;
            }
            if (showItems >= 500) {
                return showItems;
            }
        });
        renderList(filterResults);
    }

    document.querySelector('#pRange').addEventListener('change', function (event) {
        var value = event.target.value === 'price';

        priceRange(value);
    });

    // can we make animals and items different drop downs like in the published example
    function toggleAnimals(showAnimals) {
        var filteredResults = mockDatabase.filter(function (result) {
            return showAnimals || result.animal;
        });
        renderList(filteredResults);
    }

    document.querySelector('#category').addEventListener('change', function (event) {
        var value = event.target.value === 'item';

    toggleAnimals(value);
    });

    /*function toggleItems(showItems) {
        var filteredResults = mockDatabase.filter(function (result) {
            return showItems || result.item;
        });
        renderList(filteredResults);
    }
    document.querySelector('#category').addEventListener('change', function (event){
        var value = event.target.value === 'animal';
        toggleItems(value);
    }); */

})();
