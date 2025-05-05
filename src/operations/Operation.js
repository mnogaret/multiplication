/**
 * Une opération aléatoire : génère un énoncé et vérifie la réponse.
 */
export default class Operation {
    /** Retourne la réponse correcte sous forme de chaîne */
    getResult() {
      return "0"; // à surcharger
    }
  
    /** Retourne une chaîne lisible de l'opération */
    format() {
        return "NOP"; // à surcharger
    }
  }
  