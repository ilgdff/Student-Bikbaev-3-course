import React, { useState } from "react";

const dishes = [
  {
    id: 1,
    name: "Биточки картофельные с грибами",
    price: "170₽",
    ingredients: "Картофель, грибы, лук, специи",
    image: "https://static.1000.menu/img/content-v2/d5/a5/22601/kartofelnye-kotlety-s-gribami_1636437304_17_max.jpg"
  },
  {
    id: 2,
    name: "Борщ вегетарианский",
    price: "300₽",
    ingredients: "Свекла, капуста, картофель, морковь, томаты",
    image: "https://www.chefmarket.ru/blog/wp-content/uploads/2020/05/borsch-pampushkas-2000x1200.jpg"
  },
  {
    id: 3,
    name: "Брускетта с мезе из баклажанов",
    price: "110₽",
    ingredients: "Багет, баклажаны, специи, зелень",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUd2DHOzxu5rECjcrED27U1vvSKQqw0Bc46A&s"
  },
  {
    id: 4,
    name: "Тартар из лосося",
    price: "350₽",
    ingredients: "Лосось, авокадо, соус, зелень",
    image: "https://menunedeli.ru/wp-content/uploads/2022/10/F0A06908-D9A4-45A9-99AF-D1BC69DC0D26-scaled-e1666782221169.jpeg"
  },
  {
    id: 5,
    name: "Жаркое из говядины",
    price: "400₽",
    ingredients: "Говядина, картофель, морковь, лук, специи",
    image: "https://aif-s3.aif.ru/images/010/419/d82e84a507dd4668a4c172d76d3c1d54.jpg"
  },
  {
    id: 6,
    name: "Маффин морковный",
    price: "90₽",
    ingredients: "Морковь, мука, сахар, яйца, масло",
    image: "https://www.lenafilatova.com/wp-content/uploads/2015/12/Morkovnyie-maffinyi1-e1450375439608.jpg"
  },
  {
    id: 7,
    name: "Салат Цезарь",
    price: "250₽",
    ingredients: "Курица, салат, сухарики, пармезан, соус",
    image: "https://images.gastronom.ru/-UHzDgNx-m0MMa6OR0ilz2qP7MB0mKQeGceObc9jpck/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzVhNzFhZGY1LTM3MTYtNDlmMy04NDNlLTAwMTg4MGNiM2E0OS5qcGc.webp"
  },
  {
    id: 8,
    name: "Паста с томатами и базиликом",
    price: "220₽",
    ingredients: "Паста, томаты, базилик, чеснок, оливковое масло",
    image: "https://s1.eda.ru/StaticContent/Photos/160415112843/160422153614/p_O.jpg"
  },
  {
    id: 9,
    name: "Плов с овощами",
    price: "200₽",
    ingredients: "Рис, морковь, лук, специи, овощи",
    image: "https://semishagoff.org/upload/iblock/780/7804fd6bfb8daa3241be128ec7af2f05.jpg"
  },
  {
    id: 10,
    name: "Суп-пюре из тыквы",
    price: "180₽",
    ingredients: "Тыква, сливки, специи, лук",
    image: "https://vkusvill.ru/upload/resize/832415/832415_1200x600x90_c.jpg"
  },
  {
    id: 11,
    name: "Куриные котлеты",
    price: "210₽",
    ingredients: "Курица, лук, специи, панировка",
    image: "https://menunedeli.ru/wp-content/uploads/2022/09/75D55D77-3649-4FB8-9892-B3607504E593-scaled.jpeg"
  },
  {
    id: 12,
    name: "Овощное рагу",
    price: "160₽",
    ingredients: "Кабачки, баклажаны, морковь, лук, специи",
    image: "https://images.gastronom.ru/iQgVc5MKEUrc-fw0PYC3pOaivniuHw5gArkq-33MLzc/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2ZjMGY5MjBhLTZiMDgtNGQ1Mi1hZjY1LTEwODY3OTFmZTczYi5qcGc.webp"
  },
  {
    id: 13,
    name: "Сырники",
    price: "130₽",
    ingredients: "Творог, яйца, мука, сахар",
    image: "https://images.gastronom.ru/ECh_I6w3gTB8I7G27v52MRRWTmTaZMlR59WsKdw2Qas/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzliOTRhNTg5LTlmNzYtNGNlNS04MTgzLTc4MjU0MGI0ZGI3Yy5qcGc.webp"
  },
  {
    id: 14,
    name: "Пицца Маргарита",
    price: "350₽",
    ingredients: "Тесто, томаты, сыр, базилик",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxi26uWKZBojC8b711bYl0TP-RSH1x6JXrIg&s"
  },
  {
    id: 15,
    name: "Греческий салат",
    price: "190₽",
    ingredients: "Огурцы, помидоры, сыр фета, маслины, лук",
    image: "https://s1.eda.ru/StaticContent/Photos/e/fa/efa43ee8776f4b27b7766640557e76a4.jpg"
  },
  {
    id: 16,
    name: "Крем-брюле",
    price: "120₽",
    ingredients: "Сливки, яйца, сахар, ваниль",
    image: "https://thecake-school.ru/assets/img/blog/krem_brule-2.jpg"
  },
  {
    id: 17,
    name: "Шашлык из курицы",
    price: "320₽",
    ingredients: "Курица, специи, лук, соус",
    image: "https://vkusvill.ru/upload/resize/463503/463503_1200x600x70_c.webp"
  },
  {
    id: 18,
    name: "Печёные яблоки",
    price: "100₽",
    ingredients: "Яблоки, мёд, орехи, корица",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO23QdYyV5iW7rgJ3zTO2ui_XBC_2G4GJITA&s"
  }
];


function DishCard({ dish }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="dish-card"
      onClick={() => setShowDetails((prev) => !prev)}
      style={{
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        padding: "16px",
        textAlign: "center",
        cursor: "pointer",
        transition: "box-shadow 0.2s",
        minHeight: "340px"
      }}
    >
      <img
        src={dish.image}
        alt={dish.name}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          borderRadius: "6px"
        }}
      />
      <h3 style={{ margin: "16px 0 8px 0" }}>{dish.name}</h3>
      {showDetails ? (
        <div style={{ fontSize: "15px", color: "#444" }}>
          <p>
            <b>Цена:</b> {dish.price}
          </p>
          <p>
            <b>Ингредиенты:</b> {dish.ingredients}
          </p>
          
        </div>
      ) : (
        <p style={{ marginTop: "8px", fontWeight: "bold", color: "#7a5c3e" }}>
          {dish.price}
        </p>
      )}
      <p style={{ fontSize: "12px", color: "#aaa", marginTop: "12px" }}>
        {showDetails ? "Скрыть детали" : "Нажмите для подробностей"}
      </p>
    </div>
  );
}

function Menu({ dishes }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "24px",
        padding: "24px"
      }}
    >
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}


export default function App() {
  return (
    <div style={{ background: "#f5f5f5", height: "500px", display: "flex", flexDirection: "column" }}>
      {}
      <header style={{
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <span style={{ fontSize: 28, fontWeight: 700, fontFamily: 'sans-serif',color: '#7a5c3e' }}>
          Шоколадница
        </span>
        <span style={{ fontSize: 15, fontWeight: 700, fontFamily: 'sans-serif', color: 'black' }}>
          Меню
        </span>
        <span style={{ fontSize: 15, fontWeight: 700, fontFamily: 'sans-serif', color: 'black' }}>
          О нас
        </span>
        <span style={{ fontSize: 15, fontWeight: 700, fontFamily: 'sans-serif', color: 'black' }}>
          Адреса 
        </span>
        <span style={{ fontSize: 15, fontWeight: 700, fontFamily: 'sans-serif', color: 'black' }}>
          Бонусы
        </span>
        <span style={{ fontSize: 15, fontWeight: 700, fontFamily: 'sans-serif', color: 'black' }}>
          Доставка
        </span>
        {}
        <span style={{ cursor: "pointer", display: "flex", alignItems: "center" }} title="Личный кабинет">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" stroke="#7a5c3e" strokeWidth="2"/>
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="#7a5c3e" strokeWidth="2"/>
          </svg>
        </span>
      </header>
      <h1 style={{ textAlign: "center", padding: "32px 0 0 0", fontFamily: "sans-serif" }}>
        Меню ресторана
      </h1>
      <Menu dishes={dishes} />
      {}
      <footer style={{
        background: "#fff",
        marginTop: "auto",
        padding: "16px 0",
        textAlign: "center",
        color: "#aaa",
        fontSize: "15px",
        borderTop: "1px solid #eee"
      }}>
        © {new Date().getFullYear()} Вкусно и точка — Все права защищены.
      </footer>
    </div>
  );
}