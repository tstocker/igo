# IGO

## Project :
Igo is a game project developed in HTML5, CSS3, javascript.

The first concept is to create the game in a one HTML file without using images.
Next step is to create a multiplayer online game.
And finaly why not develop an IA.

### Stories done :
 - draw board
 - add event to drow stones
 - draw stones
 - respect IGO rules
 - store play history
 
### Next stories :
 - add rollback actions
 - calculate game territory and captured stones
 
 Multiplayer stories 
 
 - use node sockets to make the game multiplayer online
 - add sessions and mongodb
 
 ## Installation
 
You can as you want download only igo.html and use it directly.
 
or

If you want to install the project.
You will need [nodejs](https://nodejs.org/en/).

In this doc i'm using [yarn](https://yarnpkg.com/en/) but you can use [npm](https://www.npmjs.com/) directly
 
 ```bash
 # with yarn
 yarn install
 ```

Now let's run the server on port 9001
 
```bash
# start server
yarn start
```
 
 