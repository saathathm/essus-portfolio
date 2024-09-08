import ResumeImg from "../assets/resume.jpg";

export default function Resume() {
  const config = [
    {
      text: "You can view my resume ",
      link: "#download",
    },
  ];
  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-secondary px-10 py-24"
    >
      <div className="py-3 md:w-1/2 flex justify-center md:justify-end">
        <img className="w-[300px] md:mr-3" alt="resume" src={ResumeImg} />
      </div>
      <div className="md:w-1/2 flex px-5 justify-center md:justify-start">
        <div className="flex flex-col justify-center text-white md:ml-3">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[132px] font-bold">
            Resume
          </h1>
          <p className="pb-5">
            {config[0].text}
            <a className="btn ml-1" href={config[0].link}>
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
