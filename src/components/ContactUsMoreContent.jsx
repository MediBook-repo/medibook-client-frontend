import { Button } from "@chakra-ui/react";
import useAxios from "../hooks/useAxios";
const ContactUsMoreContent = () => {

    const addressCoordinates = { lat: 10.902010, lng: 123.068431 };
    const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const { data, loading, error } = useAxios(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${addressCoordinates.lat},${addressCoordinates.lng}&key=${GOOGLE_MAPS_API_KEY}`); // Replace with your API URL
    const address = !loading && 'Brgy. ' + data.data.results[0].formatted_address

    return <>
        <div className="flex flex-col gap-5 mt-6 md:p-5 md:mt-0">
            <p className="font-bold text-lg tracking-wider">OUR OFFICE</p>
            <p className="text-sm">{address}</p>
            <div className="text-sm">
                <p>Tel: (000) 000-0000</p>
                <p>Email: wdotgonzales@gmail.com</p>
            </div>
            <p className="text-lg font-bold tracking-wider">CAREERS AT <span className="font-bold text-[#3A60E6]">Medi</span><span className="font-bold text-[#67C8FF]">Book</span></p>
            <p className="text-sm">Learn more about our teams and job openings.</p>
            <Button
                bg="white"
                color="black"
                variant="outline"
                className="w-[30%] md:w-[50%] lg:w-[40%]"
                borderColor="black"
                borderRadius={1}
                _hover={{
                    bg: "black",
                    color: "white",
                    borderColor: "black",
                }}
            >
                <span>Explore Jobs</span>
            </Button>

        </div>
    </>
}

export default ContactUsMoreContent;