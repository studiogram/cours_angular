export class Etudiant {
  constructor(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
  }
  fullName() {
    return `${this.prenom} ${this.nom}`;
  }
}
