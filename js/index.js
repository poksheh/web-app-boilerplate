function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        console.log('Check ' + i)
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

async function logJSONData(userId) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + userId);
    const jsonData = await response.json();
    console.log(jsonData);
    document.querySelector('#username').innerHTML = jsonData.name;
    document.querySelector('#email').innerHTML = jsonData.email;
    document.querySelector('#add').innerHTML = user.name;
    user.name = 'Abu'
  }

const user = {
    name: 'Chef',
    email: 'a@b.com',
    skills: [
        { 
            language: 'JS', 
            rating: 5, 
            framework: [
                { name: 'Vue', rating: 5 },
                { name: 'Angular', rating: 5 },
                { name: 'React', rating: 5 },
                { name: null },
                { temp: 4, status: 000 }
            ] 
        },
        { language: 'Phyton', rating: 3 },
        { language: 'CSS', rating: 3.5 },
    ],
    address: {
        home: 'Putrajaya',
        office: 'KL'
    },
    number: [2, 3, 4],
    string: ['a', 'b', 'v']
}

console.log(user.skills[0].rating)