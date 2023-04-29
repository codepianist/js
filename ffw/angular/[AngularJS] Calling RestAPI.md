

## Calling a REST API:

### JSON Response:

```json
{
    "at": "2019-04-15T12:47:56.476",
    "success": true,
    "message": "Bookmark list retrieved!",
    "data": [
        {
            "id": 1,
            "title": "Java inner class and static nested class | Programming/Java/Language/InnerClasses (stackoverflow.com)",
            "url": "https://stackoverflow.com/questions/70324/java-inner-class-and-static-nested-class?test=true",
            "shortenUrl": null,
            "score": 0,
            "contexts": [
                "Programming/Java/Language/InnerClasses"
            ]
        },
        {
            "id": 2,
            "title": "Jackson object mapper tutorial | Programming/Java/JSON/Jackson (www.baeldung.com)",
            "url": "https://www.baeldung.com/jackson-object-mapper-tutorial",
            "shortenUrl": null,
            "score": 0,
            "contexts": [
                "Programming/Java/JSON/Jackson"
            ]
        }
    ]
}
```



### Model:

```typescript
// Bookmark.ts
export interface Bookmark {
  id: bigint;
  title: string;
  url: string;
  shortenUrl: string;
  score: number;
  contexts: string[]
}

// ResponseWrapper.ts
import {Bookmark} from "./Bookmark";

export interface ResponseWrapper {
  at: string;
  success: boolean;
  message: string;
  data: Bookmark[]
}
```



### Service:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseWrapper } from "../models/ResponseWrapper";

const endpoint = 'http://localhost:8080/api/v1/bookmarks';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'User': 'user1@mailinator.com',
    'SessionToken': 'SessionToken'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private http: HttpClient) { }
  

  getBookmarks(): Observable<any>{
    return this.http.get<ResponseWrapper>(endpoint, httpOptions);
  }

}
```



### Component:

```typescript
import { Component } from '@angular/core';
import { Bookmark } from "./models/Bookmark";
import { BookmarkService } from "./services/bookmark.service";
import { ResponseWrapper } from "./models/ResponseWrapper";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bookmark ..xyZ';
  bookmarks: Bookmark[];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.loadBookmarks();
  }

  loadBookmarks(){
    this.bookmarkService.getBookmarks()
      .subscribe((resp: ResponseWrapper) => {
        this.bookmarks= resp.data;
      })
  }

}
```



