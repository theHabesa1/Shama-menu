import React, { useState } from "react";
import Menu from "../../Menu";
import Categories from "../../Categories";
import items from "../../components/data/addburgerdata";
import logo from "../../components/logos/add logo.png";
import Header from "../../components/header";
import Footer from "../../components/footer";
import injImg from '../../components/logos/injoy.jpeg';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const InjRes = () => {
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
          <img src={injImg} alt="logo" className="logo" />
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

export default InjRes;
