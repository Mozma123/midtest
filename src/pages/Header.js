import React from 'react'

const Header = () => {
  return (
    <>
    <header>
        <section className='container main-hero-container'>
     <div className='row'>
        <div  className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column 
        align-items-start  order-lg-first order-last">
              <h1 className='display-2'>
              Making Health Care <br/>Better Together </h1>
                <p className="main-hero-para">
                Also you dry creeping beast multiply fourth abundantly 
                our itsel signs bring our. Won form living. Whose dry you 
                seasons divide given gathering great in whose you'll greater
                 let livein form beast sinthete better together these place absolute right
              </p>
              <h3>Get early access for you</h3>
              <div className='input-group mt-3'>
              <input
                  type="text"
                  className="rounded-pill w-55  w-lg-55  me-3  p-2  form-control-text mg-left-50px"
                  placeholder="Enter Your Email"
                />
                 <div className="input-group-button">Get it now</div>
              </div>
              </div>
              {/* right side of header */}
              <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center
               align-items-center main-herosection-images order-md-first order-sm-first">
              <img
                src="./images/Nurse Doctor Physician Mask Stethosecope Gloves Standing PNG.JFIF"
                alt="heroimg"
                className="img-fluid"
              />
              {/* <img
                src="./images/Premium Photo _ Male doctor on light surface.JFIF"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              /> */}
            </div>
          </div>
        </section>
         </header>
    </>
  )
}

export default Header;