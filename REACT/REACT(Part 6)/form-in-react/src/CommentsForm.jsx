import { useState } from "react"
import {useFormik} from 'formik'
import "./CommentsForm.css";


const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username is not empty!';
   } 
   return errors;
 };


function CommentsForm({addNewComment}) {
    // let [formData , setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    // })

    const formik = useFormik({
        initialValues: {
        username: '',
        remarks: '',
        rating: 5,
    },
     validate,   // ✅ Add this line!
    onSubmit: (values, { resetForm }) => {
    addNewComment(values);
    resetForm();
    },
    });


  

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return {...currData , [event.target.name] : event.target.value}
    //     })
    // }

    // let handleSubmit = (event) => {
    //     console.log(formData)
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //        username: "",
    //        remarks: "",
    //        rating: 5,
    //     })
    // }


  return (
    <div className="form-container">
        <form onSubmit={formik.handleSubmit}>
            <h3>Give Comment!</h3>

            <label htmlFor="username">Username</label>
            <input 
            placeholder="username" 
            type="text" 
            value={formik.values.username} 
            onChange={formik.handleChange} 
            id="username"
            name="username"/>
            {formik.errors.username && (
               <div className="error">{formik.errors.username}</div>
            )}

            <br></br><br></br>

            <label htmlFor="remarks">Remarks</label>
            <textarea 
            value={formik.values.remarks} 
            placeholder=" Add remarks" 
            onChange={formik.handleChange}
            id="remarks"
            name="remarks"
            >Remarks
            </textarea>
            <br></br><br></br>
           
           <label htmlFor="rating">Rating</label>
           <input 
           placeholder="rating" 
           type="number" 
           value={formik.values.rating} 
           min={1} max={5} 
           onChange={formik.handleChange}
           id="rating"
           name="rating"/>
           <br></br><br></br>

           <button type="submit">Add Comment</button>
            
        </form>
    </div>
    
  )
}

export default CommentsForm