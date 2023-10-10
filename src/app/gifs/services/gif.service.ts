import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gif.request';
@Injectable({
    providedIn:'root'
})

export class GifService{
    constructor(private http: HttpClient){
        this.loadStorage();
        if(this._tagsHistory.length===0)return;
        
        this.searchTag(this._tagsHistory[0])
    }

    private _tagsHistory: string[] = ["Cats holding paws"];
    private API_KEY:string = '8leYACb7XHFELRS768Qpw7ucVE4z3INX'
    private _serviceUrl:string = 'https://api.giphy.com/v1/gifs';
    public gifList: Gif[]  = [];

    get getTagsHistory(){
        return [...this._tagsHistory];
    }

    private organizeHistory( tag:string ):void{
        // Organizes search history. It removes blank spaces from both ends of the strings and if the current search tag exists in the history, it moves it up to the most recent searched tag. 
        tag = tag.toLowerCase().trim();
        
        this._tagsHistory.unshift(tag)

        if(this._tagsHistory.includes(tag)){
            this._tagsHistory = this._tagsHistory.filter((t)=>t!==tag)
            this._tagsHistory.unshift(tag)
        }
        this.saveLocalStorage();
}

    private saveLocalStorage():void{
        localStorage.setItem('history', JSON.stringify(this._tagsHistory))
    }

    private loadStorage():void{
        if(!localStorage.getItem('history')) return;

        this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

        console.log(this._tagsHistory[0])
    }

    public searchTag( tag: string ):void{
        // Function called on every keydown.enter event. Organizes the search history and makes an HTTP request to the GIPHY API.
        if(tag.length === 0) return;
        this.organizeHistory(tag);

        const params = new HttpParams()
        .set('api_key',this.API_KEY)
         .set('limit',10)
        .set('q',tag)

        this.http.get<SearchResponse>(`${this._serviceUrl}/search`, {params})

        .subscribe((res)=>{
            this.gifList = res.data;
        })

    }

    public clearHistory(): void{
        this._tagsHistory = [];
        localStorage.setItem('history',JSON.stringify([]));
        this.searchTag("")
    }

}