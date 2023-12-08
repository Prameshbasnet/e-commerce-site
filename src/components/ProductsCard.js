import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/bazarSlice";

const ProductsCard = ({ product }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const idString = (productId) => {
		return String(productId).toLowerCase().split("").join("");
	};

	const rootId = idString(product.title);

	const handleDetails = () => {
		navigate(`/product/${rootId}`, {
			state: {
				item: product,
			},
		});
	};

	const handleAddToCart = () => {
		dispatch(addToCart({
			_id: product._id,
			title: product.title,
			image: product.image,
			price: product.price,
			quantity: 1,
			description: product.description,
		}));
	};

	return (
		<div className="group flex flex-col">
			<div onClick={handleDetails} className="w-full h-96 cursor-pointer overflow-hidden">
				<img
					className="w-full h-full object-cover group-hover:scale-110 duration-500"
					style={{ margin: "20px" }}
					src={product.image}
					alt="product image"
				/>
			</div>
			<div className="w-full border-[1px] px-2 py-4 text-center items-center">
				<div>
					<h2 className="text-base font-bold">{product.title.substring(0, 15)}</h2>
				</div>
				<div className="flex text-center items-center justify-between">
					<p className="font-semibold">Rs:{product.price}</p>
					<div className="btn btn-ghost" onClick={handleAddToCart}>
						Add to cart
					</div>
				</div>
				<div>
					<p>{product.category}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductsCard;
