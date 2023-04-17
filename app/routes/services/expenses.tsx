import axios from "axios";
import type { AxiosError } from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "~/components/Share/buttons/Button";
import NewExpenses from "~/components/expenses/NewExpenses";
import tokenConfig, { URL } from "~/components/utils/tokenConfig";
import { useRouteData } from "~/hooks/hooks";

type ExpensesType = {
    id: number;
    livingPlace: number;
    feeding: number;
    outfit: number;
    health: number;
    education: number;
    total: number;

}

const Expenses = () => {
    const [loading, setLoading] = useState(false);
    const userId = useRouteData("root");
    const token = useRouteData("root");
    const [expensesData, setExpensesData] = useState<ExpensesType[] | null>(null);
    console.log(expensesData)

    const decodeToken = (token: string) => {
        const payload = token.split(".")[1];
        const decodedPayload = JSON.parse(atob(payload));
        return decodedPayload;
    }

    useEffect(() => {
        const decodedToken = decodeToken(token);
        const userId = decodedToken.id;
        axios
            .get(`${URL()}/expenses/${userId}`, tokenConfig(token))
            .then((_res) => {
                setExpensesData(Object.values(_res.data));
            })
            .catch((err: AxiosError) => {
                console.log(err);
            });
    }, [userId, token]);


    // useEffect(() => {
    //     expenses();
    //   },[userId,token]);

    // const expenses=()=>{
    //     const decodedToken = decodeToken(token);
    //     const userId = decodedToken.id;
    //     setLoading(true);
    //     axios
    //     .get(
    //         `${URL()}/expenses/${userId}`,
    //         tokenConfig(token)
    //       )
    //       .then((_res) => {
    //         setExpensesData(_res.data.expenses);
    //       })
    //       .catch((err: AxiosError) => console.log(err.response?.data))
    //       .finally(() => setLoading(false));
    // }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            exit={{ opacity: 0 }}
            className="w-full h-full bg-white flex flex-col gap-1 "
        >
            <div>
                <table className=" table-auto w-full text-justify ">
                    <thead className="sticky top-0 bg-withe w-1/6 rounded">
                        <tr className="rounded-none text-sm md:text-logo text-secondary-color bg-white">
                            <th className="p-4">N°</th>
                            <th className="p-4">Living Place </th>
                            <th className="p-4 text-center">Feeding</th>
                            <th className="p-4 text-center">Outfit</th>
                            <th className="p-4 text-center">Healt</th>
                            <th className="p-4 text-center">Education</th>
                            <th className="p-4 text-center">Salary</th>
                            <th className="p-4 text-center">Month</th>
                            <th className="p-4 text-center">Ending Balance</th>
                        </tr>
                    </thead>
                    <tbody className="bg-menu-color overflow-auto">
                        {Array.isArray(expensesData) &&
                            expensesData.map((array, arrayIndex) =>
                                Array.isArray(array) &&
                                array.map((expense, index) => {
                                    const totalExpenses = expense.total - (expense.livingPlace + expense.feeding + expense.outfit + expense.health + expense.education);
                                    return (
                                        <tr
                                            className="border-placeholder-color border-y-[0.5px] text-sm md:text-md lg:text-title-content"
                                            key={expense.id}
                                        >
                                            <td className="p-3 ">{index + 1}</td>
                                            <td className="p-3 font-semibold uppercase">
                                                {expense.livingPlace}
                                            </td>
                                            <td className="p-3 font-semibold uppercase text-center">
                                                {expense.feeding}
                                            </td>
                                            <td className="p-3 font-semibold uppercase text-center">
                                                {expense.outfit}
                                            </td>
                                            <td className="p-3 font-semibold uppercase text-center">
                                                {expense.health}
                                            </td>
                                            <td className="p-3 font-semibold uppercase text-center">
                                                {expense.education}
                                            </td>
                                            <td className="p-3 font-semibold uppercase text-center">
                                                {expense.total}
                                            </td>
                                            <td className="p-3 font-semibold uppercase text-center">
                                                {expense.month}
                                            </td>
                                            <td className={`p-3 font-semibold uppercase text-center ${totalExpenses < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                                {totalExpenses}
                                            </td>

                                        </tr>
                                    )
                                })
                            )}
                    </tbody>



                </table>
            </div>
        </motion.div>
    );

};

export default Expenses;
