import React, { useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiBankCardLine } from "react-icons/ri";
import { useCart } from "../../context/Cartcontext";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
    const [activeTab, setActiveTab] = useState("cod");
    const { TotalCartPrice } = useCart();
    const navigate = useNavigate();

    const orderTotal = TotalCartPrice().toFixed(2);
    const onlineDiscount = 17;
    const onlinePrice = (orderTotal - onlineDiscount).toFixed(2);

    const handleContinue = () => {
        if (activeTab === "cod") {
            navigate("/order-success", { state: { method: "Cash on Delivery" } });
        } else {
            navigate("/order-success", { state: { method: "Online Payment" } });
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 p-6 max-w-5xl mx-auto">
            {/*  Payment Method */}
            <div className="w-full md:w-2/3 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>

                {/* Cash on Delivery */}
                <div
                    onClick={() => setActiveTab("cod")}
                    className={`flex justify-between items-center border rounded-xl p-4 cursor-pointer mb-4 ${
                        activeTab === "cod" ? "border-green-600 bg-green-50" : "border-gray-300"
                    }`}
                >
                    <div className="flex items-center gap-3">
                        <FaMoneyBillWave className="text-xl text-green-600" />
                        <span className="font-medium">₹{orderTotal} Cash on Delivery</span>
                    </div>
                    {activeTab === "cod" && (
                        <div className="w-4 h-4 rounded-full bg-green-600" />
                    )}
                </div>

                {/* Pay Online */}
                <div
                    onClick={() => setActiveTab("online")}
                    className={`flex justify-between items-center border rounded-xl p-4 cursor-pointer mb-4 ${
                        activeTab === "online" ? "border-pink-600 bg-pink-50" : "border-gray-300"
                    }`}
                >
                    <div>
                        <div className="flex items-center gap-3">
                            <RiBankCardLine className="text-xl text-blue-600" />
                            <span className="font-medium">₹{onlinePrice} Pay Online</span>
                        </div>
                        <p className="text-sm text-green-600">Save ₹{onlineDiscount} with bank offers</p>
                    </div>
                    {activeTab === "online" && (
                        <div className="w-4 h-4 rounded-full bg-pink-600" />
                    )}
                </div>
            </div>

            {/*  Order Summary */}
            <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 shadow">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                <div className="flex justify-between mb-2">
                    <span>Total Product Price</span>
                    <span>₹{orderTotal}</span>
                </div>
                {activeTab === "online" && (
                    <div className="flex justify-between text-green-600 mb-2">
                        <span>Total Discounts</span>
                        <span>- ₹{onlineDiscount}</span>
                    </div>
                )}

                <hr className="my-2" />

                <div className="flex justify-between font-semibold text-lg mb-3">
                    <span>Order Total</span>
                    <span>₹{activeTab === "online" ? onlinePrice : orderTotal}</span>
                </div>

                <button
                    onClick={handleContinue}
                    className="w-full bg-pink-600 text-white py-3 rounded-xl font-medium"
                >
                    Continue
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                    Clicking on 'Continue' will not deduct any money
                </p>
            </div>
        </div>
    );
}

export default PaymentPage;
