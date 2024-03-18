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
    ){}
}