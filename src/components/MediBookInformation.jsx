import medibook_img_2 from '../assets/images/medibook-img-2.png';

const MediBookInformation = () => {
    return <article className="md:pt-[1.3em] pb-[2.5em]">
        <div className="flex flex-col gap-0 md:flex-row md:gap-24">

            <div className="w-auto md:w-[50%]">
                <div className="flex items-center">
                    <img src={medibook_img_2} alt="MediBook Logo" className="w-[80px]" />
                    <p className="text-[1.7em]">
                        <span className="font-bold text-[#3A60E6]">Medi</span>
                        <span className="font-bold text-[#67C8FF]">Book</span>
                    </p>
                </div>
                <p className="text-sm ml-3 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className="ml-3 md:ml-0">
                <p className="font-bold text-2xl mt-8 mb-6">COMPANY</p>
                <ul className="flex flex-col gap-3">
                    <li><p className="text-sm">Home</p></li>
                    <li><p className="text-sm">About Us</p></li>
                    <li><p className="text-sm">Delivery</p></li>
                    <li><p className="text-sm">Privacy Policy</p></li>
                </ul>
            </div>

            <div className="ml-3 md:ml-0">
                <p className="font-bold text-2xl mt-8 mb-6">GET IN TOUCH</p>
                <ul className="flex flex-col gap-3">
                    <li><p className="text-sm">+0-000-000-000</p></li>
                    <li><p className="text-sm">wdotgonzales@gmail.com</p></li>
                </ul>
            </div>

        </div>
    </article>
}

export default MediBookInformation;