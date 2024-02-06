import Image from "next/image";
import Profile from "../../public/assets/conor.jpg"
import Feature from "./components/feature"
export default function Home() {
  return (
    <main className="bg-[#2A2A2A] flex h-[200vh] ">
        <div className="p-5 flex flex-col items-center fixed  justify-around h-[100vh]" >
          <div className="">
          <img src="/assets/home.svg" alt="" className="h-10 mb-24 mt-24"  />
          </div>
          <div>
          <img src="/assets/files.svg" alt=""  className="h-8" />
          </div>
          <div>
          <img src="/assets/predict.svg" alt="" className="h-8" />
          </div>
          <div>
          <img src="/assets/profile.svg" alt="" className="h-8" />
          </div>
          <div>
          <img src="/assets/logout.svg" alt="" className="h-7 mb-36" />
          </div>
        </div>
        <div className=" bg-white w-[93vw] rounded-tl-3xl rounded-bl-3xl ml-[6rem] my-6 px-10">
          <div className="flex justify-between  pt-16 items-center">
            <h1 className="text-4xl ">WELCOME TO FILEZY</h1>
            <div className="bg-[#DFBDFE] rounded-full h-[5rem] w-[5rem] flex justify-center items-center">
              <Image src={Profile} alt="" className="rounded-full h-[4.5rem] w-[4.5rem]"/>
            </div>
          </div>
          <div className="my-10 flex justify-between">
            <div className="h-[40vh] w-[35vw] rounded-2xl bg-[#D9D9D9] flex items-center justify-center text-3xl"> Graph</div>
            <div className="h-[40vh] w-[16vw] bg-[#DFBDFE]  rounded-2xl flex flex-col items-start  p-8 ">
              <h1 className="text-2xl mx-auto">Records</h1>
              <ul className="mt-5 overflow-auto" >
                <li className="flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-black"></div>Blood Report</li>
                <li className="flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-black"></div>Blood Report</li>
                <li className="flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-black"></div>Blood Report</li>
                
                
              </ul>
            </div>

            
            <div className="h-[40vh] w-[16vw] bg-[#8CF8B7]  rounded-2xl flex flex-col items-start  p-8 ">
              <h1 className="text-2xl mx-auto">History</h1>
              <ul className="mt-5 overflow-auto" >
                <li className="flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-black"></div>s</li>
                <li className="flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-black"></div>s</li>
                <li className="flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-black"></div>s</li>
                
                
              </ul>
            </div>
            <div className="h-[40vh] w-[16vw] bg-[#FFF7AD]  rounded-2xl flex flex-col items-start  p-8 ">
              <h1 className="text-2xl mx-auto">Records</h1>
              <ul className="mt-5 overflow-auto" >
                <li className="flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-black"></div>B</li>
                <li className="flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-black"></div>B</li>
                <li className="flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-black"></div>B</li>
                
                
              </ul>
            </div>
            
          </div>
          <Feature heading="Prediction" btntext="TEST" imgurl="/assets/prediimg.svg" rev={false} btnclr="[#8CF8B7]" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab doloremque nihil corporis incidunt similique sit debitis eius, unde hic eum earum deleniti fugit, id ipsum officia? Hic, animi enim." />
          <Feature heading="File Security" btntext="TEST" imgurl="/assets/fileimg.svg" rev={true} btnclr="[#DFBDFE]" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab doloremque nihil corporis incidunt similique sit debitis eius, unde hic eum earum deleniti fugit, id ipsum officia? Hic, animi enim." />
        </div>
    </main>
  );
}
