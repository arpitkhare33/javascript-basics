ChangeColor = () =>{
    console.log("Changecolor function is called");
    document.getElementById('title').style.color='red'
    document.getElementById('title').style.fontSize='60px';
}


hoverEffect =() =>{
    console.log('Mouse on the button')
    document.getElementById('title').style.color='red';
    
}
hoverEffectOff = () =>{
    console.log('Mouse out of the button');
    document.getElementById('title').style.color = 'dodgerblue'
}

showButton= () =>{
    console.log('Mouse over the card');
    document.getElementById('follow-btn').style.display ='block';
}

hideButton =() =>{
    document.getElementById('follow-btn').style.display ='none'
}



greet = () =>{
    let name = document.getElementById('name').value;
    let greeting = "Hello " + name;
    // alert(greeting);
    document.getElementById('greet').innerHTML = greeting;
}


calculate = () =>{
    let num = document.getElementById('name').value;
    let numInt = Number(num);
    let cube = numInt*numInt*numInt;
    document.getElementById("calculate").innerHTML = cube;
}


let randomColors = ['red','blue','coral','dodgerblue','indigo','lime']
changeRandomColor = () =>{
    let totalColors = randomColors.length;
    let randomIndex= Math.floor(Math.random()*totalColors);
    document.getElementById("title").style.color=randomColors[randomIndex];
}





// userPresent = (user) => {
//     return user.firstName ==name 
// }

// const ages = [32, 33, 12, 40];

// function checkAge(age) {
//   return age > document.getElementById("ageToCheck").value;
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML = ages.filter(checkAge);
// }

function searchUser(user){
    return user.firstName ==document.getElementById("userName").value;
}

findUser = () => {
    // let name = document.getElementById("name").value;
    // let FoundUser = users.filter(userPresent = (user) =>{
    //     user.firstName ==name
    // });
    // console.log(FoundUser)
    // console.log("Finding the user")
    // document.getElementById("userDetails").innerHTML = users.filter(searchUser);

    let users = [
        {firstName: 'John', lastName: 'Doe', age: 30, salary: 5000},
        {firstName: 'Jane', lastName: 'Doe', age: 25, salary: 4000},
        {firstName: 'Ashish', lastName: 'Shukla', age: 20, salary: 3000},
        {firstName: 'yash', lastName: 'Goel', age: 35, salary: 6000},
        {firstName: 'Arpit', lastName: 'Khare', age: 40, salary: 7000},
        {firstName: 'Sahil', lastName: 'Pocker', age: 45, salary: 8000},
    ];
    let userName = document.getElementById("userName").value;
    console.log(userName);
    let res = users.filter(searchUser);
    console.log(res);
    document.getElementById("userDetails").innerHTML = res[0].salary;
}