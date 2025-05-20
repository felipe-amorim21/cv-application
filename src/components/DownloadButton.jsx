import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadButton = () => {
  const handleDownload = async () => {
    const cvElement = document.getElementById("cv-content");
    const canvas = await html2canvas(cvElement);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("curriculo.pdf");
  };

  return (
    <button onClick={handleDownload} className="btn-download">
      Baixar Currículo
    </button>
  );
};

export default DownloadButton;