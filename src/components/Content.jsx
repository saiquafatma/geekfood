import '../App.css';

function Content() {
    return(
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-10">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded-xl" alt="hero" src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
                        </h1>
                        <p class="mb-8 leading-relaxed text-[#4b5563] w-[70%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get in Touch</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Content;