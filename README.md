# React Meme Generator

Create a web app with React that allows for users to generate and download memes using the https://memegen.link/ website.

## To Dos

It should allow the user to:

### Smaller Todos to start with:

[] Connect to the meme website and see how you can pull the data, is it the same as with Node?

[] understand which state variables do I need to create

[] Create inputs for the user to set the meme image

[] Enter text for the top and bottom of the meme

[]The top text box needs to have a label element associated with it containing the text Top text

[]The bottom text box needs to have a label element associated with it with the text Bottom text

[]Both text boxes should be empty when the page first loads

[] Preview the generated meme

[] The image element needs to have an html attribute set as follows: data-test-id="meme-image"

[] This image element should show a working image when the page first loads

[] Change the meme template (the background image)

[] The meme template selector element needs to have a label element associated with it containing the text Meme template

If the user follows the steps below, the doge meme template needs to be selected:
Click on the label of the meme template selector
Clear any existing value (eg. with a text box)
Type the text doge
Hit enter

[] Download the meme by clicking on a button

[] The button element needs to contain the text Download
Stretch goals:

[] Reduce the amount of times a meme image is generated (don't generate it every time a user presses a key). Instead, generate a new image when the user clicks a button

The button element needs to have an html attribute set as follows: data-test-id="generate-meme"

Use a #, ? and / in your meme text

Save a history of generated meme top text, bottom text, and meme photo type. This history should reappear on refresh of the application.

Make your application work offline (without a network connection) with the PWA capabilities built in to create-react-app. Any meme images that were generated while online in the application should be available to be generated again offline as well.

Create a favicon that identifies your app: (see Generating and Adding Favicons)
