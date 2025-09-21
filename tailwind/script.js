let username = document.getElementById("name");
let role = document.getElementById("role");
let bio = document.getElementById("bio");
let pic = document.getElementById("photo-URL");
let form = document.querySelector("form");
let cards = document.querySelector(".cards");
let removebtn = document.querySelectorAll(".cross");

document.body.addEventListener('click', (event) => {
  if (event.target.matches('.cross')) {
    obj.removeUser(event);
  }
});

let obj = {
    arr: [],
    init: function() {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addUser();
            form.reset();
        });
    },
    addUser: function() {
        this.arr.push({
            src: pic.value,
            role: role.value,
            username: username.value,
            bio: bio.value
        });
        this.render();
    },
    render: function() {
        cards.innerHTML = "";
        this.arr.forEach((e, index) => {
            const card = document.createElement("div");
            card.setAttribute("class", "card relative bg-white  max-w-sm  rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300");
            card.dataset.index = index;

            const cross = document.createElement("div");
            cross.setAttribute("class", "cross absolute  right-px p-2 cursor-pointer");
            cross.textContent = "✖";
            card.appendChild(cross);

            const img = document.createElement("img");
            img.setAttribute("class", "w-full h-28 object-cover");
            img.src = e.src;
            card.appendChild(img);
            
            const contentWrapper = document.createElement('div');
            contentWrapper.classList.add('p-6', 'pt-2');

            const nameElement = document.createElement('h2');
            nameElement.classList.add('name', 'text-2xl', 'font-bold', 'text-gray-800', 'mb-1');
            nameElement.textContent = e.username;

            const roleElement = document.createElement('p');
            roleElement.classList.add('role', 'text-sm', 'font-semibold', 'text-indigo-600', 'uppercase', 'tracking-wider');
            roleElement.textContent = e.role;

            const aboutElement = document.createElement('p');
            aboutElement.classList.add('about', 'mt-1', 'text-sm', 'text-gray-600', 'leading-relaxed');
            aboutElement.textContent = e.bio;

            contentWrapper.append(nameElement, roleElement, aboutElement);
            card.append(contentWrapper);
            cards.appendChild(card);
        });
    },
    removeUser: function(e) {
        const cardToRemove = e.target.parentElement;
        const indexToRemove = parseInt(cardToRemove.dataset.index);
        this.arr.splice(indexToRemove, 1);
        this.render();
    }
};

obj.init();