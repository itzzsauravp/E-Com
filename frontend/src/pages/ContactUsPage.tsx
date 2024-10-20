import Hero from "../components/Reusable/Hero";
import contacthero from "../assets/Images/contacthero.png";
import ContactUsForm from "../components/ContactUsPage/ContactUsForm";
import AdditionalContactInfo from "../components/ContactUsPage/AdditionalContactInfo";
const ContactUsPage = () => {
  return (
    <div>
      <Hero img={contacthero} />
      <div className="flex justify-center items-start mt-20 sm:max-md:flex-col-reverse sm:max-md:mt-5">
        <div className="w-[60%] p-2 sm:max-md:w-full">
          <div>
            <h1 className="text-3xl font-bold text-tDark sm:max-md:mt-10">
              We would love to hear from you.
            </h1>
            <p className="text-tLight mt-5">
              If you have any qeury or any type of suggestions, you can contact
              us here. We would love to hear form you.
            </p>
          </div>
          <ContactUsForm />
        </div>
        <AdditionalContactInfo />
      </div>
    </div>
  );
};

export default ContactUsPage;
