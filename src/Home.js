import picOfUs from './images/madison-and-spencer.jpeg';

const Home = () => {
    return ( 
    <section className="py-4 px-60 h-screen bg-slate-900">
        <div className="flex justify-around">
            <div className="pt-60">
                <p className="text-left font-sans text-slate-300 text-lg">Hello, my name is</p>
                <h1 className="pt-2 pb-6 text-left font-sans font-bold text-slate-300 text-7xl">Spencer Shaw</h1>
                <p className="text-left font-sans text-slate-300 text-md">
                    Undergraduate <span className="">computer science</span> student at <span>Clemson University</span><br/>
                    and incoming <span className="text-sky-400 font-bold">software engineer</span> at <span className="font-bold">Arista Networks.</span>
                </p>
            </div>
            <div className="pt-20">
                <img src={picOfUs} alt="My wife and I." className="rounded-xl transition ease-in-out delay-50 hover:scale-105 cursor-pointer"/>
            </div>
        </div>
    </section> 
    );
}
 
export default Home;