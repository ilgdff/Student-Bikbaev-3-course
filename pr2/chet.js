let count = 0;

const increment = () => {
    count++;
    render();
};

const decrement = () => {
    count--;
    render();
};

const render = () => {
    ReactDOM.render(
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Счетчик: {count}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>,
        document.getElementById('app')
    );
};

// Первоначальный рендер
render();