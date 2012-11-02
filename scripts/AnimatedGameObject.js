/**
 * Displays an animated game object
 * @class 
 */
function AnimatedGameObject()
{
	/**
	 * Defines the current frame that is to be rendered
	 * @type Number 
	 */
	this.currentFrame = 0;
	
	/**
	 * Defines the frames per second of the animation
	 * @type Number 
	 */
	this.timeBetweenFrames = 0;
	
	/**
	 * The number of individual frames held by the image
	 * @type Number 
	 */
	this.frameCount = 0;
	
	/**
	 * Time until the next frame
	 * @type Number 
	 */
	this.timeSinceLastFrame = 0;
	
	/**
	 * The width of each individual frame
	 * @type Number 
	 */
	this.frameWidth = 0;
	
	/**
	 * Initialises this object
	 * @param image			The image to be displayed
	 * @param x				The position on the x axis
	 * @param y				The position on the y axis
	 * @param z				The depth
	 * @param frameCount	The number of animation frames in the image
	 * @param fps			The frames per second to animate this objec at 
	 */
	this.startupAnimatedGameObject = function(image, x, y, z, frameCount, fps)
	{
		if (frameCount <= 0) throw "frameCount cannot be <=0";
		if (fps <= 0) throw "fps cannot be <=0";
		
		this.startupVisualGameObject(image, x, y, z);
		this.currentFrame = 0;
		this.frameCount = frameCount;
		this.timeBetweenFrames = 1/fps;
		this.timeSinceLastFrame = this.timeBetweenFrames;
		this.frameWidth = this.image.width / this.frameCount;
	}
	
	/**
	 * Sets the animation to be played
	 * @param image			The image that contains the animation filmstrip
	 * @param frameCount	The number of animation frames in the image
	 * @param fps			The frames per second to animate this object at 
	 */
	this.setAnimation = function(image, frameCount, fps)
	{
		if (frameCount <= 0) throw "frameCount cannot be <= 0";
		if (fps <= 0) throw "fps cannot be <= 0";
		
		this.image = image;
		this.currentFrame = 0;
		this.frameCount = frameCount;
		this.timeBetweenFrames = 1/fps;
		this.timeSinceLastFrame = this.timeBetweenFrames;
		this.frameWidth = this.image.width / this.frameCount;
	}
	
	/**
	 * Draws this element to the back buffer
	 * @param dt		Time in seconds since the last frame
	 * @param context	The context to draw to
	 * @param xScroll	The global scrolling value of the x axis
	 * @param yScroll	The global scrolling value of the y axis 
	 */
	this.draw = function(dt, context, xScroll, yScroll)
	{
		var sourceX = this.frameWidth * this.currentFrame;
		context.drawImage(this.image, sourceX, 0, this.frameWidth, this.image.height, this.x - xScroll, this.y - yScroll, this.frameWidth, this.image.height);
		
		this.timeSinceLastFrame -= dt;
		if (this.timeSinceLastFrame <= 0)
		{
			this.timeSinceLastFrame = this.timeBetweenFrames;
			++this.currentFrame;
			this.currentFrame %= this.frameCount;
		}
	}
}

AnimatedGameObject.prototype = new VisualGameObject;