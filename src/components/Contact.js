// const Contact = () => {
//   return (
//     <div>
//       <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
//       <form>
//         <input
//           type="text"
//           className="border border-black m-2 p-2 rounded-lg"
//           placeholder="Name"
//         />
//         <input
//           type="text"
//           className="border border-black m-2 p-2 rounded-lg"
//           placeholder="Message"
//         />
//         <button className="border border-black m-2 p-2 rounded-lg bg-green-100">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
// import { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, message } = formData;

//     if (!name || !email || !message) {
//       setError("All fields are required");
//     } else {
//       setError("");
//       // Process form data here (send to backend or API)
//       console.log("Form Data Submitted: ", formData);
//       alert("Thank you for contacting us!");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center p-6">
//       <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
//       <form
//         className="w-full max-w-lg flex flex-col"
//         onSubmit={handleSubmit}
//       >
//         {error && (
//           <p className="text-red-500 text-sm mb-4">{error}</p>
//         )}

//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="border border-gray-300 m-2 p-3 rounded-lg"
//           placeholder="Name"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="border border-gray-300 m-2 p-3 rounded-lg"
//           placeholder="Email"
//         />
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           className="border border-gray-300 m-2 p-3 rounded-lg"
//           rows="4"
//           placeholder="Your Message"
//         />

//         <button
//           type="submit"
//           className="border border-black m-2 p-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-200"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
const Contact = () => {
  return (
    <div className="p-6">
      <h1 className="font-bold text-3xl p-4">Contact Us</h1>
      <form className="flex flex-col max-w-md">
        <input
          type="text"
          className="border border-gray-400 m-2 p-2 rounded-lg"
          placeholder="Name"
        />
        <input
          type="email"
          className="border border-gray-400 m-2 p-2 rounded-lg"
          placeholder="Email"
        />
        <textarea
          className="border border-gray-400 m-2 p-2 rounded-lg"
          rows="4"
          placeholder="Message"
        ></textarea>
        <button className="bg-green-500 text-white m-2 p-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
