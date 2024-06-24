function orders(product, quantity) {

    function defineProductPrice(someProduct) {
        
        let thePrice = 0;
        
        switch (someProduct) {
            case  'coffee':
                return 1.5;
            case  'water':
                return 1;
            case  'coke':
                return 1.4;
            case  'snacks':
                return 2;
        }
        return thePrice;
    }

    
    let singlePrice = defineProductPrice;
    let result = singlePrice(product) * quantity;

    console.log(result.toFixed(2))
}
