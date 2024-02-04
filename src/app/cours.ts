export class Cours {
  id: number;
  nomDuCours: string;
  description: string;
  coursFormatPdf: File;
  coursFormatVideo: File;
  nomProfesseur: string;
  imageSrc:File; // Ajout de l'attribut pour le chemin de l'image'+
  constructor(id: number, nomDuCours: string, description: string, coursFormatPdf: File, coursFormatVideo: File, nomProfesseur: string, imageSrc:File) {
    this.id = id;
    this.nomDuCours = nomDuCours;
    this.description = description;
    this.coursFormatPdf = coursFormatPdf;
    this.coursFormatVideo = coursFormatVideo;
    this.nomProfesseur = nomProfesseur;
    this.imageSrc = imageSrc; // Initialisation de l'attribut pour le chemin de l'image
  }
}
