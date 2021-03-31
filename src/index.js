import Phaser, {Game} from 'phaser'

const canvas = document.getElementById('game-canvas');
const config = {
  type: Phaser.WEB_GL,
  width: 400,
  height: 300,
  canvas,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: true
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

const game = new Game(config);

const preload = () => {

}

const create = () => {

}

const update = () => {

}
