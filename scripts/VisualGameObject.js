/**
 * Class for all visual elements that appear in the game
 * Extends the GameObject class
 * @class 
 */
function VisualGameObject()
{
	/**
	 * The image that will be displayed by this object
	 * @type Image 
	 */
	this.image = null;
	
	/**
	 * Draws this element to the back buffer
	 * @param dt		Time in seconds since the last frame 
	 * @param context	Context to draw to
	 * @param xScroll	xScroll
	 * @param yScroll	yScroll
	 */
	this.draw = function(dt, context, xScroll, yScroll)
	{
		context.drawImage(this.image, this.x - xScroll, this.y - yScroll);
	}
	
	/**
	 * Initialises this object
	 * @param image	The image to be displayed
	 * @param x		The x coordinate
	 * @param y		The y coordinate
	 * @param z		The z order
	 */
	this.startupVisualGameObject = function(image, x, y, z)
	{
		this.startupGameObject(x, y, z);
		this.image = image;
		return this;
	}
	
	/**
	 * Clean this object up 
	 */
	this.shutdownVisualGameObject = function()
	{
		this.shutdownGameObject();
	}
}
VisualGameObject.prototype = new GameObject;
