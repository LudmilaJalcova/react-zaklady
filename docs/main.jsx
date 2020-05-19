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
