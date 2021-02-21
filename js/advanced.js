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

    // The renderer
    function renderList(results) {
        // Grab the div to place the cards, clear it out in case it was already populated
        var cardBody = document.querySelector('#container');
        cardBody.innerHTML = '';

        // Maps all attributes to a card
        var cardSet = results.map(function (result) {
            return '<div class="card"><a href="#"><div><img src="' + result.image + '" alt="' + result.alt + '"></div><div class="card-label"><div class="card-name">' + result.name + '</div><div class="card-price">$' +
                result.price + '</div></div></a></div>';
        });

        cardSet.forEach(function (card) {
            cardBody.innerHTML += card;
        });

        var carded = 'renderList';
        console.log(carded);
    }

    renderList(mockDatabase);


    // The sort function
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
            // Sort anything with numbers
            mockDatabase.sort(function (a, b) {
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }

    document.querySelector('#orderBy').addEventListener('change', function (event) {
        orderBy(event.target.value);
    });

    // Filters animal products from item products
    function toggleAnimals(showAnimals) {
        var filteredResults;
         if (showAnimals === true) {
             filteredResults = mockDatabase.filter(function (result) {
                 return result.animal;
             });
         }
         else {
             filteredResults = mockDatabase.filter(function (result) {
                 return result.item;
             });
         }

        renderList(filteredResults);
    }

    document.querySelector('#category').addEventListener('change', function(event){
        var value = event.target.value === 'isAnimal';
        toggleAnimals(value);
    });

})();
