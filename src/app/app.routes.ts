import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";

export const APP_ROUTES: Routes = [
    {
        path : '',
        children : [
            {
                path: 'books',
                loadComponent: () => import('./books/books.component').then(c => c.BooksComponent)

            },
            {
                path: 'movies',
                loadChildren: () => import('./movies/movies.routes').then(r => r.MOVIES_ROUTES)

            },

        ]
    }

]