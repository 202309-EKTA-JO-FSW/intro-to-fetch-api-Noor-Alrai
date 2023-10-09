// Please read the README.md to understand what to do. Happy Coding !

const fetchUserData = async() =>{
  try{  const response= await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await response.json();
    console.log(usersData);
    const modifiedUsers =usersData.map(user => ({
     name: user.name,
     username:user.username,
     email:user.email,
     address:user.address.street ,
     phone:user.phone,
     website:user.website,
     company:user.company

    }));
    console.log(modifiedUsers);
    
    const modifiedUsersFilter = modifiedUsers.filter(user => user.email.endsWith(".biz"))
    console.log(modifiedUsersFilter);
 

    const sortUsers = usersData.sort((a,b) =>{
     const name1 = a.name.toUpperCase();
     const name2 = b.name.toUpperCase();
     if ( a.name < b.name){
        return -1;
     }
    
    if (a.name > b.name) {
      return 1;
    }
    return 0;
    });
    console.log(sortUsers);}
    catch(err){
        console.log("some thing wrong");

    }
}
fetchUserData();