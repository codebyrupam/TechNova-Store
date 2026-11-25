import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { formatPrice } from "../Utils/formatPrice";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  pincode: "",
  payment: "cod",
};

const paymentMethods = [
  ["cod", "Cash on delivery"],
  ["upi", "UPI"],
  ["card", "Card"],
];

const validate = (form) => {
  const errors = {};
  if (form.fullName.trim().length < 3) errors.fullName = "Enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Enter a valid email address.";
  if (!/^[6-9]\d{9}$/.test(form.phone)) errors.phone = "Enter a valid 10-digit mobile number.";
  if (form.address.trim().length < 8) errors.address = "Enter your full address.";
  if (form.city.trim().length < 2) errors.city = "Enter your city.";
  if (!/^\d{6}$/.test(form.pincode)) errors.pincode = "Enter a 6-digit PIN code.";
  return errors;
};

const fieldClass = (hasError) =>
  `w-full rounded-xl border bg-gray-800 p-3 text-white outline-none focus:ring-2 focus:ring-orange-600/60 ${hasError ? "border-red-500" : "border-gray-700"
  }`;

// Defined outside Checkout so it is not re-created on every render.
const Field = ({ name, label, value, error, onChange, type = "text", ...rest }) => (
  <div>
    <label htmlFor={name} className="mb-1 block text-sm text-gray-300">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      aria-invalid={Boolean(error)}
      className={fieldClass(Boolean(error))}
      {...rest}
    />
    {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
  </div>
);

const Checkout = () => {
  const { cartItems, cartTotal, placeOrder } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  if (cartItems.length === 0) return <Navigate to="/cart" replace />;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const fieldProps = (name) => ({
    name,
    value: form[name],
    error: errors[name],
    onChange: handleChange,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    placeOrder(form);
    navigate("/order-confirmation");
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-3xl font-extrabold text-white">Checkout</h2>

      <div className="grid gap-8 lg:grid-cols-3">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-4 rounded-2xl border border-gray-800 bg-gray-900 p-6 lg:col-span-2"
        >
          <h3 className="text-lg font-bold text-white">Delivery details</h3>

          <Field {...fieldProps("fullName")} label="Full name" autoComplete="name" />

          <div className="grid gap-4 sm:grid-cols-2">
            <Field {...fieldProps("email")} label="Email" type="email" autoComplete="email" />
            <Field
              {...fieldProps("phone")}
              label="Mobile number"
              type="tel"
              maxLength={10}
              autoComplete="tel"
            />
          </div>

          <Field {...fieldProps("address")} label="Address" autoComplete="street-address" />

          <div className="grid gap-4 sm:grid-cols-2">
            <Field {...fieldProps("city")} label="City" autoComplete="address-level2" />
            <Field
              {...fieldProps("pincode")}
              label="PIN code"
              maxLength={6}
              autoComplete="postal-code"
            />
          </div>

          <fieldset className="pt-2">
            <legend className="mb-2 text-sm text-gray-300">Payment method</legend>
            <div className="flex flex-wrap gap-3">
              {paymentMethods.map(([value, label]) => (
                <label
                  key={value}
                  className={`cursor-pointer rounded-xl border px-4 py-2 text-sm ${form.payment === value
                      ? "border-orange-500 bg-orange-500/10 text-orange-400"
                      : "border-gray-700 text-gray-300"
                    }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={value}
                    checked={form.payment === value}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-600 py-3 font-bold text-white hover:bg-orange-500"
          >
            Place order
          </button>
        </form>

        <aside className="h-fit rounded-2xl border border-gray-800 bg-gray-900 p-6">
          <h3 className="text-lg font-bold text-white">Your order</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between gap-4">
                <span className="line-clamp-1">
                  {item.name} &times; {item.quantity}
                </span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-gray-800 pt-4 text-lg font-extrabold text-white">
            <span>Total</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Checkout;