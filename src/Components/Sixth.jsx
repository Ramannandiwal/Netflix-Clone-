import React from 'react'
import SixthSubPart from './SixthSubPart'
import { nanoid } from 'nanoid'
function Sixth() {
     
  const data =[
    {
    Heading:"What is  Netflix ?",
    value:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
  },
  {
    Heading:"How much does Netflix cost ?",
    value:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts."
  },
  {
    Heading:"Where can I watch?",
    value:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles .You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
  },
  {
    Heading:"How do I cancel ?",
    value:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    Heading:"What can I watch on Netflix?",
    value:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
  },
  {
    Heading:"Is Netflix good for kids?",
    value:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
  }
 
];

  return (
    <div className=' bg-black flex flex-col justify-center items-center ' style={{borderBottom:"8px solid rgba(35,35,35,1)"}}>
         <h2 className=' font-bold text-white text-5xl text-center py-3'>Frequently Asked Questions</h2>
         {data.map((item) => (
        <SixthSubPart Heading={item.Heading} para={item.value} key={nanoid()} />
      ))}
   
          <button className=' my-5 bg-red-600 text-white p-2  w-80 rounded-md h-16 text-2xl'>Finish Sign Up {" >"}</button>

    </div>
  )
}

export default Sixth