export class Post
{
    constructor
    (
        public idpost : number,
        public id : number,
        public coach : string,
        public lieu : string,
        public date : string,
        public categorie : string,
    )
    {
        idpost = idpost,
        id = id,
        coach = coach,
        lieu = lieu,
        date = date,
        categorie = categorie
    }
}