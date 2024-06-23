import React from 'react';

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/keirypdfoptimizer.pdf'; 
    link.download = 'keirypdfoptimizer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return ( 
      <div className='ordes'>
      <img className="keiry" src="./src/img/Keiry.png" alt="Keiry Logo" /> 
      <img className="logo" src="./src/img/logo.png" alt="pdf"  /> 
      <img className="logo" src="./src/img/logo.png" alt="pdf" /> 
      <img className="logo" src="./src/img/logo.png" alt="pdf" /> 
      <img className="logo" src="./src/img/logo.png" alt="pdf" /> 
      

      <div className="contenedor">
        <h1 className="textt">
          En la actualidad, el formato PDF es uno de los más utilizados en el mundo digital para compartir y almacenar documentos. Sin embargo, la creciente cantidad de archivos PDF que se generan y almacenan a diario puede generar problemas de almacenamiento, transferencia y acceso a la información contenida en ellos. Por esta razón, se hace necesario contar con herramientas que permitan optimizar el tamaño de los archivos PDF sin comprometer la calidad de la información contenida en ellos.
          <br />
          <br />
          Se presenta el software "KEIRY PDF OPTIMIZER", una herramienta que permite reducir el tamaño de archivos PDF de forma eficiente y sin pérdida de calidad.
        </h1>

        {/* Botón de descarga */}
       <button onClick={handleDownload} className="download-button">
        Descargar KeiryPdfOptimizer
      </button>
      </div>
       

      <div className="contenedor-imagenes">
        <img src="./src/img/k1.png" alt="Imagen 1" />
        <img src="./src/img/k2.png" alt="Imagen 2" />
        <img src="./src/img/k3.png" alt="Imagen 3" />
      </div>
    </div>
  );
};

export default Home;
