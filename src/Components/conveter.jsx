import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import '../Components/conveter.css';

const Converter = () => { const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const convertToPDF = () => {
      if (!selectedFile) {
        alert('Please select a JPG file first.');
        return;
      }
  
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgData = event.target.result;
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save('converted.pdf');
      };
      reader.readAsDataURL(selectedFile);
    };
  
    return (
      <div className="container">
        <h1>Online JPG to PDF Converter</h1>
        <br />
        <br />
        <label className="custom-file-upload">
          <input type="file" accept="image/jpeg, image/png" onChange={handleFileChange} />
          Choose Image File
        </label>
        <br />
        <br />
        <br />
        <button onClick={convertToPDF}>
          Convert to PDF
        </button>
        <div className="instructions">
          <h3>How to Convert JPGs to PDF Free</h3>
          <p>1. Select the JPGs you want to change to PDF, then add the images to our JPG to PDF converter for conversion.</p>
          <p>2. Our online JPG to PDF converter turns your images into multiple PDFs or a single merged PDF in seconds.</p>
          <p>3. Download your converted PDF files and save them to your computer. After converting your images to PDFs, all remaining files will be deleted from our servers.</p>
        </div>
      </div>
    );};

export default Converter;
