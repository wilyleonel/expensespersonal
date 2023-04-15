export const tokenConfig = (value: string) => {
  return {
    headers: { Authorization: `Bearer ${value}` },
  };
};

export const URL = () => "http://localhost:8000";

export default tokenConfig;
