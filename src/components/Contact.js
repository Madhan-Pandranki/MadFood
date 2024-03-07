const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border border-black m-2 p-2 rounded-lg"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black m-2 p-2 rounded-lg"
          placeholder="Message"
        />
        <button className="border border-black m-2 p-2 rounded-lg bg-green-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
