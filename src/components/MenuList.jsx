import React from 'react';

const MenuList = ({ items }) => {
  return (
    <div className="menu-list">
      {items.length === 0 ? (
        <p>Ничего не найдено.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="menu-item-footer">
                <span className="menu-item-price">{item.price} с</span>
                <button>Добавить</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MenuList;
