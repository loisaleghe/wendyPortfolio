import React from "react";




function Contact() {
  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='sectionTitle text-center'>
            <h1>Let's Discuss!</h1>
          </div>
        </div>
        <div className='row'>
          <div className='contactForm'>
            <div className='row'>
              <div className='text'>
                <h2>Contact Me</h2>
              </div>
            </div>
            <div className='row spaceBetween mb-3'>
              <div className='col-6'>
                <input
                  type='text'
                  className='form-control'
                  name=''
                  placeholder='Name'
                />
              </div>
              <div className='col-6'>
                <input
                  type='text'
                  className='form-control'
                  name=''
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-12'>
                <textarea
                  className='form-control'
                  name=''
                  placeholder='Your Comment'
                ></textarea>
              </div>
            </div>
            <div className='row'>
              <button className='btn btn-dark textRight'>
                <a href='/#'>Get In Touch</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  
  );
}

export default Contact;
