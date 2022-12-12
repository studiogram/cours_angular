/* Attention, nécessite un serveur (possible via live reload) */

import { Etudiant } from "./etudiant.js";

const tartampion = new Etudiant("Tar", "Tampion"); // 'Tar' est un argument
console.log(tartampion.fullName());
const machinchose = new Etudiant("Machin", "Chose");
console.log(machinchose.fullName());
