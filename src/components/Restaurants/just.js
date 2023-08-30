import React, { useState } from "react";
import Menu from "../../Menu";
import Categories from "../../Categories";
import items from "../../components/data/addburgerdata";
import logo from "../../components/logos/add logo.png";
import Header from "../../components/header";
import Footer from "../../components/footer";
import justImg from '../../components/logos/just.jpg';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const JustRes = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, ] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
    <Header/>
    <main>
      <section className="menu section"  style={{ paddingTop: "10px"  }}>
        <div className="title">
          <img src={justImg} alt="logo" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        {/* <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} /> */}
      </section>
    </main>
    <Footer/>
    </>
  );
};

export default JustRes;
