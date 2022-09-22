import './employees-add-form.css'


const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Yeni işçi əlavə et</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="İşçinin adı?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Maaş $?" />

                <button type="submit"
                        className="btn btn-outline-light">Əlavə et</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;