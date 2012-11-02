/**
 * A manager for all the objects in the game
 * @class 
 */
function GameObjectManager()
{
	/**
	 * An array of game objects
	 * @type Array 
	 */
	this.gameObjects = new Array();
	
	/**
	 * The time that the last frame was rendered
	 * @type Date 
	 */
	this.lastFrame = new Date().getTime();
	
	/**
	 * The global scrolling value of the x axis
	 * @type Number 
	 */
	this.xScroll = 0;
	
	/**
	 * The global scrolling value of the y axis
	 * @type Number 
	 */
	this.yScroll = 0;
	
	/**
	 * A reference to the ApplicationManager instance 
	 * @type ApplicationManager
	 */
	this.applicationManager = null;
	
	/**
	 * A reference to the canvas element
	 * @type HTMLCanvasElement 
	 */
	this.canvas = null;
	
	/**
	 * A reference to the 2D context of the canvas element
	 * @type CanvasRenderingContext2D 
	 */
	this.context2D = null;
	
	/**
	 * A reference to the in-memory canvas used as a back buffer
	 * @type HTMLCanvasElement 
	 */
	this.backBuffer = null;
	
	/**
	 * A reference to the backbuffer 2D context
	 * @type CanvasRenderingContext2D 
	 */
	this.backBufferContext2D = null;
	
	/**
	 * True if the canvas element is supported, false otherwise
	 * @type Boolean 
	 */
	this.canvasSupported = false;
	
	/**
	 * Initialises this object
	 * @return A reference to the initialised object 
	 */
	this.startupGameObjectManager = function()
	{
		// Set the global pointer to reference this object
		g_GameObjectManager = this;
		
		// Watch for keyboard events
		document.onkeydown = function(event) {g_GameObjectManager.keyDown(event);}
		document.onkeyup = function(event) {g_GameObjectManager.keyUp(event);}
		
		// Get references to the canvas elements and their 2D contexts
		this.canvas = document.getElementById("canvas");
		
		if (this.canvas.getContext)
		{
			this.canvasSupported = true;
			this.context2D = this.canvas.getContext("2d");
			this.backBuffer = document.createElement("canvas");
			this.backBuffer.width = this.canvas.width;
			this.backBuffer.height = this.canvas.height;
			this.backBufferContext2D = this.backBuffer.getContext("2d");
		}
		
		// Create a new ApplicationManager
		this.applicationManager = new ApplicationManager().startupApplicationManager();
		
		// Use setInterval to call the draw function
		setInterval(function() { g_GameObjectManager.draw();}, SECONDS_BETWEEN_FRAMES);
		
		return this;
	}
	
	/**
	 * The render loop 
	 */
	this.draw = function()
	{
		// Calculate the time since the last frame
		var thisFrame = new Date().getTime();
		var dt = (thisFrame - this.lastFrame) / 1000;
		this.lastFrame = thisFrame;
		
		if (this.canvasSupported)
		{
			// Clear the drawing contexts
			this.backBufferContext2D.clearRect(0, 0, this.backBuffer.width, this.backBuffer.height);
			this.context2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
			
			// Firstly update all of the game objects
			for (x in this.gameObjects)
			{
				if (this.gameObjects[x].update)
				{
					this.gameObjects[x].update(dt, this.backBufferContext2D, this.xScroll, this.yScroll);
				}
			}
			
			 // Then draw the game objects
	        for (x in this.gameObjects)
	        {
	            if (this.gameObjects[x].draw)
	            {
	                this.gameObjects[x].draw(dt, this.backBufferContext2D, this.xScroll, this.yScroll);
	            }
	        }
	        
			
			// Copy the back buffer to the displayed canvas
			this.context2D.drawImage(this.backBuffer, 0, 0);
		}
	}; // End of the draw function
	
	/**
	 * Adds a new GameObject to the gameObjects collection
	 * @param gameObject The object to add 
	 */
	this.addGameObject = function(gameObject)
	{
		this.gameObjects.push(gameObject);
		this.gameObjects.sort(function(a,b){ return a.zOrder - b.zOrder;});	
	};
	
	/**
	 * Removes a GameObject from the gameObjects collection
	 * @param gameObject The object to remove 
	 */
	this.removeGameObject = function(gameObject)
	{
		this.gameObjects.removeObject(gameObject);
	}
	
	/**
	 * Function to handle key down events
	 * @param event		The event being passed to this function 
	 */
	this.keyDown = function(event)
	{
		for (x in this.gameObjects)
		{
			if (this.gameObjects[x].keyDown)
			{
				this.gameObjects[x].keyDown(event);
			}
		}
	}
	
	/**
	 * Function to handle key up events
	 * @param event		The event being passed to this function 
	 */
	this.keyUp = function(event)
	{
		for (x in this.gameObjects)
		{
			if (this.gameObjects[x].keyUp)
			{
				this.gameObjects[x].keyUp(event);
			}
		}
	}
}
