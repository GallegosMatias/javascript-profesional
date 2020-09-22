function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
  this.plugins.forEach(plugin => {
    plugin.run(this);
  });
};

MediaPlayer.prototype.play = function() {
  if(this.media.paused){
    this.media.play();
  }else {
    this.media.pause();
  }
}

MediaPlayer.prototype.mute = function() {
  this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
  this.media.muted = false;
}

MediaPlayer.prototype.unmuteMute = function () {
  this.media.muted ? this.media.muted = false : this.media.muted = true;
};


export default MediaPlayer;
