import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return(
        <div className="app-info">
            <h1>İşçilərin hesabatı</h1>
            <h2>İşçilərin sayı: {employees}</h2>
            <h2>Bonus alan: {increased}</h2>
        </div>
    )
}

export default AppInfo;