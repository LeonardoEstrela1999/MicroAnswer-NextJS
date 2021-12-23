# MicroAnswer-NextJS
NextJS app that answers the user's questions using the Micro Answer API.
The following steps are a brief tutorial for those who wish to test the app.

## Setup
For this project to work, it is required that you have Node.js 12.22.0 or later installed.

The first thing you should do it clone the repo into your computer, using the following command:
```
git clone https://github.com/LeonardoEstrela1999/MicroAnswer-NextJS.git
```
You must now install NextJS. For this, run the following command (make sure that you are inside your project's root folder):


npm:
```
npm install next
```

yarn:
```
yarn add next
```
This could take a while.

After it is completed, you should edit the .env file inside the project, which contains the key for the Micros Answer API.

Right now, it should look like this:

```
MICROANSWER_KEY=YOUR_KEY
```

If you are unsure how to get the key, I advise you to follow their official documentation:

https://m3o.com/getting-started

Finally, just run the following command (make sure that you are inside your project's root folder):
npm:
```
npm run dev
```

yarn:
```
yarn dev
```
The app should now be accessible through your browser. Check your terminal to see in which port the website is available.

## How to use the app

The app is extremely simple. In order to search for something, you have two options: via the user interface, or via URL. 
Both should yeld similar results. 

All the results come from the Micro Answer REST Api. If something cannot be found, it is a problem on their end.

https://m3o.com/answer

On a more technical note, the search via user interface uses static rendering, while the URL search uses server-side rendering.

If you are interested in learning more, I recommend NextJS's official documentation: 

https://nextjs.org/docs/basic-features/pages

## Internationalization

This app is available in portuguese by default. In order to use it in english, you will have to add '/en' to the url when you are performing a search.

For instances: 
```
your_website.com/en/
```
Or, if you are performing a URL search:
```
your_website.com/en/your_search
```