import "./css/pdfModal.css";
// import PDFViewer from "pdf-viewer-reactjs";
const PdfModal = ({ modal, setModal, link, title }) => {
  return (
    <div
      style={{
        display: modal ? "block" : "none",
      }}
      className="pdfModal"
    >
      <i
        className="fas fa-times cancel-icon fa-lg"
        onClick={() => {
          setModal(false);
        }}
      ></i>
      <div className="pdf-container">
        <iframe title={title} src={link} width="80%" height="90%"></iframe>
      </div>

      {/* <PDFViewer
        className="viewer"
        document={{
          url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
        }}
      /> */}
    </div>
  );
};

export default PdfModal;
