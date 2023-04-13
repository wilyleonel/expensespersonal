import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "~/store";
import { setNotifySlice } from "~/store/slice/notify.slice";
import Modal from "../modal/Modal";
import Icon from "~/components/Icon";


const Notify = () => {

    const notifyMessage = useSelector((state: RootState) => state.notifyMessage);
    const dispatch = useDispatch();
    const [content, setContent] = useState<{
        message: String;
        status: "available" | "warning" | "error";
        open: boolean
    } | null>(null);

    useEffect(() => {
        if (notifyMessage) {
            setContent(notifyMessage);
            const timer = setTimeout(() => {
                dispatch(setNotifySlice(null));
                setContent(null);
            }, 1300);
            return () => clearTimeout(timer);
        }
    }, [notifyMessage, dispatch]);

    return (
        <Modal isOpen={content?.open} widthModal=" max-w-[80%] sm:max-w-[50%] z-20">
            <div
                className={`flex flex-col md:flex-row gap-2 justify-center rounded-input p-3 z-40 font-semibold text-center items-center
           ${content?.status === "warning"
                        ? "bg-secondary-warning text-warning fill-warning"
                        : content?.status === "available"
                            ? "bg-secondary-available text-available fill-available"
                            : "bg-secondary-error text-error fill-error"
                    }
         `}
            >
                <Icon
                    iconName={
                        content?.status === "available"
                            ? "Check"
                            : content?.status === "warning"
                                ? "LightBulb"
                                : "Error"
                    }
                />
                <span className="">{content?.message}</span>
            </div>
        </Modal>
    )
}

export default Notify;