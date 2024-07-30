import '../App.css';

function Hero() {
    return(
        <div className='h-screen'>
            <div className='bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-[90%] relative'>
                <div className='absolute top-[20%] left-[5%] flex flex-col items-center'>
                    <div className='font-extrabold text-5xl flex flex-col items-center'>
                        <p>Let us find your</p>
                        <p className='text-[#be123c]'>Forever Food.</p>
                    </div>
                    <div className='text-xl flex flex-col items-center my-5'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <p>Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                    </div>
                    <div>
                        <button className='bg-[#be123c] hover:bg-[#BE123C] text-white mx-2 px-10 py-3 rounded'>Search Now</button>
                        <button className='bg-white text-[#be123c] mx-2 px-10 py-3 rounded'>Know More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;