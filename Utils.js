class Utils {
	static EVENTS = {
		SHIP_TOUCHED_OBSTACOL: 'ShipTouchedObstacol',		
	}
    
    static reset(){
        score = 0
        obstaculos = []
        Player.x = 50
        Player.y = 200
        tempo = 0        
    }    

    static limpar(){   
        World.canvasContext.save();
        World.canvasContext.fillStyle = "white";
        World.canvasContext.fillRect(0,0,500,500);
        World.canvasContext.restore();   
    }

    static mostrarScore(){
        World.canvasContext.save();
        World.canvasContext.font = "30px Arial";
        World.canvasContext.fillStyle = "black";
        World.canvasContext.fillText('Score: '+ score, 300, 35);
        World.canvasContext.fillText('Fase: '+ fase, 100, 35);
        World.canvasContext.restore();   

      
    }

    static criarObstaculo(){
        let buraco = Math.random()
            if (buraco<0.2){
              obstaculos.push(new Component(50,500,"blue",600,100))
            }else
            if (0.2<buraco<0.4){
              obstaculos.push(new Component(50,100,"blue",600,0))
              obstaculos.push(new Component(50,500,"blue",850,200))
            }else
            if (0.4<buraco<0.6){
              obstaculos.push(new Component(50,200,"blue",600,0))
              obstaculos.push(new Component(50,500,"blue",850,300))
            }else 
            if (0.6<buraco<0.8){
              obstaculos.push(new Component(50,300,"blue",600,0))
              obstaculos.push(new Component(50,500,"blue",850,400))
            }else
            if (0.8<buraco){
              obstaculos.push(new Component(50,500,"blue",600,200))
            }
    }

    static desenhaObstaculos(a){
        World.canvasContext.save()
        World.canvasContext.fillStyle = a.color
        World.canvasContext.fillRect(a.x, a.y, a.width, a.height)
        World.canvasContext.restore()
      
    }

    static moverObstaculos(a){
        a.x = a.x - 2*(fase)
        if(a.contei==false && a.x<Player.x){score+=1;  a.contei = true;} 
        else if (a.contei==false && Player.crashWith(a)==true ){score-=1; a.contei=true}
        if(obstaculos.length>8){obstaculos.shift()}
      }

    static movimento(){

        Player.y += velocidadeY
        Player.x += velocidadeX
      
        velocidadeX=0;velocidadeY=0;
        World.canvasContext.fillStyle = Player.color
        World.canvasContext.fillRect(Player.x,Player.y,50,50)
        World.canvasContext.restore()
      
        //OBSTACULOS
        obstaculos.map(Utils.moverObstaculos)
        obstaculos.map(Utils.desenhaObstaculos)
        
    }

    
    static gameOver(){
        World.score -= 1000;
        World.canvasContext.save();  
        World.canvasContext.fillStyle = "black"
        World.canvasContext.fillRect(0,0,World.canvas.height,World.canvas.width)
        World.canvasContext.font = "50px Arial";
        World.canvasContext.fillStyle = "white";
        World.canvasContext.fillText("Game Over",125,250)
        World.canvasContext.font = "20px Arial";
        World.canvasContext.fillText("(Aperte espaço para resetar)",125,400)
        World.canvasContext.restore()
    }

	
	static colorRect(topLeftX, topLeftY, width, height, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.fillRect(topLeftX, topLeftY, width, height);
	}

	static colorCircle(centerX,centerY, radius, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.beginPath();
		World.canvasContext.arc(centerX,centerY, radius,0,Math.PI*2,true);
		World.canvasContext.fill();
	}

	static colorText(text,textX,textY,fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.fillText(text,textX,textY);
	}
	
	static clearScreen(color = 'black') {
		this.colorRect(0,0,World.canvas.width, World.canvas.height,color);
	}


    
}

