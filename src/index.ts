//import {init, exit} from "myPackage";

// const hello = () =>"hi";

// class Block{
//     constructor(private data:string){}
//     static hello(){
//         return "HI"
//     }
// }

//init()

//console.log("bye");
import * as crypto from  "crypto";
interface BlockShape{
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}
class Block implements BlockShape{
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data:string,
    ){
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash: string, height: number, data:string){
        const toHash = `${prevHash}${height}${data}`;

    }
}