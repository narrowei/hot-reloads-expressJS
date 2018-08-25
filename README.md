# hot-reloads-expressJs

The reason why I create this project is that when I was developing the expressJS as the back-end of my project, I have to restart the service every time I changed the code, that very annoys me.

## Why not choose the express generator

Although the express provides the express generator which already implements the automatic recompile feature, it also comes with the view, router, template engine which I don't need in my project.

## target users

This project is designed for people who just want create a simple expressJS server and need hot reloads feature to make life easier.

## Technologies

 * [Gulp](https://gulpjs.com/) - Automate and enhance your workflow
 * [nodemon](https://nodemon.io/) - reload, automatically
 * [browsersync](https://browsersync.io/) - Time-saving synchronised browser testing
 
## Installation Guide (client side)
   
### Project setup
```
 npm install npm install gulp-cli -g (if you haven't install gulp-cli)
 npm install
```
   
### Compiles and hot-reloads for development
```
 npm run serve
```


