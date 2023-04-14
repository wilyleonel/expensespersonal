import axios from "axios";
import type { AxiosError } from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "~/components/Share/buttons/Button";
import tokenConfig, { URL } from "~/components/utils/tokenConfig";
import { useRouteData } from "~/hooks/hooks";

type UserType = {
    id: number;
    email: string;
    profile: {
        firstName: string;
        lastName: string;
        phone: string;
    };
    expenses: {
        livingPlace: number;
        feeding: number;
        outfit: number;
        health: number;
        education: number;
    }
};

const Expenses = () => {
    const userId = useRouteData("root");
    const token = useRouteData("root");
    const [user, setUser] = useState<UserType | null>(null);
    console.log(user)

    const decodeToken = (token: string) => {
        const payload = token.split(".")[1];
        const decodedPayload = JSON.parse(atob(payload));
        return decodedPayload;
    }

    useEffect(() => {
        const decodedToken = decodeToken(token);
        const userId = decodedToken.id;
        axios
            .get(`${URL()}/users/${userId}`, tokenConfig(token))
            .then((_res) => {
                setUser(_res.data);
            })
            .catch((err: AxiosError) => {
                console.log(err);
            });
    }, [userId, token]);


    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            exit={{ opacity: 0 }}
            className="w-full h-full bg-white flex flex-col gap-1 "
        >
            <div className="relative h-screen w-full bg-primary-color lg:bg-primary-color ">
                <div className="flex  justify-center h-full w-full p-4 text-center">
                    <h2 className="w-full font-bold text-week text-white">
                        <div className="h-full">
                            <h2 className="w-full font-bold text-week text-white">
                                {`Welcome ${user?.profile.firstName} ${user?.profile.lastName}`}
                            </h2>
                            <hr className="h-[4px] w-full bg-white rounded" />
                            <h3 className=" font-bold text-title-content text-title-color ">
                                my personal expenses
                            </h3>
                            <div className="flex  justify-center h-[70vh] overflow-auto  text-center bg-white rounded">
                                <table className=" table-auto w-full text-justify ">
                                    <thead className="sticky top-0 bg-withe w-1/6 rounded">
                                        <tr className="rounded-none text-sm md:text-logo text-secondary-color bg-white">
                                            <th className="p-4">livingPlace</th>
                                            <th className="p-4">feeding</th>
                                            <th className="p-4">outfit</th>
                                            <th className="p-4">health</th>
                                            <th className="p-4">education</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="flex justify-center items-center p-2">
                                <Button
                                    text="Añadir"
                                    type="button"
                                    iconName="Plus"
                                    //   onClick={() => dispatch(setShowService(true))}
                                    className="justify-center font-semibold bg-secondary-color text-white fill-white py-2 px-3"
                                />
                            </div>
                        </div>
                    </h2>
                </div>
            </div>
        </motion.div>
    );

};

export default Expenses;
