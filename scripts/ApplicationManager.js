/**
 * The ApplicationManager is used to manage the application itself
 * @class
 */
function ApplicationManager() {
	/**
	 * Initialises this object
	 * @return	A reference to the initialised object
	 */
	this.startupApplicationManager = function() {
		/* This is for the bounce demo
		//this.bounce = new Bounce().startupBounce(g_image);
		*/

		/* This is for the parallax demo
		this.startupGameObject();
		this.background3 = new RepeatingGameObject().startupRepeatingGameObject(g_back2, 0, 100, 3, 600, 320, 1);
		this.background2 = new RepeatingGameObject().startupRepeatingGameObject(g_back1, 0, 100, 2, 600, 320, 0.75);
		this.background = new RepeatingGameObject().startupRepeatingGameObject(g_back0, 0, 0, 1, 600, 320, 0.5);

		*/
		// This will display the player running
		//this.runner = new AnimatedGameObject().startupAnimatedGameObject(g_run, 300, 200, 1, 12, 20);

		// This will display the idle sprite
		//this.bouncer = new AnimatedGameObject().startupAnimatedGameObject(g_idle, 100, 200, 1, 6, 20);

		this.playerA = new ClonePlayer().startupClonePlayer(0, 430, 0, g_GameObjectManager.canvas.width / 2, 0, g_GameObjectManager.canvas.height);
		this.playerB = new ClonePlayer().startupClonePlayer(g_GameObjectManager.canvas.width / 2, 430, g_GameObjectManager.canvas.width / 2, g_GameObjectManager.canvas.width, 0, g_GameObjectManager.canvas.height);

		//this.background3 = new RepeatingGameObject().startupRepeatingGameObject(g_back2, 0, 100, 3, 600, 320, 1);
		//this.background2 = new RepeatingGameObject().startupRepeatingGameObject(g_back1, 0, 100, 2, 600, 320, 0.75);
		this.background = new RepeatingGameObject().startupRepeatingGameObject(g_back0, 0, 0, 1, 1280, 720, 0.5);
		//this.runner = new Player().startupPlayer();
		return this;

	}
	/**
	 * Updates the object
	 * @param dt		The time since the last frame in seconds
	 * @param context	The drawing context
	 * @param xScroll	The global scrolling value of the x axis
	 * @param yScroll	The global scrolling value of the y axis
	 */
	/*this.update = function(dt, context, xScroll, yScroll)
	 {
	 g_GameObjectManager.xScroll += 50 * dt;
	 }*/
}

//ApplicationManager.prototype = new GameObject;
