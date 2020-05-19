# React

v tomto príklade je react framework napojený priamo na index.html pomocu linkovania

```html
<!-- import React knižnice -->
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

vrámci tohto použítia je potrebné použíť babel ktorí dokáže prekompilovať teda preformatovať zápis jsx a es6 javascript do staršej verzie js...

```html
<!-- import React knižnice -->
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<!-- import babel knižnice ktorá dokaže integrovať jsx zapis  -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

vramci prikladu som vytvorila a načítala main.jsx subor s react skriptom

- použitie class components

```js
// klass komponenta
class MainTitle extends React.Component {
	constructor(props) {
		// super je to metoda ktora umoznuje prepojenie zasielania props do vnutra triedy t.j.
		// preposielam z Header funkcionalnej komponenty props.title ako children do vnutra class komponenty MainTitle
		super(props)
		this.props = props
	}

	render() {
		return <h1>{this.props.children}</h1>
	}
}

// toto je funkcionalna komponenta vytvorená v ES6 formáte cez props vchadza hotnota atributu
// title a je pouzita selektnutim druhej class komponenta MainTitle ktora prima cez props children hodnotu z title
class Header extends React.Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		return (
			<header>
				<MainTitle>{props.title}</MainTitle>
			</header>
		)
	}
}

const root = document.getElementById('root')
// vramci použitia reactu mame dostupný objekt ReactDOM v ktorom sa nachádza metoda render()
// ktorá očakáva dve vstupné hodnoty a to prvá čo chcem vložiť teda komponentu v jsx formate a
// druhá kam chcem vložiť t.j. selektnem si v index.html element root pomocou id root
ReactDOM.render(<Header title="exmaple text" />, root)
```

- použitie functional components

```js
const MainTitle = props => {
	return <h1>{props.children}</h1>
}

// toto je funkcionalna komponenta vytvorená v ES6 formáte cez props vchadza hotnota atributu
// title a je pouzita selektnutim druhej functionalna komponenta MainTitle
const Header = props => {
	console.log('props: ', props)

	return (
		<header>
			<MainTitle>{props.title}</MainTitle>
		</header>
	)
}

const root = document.getElementById('root')
// vramci použitia reactu mame dostupný objekt ReactDOM v ktorom sa nachádza metoda render()
// ktorá očakáva dve vstupné hodnoty a to prvá čo chcem vložiť teda komponentu v jsx formate a
// druhá kam chcem vložiť t.j. selektnem si v index.html element root pomocou id root
ReactDOM.render(<Header title="exmaple text" />, root)
```
