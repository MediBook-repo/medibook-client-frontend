
import { useState, useEffect } from "react";

const StatusComponent = ({ status }) => {
    const [backgroundColor, setBackgroundColor] = useState("");
    const [textColor, setTextColor] = useState("");
    const [statusText, setStatusText] = useState("");

    useEffect(() => {
        switch (status) {
            case 'Pending':
                setBackgroundColor('bg-yellow-500');
                setTextColor('text-yellow-500');
                setStatusText('Pending');
                break;
            case 'Cancelled':
                setBackgroundColor('bg-red-500');
                setTextColor('text-red-500');
                setStatusText('Cancelled');
                break;
            case 'Approved':
                setBackgroundColor('bg-green-500');
                setTextColor('text-green-500');
                setStatusText('Approved');
                break;
        }
    }, [status])


    return (
        <>
            <div className="flex items-center">
                <div className={`${backgroundColor} w-3 h-3 rounded-full`}></div>
                <p className={`${textColor} ml-2 font-bold text-sm`}>{statusText}</p>
            </div>

        </>
    )
}

export default StatusComponent
