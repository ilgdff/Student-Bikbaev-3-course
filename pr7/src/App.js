import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

const initialStudents = [
  { id: 1, name: "Яйкаров Тимур Рафисович", visits: ["н", "2", "н", "н", "н", "н"] },
  { id: 2, name: "Шпитай Владислав Андреевич", visits: ["н", "5", "оп", "п", "н", "н"] },
  { id: 3, name: "Чугунов Михаил Андреевич", visits: ["н", "5", "п", "н", "н", "н"] },
  { id: 4, name: "Цыбулькин Максим Олегович", visits: ["н", "5", "п", "н", "н", "н"] },
];

const mainColor = "#1976d2";
const accentColor = "#f5f7fa";
const borderRadius = "12px";
const shadow = "0 2px 8px rgba(0,0,0,0.07)";

function StudentList({ students, setStudents }) {
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = students.filter(s => s.name.toLowerCase().includes(filter.toLowerCase()));


  const addStudent = () => {
    const name = prompt("Введите ФИО ученика:");
    if (name) {
      setStudents([...students, { id: Date.now(), name, visits: ["", "", "", "", "", ""] }]);
    }
  };


  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
    setSelected(null);
  };


  const highlight = (id) => setSelected(id);

  return (
    <div style={{ maxWidth: 600, margin: "30px auto", background: accentColor, borderRadius, boxShadow: shadow, padding: 32 }}>
      <h2 style={{ color: mainColor, marginBottom: 24, textAlign: "center", letterSpacing: 1 }}>Журнал группы</h2>
      <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
        <input
          placeholder="Фильтр по ФИО"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          style={{ flex: 1, padding: 8, borderRadius, border: `1px solid ${mainColor}33`, outline: "none" }}
        />
        <button
          onClick={addStudent}
          style={{
            background: mainColor,
            color: "#fff",
            border: "none",
            borderRadius,
            padding: "8px 18px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: shadow,
            transition: "background 0.2s"
          }}
          onMouseOver={e => e.currentTarget.style.background = "#1251a3"}
          onMouseOut={e => e.currentTarget.style.background = mainColor}
        >
          + Добавить
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {filtered.length === 0 && <li style={{ color: "#888", textAlign: "center", marginTop: 30 }}>Нет учеников</li>}
        {filtered.map(student => (
          <li
            key={student.id}
            style={{
              background: selected === student.id ? "#e3f0fc" : "#fff",
              margin: "10px 0",
              padding: "16px 18px",
              border: `1.5px solid ${selected === student.id ? mainColor : "#e0e0e0"}`,
              borderRadius,
              boxShadow: shadow,
              display: "flex",
              alignItems: "center",
              transition: "background 0.2s, border 0.2s"
            }}
            onClick={() => highlight(student.id)}
          >
            <Link to={`/student/${student.id}`} style={{ flex: 1, textDecoration: "none", color: mainColor, fontWeight: 500, fontSize: 17 }}>
              {student.name}
            </Link>
            <button
              onClick={e => { e.stopPropagation(); deleteStudent(student.id); }}
              style={{
                background: "#fff",
                color: mainColor,
                border: `1px solid ${mainColor}`,
                borderRadius,
                padding: "6px 14px",
                fontWeight: 600,
                cursor: "pointer",
                marginLeft: 10,
                transition: "background 0.2s, color 0.2s"
              }}
              onMouseOver={e => { e.currentTarget.style.background = mainColor; e.currentTarget.style.color = "#fff"; }}
              onMouseOut={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = mainColor; }}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


function StudentPage({ students, setStudents }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = students.find(s => s.id === Number(id));
  if (!student) return <div style={{textAlign: "center", marginTop: 40}}>Ученик не найден</div>;


  const updateVisit = (idx, value) => {
    setStudents(students.map(s =>
      s.id === student.id
        ? { ...s, visits: s.visits.map((v, i) => (i === idx ? value : v)) }
        : s
    ));
  };

  const cellColor = v => {
    if (v === "н") return "#ffebee";
    if (v === "п") return "#e8f5e9";
    if (v === "оп") return "#fffde7";
    if (!v) return "#f5f7fa";
    return "#e3f2fd";
  };

  return (
    <div style={{ maxWidth: 600, margin: "30px auto", background: accentColor, borderRadius, boxShadow: shadow, padding: 32 }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          background: mainColor,
          color: "#fff",
          border: "none",
          borderRadius,
          padding: "7px 18px",
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 18,
          boxShadow: shadow
        }}
        onMouseOver={e => e.currentTarget.style.background = "#1251a3"}
        onMouseOut={e => e.currentTarget.style.background = mainColor}
      >
        ← Назад
      </button>
      <h2 style={{ color: mainColor, marginBottom: 24, textAlign: "center" }}>{student.name}</h2>
      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, background: "#fff", borderRadius, boxShadow: shadow }}>
        <thead>
          <tr>
            <th style={{ padding: 10, background: accentColor, borderTopLeftRadius: borderRadius }}>Практика 1</th>
            <th style={{ padding: 10, background: accentColor }}>Практика 2</th>
            <th style={{ padding: 10, background: accentColor }}>Практика 3</th>
            <th style={{ padding: 10, background: accentColor }}>Практика 4</th>
            <th style={{ padding: 10, background: accentColor }}>Практика 5</th>
            <th style={{ padding: 10, background: accentColor, borderTopRightRadius: borderRadius }}>Практика 6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {student.visits.map((v, i) => (
              <td key={i} style={{ background: cellColor(v), padding: 0, textAlign: "center" }}>
                <input
                  value={v}
                  onChange={e => updateVisit(i, e.target.value)}
                  style={{
                    width: 40,
                    height: 36,
                    border: "none",
                    background: "transparent",
                    textAlign: "center",
                    fontSize: 16,
                    outline: "none"
                  }}
                  maxLength={3}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [students, setStudents] = useState(initialStudents);

  return (
    <Router>
      <nav style={{ background: mainColor, padding: "14px 0", marginBottom: 0, boxShadow: shadow }}>
        <div style={{ maxWidth: 600, margin: "0 auto", display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ color: "#fff", fontWeight: 700, fontSize: 20, textDecoration: "none", letterSpacing: 1 }}>Журнал</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<StudentList students={students} setStudents={setStudents} />} />
        <Route path="/student/:id" element={<StudentPage students={students} setStudents={setStudents} />} />
      </Routes>
    </Router>
  );
}

export default App;