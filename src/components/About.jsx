import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Anjali Joshi, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Greetings! I'm Anjali Joshi, a dedicated software engineer currently in my fourth year at Inderprasath Engineering College. I've built a strong foundation in web development, honing my skills in HTML, CSS, and JavaScript and React. My primary objective is to translate imaginative concepts into functional, user-friendly websites that leave a memorable impact.</p>
<br/>
<p>I'm committed to ongoing learning, especially as I progress through my college education. I eagerly embrace emerging technologies and stay updated with industry trends, understanding that every project is an opportunity for personal and professional growth.</p>
<br/>

<p>I invite you to explore my portfolio to see some of my recent projects. If you're interested in collaborating or have a project concept in mind, I'm always open to new opportunities. Let's work together to turn your vision into a vibrant digital reality!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
