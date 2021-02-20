var foo = 'foo';

(function () {
    var foo = 'bar';
    console.log(foo);
    console.log(window.foo);

    var mockDatabase = [
        {name:'Arrow Lamp', _price:'17', _popularity:'005'},
        {name:'Balloon Lamp', _price:'28', _popularity:'004'},
        {name:'Bird Lamp', _price:'65', _popularity:'002'},
        {name:'Jellyfish Lamp', _price:'1200', _popularity:'001'},
        {name:'Ducky Lamp', _price:'456', _popularity:'003'},
        {name:'Horse Lamp', _price:'2', _popularity:'006'}
    ];

    function renderList (results) {
        var cardBody = document.querySelector('#container tbody');

        cardBody.innerHTML = '';
    }
})();
