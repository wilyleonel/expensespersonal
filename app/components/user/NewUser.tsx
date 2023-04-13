import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { AxiosError } from "axios";
import Modal from "../Share/modal/Modal";
import type { Role } from "../utils/auth/auth.server";
import { motion } from "framer-motion"
import Button from "../Share/buttons/Button";
import InputText from "../Share/inputs/InputText";
import { useState } from "react";
import tokenConfig, { URL } from "../utils/tokenConfig";
import { useRouteData } from "~/hooks/hooks";
import { setNotifySlice } from "~/store/slice/notify.slice";
import { useDispatch } from "react-redux";
import axios from "axios";

interface NewUserProps {
    open: boolean,
    onSave?: () => void;
    onClose: () => void;
}

export type usersTypes = {
    id: number;
    email: string;
    password: string;
    role: Role;
    profile: {
        firstName: string;
        lastName: string;
        id: number;
        userId: number;
        phone: string;
    };
};

export type profile = {
    firstName: string;
    lastName: string;
    phone: string;
}

type UserPick = Pick<
    usersTypes,
    "email" | "role" | "password"
> &
    Pick<profile, "firstName" | "lastName"> & {
        phone: string;
    };
type statusNotify = "available" | "warning" | "error";

const NewUser = ({ open, onSave, onClose }: NewUserProps) => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const token = useRouteData("root");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<UserPick>();

    const notify = (message: string, open: boolean, status: statusNotify) => {
        dispatch(
            setNotifySlice({
                message,
                open,
                status,
            })
        );
    };

    const onSubmit: SubmitHandler<UserPick> = (data) => {
        const newUser = { ...data };
        axios
            .post(`${URL()}/users`, newUser, tokenConfig(token))
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
                    New User Registration
                </h2>
                <hr className="h-[4px] w-full bg-primary-color rounded" />
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5 w-full items-center overflow-y-auto md:overflow-y-hidden px-2"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-5">
                        <InputText
                            required
                            {...register("email")}
                            name="email"
                            type="text"
                            label="Email:"
                            error={errors.email && "Enter a valid email"}
                        />
                        <div className="flex gap-2 justify-end">
                            <InputText
                                required
                                id="password"
                                type={showPassword ? "text" : "password"}
                                {...register("password", { minLength: 8 })}
                                name="password"
                                label="Password:"
                                autoComplete={"off"}
                                error={errors.password && "Enter a minimum of 8 character"}
                            />
                            <Button
                                type="button"
                                iconName="Eye"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </div>
                        <InputText
                            required
                            {...register("firstName")}
                            name="firstName"
                            type="text"
                            label="First Name(s):"
                        />
                        <InputText
                            required
                            {...register("lastName")}
                            name="lastName"
                            type="text"
                            label="Last Name(s):"
                        />
                        <InputText
                            required
                            {...register("phone")}
                            name="phone"
                            type="number"
                            label="phone:"
                        />
                    </div>
                    <div className="flex w-full md:w-1/2 justify-evenly md:pt-5 md:pb-2 ">
                        <Button
                            text="Agregar"
                            type="submit"
                            className="px-5 py-2 border-2 hover:border-none active:bg-secondary-color-gradient border-primary-color text-primary-color hover:text-white hover:bg-primary-color"
                        />
                        <Button
                            text="Cancelar"
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

export default NewUser;