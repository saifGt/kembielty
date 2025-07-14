import { useState } from "react";
import NavBar from "../Components/NavBar";
import "../styles/Upload.css";

export default function UploadPage({ onBack, userName }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        setUploadedFile(file);
        console.log('File uploaded:', file.name);
      } else {
        alert('Veuillez sélectionner une image valide');
      }
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setUploadedFile(file);
        console.log('File uploaded:', file.name);
      } else {
        alert('Veuillez sélectionner une image valide');
      }
    }
  };

  const handleUploadClick = () => {
    document.getElementById('file-input').click();
  };

  return (
    <div className="page-container">
      {/* NavBar pour utilisateurs connectés */}
      <NavBar onLogout={onBack} userName={userName} currentPage="upload" />

      {/* Contenu principal de la page upload */}
      <section className="upload-page-section">
        <div className="upload-page-container">
          <div className="upload-content">
            {/* Bouton Upload lettre */}
            <div className="upload-header">
              <button className="upload-lettre-btn">
                Upload lettre
              </button>
            </div>

            {/* Zone de drop principale */}
            <div 
              className={`upload-drop-zone ${isDragOver ? 'drag-over' : ''} ${uploadedFile ? 'has-file' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleUploadClick}
            >
              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="file-input-hidden"
              />
              
              <div className="upload-drop-content">
                {uploadedFile ? (
                  <div className="uploaded-file-info">
                    <div className="file-icon">📄</div>
                    <p className="file-name">{uploadedFile.name}</p>
                    <p className="file-size">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    <button 
                      className="change-file-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setUploadedFile(null);
                      }}
                    >
                      Changer de fichier
                    </button>
                  </div>
                ) : (
                  <div className="upload-placeholder">
                    {/* Icône cloud avec flèche */}
                    <div className="cloud-upload-icon">
                      <svg viewBox="0 0 24 24" fill="none" className="cloud-icon">
                        <path 
                          d="M20 15c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-6c-3.31 0-6 2.69-6 6h8c0-3.31-2.69-6-2-6z" 
                          fill="currentColor"
                        />
                        <path 
                          d="M12 14l-4-4h3V6h2v4h3l-4 4z" 
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    
                    <div className="upload-text">
                      <p className="upload-main-text">
                        Cliquez pour télécharger ou glissez-déposez
                      </p>
                      <p className="upload-sub-text">
                        PNG, JPG ou PDF (max. 10MB)
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Actions après upload */}
            {uploadedFile && (
              <div className="upload-actions">
                <button className="process-btn">
                  Traiter le document
                </button>
                <button className="save-btn">
                  Sauvegarder
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}