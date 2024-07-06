import React from 'react'
import './AddResto.css'
function AddResto() {
  return (
    <div>
    {/* <div className="main">
    <nav className="navbar">
      <div className="navdata">
        <div>
          <img src="https://b.zmtcdn.com/web/merchant/advertize/3d432595dac7d2bda0b4cc41f6afe6ef1564646824.png"className="zomatoiconpart"/>
        </div>
        <div className="right-part">
          <p>Advertise</p>
          <p className="firstpara">Login</p>
          <button className="button">Create Account</button>
        </div>
      </div>
      <div className="maincontaint">
        <div className="partnerwith">
          <p className="firstpara1">Partner with Zomato at 0% commission for the 1st month! </p>
          <p className="secondpara2">And get ads worth INR 1500. Valid for new restaurant partners in select cities.</p>
          <div className="buttonpart">
              <button className="first111">Register your restaurant</button>
              <button className="second222">Login to view your existing restaurant</button>
          </div>
          <p className='need'>Need help? Contact +91 97-38-38-38-38</p>
          <div className="boxgetstart">
              <h1 className="boxfirstheadin">Get started with online ordering</h1>
              <p className="para44">Please keep the documents ready for a smooth signup</p>
              <div className="selectioncreate">
                  <div className='support'>
                      <div className='fssai'></div>
                      <p className="gridpara">FSSAI license copy <span>(apply now)</span></p>
                  </div>
                  <div className='gridparra'>
                      <div  className='copypan'></div>
                      <p className="gridpara">PAN card copy</p>
                  </div>
                  <div className='like'>
                      <div  className='apply'></div>
                      <p className="gridpara">Regular GSTIN<span  className='now'>(apply now)</span></p>
                  </div>
                  <div className='griddpara'>
                       <div className='bank'></div>
                      <p className="gridpara">Bank account details</p>
                  </div>
                  <div className='your'>
                      <div className='resturant'></div>
                      <p className="gridpara">Your restaurant menu</p>
                  </div>
                  <div className='dish'>
                      <div className='imgaedish'></div>
                      <p className="gridpara">Dish images for top 5 items</p>
                  </div>

              </div>
          </div>
        </div>
      </div>
    </nav>
  </div> */}
    

<form class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-5">
    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</form>

  </div>
  )
}

export default AddResto