const users = [
  { 
    username: 'alex_hales', 
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', 
    description: 'Adventurous traveler and foodie. Always looking for the next great hike and meal. 🏔️🍔', 
    age: 28 
  },
  { 
    username: 'samantha_jones', 
    image: 'https://images.unsplash.com/photo-1554435738-6a5b5a8e3f9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', 
    description: 'Software engineer by day, aspiring novelist by night. Fueled by coffee and code. 💻☕', 
    age: 34 
  },
  { 
    username: 'alex_carter', 
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', 
    description: 'Graphic designer with a passion for minimalist art and vintage posters. Loves cycling. 🎨🚲', 
    age: 41 
  },
  { 
    username: 'olivia_chen', 
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', 
    description: 'Marine biologist dedicated to ocean conservation. Spends weekends scuba diving. 🐠🌊', 
    age: 26 
  },
  { 
    username: 'leo_rivera', 
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', 
    description: 'Musician and songwriter. Plays guitar and piano. 🎸🎹', 
    age: 31 
  },
  { 
    username: 'mia_garcia', 
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', 
    description: 'Yoga instructor and wellness coach. Believer in mindfulness and positive energy. 🧘‍♀️✨', 
    age: 29 
  },
  { 
    username: 'david_kim', 
    image: 'https://images.unsplash.com/photo-1581092162547-4598d1a1f731?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', 
    description: 'Architect who loves sustainable design. City explorer on the weekends. 🏙️🌿', 
    age: 45 
  },
  { 
    username: 'chloe_baker', 
    image: 'https://images.unsplash.com/photo-1551024709-8f237c20a9a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', 
    description: 'Pastry chef and owner of a small bakery. Life is short, eat dessert first! 🍰🧁', 
    age: 38 
  },
  { 
    username: 'cyan_patel', 
    image: 'https://images.unsplash.com/photo-1549476464-373921717545?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', 
    description: 'Fitness enthusiast and personal trainer. Always pushing the limits. 💪🏋️‍♂️', 
    age: 27 
  },
  { 
    username: 'charles_wright', 
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', 
    description: 'History teacher with a love for ancient civilizations and historical fiction. 🏛️📚', 
    age: 52 
  }
];

const input = document.getElementById("search");
const cardsContainer = document.getElementById('cards');

function displayUsers(usersToDisplay) {
    cardsContainer.innerHTML = '';

    usersToDisplay.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${user.image}" alt="${user.username}'s profile picture">
            <h2>${user.username}</h2>
            <p class="age">Age: ${user.age}</p>
            <p class="description">${user.description}</p>
        `;
        cardsContainer.appendChild(card);
    });
}

input.addEventListener("input", () => {
    const obj = input.value.toLowerCase().trim();

    const filteredUsers = users.filter(user => {
        return user.username.toLowerCase().startsWith(obj);
    });

    console.log(filteredUsers)
    displayUsers(filteredUsers);
});


displayUsers(users);