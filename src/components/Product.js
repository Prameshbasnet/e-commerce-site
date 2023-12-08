import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/bazarSlice";

const Product = () => {
    const dispatch = useDispatch();
    const [details, setDetails] = useState([]);
    const [baseQty, setBaseQty] = useState(1);
	const Location = useLocation();
    useEffect(() => {
        setDetails(Location.state.item);
	}, [Location.state.item]);
	return (
		<div>
			<div className="max-w-screen-xl mx-auto my-10 flex gap-10">
				<div className="w-2/5 relative">
					<img
						src={details.image}
						alt="productImg"
						className="w-full h-[550px] object-cover"
					/>
					<div className="absolute top-4 right-0">
						{details.isNew && (
							<p className="bg-black text-white font-semibold px-8 py-1">
								Sale
							</p>
						)}
					</div>
				</div>
				<div className="w-3/5 ">
					<div>
						<h2 className="text-4xl font-semibold">{details.title}</h2>
						<div>
							<p className="text-2xl font-medium ">Rs: {details.price}</p>
						</div>
					</div>
					<div>
						<p>{details.description}</p>
						<div className="flex gap-4">
							<div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
								<p className="text-sm">Quantity</p>
								<div className="flex items-center gap-4 text-sm font-semibold">
                                    <button onClick={() => setBaseQty(baseQty === 1 ? 1 : baseQty - 1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                                        -
                                    </button>


									<span>{baseQty}</span>
                                    <button onClick={()=>setBaseQty(baseQty+1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                                        +
                                    </button>
								</div>
                            </div>
                            <button onClick={() => dispatch(addToCart({
                                _id: details._id,
                                title: details.title,
                                image: details.image,
                                price: details.price,
                                quantity: baseQty,
                                description: details.description,
                            }))} className="btn bg-black">add to cart</button>
                        </div>
                        <p className="text-base">Category: <span className="font-medium capitalize">{details.category}</span> </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
