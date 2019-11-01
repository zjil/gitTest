class Cat {
    constructor(n,c){
        this.name = n;
        this.color = c;
    }
    skill(){
        alert('卖萌');
    }
}
let cat1 = new Cat('小白','white');
cat1.skill();