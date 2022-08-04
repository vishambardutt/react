
import React from 'react';
// listing use in react
function Users() {
   const user = [
    {name:'Vartika', age: 9, },
    {name:'Yutika', age: 11, },
    {name:'Sarita', age: 29, },
    {name:'Kavita', age: 19, }
 
   ]

    return (
      <div>
                
         <h1>Hello I am from Users</h1>
       {
        user.map((item,i)=>
        <div key={i}>{item.name}</div>

        )
       }
        </div>
      
    )
  }
  export default Users;