# React router

Para poder manejar las rutas en nuestra aplicación se utiliza el React router,
para ello necesitamos instalar la dependencia en el siguente comando:

npm install react-router-dom --save

# React router: BrowserRouter, Switch, Router:

React router tiene varios elementos, pero por el momento en este proyecto se
va a manejar esos 3. 

**BrowserRouter: Encapsula toda la navegación de la aplicación.
**Routes: Muestra con exactitud el primero que coincida con la ruta que estamos eligiendo.
**Route: Esas rutas se manejan gracias a Route, en la etiqueta de este
componente podemos decirde con las propiedades que sean exactas (exact) y que tengan un path específico (path="/") y que tengan el componente que le vamos a pasar ( element={<Home />} ).
