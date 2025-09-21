const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-xl font-bold">Contact us</h1>

      <form className="mt-2">
        <input
          placeholder="Name"
          className="p-2 m-2 border border-gray-300 rounded-lg"
        />
        <input
          placeholder="Message"
          className="p-2 m-2 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="p-2 m-2 bg-black rounded-lg text-white cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
