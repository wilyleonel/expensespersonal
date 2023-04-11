/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ///BRAND
        // "primary-color": "#00A7E1",
        "font-color": "#000020",
        "primary-color": "#171a4a",
        "secondary-color":"#6736d9",
        "primary-color-gradient": "#B8E4F3",
        // "secondary-color": "#9381E5",
        "secondary-color-gradient": "#CBC6E4",
        //NEUTRO
        "title-color": "#ffffff",
        "text-color": "#1B2F3A",
        "placeholder-color": "#7DA2A2",
        "menu-color": "#EFF9FC",
        //STATUS
        //available Green
        available: "#3EB773",
        "secondary-available": "#A2DCBC",
        "tertiary-available": "#C4E9D5",
        //Caution Yellow
        warning: "#FFA209",
        "secondary-warning": "#FFD083",
        "tertiary-warning": "#FFE3B4",
        //Critical Red
        error: "#E84855",
        "secondary-error": "#F8C7CB",
      },
      fontFamily: {
        signika: ["Signika Negative"],
        overpass: ["Overpass"],
      },
      borderRadius: {
        DEFAULT: "20px",
        button: "15px",
        profile: "10px",
        input: "9px",
        calendar: "6px",
      },
      fontSize: {
        title: "3em",
        week: "1.5em",
        subtitle: "2.34em",
        header: "2em",
        button: "1.67em",
        menu: "1.67em",
        "title-content": "1em",
        content: "0.875em",
        logo: "1.3em",
        "property-card": "1.18em",
      },
      borderWidth: {
        DEFAULT: "1px",
        2: "2px",
      },
      boxShadow: {
        card: "0px 0px 10px 0 rgb(0 0 0 / 0.015)",
      },
    },
  },
  plugins: [],
};
