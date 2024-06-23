import React from 'react';

const Ghostscript = () => {
  return (
    <div className="ghostscript">
      <h1>¿Qué es Ghostscript?</h1>
      <img className="logo2" src="./src/img/ghost.png" alt="ghostscript" /> 
      <img className="logo2" src="./src/img/ghost.png" alt="ghostscript" /> 
      <img className="logo2" src="./src/img/ghost.png" alt="ghostscript" /> 
      <img className="logo2" src="./src/img/ghost.png" alt="ghostscript" /> 
      <img className="logo2" src="./src/img/ghost.png" alt="ghostscript" /> 
      <p>
        Ghostscript es un intérprete de lenguajes de descripción de página PostScript y PDF. Fue desarrollado por primera vez en 1986 y ha sido una herramienta esencial para la conversión y manipulación de archivos PDF y PostScript.
      </p>

      <h1>¿Cómo Funciona Ghostscript?</h1>
      <p>
        Ghostscript funciona interpretando comandos PostScript y PDF para realizar diversas tareas como la conversión de archivos a diferentes formatos, la renderización de documentos para su visualización en pantalla y la impresión, y la optimización de archivos PDF para reducir su tamaño. Algunas de sus capacidades incluyen:
      </p>
      <ul>
        <li>Convertir archivos PostScript a PDF y viceversa.</li>
        <li>Renderizar archivos PDF y PostScript en varios dispositivos de salida, como impresoras y monitores.</li>
        <li>Optimizar archivos PDF reduciendo su tamaño sin perder calidad.</li>
        <li>Manipular archivos PDF, como unir, dividir y rotar páginas.</li>
      </ul>

      <h1>Licencia</h1>
      <p>
        Ghostscript es un software de código abierto distribuido bajo la licencia GNU Affero General Public License (AGPL). Esto significa que puedes usar, modificar y distribuir Ghostscript libremente, siempre que también distribuyas el código fuente de tus modificaciones bajo la misma licencia.
      </p>

      <h1>Características Clave</h1>
      <ul>
        <li><strong>Compatibilidad Amplia:</strong> Ghostscript es compatible con una amplia variedad de formatos de archivo y dispositivos de salida, lo que lo hace muy versátil.</li>
        <li><strong>Calidad de Renderizado:</strong> Produce una salida de alta calidad tanto para la visualización en pantalla como para la impresión.</li>
        <li><strong>Optimización de PDF:</strong> Ofrece opciones avanzadas para reducir el tamaño de los archivos PDF sin comprometer la calidad.</li>
        <li><strong>Manipulación de Archivos:</strong> Permite realizar operaciones complejas en archivos PDF, como unir varios documentos en uno solo, dividir un documento en varias partes, y más.</li>
      </ul>

      <h1>Comandos Útiles de Ghostscript</h1>
      <p>A continuación, se muestran algunos comandos útiles que se pueden usar con Ghostscript:</p>
      <ul>
        <li><code>gs -dNOPAUSE -sDEVICE=pdfwrite -sOUTPUTFILE=output.pdf input.ps</code>: Convierte un archivo PostScript (PS) a PDF.</li>
        <li><code>gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -o output.pdf input.pdf</code>: Optimiza un archivo PDF para hacerlo compatible con Acrobat 5.0 y versiones posteriores.</li>
        <li><code>gs -sDEVICE=pdfwrite -dPDFSETTINGS=/screen -o output.pdf input.pdf</code>: Reduce el tamaño del archivo PDF para visualización en pantalla.</li>
        <li><code>gs -sDEVICE=pdfwrite -dPDFSETTINGS=/printer -o output.pdf input.pdf</code>: Optimiza el archivo PDF para impresión.</li>
      </ul>

      <h2>Recursos Adicionales</h2>
      <p>Para más información sobre Ghostscript, puedes visitar los siguientes recursos:</p>
      <ul>
        <li><a href="https://www.ghostscript.com/">Sitio Oficial de Ghostscript</a></li>
        <li><a href="https://www.gnu.org/licenses/agpl-3.0.html">Licencia AGPL</a></li>
        <li><a href="https://ghostscript.readthedocs.io/">Documentación de Ghostscript</a></li>
      </ul>
    </div>
  );
};

export default Ghostscript;
