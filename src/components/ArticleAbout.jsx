
const ArticleAbout = ({ principalText = "Hola", secondaryText= "que hace", urlImagen} ) =>{

    return(
        <article className="l-article-about">
            <header className="l-about-title">
                <h3 className="m-text-hidden"><span className="m-text-hidden__down gs-down">{principalText}</span></h3>
                <h2 className="m-text-hidden"><span className="m-text-hidden__down gs-down">{secondaryText}</span></h2>
            </header>
            <figure className='m-about-figure'>
                <img src={urlImagen}alt="" />
            </figure>
        </article>
    );
}

export default ArticleAbout;