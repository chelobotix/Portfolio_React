import InputComponent from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <section className="flex flex-col items-center w-full pb-7 bg-gradient-to-t from-dark-pink to-dark-blue">
      <h2 className="animateText text-4xl font-bold mt-12 mb-5 lg:text-5xl lg:mb-12">Contact me</h2>
      <form
        className="w-[320px] md:w-1/2 flex flex-col gap-3 p-2 item-center"
        action="https://formspree.io/f/xzbwnlee"
        method="post"
      >
        <InputComponent label={"Name"} type={""} inputName={"full_name"} />
        <InputComponent label={"Email"} type={"email"} inputName={"email"} />
        <TextArea inputName={"comment"} />
        <Button
          name="Get in touch"
          style={
            "px-4 py-1 text-sm font-semibold border-2 border-letter-blue bg-letter-blue rounded-lg text-dark-blue hover:border-white "
          }
          liveDemo={""}
          modalConf={{}}
          projectId={0}
          type={"submit"}
        />
      </form>
    </section>
  );
};

export default ContactForm;
