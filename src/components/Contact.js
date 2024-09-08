export default function Contact() {
  const config = {
    text: "If you want to discuss more in detail, please contact me",
    email: "saaadhath@gmail.com",
    phone: "+94 78 250 2232",
  };
  return (
    <section id="contact" className="flex flex-col bg-primary px-10 py-28">
      <div className="flex flex-col items-center text-white">
        <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[132px] font-bold">
          Contact
        </h1>
        <p className="pb-5">{config.text}</p>
        <div className="flex flex-col justify-start">
          <p className="py-2">
            <span className="font-bold">Email : </span>
            {config.email}
          </p>
          <p className="py-2">
            <span className="font-bold">Phone : </span>
            {config.phone}
          </p>
        </div>
      </div>
    </section>
  );
}
