// 1. Base Class – User (1 Mark)
// Create a class called User.
// The class should contain the following properties:
// • Id (number)
// • name (String)
// • email (String)
// • Password (String)
// • Phone (String)
// • age (Number ) (Must be between 18 and 60)
// Requirements:
//  Use appropriate access modifiers (public, private, protected).
//  Create a method called displayInfo() that prints the user's information.

// 5. Aggregation – User and Notebook (1 Mark)
// Create a relationship between:
//  User
//  NoteBook
// Requirements:
//  A user can own multiple notebooks.
//  This relationship should represent Aggregation.

class User {
    protected Id: number 
    name: string
    email: string
    private _password: string
    phone: string
    age: number
    notebooks: NoteBook[] = []

    constructor(Id: number, name: string, email: string, password: string, phone: string, age: number, notebooks?: NoteBook[]) {
        this.Id = Id
        this.name = name
        this.email = email
        this._password = password
        this.phone = phone
        this.age = age
        if (notebooks) {
            this.notebooks = notebooks
        }
    }

    addNoteBook(notebook: NoteBook) {
        this.notebooks.push(notebook)
    }

    displayInfo() {
        console.log("name: ", this.name)
        console.log("email: ",  this.email)
        console.log("Id: ", this.Id )
        console.log("phone: ",  this.phone)
        console.log("age",  this.age)
    }
}


// 2. Inheritance – Admin User (1 Mark)
// Create a class called Admin that extends the User class.
// Requirements:
//  The Admin class should include a method that allows the admin to manage notes.
//  Apply the concept of inheritance.

class Admin extends User {

    note: Note | undefined

    constructor(Id: number, name: string, email: string, password: string, phone: string, age: number, note?: Note) {
        super(Id, name, email, password, phone, age)
        this.note = note
    }

    createNote(note: Note) {
        this.note = note
    }

    printNote() {
        return this.note
    }
}


// 3. Class - Note (1 Mark)
// Create a class called Note
// • Id (number)
// • tittle(String)
// • content(String)
// • userId(reference to User)
// Requirements:
//  Create a method called preview() that returns a short preview of the note content.

// 6.Association – Note and User (1 Mark)
// Create a relationship between:
//  User
//  Note
// Requirements:
//  Each Note must have an author (the user who created it).
//  This relationship should represent Association.


class Note {
    protected Id: number 
    title: string
    email: string
    content: string
    userId: string
    author: User

    constructor(Id: number, title: string, email: string, content: string, userID: string, author: User) {
        this.Id = Id
        this.title = title
        this.email = email
        this.content = content
        this.userId = userID
        this.author = author
    }

  preview() {
    return this.content.slice(0, 15);
  }
}


// 4. Composition– NoteBook and Notes (1 Mark)
// Create a class called NoteBook
// Requirements:
//  The NoteBook class should contain a collection of Notes objects.
//  Implement methods such as : addNote() , removeNote()
//  The relationship between Notebook and Note must represent Composition.

class NoteBook {
    Notes: Note[] = []

    addNote(Id: number, title: string, email: string, content: string, userID: string, author: User) {
        const note = new Note(Id, title, email, content, userID, author)
        this.Notes.push(note)
    }
    removeNote(note: Note) {
        const index = this.Notes.indexOf(note)
        if(index>-1) {
            this.Notes.splice(index, 1)
        }
    }
}



// 7. Generics– Data Storage(1 Mark)
// Create a Generic Class called :
//  Storage
// Requirements:
//  The class should be able to store any type of data .
// Example operations may include :
// 1. addItem ()
// 2. removeItem() .
// 3. getAllItems() .


class Storage<T> {
    private items: T[] = []

    addItem(item: T) {
        this.items.push(item)
    }

    removeItem(item: T) {
        const index = this.items.indexOf(item)
        if(index>-1) {
            this.items.splice(index, 1)
        }
    }

    getAllItems() {
        return this.items
    }
}
