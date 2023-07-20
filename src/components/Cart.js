import React, { useState, useEffect } from 'react';
import Thumbnail from '../components/Thumbnail';

export default function Cart(props) {
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState(0);

	const addItem = () => {
		setItems([
			...items,
			{ item: 'dress', price: 90000 }
		])
	}

	useEffect (() => {
		setTotal(
			items.reduce((currentTotal, item) => {
				return currentTotal + item.price;
			}, 0
		)
	)}, [items]);

  return (
    <div>
      Items: {JSON.stringify(items)}
			Total: {total}

			<div>
				<button onClick={addItem}>Add Item</button>
			</div>
    </div>
  );
}