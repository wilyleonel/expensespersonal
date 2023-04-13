import axios from "axios";
import type { AxiosError } from "axios";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import tokenConfig, { SECRETUSER, URL } from "~/components/utils/tokenConfig";
import { useRouteData } from "~/hooks/hooks";
import jwt from 'jsonwebtoken';

type UserType = {
    id: number;
    email: string,
    profile: {
        firstName: string,
        lastName: string,
        phone: string
    }
}

const Expenses = () => {
    const token = useRouteData("root");
    const [user, setUser] = useState<UserType|null>(null)
    const newtoken = useRouteData("root");
    const decodeToken = jwt.verify(newtoken, SECRETUSER);
    const valuesArray = Object.values(decodeToken);
    const userId = valuesArray[0];
    const id=parseInt(userId)
    console.log(userId)
    console.log(user?.email)
    useEffect(() => {
        axios
            .get(`${URL()}/users/${id}`, tokenConfig(token))
            .then((_res) => {
                setUser(_res.data);
            })
            .catch((err: AxiosError) => {
                console.log(err);
            })
    }, [id, token])
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            exit={{ opacity: 0 }}
            className="w-full h-full bg-white flex flex-col gap-2 rounded p-5"
        >
            <h2 className="w-full font-bold text-week text-black">
                <div>welcome{user?.email}</div>
            </h2>

        </motion.div>
    )
}

export default Expenses;