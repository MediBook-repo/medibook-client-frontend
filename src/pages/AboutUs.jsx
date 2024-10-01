import about_us_image from "../assets/images/about-us-image.png";
import MediBookInformation from "../components/MediBookInformation";
const AboutUs = () => {
    return <>
        <section className="max-w-[90%] sm:max-w-[80%] m-auto">
            <h1 className="text-center text-2xl font-semibold text-gray-500 pt-16">ABOUT <span className="font-semibold text-black">US</span></h1>
            <div className="flex items-center gap-10 py-[2em] flex-col w-full lg:flex-row lg:w-[80%]">
                <img src={about_us_image} alt="" className="max-w-[80%] lg:max-w-[28%]" />
                <div className="flex flex-col gap-6 text-gray-600">
                    <p className="text-sm">Welcome to <span className="font-bold text-[#3A60E6]">Medi</span><span className="font-bold text-[#67C8FF]">Book</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                    <p className="text-sm">Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
                    <p className="text-sm font-bold text-black">Our Vision</p>
                    <p className="text-sm">Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                </div>
            </div>

            <p className="text-2xl font-light mt-8 mb-3">WHY <span className="font-bold text-gray-500">CHOOSE US</span></p>
            <div className="grid grid-cols-1 lg:grid-cols-3 mb-16">
                <div className="border border-gray-300 cursor-pointer hover:text-white hover:bg-[#3A60E6] transition-colors duration-300">
                    <div className="py-20 px-14 flex flex-col gap-2">
                        <p className="font-bold">EFFICIENCY:</p>
                        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                    </div>
                </div>
                <div className="border border-gray-300 cursor-pointer hover:text-white hover:bg-[#3A60E6] transition-colors duration-300">
                    <div className="py-20 px-14 flex flex-col gap-2">
                        <p className="font-bold">CONVENIENCE:</p>
                        <p>Access to a network of trusted healthcare professionals in your area.</p>
                    </div>
                </div>
                <div className="border border-gray-300 cursor-pointer hover:text-white hover:bg-[#3A60E6] transition-colors duration-300">
                    <div className="py-20 px-14 flex flex-col gap-2">
                        <p className="font-bold">PERSONALIZATION:</p>
                        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                    </div>
                </div>
            </div>

            <MediBookInformation/>
        </section>
    </>
}

export default AboutUs;