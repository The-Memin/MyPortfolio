
export function About(){

    return(
        <section id="about" className="section undefined scroll-m-20 px-6 lg:px-0 w-full mx-auto container max-w-md lg:max-w-screen-lg md:max-w-2xl">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white undefined">About Me</h2>
            <article className="flex flex-col items-center justify-center gap-12 text-gray-300 md:flex-row">
                <div className="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
                    <p>
                    I'm Guillermo, a web developer with over a year of frontend experience and solid backend knowledge. I work with technologies such as <strong>React, HTML5, CSS3, JavaScript, PHP, and Node.js </strong>.
                    </p>
                    <p>
                    I've built modern sites, online stores, and enterprise solutions, focusing on functionality and design. I use tools like WordPress, GSAP, and Tailwind CSS.
                    </p>
                    <p>
                    I'm passionate about constant learning and integrating new technologies. My goal is to offer <strong>solutions that exceed expectations</strong>, providing value in every project I undertake.
                    </p>
                </div>
                <img src="./guillermo.webp" alt="" width="200" height="200" className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 "/>
            </article>
        </section>
    )
}