import axios from "axios";
import type { AxiosError } from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "~/components/Share/buttons/Button";
import NewExpenses from "~/components/expenses/NewExpenses";
import tokenConfig, { URL } from "~/components/utils/tokenConfig";
import { useRouteData } from "~/hooks/hooks";
import Expenses from "./services/expenses";
import { logout } from "~/components/utils/auth/auth.server";
import { request } from "http";
import { Form } from "@remix-run/react";

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

const Home = () => {
  const [open, setOpen] = useState(false)
  const userId = useRouteData("root");
  const token = useRouteData("root");
  const [user, setUser] = useState<UserType | null>(null);

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
              <motion.div className="py-1">
                <Form action="/auth/logout" method="post">
                  <Button
                    iconName="Logout"
                    type="submit"
                    name="_action"
                    value="delete"
                    className=" fill-white font-bold text-white gap-5 border-2 p-2 felx items-center rounded-button float-right "
                  />
                </Form>
              </motion.div>
              <h2 className="w-full font-bold text-week text-white">
                {`Welcome ${user?.profile.firstName} ${user?.profile.lastName}`}
              </h2>
              <hr className="h-[4px] w-full bg-white rounded" />
              <h3 className=" font-bold text-title-content text-title-color ">
                my personal expenses
              </h3>
              <div className="flex  justify-center h-[70vh] overflow-auto  text-center bg-white rounded text-primary-color">
                <Expenses />
              </div>
              <div className="flex justify-center items-center p-2">
                <Button
                  text="Add"
                  type="button"
                  iconName="Plus"
                  onClick={() => setOpen(true)}
                  className="justify-center font-semibold bg-secondary-color text-white fill-white py-2 px-3"
                />

              </div>
            </div>
          </h2>
        </div>
        <NewExpenses
          open={open}
          onClose={() => setOpen(!open)}
        />
      </div>
    </motion.div>
  );

};

export default Home;
