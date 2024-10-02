import GoogleMap from "../components/GoogleMap";
import contactus_image from "../assets/images/contactus_image.png";
import MediBookInformation from "../components/MediBookInformation";
import ContactUsMoreContent from "../components/ContactUsMoreContent";
const ContactUs = () => {
    return (
        <>
            <section className="max-w-[90%] sm:max-w-[80%] m-auto">
                <GoogleMap />
                <div>
                    <h1 className="text-center text-2xl font-semibold text-gray-500 mt-10">CONTACT <span className="font-semibold text-black">US</span></h1>
                    <div className="flex justify-center mt-10 mb-16">
                        <div className="flex flex-col md:flex-row">
                            <img src={contactus_image} alt="" className="w-full md:max-w-[360px]" />
                            <ContactUsMoreContent />
                        </div>
                    </div>
                </div>
                <div className="py-7">
                    <MediBookInformation />
                </div>
            </section>
        </>
    );
}

export default ContactUs;
