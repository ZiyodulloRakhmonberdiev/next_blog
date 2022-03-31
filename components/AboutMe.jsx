const AboutMe = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-6 mb-8'>
      <div className='block lg:flex  items-center justify-center w-full'>
        <div className='lg:mb-0 w-full lg:w-auto'>
          <img
            src='https://res.cloudinary.com/idaproject/image/upload/v1648716263/55_o7n0rk.jpg'
            alt="author's photo"
            width='100%'
            height='100%'
            className='align-middle rounded-lg mb-4'
          />
          <h1 className='transition duration-700 pt-4 text-center mb-8 cursor-pointer text-2xl lg:text-3xl font-semibold'>
            Full (MERN) Stack Developer
          </h1>
          <div>
            <p className='text-lg text-start text-gray-700 font-normal px-4 mb-2 lg:mb-4'>
              <b className='ml-0 mr-2'> Alias:</b> Ali
            </p>
            <p className='text-lg text-start text-gray-700 font-normal px-4 mb-2 lg:mb-4'>
              <b className='ml-0 mr-2'> Full name:</b> Ziyodullo Rakhmonberdiev
            </p>
            <p className='text-lg text-start text-gray-700 font-normal px-4 mb-2 lg:mb-4'>
              <b className='ml-0 mr-2'> Age:</b>
              {new Date().getFullYear() - 2001}
            </p>
            <p className='text-lg text-start text-gray-700 font-normal px-4 mb-2 lg:mb-4'>
              <b className='ml-0 mr-2'> Nationality:</b>
              Uzbek
            </p>
            <p className='text-lg text-start text-gray-700 font-normal px-4 mb-2 lg:mb-4'>
              <b className='ml-0 mr-2'> Languages:</b>
              Russian, Uzbek, English
            </p>
            <p className='text-lg text-start text-gray-700 font-normal px-4 mb-2 lg:mb-4'>
              <b className='ml-0 mr-2'> Location:</b>
              Moscow, Russia
            </p>
            <p className='text-lg text-start text-gray-700 font-normal px-4 mb-2 lg:mb-4'>
              <b className='ml-0 mr-2'> Services:</b>
              Full stack Developer
            </p>
            <p className='text-lg text-start text-gray-700 font-normal px-4 mb-2 lg:mb-4'>
              <b className='ml-0 mr-2'> Email:</b>
              ziyodullo808@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
