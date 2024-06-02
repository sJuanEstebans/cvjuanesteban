// https://react-slick.neostack.com/docs/example/responsive
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./pages.css";
import Slider from "react-slick";

function SkillsCard() {

    const datos = [
        {
            imgSrc: "https://i.pinimg.com/564x/4f/ae/6b/4fae6b6f2e6c311c3fbb279f8f70825a.jpg",
            titulo: "WORDPRESS - SHOPIFY",
            texto: "Desarrollo del Sitio Web, mantenimiento actualizado, Integracion de APIS, Optimizacion, E-Commerce, WooCommerce"
        },
        {
            imgSrc: "https://i.pinimg.com/originals/de/d0/bb/ded0bbdd8485e424327257405a86a884.gif",
            titulo: "SOPORTE DE APLICACIONES",
            texto: "Mantenimiento y Monitoreo de Aplicaciones, Resolucion de Problemas, Gestion de Tickets, Soporte y Capacitacion a Usuarios"

        },

        {
            imgSrc: "https://i.pinimg.com/564x/4d/4e/d5/4d4ed561b6b1240f1e06765e3b9a551f.jpg",
            titulo: "DESARROLLO DE COMPONENTES",
            texto: "Participación en el Ciclo de Desarrollo de Software, Control de Versiones con GitHub, HTML-CSS-BOOTSTRAP-JAVASCRIPT-REACT-PHP"
        },
        {
            imgSrc: "https://i.pinimg.com/564x/3d/3f/03/3d3f03288cd54e3c6df27df5914cf9ca.jpg",
            titulo: "HOST / DOMINIOS",
            texto: "Gestion y Configuracion de Host, Seguridad Web HTTPS, Puertos e Instalaciones"
        },
        {
            imgSrc: "https://i.pinimg.com/564x/79/c3/44/79c3449b4756c3ad251529bea35ddc7c.jpg",
            titulo: "BASES DE DATOS",
            texto: "Manejo de tablas relaciones, MYSQL, XAMPP"
        },
        {
            imgSrc: "https://i.pinimg.com/originals/7d/c6/c4/7dc6c4a72bee8112fd708a419116cbab.gif",
            titulo: "ANALISIS DE DATOS",
            texto: "Apoyar durante el ciclo del software el analizis y requisitos del cliente para la construcción optima del sistema"

        },
        {
            imgSrc: "https://i.pinimg.com/564x/a0/93/83/a09383e55cbdffaed3674863e57ded12.jpg",
            titulo: "DIGITADOR",
            texto: "80 PPM"
        },

        // Aquí puedes agregar más objetos si lo deseas
    ];
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        appendDots: dots => (
            <div

                style={{

                }}
            >
                <div className="slick-dots slick-dots-skills" >
                    <ul style={{ margin: "0px" }}>
                        {dots}
                    </ul>
                </div>

            </div>
        ),
        responsive: [
            {
                breakpoint: 1071,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 772,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container h-100">
            <div className="slider-wrapper">
                <Slider {...settings}>
                    {datos.map((dato, index) => (
                        <div className="card-skills" key={index}>
                            {dato.imgSrc && (
                                <div className="img-skills">
                                    <img
                                        className=""
                                        src={dato.imgSrc}
                                        alt={dato.titulo}
                                    />
                                </div>
                            )}
                            <div className="border-50"></div>
                            <div className="description-skills flex-column justify-content-center align-items-center">
                                <h5>{dato.titulo}</h5>
                                <p>{dato.texto}</p>
                            </div>
                        </div>
                    ))}

                </Slider>

            </div>
            <div className="d-flex flex-xs-column text-center aptitudes-skills">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <h4>IDIOMAS</h4>
                    <div className="d-flex justify-content-around txt-idiomskills">
                        <div className="w-100">
                            <p className="m-0" >Ingles</p>
                            <p>Basico</p>
                        </div>
                        <div className="w-100">
                            <p className="m-0">Korean</p>
                            <p className="">Intermedio</p>

                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <h4>SOFT SKILLS</h4>
                    <div className="d-flex text-align-left justify-content-around txt-idiomskills">
                        <div className="w-100">
                            <p className="m-0 ">Empatia</p>
                            <p className="">Pensamiento Crítico</p>
                        </div>
                        <div className="w-100">
                            <p className="m-0">Capacidad de Negociacion</p>
                            <p>Escucha Activa</p>

                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default SkillsCard;
