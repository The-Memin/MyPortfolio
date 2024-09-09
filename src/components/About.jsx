
export function About(){

    return(
        <section id="about" className="section undefined scroll-m-20 px-6 lg:px-0 w-full mx-auto container lg:max-w-screen-lg md:max-w-2xl">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white undefined">About Me</h2>
            <article className="flex flex-col items-center justify-center gap-12 text-gray-700 dark:text-gray-300 md:flex-row">
                <div className="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
                    <p>
                    Soy Guillermo, desarrollador web con más de un año de experiencia en frontend y conocimientos sólidos en backend. Trabajo con tecnologías como <strong>React, HTML5, CSS3, JavaScript, PHP y Node.js </strong>.
                    </p>
                    <p>
                    He creado sitios modernos, tiendas en línea y soluciones empresariales, enfocándome en funcionalidad y diseño. Uso herramientas como WordPress, GSAP y Tailwind CSS, y <strong> he colaborado en proyectos internacionales </strong>.
                    </p>
                    <p>
                    Me apasiona el aprendizaje constante y la integración de nuevas tecnologías. Mi objetivo es ofrecer <strong>soluciones que superen expectativas</strong>, brindando valor en cada proyecto que realizo.
                    </p>
                </div>
                <img src="./guillermo.jpeg" alt="" width="200" height="200" className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 "/>
            </article>
        </section>
    )
}