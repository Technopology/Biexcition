/**
 * A class to represent the player on the screen
 * @class 
 */
function ClonePlayer()
{
	/**
	 * The speed the player moves at
	 * @type Number 
	 */
	this.speed = 75;
	
	/**
	 * True if the player is moving left, false otherwise
	 * @type Boolean 
	 */
	this.left = false;
	
	/**
	 * True if the player is moving right, false otherwise
	 * @type Boolean 
	 */
	this.right = false;
	
	/**
	 * Left boundary value
	 * @type Number
	 */
	this.leftBound = 0;
	
	/**
	 * Right boundary value
	 * @type Number 
	 */
	this.rightBound = 0;
	
	/**
	 * Top boundary value
	 * @type Number 
	 */
	this.topBound = 0;
	
	/**
	 * Bottom bboundary value
	 * @type Number 
	 */
	this.bottomBound = 0;
	
	
	/**
	 * Initialises this object 
	 */
	this.startupClonePlayer = function(startX, startY, leftBound, rightBound, topBound, bottomBound)
	{
		// Set the bounds of where the player may move
		this.leftBound = leftBound;
		this.rightBound = rightBound;
		this.topBound = topBound;
		this.bottomBound = bottomBound;
		
		this.startupAnimatedGameObject(g_idle_left, startX, startY, 4, 6, 20);
		return this;
	}
	
	/**
	 * Called when a key is pressed
	 * @param event Event object 
	 */
	this.keyDown = function(event)
	{
		var updateRequired = false;
		
		// Left
		if (event.keyCode == 37 && !this.left)
		{
			this.left = true;
			updateRequired = true;
			
		}
		
		// Right
		if (event.keyCode == 39 && !this.right)
		{
			this.right = true;
			updateRequired = true;
		}
		
		if(updateRequired)
		{
			this.updateAnimation();
		}
		
	}
	
	/**
	 * Called when a key is released
	 * @param event Event object 
	 */
	this.keyUp = function(event)
	{
		// Left
		if (event.keyCode == 37)
		{
			this.left = false;
			this.setAnimation(g_idle_left, 6, 20);
		}
		
		// Right
		if (event.keyCode == 39)
		{
			this.right = false;
			this.setAnimation(g_idle_right, 6, 20)
		}
		
		this.updateAnimation();		

	}
	
	/**
	 * Updates the current animation depending on the movement
	 * of the player.  This accounts for the fact that both the
	 * left and right arrow keys can be pressed at the same time. 
	 */
	this.updateAnimation = function()
	{
		if (this.right && this.left)
		{
			this.setAnimation(g_idle_left, 6, 20);
		}
		else if (this.right)
		{
			this.setAnimation(g_run_right, 12, 20);
		}
		else if (this.left)
		{
			this.setAnimation(g_run_left, 12, 20);
		}
	}
	
	/**
	 * Updates the object
	 * @param dt		The time since the last frame in seconds
	 * @param context	The drawing context
	 * @param xScroll	The global scrolling value of the x axis
	 * @param yScroll	The global scrolling value of the y axis 
	 */
	this.update = function(dt, context, xScroll, yScroll)
	{
		if (this.left)
			this.x -= this.speed * dt;
		if (this.right)
			this.x += this.speed * dt;
			

		if (this.x > this.rightBound - this.frameWidth)
			this.x = this.rightBound - this.frameWidth;
		if (this.x < this.leftBound)
			this.x = this.leftBound;
	}
}

ClonePlayer.prototype = new AnimatedGameObject;