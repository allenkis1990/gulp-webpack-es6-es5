

import {allen,lhh,xw,fn} from '../export/index1';
import {aaa,bbb} from '../export/index2';
import {hoho,heihei} from '../export/index3';
import index4 from '../export/index4';
import {Lwh} from '../export/index6';
//import {allen,lhh,xw,fn} from '../export/index5';

function heihei1(){
    console.log(111);
}
let obj={name:'obj'};
let aObj={
    heihei1,
    obj,
    value:1
}
aObj.heihei1();


console.log(aObj);

let str=`哈哈哈哈好
哈哈哈哈好哈哈哈哈好哈
哈哈哈好哈哈哈哈好哈哈哈哈好哈
哈哈哈好`;

console.log(str);

let lwh=new Lwh(2,3);
console.log(lwh);


class Jack extends Lwh{
    fn(){
        console.log(this.fuck);
    }

    //继承的孩子也可以有私有方法
    static jackSelfFn(){
        console.log('jackSelfFn');
    }

}
Jack.jackSelfFn();

let jack=new Jack(1,2);

//Lwh.selfFn();
/*jack.haha=function(){
    console.log('hahahahaha');
}

jack.haha();*/

let a=88888888122222;
/*console.log(allen);
console.log(lhh);
console.log(xw);
console.log(fn);*/



/*console.log(aaa);
console.log(bbb);*/


/*console.log(hoho);
console.log(heihei);*/

/*console.log(index4);*/

console.log(lhh);



