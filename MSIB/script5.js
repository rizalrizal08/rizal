function inputvalue(){
    const name = document.getElementById("nama").value;
    const email = document.getElementById("email");
    const list = document.getElementById("list");

    list.innerHTML += 
    <li>
        <p>${name}</p>
        <p>${email}</p>
    </li> ;

    console.log(name);
}

const onSubmit = (event) => {
    event.preventDefault();
    document.getElementById("formUser");
    const {name,nohp} = event.target;

    listuser.innerHTML +=
    <li>
        <p>${name.value}</p>
        <p>${nohp.value}</p>
    </li>
}

addEventListener("submit",onSubmit);