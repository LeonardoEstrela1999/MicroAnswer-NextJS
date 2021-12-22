export default class Search {
    public url: string;
    public answer: string;
    public image: string;
    
    constructor (url: string, answer: string, image: string) {
        this.url = url;
        this.answer = answer;
        this.image = image;
    }
}