import React from "react";
import Slider from "react-slick";
import "./portafolio.css";

function Portafolio() {
    const datosPortafolio = [
        {
            tituloProyecto: "BASE DE DATOS",
            descripcionProyecto: "Creacion de Bases de Datos con SQL SERVER y visualizacion en PHPmyAdmin",
            urlVideoProyecto: "https://www.youtube.com/embed/WqbxQ1-mfkY"

        },
        {
            tituloProyecto: "BANCO",
            descripcionProyecto: "Se creo una aplicacion web que le permita al usuario verificar si su tarjeta de credito aplica para un prestamo bancario o y reporta si la cuenta esta reportada, Control de Sesiones para Usuarios y Operarios, Creacion de Bases de Datos,  Diseño personalizado",
            urlVideoProyecto: "https://www.youtube.com/embed/QnP9Ws1SY5Y"
        },
        {
            tituloProyecto: "HOTEL APP",
            descripcionProyecto: "Aplicacion web que le permita al usuario simular todo un proceso de reserva en un Hotel, ver las habitaciones y su disponibilidad junto a un ticket al finalizar todo el proceso.",
            urlVideoProyecto: "https://www.youtube.com/embed/9SSzd1HJiqM"
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div

                style={{

                }}
            >
                <div className="slick-dots slick-dots-portafolio" >
                    <ul style={{ margin: "0px" }}>
                        {dots}
                    </ul>
                </div>

            </div>
        ),
        customPaging: i => (
            <div
                className="custom-paging"
            >
                {i + 1}
            </div>
        )
    };
    return (
        <div className="portafolio-container">
            <p className="p-lg-4 portafolio-ttl">
                PORTAFOLIO
            </p>
            <div>
                <Slider {...settings} arrows={true} className="h-100 ">
                    {datosPortafolio.map((dato, index) => (
                        <div className="d-flex card-portafolio" key={index}>
                            <div className="col-xl-6 d-flex flex-column ">
                                <h1 className="proyect-title"
                                >{dato.tituloProyecto}
                                </h1>
                                <p className="description-proyecto">
                                    {dato.descripcionProyecto}
                                </p>
                            </div>
                            <div className="col-xl-6 h-100 p-2">
                                <iframe
                                    className="video-shadow mx-auto"
                                    // height="490"
                                    src={dato.urlVideoProyecto}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    ))

                    }



                </Slider>
            </div>
        </div>
    );
}
export default Portafolio;
