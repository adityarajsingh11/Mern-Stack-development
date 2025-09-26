import { useState } from "react"


function Form() {
    
    let [formData , setFormData] = useState({  // here we dealing with the object 
        fullName: "",
        username: "",
        password: "",
    })

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData((currData) => {
            currData[fieldName] = newValue;
            return{...currData}
        })
        
    }

    let handleSubmit =(event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    }

    


  return (
    <div>
        <form onSubmit={handleSubmit}>
             <label htmlFor="fullname">Full Name</label>
             <input placeholder="Enter Full name " 
             type="text" 
             value={formData.fullName} 
             onChange={handleInputChange}
             id="fullName" 
             name="fullName" />

             <br></br>

             <label htmlFor="username">Username</label>
             <input placeholder="Enter Username" 
             type="text" 
             value={formData.username} 
             onChange={handleInputChange}
             id="username" 
             name="username" 
             />

             <label htmlFor="password">Password</label>
             <input placeholder="Enter Password" 
             type="password" 
             value={formData.password} 
             onChange={handleInputChange}
             id="password" 
             name="password" 
             />

             <button>Submit</button>
        </form>
        
    </div>
  )
}

export default Form