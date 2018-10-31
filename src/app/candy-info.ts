export class CandyInfo {
    public name:string = "";
    public img:string = "";

    constructor(p_name:string, p_img:string){
        this.name = p_name;
        this.img = p_img;
    }
}

export const candy:CandyInfo[]= [
    {"name": "Dragibus", "img": ""},
    {"name": "Twix", "img": ""},
    {"name": "Mars", "img": ""},
    {"name": "Crocodile", "img": ""}
];