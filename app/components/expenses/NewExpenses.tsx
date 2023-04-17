import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { AxiosError } from "axios";
import Modal from "../Share/modal/Modal";
import { motion } from "framer-motion"
import Button from "../Share/buttons/Button";
import InputText from "../Share/inputs/InputText";
import tokenConfig, { URL } from "../utils/tokenConfig";
import { useRouteData } from "~/hooks/hooks";
import { setNotifySlice } from "~/store/slice/notify.slice";
import { useDispatch } from "react-redux";
import axios from "axios";
import SelectOptions from "../Share/inputs/SelectOptions";

interface NewExpensesProps {
    open: boolean,
    onSave?: () => void;
    onClose: () => void;
}



type expensesType = {
    id: number;
    livingPlace: number;
    feeding: number;
    outfit: number;
    health: number;
    education: number;
    month: month;
    total: number;
}
enum month {
    JANUARY = "JANUARY",
    FEBRUARY = "FEBRUARY",
    MARCH = "MARCH",
    APRIL = "APRIL",
    MAY = "MAY",
    JUNE = "JUNE",
    JULY = "JULY",
    AUGUST = "AUGUST",
    SEPTEMBER = "SEPTEMBER",
    OCTOBER = "OCTOBER",
    NOVEMBER = "NOVEMBER",
    DECEMBER = "DECEMBER",
}


type ExpensesPick = Pick<
    expensesType,
    | "education" | "feeding" | "health" | "livingPlace" | "outfit" | "month" | "total"
>

type statusNotify = "available" | "warning" | "error";

const NewExpenses = ({ open, onSave, onClose }: NewExpensesProps) => {
    const dispatch = useDispatch();
    const token = useRouteData("root");
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<ExpensesPick>();

    const notify = (message: string, open: boolean, status: statusNotify) => {
        dispatch(
            setNotifySlice({
                message,
                open,
                status,
            })
        );
    };

    const decodeToken = (token: string) => {
        const payload = token.split(".")[1];
        const decodedPayload = JSON.parse(atob(payload));
        return decodedPayload;
    }
    const decodedToken = decodeToken(token);
    const id = decodedToken.id;

    const onSubmit: SubmitHandler<ExpensesPick> = (data) => {
        const newExpenses = { ...data };
        axios
            .post(`${URL()}/expenses/user/${id}`, newExpenses, tokenConfig(token))
            .then((_res) => {
                notify(`Registered user successfully`, true, "available");
                onSave?.();
                closeModal();
            })
            .catch((err: AxiosError) => {
                if (err.response) {
                    const { data } = err.response as { [key: string]: any };
                    notify(data?.error || data?.message, true, "error");
                }
            });
    };

    const closeModal = () => {
        reset();
        onClose();
    }
    return (
        <Modal
            isOpen={open}
            widthModal="w-11/12 sm:w-10/12 md:w-[70%] h-4/5 md:h-fit "
            onChangeStatus={() => {
                closeModal();
            }}
        >
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className=" relative flex flex-col h-full items-center gap-5 p-5 rounded-input bg-white "
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h2 className="w-full font-bold text-week text-primary-color text-center">
                    Fiil out the form to calculate your personal expenses
                </h2>
                <hr className="h-[4px] w-full bg-primary-color rounded" />
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5 w-full items-center overflow-y-auto md:overflow-y-hidden px-2"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-5">
                        <InputText
                            required
                            {...register("livingPlace", { valueAsNumber: true })}
                            name="livingPlace"
                            type="number"
                            step="0.00001"
                            label="LivingPlace:"
                        />
                        <InputText
                            required
                            {...register("feeding", { valueAsNumber: true })}
                            name="feeding"
                            type="number"
                            step="0.00001"
                            label="Feeding:"
                        />
                        <InputText
                            required
                            {...register("outfit", { valueAsNumber: true })}
                            name="outfit"
                            type="number"
                            step="0.00001"
                            label="Outfit:"
                        />
                        <InputText
                            required
                            {...register("health", { valueAsNumber: true })}
                            name="health"
                            type="number"
                            step="0.00001"
                            label="Health:"
                        />
                        <InputText
                            required
                            {...register("education", { valueAsNumber: true })}
                            name="education"
                            type="number"
                            step="0.00001"
                            label="Education:"
                        />
                        <SelectOptions
                            required
                            {...register("month")}
                            name="month"
                            label="Month:"
                            defaultValue={"JANUARY"}
                            options={["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]}
                        />
                        <InputText
                            required
                            {...register("total", { valueAsNumber: true })}
                            name="total"
                            type="number"
                            step="0.00001"
                            label="Salary:"
                        />
                    </div>
                    <div className="flex w-full md:w-1/2 justify-evenly md:pt-5 md:pb-2 ">
                        <Button
                            text="Agregar"
                            type="submit"
                            className="px-5 py-2 border-2 hover:border-none active:bg-secondary-color-gradient border-primary-color text-primary-color hover:text-white hover:bg-primary-color"
                        />
                        <Button
                            text="Cancel"
                            type="button"
                            className="px-5 py-2 border-2 hover:border-none active:bg-secondary-color border-primary-color text-primary-color hover:text-white hover:bg-primary-color"
                            onClick={() => {
                                closeModal();
                            }}
                        />
                    </div>
                </form>
            </motion.div>
        </Modal>
    );
}

export default NewExpenses;