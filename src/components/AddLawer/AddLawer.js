import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddLawer = () => {
    const [info,setInfo] = useState({});
    const [file,setFile] = useState(null)
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) =>{
        const newFile =  e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () =>{
                    const formData = new FormData()
            formData.append('file', file);
            formData.append('name', info.name);
            formData.append('email', info.email);

            fetch('https://stormy-gorge-52541.herokuapp.com/addALawer', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{position:"absolute",right:0,backgroundColor:"#F4FDFB"}}>
            <h5 className='text-brand'>Add a Lawer</h5>
            <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Your Name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload an image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" id="name" placeholder="image"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            </div>
              
              
         </section>
    );
};

export default AddLawer;