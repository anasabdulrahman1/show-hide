
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBFooter,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  return (
    <div>
      <MDBNavbar light style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <span className='show'>Show</span> <span className='hide'>Hide</span>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      
      <div className='bg-light p-5'>
        <div className='p-5 d-flex flex-column gap-5 align-items-center'>
          <img className='shadow' width={600} height={600} src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXNuODJrOXVkZ2E3bGFlbHF1MWZhdXZlbG1mNzc3aGdrMmkwZGo3byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0JM83bF1jbRsTnNu/giphy.webp" alt="" />
          {isVisible && <h1 className='text-warning' >Hello !!</h1>}
          <div className='d-flex gap-5'>
            <button onClick={show} className='btn btn-success'>Show</button>
            <button onClick={hide} className='btn btn-danger'>Hide</button>
          </div>
        </div>
      </div>

      <MDBFooter className='shadow text-center text-white'>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4'>
            <MDBBtn floating className='m-1' style={{ backgroundColor: '#3b5998' }} href='#!' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating className='m-1' style={{ backgroundColor: '#55acee' }} href='#!' role='button'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn floating className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#!' role='button'>
              <MDBIcon fab icon='google' />
            </MDBBtn>

            <MDBBtn floating className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#!' role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn floating className='m-1' style={{ backgroundColor: '#0082ca' }} href='#!' role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn floating className='m-1' style={{ backgroundColor: '#333333' }} href='#!' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Home;

