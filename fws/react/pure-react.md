
- Create a folder structure: 

<project-name>/src

- Add an `index.html` file inside;

- Open on VSCode;

- Add html content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@16.8.6/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js"></script>
    <script>
    	const App = () => {
            return React.createElement("div", {}, 
                React.createElement("h1", {}, "React is runnning...") );
        };
        ReactDOM.render(
            React.createElement(App),
            document.getElementById('root')
        );
    </script>
</body>
</html>
```

- Create index.js:


