
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
        hashTags:['#ортопед','#врач']
    },
    {
        id: '2',
        descriprion: 'Талон',
        createdAt: new Date(2014, -1, 1, 2, 3, 4, 567),
        author: 'ПетровПётр',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
        hashTags:['#хирург']
    },
    {
        id: '3',
        descriprion: 'Талон',
        createdAt: new Date(2017, 0, 1, 2, 3, 4, 567),
        author: 'ИвановИван',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
        hashTags:['хирург','стоматолог','лор']
    },
    {
        id: '4',
        descriprion: 'Талон',
        createdAt: new Date(2013, 0, 1, 2, 3, 4, 567),
        author: 'ЕвгенЖеня',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
        hashTags:['стоматолог','лор']
    },
    {
        id: '5',
        descriprion: 'Талон',
        createdAt: new Date(2013, 0, 1, 2, 3, 4, 567),
        author: 'СаняСаня',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
        hashTags:['лор']
    },
    {
        id: '6',
        descriprion: 'Талон',
        createdAt: new Date(2015, 0, 1, 2, 3, 4, 567),
        author: 'КатяКатя',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
        hashTags:['стоматолог']
    },
    {
        id: '7',
        descriprion: 'Талон',
        createdAt: new Date(2018, 0, 1, 2, 3, 4, 567),
        author: 'ИвановИван',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
        hashTags:['хирург','окулист','лор']
    },
    {
        id: '8',
        descriprion: 'Талон',
        createdAt: new Date(2019, 0, 1, 2, 3, 4, 567),
        author: 'ЕвгенЖеня',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
        hashTags:['терапевт','окулист','лор']
    },
    {
        id: '9',
        descriprion: 'Талон',
        createdAt: new Date(2011, 0, 1, 2, 3, 4, 567),
        author: 'ИвановИван',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
        hashTags:['терапевт']
    },
    {
        id: '10',
        descriprion: 'Талон',
        createdAt: new Date(2013, 0, 1, 2, 3, 4, 567),
        author: 'СаняСаня',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
        hashTags:['терапевт','логопед']
    },
    {
        id: '11',
        descriprion: 'Талон',
        createdAt: new Date(2014, 0, 1, 2, 3, 4, 567),
        author: 'ИвановИван',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
        hashTags:['эндокринолог','окулист','лор']
    },
    {
        id: '12',
        descriprion: 'Талон',
        createdAt: new Date(2015, 0, 1, 2, 3, 4, 567),
        author: 'СаняСаня',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
        hashTags:['эндокринолог','лор']
    },
    {
        id: '13',
        descriprion: 'Талон',
        createdAt: new Date(2013, 0, 1, 2, 3, 4, 567),
        author: 'ЕвгенЖеня',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
        hashTags:['эндокринолог','ортопед','лор']
    },
    {
        id: '14',
        descriprion: 'Талон',
        createdAt:new Date(2017, 0, 1, 2, 3, 4, 567),
        author: 'СаняСаня',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
        hashTags:['эндокринолог','лор']
    },
    {
        id: '15',
        descriprion: 'Талон',
        createdAt: new Date(2015, 0, 1, 2, 3, 4, 567),
        author: 'ЕвгенЖеня',
        polyclinic:'Городская №5',
        doctor:'Ортопед',
        doctorName:'Ростова Наталья Алексеевна',
        DTreception:'17.05.20 15:30',
        patient:'Почемучкин Иван Игоревич',
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

    edittPost(id,changes){
        if(this.validatePost(changes)){
            var postic=this.getPost(id)
            if(changes.polyclinic) {
                postic.polyclinic = changes.polyclinic;
            }
            if(changes.doctor ) {
                postic.doctor = changes.doctor;
            }
            if(changes.doctorName ) {
                postic.doctorName = changes.doctorName;
            }
            if(changes.DTreception) {
                postic.DTreception = changes.DTreception;
            }
            if(changes.patient ) {
                postic.patient = changes.patient;
            }
            if(changes.descriprion ) {
                postic.descriprion=changes.descriprion;
            }

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


    addBegin(name) {
        const containerEl = document.querySelector('.posts-container');
        const containerName = document.querySelector('.login');
        containerName.textContent=name;
        a.getPosts(0, 10).forEach((post) => {
            containerEl.appendChild(this.buildPost(post));
        });
    }



    addItem() {
        const containerEl = document.querySelector('.posts-container');

        a.getPosts(1, 3).forEach((post) => {
            containerEl.appendChild(buildPost(post));
        });
    }



    newPost(Post) {
        a.addPost(Post);
        const containerEl = document.querySelector('.posts-container');
        containerEl.appendChild(this.buildPost(Post));
    }



    deletePost(id) {
        a.removePost(id);
        const containerEl = document.querySelector('.posts-container');
        const postEl = document.getElementById(id);
        containerEl.removeChild(postEl);
    }



    editPost(id, changes) {
        a.edittPost(id, changes);
        var postEl = document.getElementById(id);
        var polyclinic = postEl.querySelector('.polyclinic');
        var doctor = postEl.querySelector('.doctor');
        var doctorName = postEl.querySelector('.doctorName');
        var DTreception = postEl.querySelector('.DTreception');
        var patient = postEl.querySelector('.patient');
        if(changes.polyclinic) {
            polyclinic.textContent = changes.polyclinic;
        }
        if(changes.doctor ) {
            doctor.textContent = changes.doctor;
        }
        if(changes.doctorName ) {
            doctorName.textContent = changes.doctorName;
        }
        if(changes.DTreception) {
            DTreception.textContent = changes.DTreception;
        }
        if(changes.patient ) {
            patient.textContent = changes.patient;
        }
    }

    buildPost(post) {
        const postEl = document.createElement('div');
        postEl.innerHTML = `
<div class="postText">
                    <div class="Bblock">
                        <div class="new-block-bowl">
                            <p>Поликлиника:</p>
                            <p>Врач:</p>
                            <p>ФИО врача:</p>
                            <p>Дата и время приёма:</p>
                            <p>ФИО пациента:</p>
                        </div>
                    </div>

                    <div class="Bblock">
                        <div class="blockText" >
                            <div class="polyclinic">${post.polyclinic}</div>
                            <div class="doctor">${post.doctor}</div>
                            <div class="doctorName">${post.doctorName}</div>
                            <div class="DTreception">${post.DTreception}</div>
                            <div class="patient">${post.patient}</div>
                        </div>
                    </div>
                </div>
                <div class="post-footer">
                    <div class="like">
                        <img src="../JavaPract/glowing-octo-tribble/HTML1/images/like.svg" alt="лайк">
                        <span>${post.author}</span>
                    </div>
                    <div class="publication">
                        <p></p>
                    </div>
                </div>
                <div class="hashtags">
                    <p>${post.hashTags}</p>
                </div>
                `;
        postEl.id = post.id;
        return postEl;
    }
}

let a=new Service(Posts);
let b=new Viewer();

// console.log(a.getPost('1'));
// a.removePost('1');
//
// let ob={
//     id:'16',
//     descriprion: 'PIPIBOM',
//     createdAt: new Date( 2015, 1, 2, 3, 4, 567,23),
//     author: 'Валерия',
// }
// console.log(a.editPost('3',ob))
// console.log(a.validatePost(ob));
// var posts = [
//     {
//         id: 1,
//         descriprion: 'Талон',
//         createdAt: new Date(2014, 1, 1, 2, 3, 4, 567),
//         author: 'ИвановИван',
//     },
//     {
//         id: '22',
//         descriprion: 'Талон',
//         createdAt: new Date(2014, 1, 1, 2, 3, 4, 567),
//         author: 'ПетровПётр',
//     }]
// console.log(a.getPosts(5,2,{author:'ИвановИван'}))
// console.log(a.addAll(posts))
//  console.log(a.getPost('2'))
// console.log(a.clear())

