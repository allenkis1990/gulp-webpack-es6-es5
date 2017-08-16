class Lwh{
    val(){
        return this.a+this.b;
    }

    constructor(a,b){
        this.a=a;
        this.b=b;
        this.fuck={name:'fuck'};
        this.shit={name:'shit'};
    }

    //原型的私有方法只能通过原型来调用 实例不能调用
    static selfFn(){
        console.log('selfFn');
    }
}

//let lwh=new Lwh(2,3);

//console.log(lwh.val());

export {Lwh};