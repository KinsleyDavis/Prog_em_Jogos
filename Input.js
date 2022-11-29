class Input {
	static x = 0;
	static y = 0;
	
	static updateMousePos(evt) {
		//magic, do not touch
		var rect = World.canvas.getBoundingClientRect();
		var root = document.documentElement;
		MouseInput.x = evt.clientX - rect.left - root.scrollLeft;
		MouseInput.y = evt.clientY - rect.top - root.scrollTop;
	}


	static checarkey(e){
  if (key == 37 && Player.x>0) {velocidadeX = -2*(fase); }
  if (key == 39 && Player.x<450) {velocidadeX = 2*(fase); }
  if (key == 38 && Player.y>0) {velocidadeY = -2*(fase); }
  if (key == 40  && Player.y<450) {velocidadeY = 2*(fase); }
  if (key == 32) {aperteiEspaco = true; }

}


}