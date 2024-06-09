const heroes = [
    {
        name: "Dark Knight",
        photoUrl: "https://www.campustimespune.com/wp-content/uploads/2014/07/joker__why_so_serious_batman-cutout-epic-dialogue-956x1024.jpg",
        text: "“Why so serious? Let’s put a smile on that face.”"
    },
    {
        name: "The Social Network",
        photoUrl: "https://www.campustimespune.com/wp-content/uploads/2014/07/social-network-epic-movie-dialogue-364x316.jpg",
        text: "“If you guys were the inventors of Facebook, you’d have invented Facebook.”"
    },
    {
        name: "300",
        photoUrl: "https://www.campustimespune.com/wp-content/uploads/2014/07/300-movie_this-is-sparta-epic-dialogue-364x242.jpg",
        text: "“This is Sparta!”"
    },
    {
        name: "Titanic",
        photoUrl: "https://www.campustimespune.com/wp-content/uploads/2014/07/jack-and-rose-titanic-epic-movie-dialogues-364x265.jpg",
        text: "“I am the king of the world!”"
    },
    {
        name: "Terminator",
        photoUrl: "https://www.campustimespune.com/wp-content/uploads/2014/07/arnold-schwarzenegger-terminator-hasta-la-vista-baby-epic-dialogue-364x455.jpg",
        text: "“I will be back!”"
    },
    {
        name: "The Godfather",
        photoUrl: "https://www.campustimespune.com/wp-content/uploads/2014/07/i_ll-make-him-and-offer-he-can_t-refuse-godfather-epic-dialogue-364x295.jpg",
        text: "“I'll make him an offer he cant refuse..”"
    },
    {
        name: "The Lord of the Rings",
        photoUrl: "https://www.campustimespune.com/wp-content/uploads/2014/07/gollum-black-my-precious-lotr-epic-dialogue-364x370.jpg",
        text: "“My precious…”"
    },
];

let index = 0; 

const nameEl = document.querySelector(".username");
const photoEl = document.querySelector("img.photo");
const textEl = document.querySelector(".text");

function update() {
    const { name, photoUrl, text } = heroes[index]; 
    nameEl.innerText = name;
    photoEl.src = photoUrl;
    textEl.innerText = text;

    index++;
    if (index >= heroes.length) {
        index = 0;
    }

   setTimeout(() => {
    update();
   }, 5000);
}


update();
