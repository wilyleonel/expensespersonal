import { useDispatch } from "react-redux";
import { setNotifySlice } from "~/store/slice/notify.slice";

interface ConfirmMessageProp {
    errors?: (data: any) => void;
    onSave?: () => void;
    nameButton2?: string;
    value2?: string;
    className?: string;
}

type statusNotify = "available" | "warning" | "error";
type DeleteForm = {
    id: number;
}

const DeleteModal = ({
    nameButton2,
    value2,
    className,
    onSave,
}: ConfirmMessageProp) => {
    const dispatch = useDispatch();
    
    const notify = (message: string, open: boolean, status: statusNotify) => {
        dispatch(
            setNotifySlice({
                message,
                open,
                status,
            })
        );
    };
}
