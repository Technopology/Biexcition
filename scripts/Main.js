/**
 * The Main JS file for the platform game 
 */

/**
 * Target Frames Per Second
 * @type Number 
 */
var FPS = 30;

/**
 * Time between frames
 * @type Number 
 */
var SECONDS_BETWEEN_FRAMES = 1 / FPS;

/**
 * A global reference to the GameObjectManager instance
 * @type GameObjectManager 
 */
var g_GameObjectManager = null;

/**
 * An image to be used by the application
 * @type Image 
 */
var g_image = new Image();
g_image.src = "images/jsplatformer3-smiley.jpg";

/** An image to be used by the application  
    @type Image
*/
var g_back0 = new Image();
g_back0.src = "images/Background1.png";
/** An image to be used by the application  
    @type Image
*/
var g_back1 = new Image();
g_back1.src = "images/jsplatformer4_b1.png";
/** An image to be used by the application  
    @type Image
*/
var g_back2 = new Image();
g_back2.src = "images/jsplatformer4_b2.png";

/**
 * An image of the soldier running left
 * @type Image 
 */
var g_run_left = new Image();
g_run_left.src = "images/DudeRunLeft.png";

/**
 * An image of the soldier running right
 * @type Image 
 */
var g_run_right = new Image();
g_run_right.src = "images/DudeRunRight.png";


/**
 * An image of the soldier idle facing left
 * @type Image 
 */
var g_idle_left = new Image();
g_idle_left.src = "images/DudeIdleLeft.png";

/**
 * An image of the soldier idle facing right
 * @type Image 
 */
var g_idle_right = new Image();
g_idle_right.src = "images/DudeIdleRight.png";


// The entry point of the application is set to the init function
window.onload = init;

/**
 * Application entry point 
 */
function init()
{
	new GameObjectManager().startupGameObjectManager();
}
