import "./app-filter.css";

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: "Bütün işçilər", colored: false},
        {name: 'rise', label: "Bonus alanlar", colored: false},
        {name: 'increase', label: "Maaşı 1000 AZN-dən çox", colored: true}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' :'btn-outline-light'

        return (
            <button 
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;