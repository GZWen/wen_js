// GZWen 开发的工具类
class Tool{
    constructor(name){
        this.name = name;
	// by GZJack add
	this.price = 0;
    }
    //  by GZJack add method
    setPrice(price){
	this.price = price;
    }
    // by GZJack add method
    getPrice(){
      return this.price;
    }
}
