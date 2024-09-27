const DoctorCard = ({ url, name, isDoctorAvailable, position }) => {
    return (
        <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
            <img className="bg-[#EAEFFF] w-full" src={url} alt={name} />
            <div className="p-4">
                <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${isDoctorAvailable ? 'bg-green-600' : 'bg-red-600'}`}></div>
                    <p className={`text-sm font-bold ${isDoctorAvailable ? 'text-green-600' : 'text-red-600'}`}>
                        {isDoctorAvailable ? 'Available' : 'Not Available'}
                    </p>
                </div>
                <p className="font-bold">{name}</p>
                <p className="text-[0.8rem]">{position}</p>
            </div>
        </div>
    );
};

export default DoctorCard;
