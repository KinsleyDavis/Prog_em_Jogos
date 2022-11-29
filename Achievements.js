class Achievements extends Observer {
	
	onNotify(ev) {
		switch(ev) {
//			case Utils.EVENTS.BALL_TOUCHED_PADDLE:
            case Utils.EVENTS.SHIP_TOUCHED_OBSTACOL:
				console.log("Ship Touched Obstacols");
				break;
			default:
				break;
		}
	}
}