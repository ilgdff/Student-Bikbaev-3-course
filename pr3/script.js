function App() {
    const firstName = "Ильгис";
    const lastName = "Бикбаев";
    const age = 18;

    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [result, setResult] = React.useState(0);

    const add = () => setResult(num1 + num2);
    const subtract = () => setResult(num1 - num2);
    const multiply = () => setResult(num1 * num2);
    const divide = () => setResult(num1 / num2);

    const people = [
        { id: 1, name: 'Игорь Иванов', year: 1990, profession: 'Инженер', photo: 'https://ecodent30.ru/upload/resize_cache/iblock/5d3/550_650_2/q4nfxs008r7txhtqloz31ajibm0lttll.jpg' },
        { id: 2, name: 'Виталий Петров', year: 1985, profession: 'Врач', photo: 'https://ecodent30.ru/upload/resize_cache/iblock/5e5/550_650_2/x0d9i3smki81sn7fbo6chpt7qkon5pr3.jpg' },
        { id: 3, name: 'Сергей Луконин', year: 1992, profession: 'Учитель', photo: 'https://ecodent30.ru/upload/resize_cache/iblock/d2b/550_650_2/56n34jw6yqvtk870ktvi6a47mitrl1lt.jpg' },
        { id: 4, name: 'Анна Смирнова', year: 1988, profession: 'Дизайнер', photo: 'https://ecodent30.ru/upload/iblock/1ae/y7wk91o7xhz257yj5qfkxdn1kr6qt6p7.jpg' },
        { id: 5, name: 'Мария Кузнецова', year: 1995, profession: 'Программист', photo: 'https://ecodent30.ru/upload/resize_cache/iblock/a9e/550_650_2/n0xigxsorfhyh5x7w10bnrxk40114nxj.jpg' },
    ];

    const [filter, setFilter] = React.useState('');
    const [sortBy, setSortBy] = React.useState('name');

    const filteredPeople = people
        .filter(person => 
            person.profession.toLowerCase().includes(filter.toLowerCase()) || 
            person.year.toString().includes(filter)
        )
        .sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'year') {
                return a.year - b.year;
            } else {
                return a.profession.localeCompare(b.profession);
            }
        });

    return (
        <div className="container text-center mt-5">
            <h1 className="text-primary">Привет, {firstName} {lastName}!</h1>
            <p className="text-secondary">Возраст: {age}</p>

            <div className="mt-4">
                <h2>Калькулятор</h2>
                <div className="input-group mb-3">
                    <input 
                        type="number" 
                        className="form-control" 
                        onChange={(e) => setNum1(Number(e.target.value))} 
                        placeholder="Введите первое число" 
                    />
                    <input 
                        type="number" 
                        className="form-control" 
                        onChange={(e) => setNum2(Number(e.target.value))} 
                        placeholder="Введите второе число" 
                    />
                </div>
                <div>
                    <button className="btn btn-primary me-2" onClick={add}>Сложить</button>
                    <button className="btn btn-danger me-2" onClick={subtract}>Вычесть</button>
                    <button className="btn btn-success me-2" onClick={multiply}>Умножить</button>
                    <button className="btn btn-warning" onClick={divide}>Разделить</button>
                </div>
                <h3 className="mt-3">Результат: {result}</h3>
            </div>

            <div className="mt-5">
                <h2>Справочник персоналий</h2>
                <input 
                    type="text" 
                    placeholder="Фильтр по профессии или году" 
                    onChange={(e) => setFilter(e.target.value)} 
                    className="form-control mb-3"
                />
                <select onChange={(e) => setSortBy(e.target.value)} className="form-select mb-3">
                    <option value="name">Сортировать по имени</option>
                    <option value="year">Сортировать по году</option>
                    <option value="profession">Сортировать по профессии</option>
                </select>
                <ul className="list-group">
                    {filteredPeople.map(person => (
                        <li key={person.id} className="list-group-item d-flex align-items-center">
                            <img src={person.photo} alt={person.name} className="rounded-circle me-3" style={{ width: '50px', height: '50px',}} />
                            <div>
                                <strong>{person.name}</strong> - {person.year} - {person.profession}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));