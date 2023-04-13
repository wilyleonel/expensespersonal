export const validateEmail = (email: String): string | undefined => {
    if (
        typeof email !== "string"
        //  ||
        // email.length !== 8 ||
        // email.length > 8
    ) {
        return "Enter a valid email";
    }
};

export const validatepassword = (password: string): string | undefined => {
    if (password.length < 3) {
        return "Enter a valid password";
    }
}