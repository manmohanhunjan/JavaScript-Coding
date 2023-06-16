class ProductItems{
    title;
    description;
    price;
    qty;

    setter(title, description, price, qty){
        this.title = title;
        this.description = description;
        this.price = price;
        this.qty = qty;
    }

    getter(){
        console.log(this.title, this.description, this.price, this.qty);
    }
};

class App{
    static init(){
    const Pi1 = new ProductItems();
    Pi1.setter("iphone", "mobile", 1000, 1)
    Pi1.getter();
    // console.log(Pi1);
    const Pi2 = new ProductItems();
    Pi2.setter("ipad", "tablet", 2000, 2)
    Pi2.getter();
    // console.log(Pi2);
    }
}
App.init();