

import React from 'react';

import "./project.css"

function Project() {


  return <div >
    <div className='project-container'>
       <div>
         <h1 className='project-card-heading'>Add Projects</h1>
              <div>
                <p>Project Name</p>
                <input type="text" placeholder='Project Name'/>
                <p>Project Link</p>
                <input type="text" placeholder='Project Link'/>
                <p>Project description</p>
                <textarea rows={10} cols={45} placeholder='Project description'></textarea>
                <button>Add</button>
              </div>
        </div>
     </div>
    <div className='bg-container'>
      <h1 className='project-card-heading'>Projects</h1>
     <div className='card-project-container'>
      <div className='card'>
      <div className='card-content'>
        <h1 className='project-card-heading'>Photography</h1>
        <p className='card-description'>Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        <button className='card-button'>Project view</button>
      </div>
      <div className='card-image-container'>
        <img className='card-image' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt='Project' />
      </div>
    </div>
    </div>


    <div className='card-project-container'>
      <div className='card'>
      <div className='card-content'>
        <h1 className='project-card-heading'>Project Name</h1>
        <p className='card-description'>Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        <button className='card-button'>Project view</button>
      </div>
      <div className='card-image-container1'>
        <img className='card-image' src="https://www.gettyimages.in/gi-resources/images/500px/983703508.jpg" alt='Project' />
      </div>
    </div>
    </div>

    <div className='card-project-container'>
      <div className='card'>
      <div className='card-content'>
        <h1 className='project-card-heading'>Project Name</h1>
        <p className='card-description'>Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
</p>
        <button className='card-button'>Project view</button>
      </div>
      <div className='card-image-container'>
        <img className='card-image' src="https://t4.ftcdn.net/jpg/05/62/44/49/360_F_562444995_aiVFD8nbFTECt4zUEHFIsUDwyZkhNDDc.jpg" alt='Project' />
      </div>
    </div>
    </div>


    </div>
  
</div>
  
};

export default Project;
