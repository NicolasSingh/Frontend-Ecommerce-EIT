import './banner.css'
import banner from "../../assets/image/banner/bannerp.png"

export const Banner = () => {
    return (
        
    <div className="main-banner">
    <figure className="banner-img-container">
        <picture>
            <source className="banner-img" srcSet={banner}
                media="(max-width: 768px)"/>
            <img className="banner-img" src={banner} alt="banner main"/>
        </picture>
    </figure>

    <div className="banner-info">
        <h1 className="banner-title">N & S Company <br/>
        </h1>
        <p className="banner-text">
        Somos una empresa fundada en la ciudad de Salta Capital, en el año 2016.

        Nuestro objetivo primordial es brindar una nueva experiencia de compra y soporte tecnologico basada en
        el asesoramiento personalizado.

        Tu confianza en nosotros está protegida por nuestra forma de entender tus necesidades y el valor de tu
        compra.
        </p>
    </div>
</div>
    )
}


export default Banner