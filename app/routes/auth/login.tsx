import { redirect, json } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { getUser, loginUser } from "~/components/utils/auth/auth.server";
import { useState } from "react";
import axios from "axios";
import { Form } from "@remix-run/react";
import Icon from "~/components/Icon";
import Button from "~/components/Share/buttons/Button";
import InputText from "~/components/Share/inputs/InputText";
import NewUser from "~/components/user/NewUser";
import {motion} from "framer-motion"

type ResErrors = {
    message: string;
    errorContent: string;
};

const dataForm = {
    email: "",
    password: "",
}

export const action: ActionFunction = async ({ request }) => {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");
    if (typeof email !== "string" || typeof password !== "string") {
        return json({ error: "Invalid Form Data" }, { status: 400 });
    }
    const user = await loginUser({ email, password });
    return user;
};

export const loader: LoaderFunction = async ({ request }) => {
    const token = await getUser(request);
    return token ? redirect("/home") : null;
};

const Login = () => {
    const [open, setOpen] = useState(false);
    const [resErrors, setResErrors] = useState<ResErrors | null>(null);
    const [form, setForm] = useState(dataForm);

    const handleFormData = (
        { target }: React.ChangeEvent<HTMLInputElement>,
        textField: string
    ) => {
        const { value } = target;
        setForm({ ...form, [textField]: value });
    };

    const onSubmit = () => {
        axios
            .post(`http://localhost:8000/auth/login`, form)
            .catch((error) => {
                console.log(setResErrors(error.response.data));
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            exit={{ opacity: 0 }}
            className="w-full h-full bg-menu-color flex flex-col gap-2 "
        >
            <div className="relative h-screen w-full bg-primary-color lg:bg-primary-color">
                <div className="flex items-center justify-center h-full w-full">
                    <div
                        className="flex flex-col bg-white drop-shadow-lg h-2/3 md:h-4/5 lg:h-full w-10/12
                    lg:w-96  p-5 lg:p-0 items-center justify-center lg:rounded-l rounded"
                    >
                        <div className="text-2xl text-center text-primary-color">Expenses Personal</div>
                        <Form
                            className="flex flex-col gap-5 items-center w-full"
                            action="#"
                            method="post"
                        >
                            <div className="flex flex-col items-center w-[90%] lg:w-4/5">
                                {resErrors?.message && (
                                    <span className="text-error text-sm">{resErrors.message}</span>
                                )}
                                <div className="relative flex items-center gap-4 w-full sm:w-10/12 md:w-10/12 lg:w-full ">
                                    <Icon iconName="Mail" className=" fill-secondary-color" />
                                    <InputText
                                        id="email"
                                        htmlFor="email"
                                        name="email"
                                        placeholder="email"
                                        label="email"
                                        type="string"
                                        onChange={(event) => handleFormData(event, "email")}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-[90%]  lg:w-4/5">
                                <div className="flex items-center gap-4 w-full sm:w-10/12 md:w-10/12 lg:w-full">
                                    <Icon iconName="Lock" className="fill-secondary-color" />
                                    <InputText
                                        label="Contraseña"
                                        placeholder="contraseña"
                                        htmlFor="password"
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="off"
                                        onChange={(event) => handleFormData(event, "password")}
                                    />
                                </div>
                            </div>
                            <Button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                type="submit"
                                name="_action"
                                value="login"
                                text="Login"
                                onClick={() => onSubmit()}
                                className=" justify-center bg-secondary-color py-2 text-white w-5/6  md:w-2/5 justify-cente rounded-button"
                            />
                            <Button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                type="button"
                                text="Register"
                                onClick={() => setOpen(true)}
                                className=" justify-center bg-secondary-color py-2 text-white w-5/6  md:w-2/5 justify-cente rounded-button"
                            />
                        </Form>
                    </div>
                </div>
                <NewUser
                    open={open}
                    onClose={() => setOpen(!open)}
                    // onSave={}
                />
            </div>
        </motion.div>
    );
}


export default Login;

 

           