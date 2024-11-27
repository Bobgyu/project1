/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 10px 10px -10px rgba(33, 35, 38, 0.1)", // 커스텀 그림자 추가
      },
    },
  },
  plugins: [],
};
