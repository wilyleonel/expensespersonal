export const tokenConfig = (value: string) => {
  return {
    headers: { Authorization: `Bearer ${value}` },
  };
};

// export const URL = () => {
//   if (process.env.NODE_ENV === "production") {
//     return "http://localhost:8000";
//   } else {
//     return "http://localhost:8000";
//   }
// }


export const URL = () => "http://localhost:8000";
export const SECRETUSER = "myexpenses"

export default tokenConfig;
