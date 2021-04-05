var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
global.document = new JSDOM('index.html').window.document;
var Posts = [
    {
        id: '1',
        descriprion: 'Талон',
        createdAt: new Date(2014, -1, 1, 2, 3, 4, 567),
        author: 'ИвановИван',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
        hashTags:['ортопед','врач']
    },
    {
        id: '2',
        descriprion: 'Талон',
        createdAt: new Date(2014, -1, 1, 2, 3, 4, 567),
        author: 'ПетровПётр',
        hashTags:['хирург']
    },
    {
        id: '3',
        descriprion: 'Талон',
        createdAt: new Date(2017, 0, 1, 2, 3, 4, 567),
        author: 'ИвановИван',
        hashTags:['хирург','стоматолог','лор']
    },
    {
        id: '4',
        descriprion: 'Талон',
        createdAt: new Date(2013, 0, 1, 2, 3, 4, 567),
        author: 'ЕвгенЖеня',
        hashTags:['стоматолог','лор']
    },
    {
        id: '5',
        descriprion: 'Талон',
        createdAt: new Date(2013, 0, 1, 2, 3, 4, 567),
        author: 'СаняСаня',
        hashTags:['лор']
    },
    {
        id: '6',
        descriprion: 'Талон',
        createdAt: new Date(2015, 0, 1, 2, 3, 4, 567),
        author: 'КатяКатя',
        hashTags:['стоматолог']
    },
    {
        id: '7',
        descriprion: 'Талон',
        createdAt: new Date(2018, 0, 1, 2, 3, 4, 567),
        author: 'ИвановИван',
        hashTags:['хирург','окулист','лор']
    },
    {
        id: '8',
        descriprion: 'Талон',
        createdAt: new Date(2019, 0, 1, 2, 3, 4, 567),
        author: 'ЕвгенЖеня',
        hashTags:['терапевт','окулист','лор']
    },
    {
        id: '9',
        descriprion: 'Талон',
        createdAt: new Date(2011, 0, 1, 2, 3, 4, 567),
        author: 'ИвановИван',
        hashTags:['терапевт']
    },
    {
        id: '10',
        descriprion: 'Талон',
        createdAt: new Date(2013, 0, 1, 2, 3, 4, 567),
        author: 'СаняСаня',
        hashTags:['терапевт','логопед']
    },
    {
        id: '11',
        descriprion: 'Талон',
        createdAt: new Date(2014, 0, 1, 2, 3, 4, 567),
        author: 'ИвановИван',
        hashTags:['эндокринолог','окулист','лор']
    },
    {
        id: '12',
        descriprion: 'Талон',
        createdAt: new Date(2015, 0, 1, 2, 3, 4, 567),
        author: 'СаняСаня',
        hashTags:['эндокринолог','лор']
    },
    {
        id: '13',
        descriprion: 'Талон',
        createdAt: new Date(2013, 0, 1, 2, 3, 4, 567),
        author: 'ЕвгенЖеня',
        hashTags:['эндокринолог','ортопед','лор']
    },
    {
        id: '14',
        descriprion: 'Талон',
        createdAt:new Date(2017, 0, 1, 2, 3, 4, 567),
        author: 'СаняСаня',
        hashTags:['эндокринолог','лор']
    },
    {
        id: '15',
        descriprion: 'Талон',
        createdAt: new Date(2015, 0, 1, 2, 3, 4, 567),
        author: 'ЕвгенЖеня',
        hashTags:['эндокринолог']
    },
];


class Service {

    getPosts(skip=0,top= 10, filterConfig){
        if(filterConfig!=undefined){
            let result = Posts.filter(team => team.author === filterConfig.author)
                return result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(skip,skip+top);
        }else {
            return  Posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(skip,skip+top);
        }
    }

   getPost(id) {
        for (var i = 0; i < Posts.length; i++) {
            if (Posts[i].id === id) {
                return Posts[i];
            }
        }
        throw "Couldn't find object with id: " + id;
    }

    validatePost(Object){

        return Object.id != null && Object.descriprion != null && Object.descriprion.length<400
            && Object.author != null && Object.createdAt != null && typeof Object.id === "string" && typeof Object.descriprion === "string"
            && typeof Object.author === "string"

    }

    addAll(posts){
        let result=[], k=0;
        for(let i = 0; i<posts.length; i++){
            if(this.validatePost(posts[i])){
                this.addPost(posts[i])
            }else {
                result[k] = posts[i];
                k++;
            }
        }
        return result;
    }

    addPost(Object){
       if(this.validatePost(Object)){
           Posts.splice(Posts.length,0,Object);
           return true;
       }else {
           return false;
       }
    }

    clear(){
        Posts.splice(0,Posts.length)
    }

    editPost(id,Post){
        if(this.validatePost(Post)){
            this.getPost(id).descriprion=Post.descriprion;
            return true;
        }else {
            return false;
        }
    }

    removePost(id){
        for (var i = 0; i < Posts.length; i++) {
            if (Posts[i].id === id) {
                return Posts.splice(i,1);
            }
        }
        throw "Couldn't find object with id: " + id;
    }

    constructor(Posts) {
    this._posts=Posts;
   }
}

class Viewer {

    template =global.document.getElementById('note-template');
    // Caching container
    container = global.document.getElementById('container');

    fillItemData(item, data) {
        // Get all marked placeholders (elements marked by data-target attribute)
        let placeholders = item.querySelectorAll('[data-target]');
        // Going through them
        [].forEach.call(placeholders || [], (phElement) => {
            // Get placeholder attribute value
            let key = phElement.getAttribute('data-target');
            // Using it as a key to get value from data object
            phElement.textContent = String(data[key]); // Data type cast
        });
    }

    addItem (data) {
        // Create a new node using template,
        // passing content and deepCopy marker
        let newNote = global.document.importNode(this.template.content, true);

        // fill note data
        this.fillItemData(newNote, data);

        // Append node
        this.container.appendChild(newNote);
    }
}

let b=new Viewer();
let a=new Service(Posts);
b.addItem(a.getPost('1'))


console.log(a.getPost('1'));
a.removePost('1');

let ob={
    id:'16',
    descriprion: 'PIPIBOM',
    createdAt: new Date( 2015, 1, 2, 3, 4, 567,23),
    author: 'Валерия',
}
console.log(a.editPost('3',ob))
console.log(a.validatePost(ob));
var posts = [
    {
        id: 1,
        descriprion: 'Талон',
        createdAt: new Date(2014, 1, 1, 2, 3, 4, 567),
        author: 'ИвановИван',
    },
    {
        id: '22',
        descriprion: 'Талон',
        createdAt: new Date(2014, 1, 1, 2, 3, 4, 567),
        author: 'ПетровПётр',
    }]
console.log(a.getPosts(5,2,{author:'ИвановИван'}))
console.log(a.addAll(posts))
 console.log(a.getPost('2'))
// console.log(a.clear())
