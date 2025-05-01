import Phaser from "phaser";// dire que phaser est utilisé

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: {
      preload() {
        console.log("Preload");// affiche juste preload dans la console
      },
      create() {
        console.log("Create");// comme au dessus
      }
    },
    scale: {
      mode: Phaser.Scale.RESIZE, // permet à Phaser de réagir aux changements de taille
      autoCenter: Phaser.Scale.CENTER_BOTH // centre le jeu horizontalement et verticalement
    }
  };
  
  new Phaser.Game(config);// démarre le jeu et appel automatiquement preload et create