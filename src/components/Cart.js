import React, { useState, useEffect, useMemo } from 'react';
import Thumbnail from '../components/Thumbnail';

export default function Cart(props) {
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState(0);

	// useMemo
	// const total = useMemo(
	// 	() => items.reduce((currentTotal, item) => {
	// 		return currentTotal + item.price;
	// 	}, 0),
	// 	[items]
	// )

	useEffect (() => {
		setTotal(
			items.reduce((currentTotal, item) => {
				return currentTotal + item.price;
			}, 0
		)
	)}, [items]);

	const addItem = () => {
		setItems([
			...items,
			{ item: 'dress', price: 90000 }
		])
	}

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