"use strict";

const frameTime = 1000/12;

/**
 * @module exports the Player class
 */
module.exports = exports = Player;

/**
 * @constructor Player
 * Creates a new player object
 * @param {Postition} position object specifying an x and y
 */
function Player(position) {
  this.state = "idle";
  this.moving = false;
  this.x = position.x;
  this.y = position.y;
  this.width  = 60;
  this.height = 60;
  this.spritesheet  = new Image();
  this.spritesheet.src = encodeURI('assets/PlayerSprite0.png');
  this.timer = 0;
  this.frame = 0;
  this.alive = true;
  this.completedLevel = false;
  this.lives = 3;
}

/**
 * @function updates the player object
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 */
Player.prototype.update = function(time,log1,log2) {
  if(this.x >=660) {
    this.completedLevel = true;
  }
  //TODO
  switch(this.state) {
    case "idle":
      this.timer += time;
      if(this.timer > 1000/4) {
        this.timer = 0;
        this.frame += 1;
        if(this.frame > 3) this.frame = 0;
      }
      break;
   
    case "jumpForward":
      this.moving = true;
      this.timer += time;
      if(this.timer > frameTime) {
        this.timer = 0;
        this.frame += 1;
        this.x += 15;
        if(this.frame > 3) {
          this.frame = 0;
          this.state = "idle";
          this.moving = false;
        }
      }
      break;
	   case "jumpBack":
      this.moving = true;
      this.timer += time;
      if(this.timer > frameTime) {
        this.timer = 0;
        this.frame += 1;
        this.x -= 15;
        if(this.frame > 3) {
          this.frame = 0;
          this.state = "idle";
          this.moving = false;
        }
      }
      break;
    case "up":
      this.moving = true;
      this.timer += time;
      if(this.timer > frameTime) {
        this.timer = 0;
        this.frame += 1;
        this.y -= 10;
        if(this.frame > 3) {
          this.frame = 0;
          this.state = "idle";
          this.moving = false;
        }
      }
      break;
    case "down":
      this.moving = true;
      this.timer += time;
      if(this.timer > frameTime) {
        this.timer = 0;
        this.frame += 1;
        this.y += 10;
        if(this.frame > 3) { 
          this.frame = 0;
          this.state = "idle";
          this.moving = false;
        }
      }
      break;
  }
}

 Player.prototype.collide = function(car) {
 //TODO 
}

/**
 * @function renders the player into the provided context
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 * {CanvasRenderingContext2D} ctx the context to render into
 */
Player.prototype.render = function(time, ctx) {
  switch(this.state) {
    case "idle":
      ctx.drawImage(
        // image
        this.spritesheet,
        // source rectangle
        this.frame * 64, 64, this.width, this.height,
        // destination rectangle
        this.x, this.y, this.width, this.height
      );
      break;
    case "jumpForward":
      ctx.drawImage(
        // image
        this.spritesheet,
        // source rectangle
        this.frame * 64, 0, this.width, this.height,
        // destination rectangle
        this.x, this.y, this.width, this.height
      );
      break;
	    case "jumpBack":
      ctx.drawImage(
        // image
        this.spritesheet,
        // source rectangle
        this.frame * 64, 0, this.width, this.height,
        // destination rectangle
        this.x, this.y, this.width, this.height
      );
      break;
    case "up":
      ctx.drawImage(
        // image
        this.spritesheet,
        // source rectangle
        this.frame * 64, 0, this.width, this.height,
        // destination rectangle
        this.x, this.y, this.width, this.height
      );
      break;
    case "down":
      ctx.drawImage(
        // image
        this.spritesheet,
        // source rectangle
        this.frame * 64, 0, this.width, this.height,
        // destination rectangle
        this.x, this.y, this.width, this.height
      );
      break;
  
  }
}













