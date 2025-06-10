import React, { useRef, useState } from "react";


const news = [
  {
    id: 1,
    title: "Как устроен протокол iMessage",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/2048px-IMessage_logo.svg.png",
    text: "В этом посте я вкратце расскажу о внутреннем устройстве iMessage, изученном мной в процессе работы над проектом восстановления реализации iMessage."
  },
  {
    id: 2,
    title: "Что нового в React 18",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDz7VeoLeo6kyPUJokKtq8ISE_j5MNreaXqKFKqXqLJ6TbPV0jJrhuZ3nPH_Ee47MRTfXx5usIrDcQFb2fFUlpQKmiByAmz6L5OMnU4cU",
    text: "React 18 принес много новых возможностей: автоматический batching, startTransition, useId и многое другое."
  },
  {
    id: 3,
    title: "Зачем нужны useRef и useState",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYftLjoAgT9MyozH6Zk-P8PHs26ra_NuA8Q&s",
    text: "useRef и useState — два основных способа хранения данных в функциональных компонентах React. Разберёмся, когда что использовать."
  }
];


function Timer() {
  const [seconds, setSeconds] = useState(60);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current || seconds === 0) return;
    intervalRef.current = setInterval(() => {
      setSeconds(s => {
        if (s <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setSeconds(60);
  };

  return (
    <div style={{margin: 20, background: "#f5f7fa", borderRadius: 12, padding: 16, boxShadow: "0 2px 8px #0001", maxWidth: 300}}>
      <h3>Таймер: {seconds} сек.</h3>
      <button onClick={start} style={{marginRight: 8}}>Старт</button>
      <button onClick={stop} style={{marginRight: 8}}>Стоп</button>
      <button onClick={reset}>Сброс</button>
    </div>
  );
}


function NewsSlider({ onSelect }) {
  const imgRef = useRef(null);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const showImage = idx => {
    if (imgRef.current) {
      imgRef.current.src = news[idx].img;
    }
  };

  const next = () => {
    const newIndex = (index + 1) % news.length;
    setIndex(newIndex);
    showImage(newIndex);
  };

  const prev = () => {
    const newIndex = (index - 1 + news.length) % news.length;
    setIndex(newIndex);
    showImage(newIndex);
  };

  React.useEffect(() => {
    showImage(index);
  }, [index]);

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex(idx => (idx + 1) % news.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{margin: 20, background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 2px 8px #0001", maxWidth: 400}}>
      <img
        ref={imgRef}
        src={news[index].img}
        alt={news[index].title}
        style={{width: "100%", borderRadius: 8, marginBottom: 10}}
      />
      <h4>{news[index].title}</h4>
      <button onClick={prev} style={{marginRight: 8}}>←</button>
      <button onClick={next}>→</button>
      <div>
        <button
          style={{marginTop: 10}}
          onClick={() => onSelect(news[index].id)}
        >
          Читать статью
        </button>
      </div>
    </div>
  );
}


function Article({ article, views, onView }) {
  React.useEffect(() => {
    if (article) onView(article.id);

  }, [article]);
  if (!article) return <div style={{margin: 20}}>Выберите статью для просмотра</div>;
  return (
    <div style={{margin: 20, background: "#f5f7fa", borderRadius: 12, padding: 16, boxShadow: "0 2px 8px #0001", maxWidth: 600}}>
      <h2>{article.title}</h2>
      <img src={article.img} alt={article.title} style={{width: "100%", borderRadius: 8, marginBottom: 10}} />
      <p>{article.text}</p>
      <div style={{color: "#1976d2", fontWeight: 600}}>Просмотров: {views[article.id] || 0}</div>
    </div>
  );
}


function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [views, setViews] = useState({});


  const handleView = id => {
    setViews(v => ({ ...v, [id]: (v[id] || 0) + 1 }));
  };

  const selectedArticle = news.find(n => n.id === selectedId);

  return (
    <div style={{fontFamily: "sans-serif", background: "#e3eafc", minHeight: "100vh", paddingBottom: 40}}>
      <header style={{background: "#black", color: "#fff", padding: 20, textAlign: "center", fontSize: 28, fontWeight: 700, letterSpacing: 1, marginBottom: 20}}>
        СМИ для программистов
      </header>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 30}}>
        <NewsSlider onSelect={setSelectedId} />
        <Timer />
      </div>
      <Article article={selectedArticle} views={views} onView={handleView} />
    </div>
  );
}

export default App;