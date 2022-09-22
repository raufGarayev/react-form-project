import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    Bütün işçilər
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Bonus alanlar
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Maaşı 1000 AZN-dən çox
            </button>
            
        </div>
    )
}

export default AppFilter;