import React from 'react';

const Configurations = () => {
  return (
    <div className="configurations">
      <h1>Configuraciones de Ghostscript</h1>
      <p>Ghostscript es un conjunto de herramientas que puede usar para convertir, rasterizar y manipular archivos PDF y PostScript. A continuación se detallan algunas configuraciones importantes que puedes usar para optimizar tus archivos PDF:</p>
      
      <ul>
        <li><strong>-dPDFSETTINGS=/screen:</strong> Optimiza el archivo PDF para su visualización en pantalla. Esta configuración reduce la resolución y el tamaño del archivo, ideal para documentos que se verán en monitores o proyectores.</li>
        <li><strong>-dPDFSETTINGS=/ebook:</strong> Optimiza el archivo PDF para libros electrónicos. Mantiene una buena calidad de imagen y texto, pero con un tamaño de archivo menor que la configuración de impresión.</li>
        <li><strong>-dPDFSETTINGS=/printer:</strong> Optimiza el archivo PDF para impresión. Esta configuración mantiene una alta calidad, adecuada para la mayoría de las impresoras.</li>
        <li><strong>-dPDFSETTINGS=/prepress:</strong> Optimiza el archivo PDF para preimpresión. Mantiene la máxima calidad, adecuada para la producción de alta calidad y la impresión profesional.</li>
        <li><strong>-sDEVICE=pdfwrite:</strong> Especifica el dispositivo de salida como PDF. Esta configuración es esencial para la creación de archivos PDF a partir de otros formatos.</li>
        <li><strong>-dCompatibilityLevel=1.4:</strong> Establece la versión del PDF de salida. Por ejemplo, 1.4 es compatible con Acrobat 5 y versiones posteriores.</li>
        <li><strong>-dEmbedAllFonts=true:</strong> Embebe todas las fuentes utilizadas en el documento en el archivo PDF, lo que asegura que se vea igual en todos los dispositivos.</li>
        <li><strong>-dSubsetFonts=true:</strong> Incrusta solo las partes de las fuentes que se utilizan en el documento. Esto puede reducir el tamaño del archivo PDF.</li>
        <li><strong>-dCompressFonts=true:</strong> Comprime las fuentes incrustadas para reducir el tamaño del archivo PDF.</li>
        <li><strong>-dDetectDuplicateImages=true:</strong> Detecta y elimina imágenes duplicadas en el archivo PDF, lo que puede reducir significativamente el tamaño del archivo.</li>
      </ul>
    </div>
  );
};

export default Configurations;
