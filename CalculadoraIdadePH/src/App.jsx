import { useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [date, setDate] = useState({ day: "", month: "", year: "" });
  const [result, setResult] = useState({ years: "--", months: "--", days: "--" });
  const [errors, setErrors] = useState({ day: "", month: "", year: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isValidDate = (day, month, year) => {
    const currentDate = new Date();
    const inputDate = new Date(year, month - 1, day);

    if (isSubmitted && (!day || !month || !year)) {
      return { 
        day: !day ? "This field is required" : "",
        month: !month ? "This field is required" : "",
        year: !year ? "This field is required" : ""
      };
    }

    if (!day || !month || !year) {
      return null;
    }

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return {
        day: "Must be a valid day",
        month: "Must be a valid month",
        year: "Must be a valid year"
      };
    }

    if (day < 1 || day > 31) {
      return { day: "Must be a valid day", month: "", year: "" };
    }

    if (month < 1 || month > 12) {
      return { month: "Must be a valid month", day: "", year: "" };
    }

    if (year > currentDate.getFullYear()) {
      return { year: "Must be in the past", day: "", month: "" };
    }

    if (
      inputDate.getDate() !== parseInt(day) ||
      inputDate.getMonth() + 1 !== parseInt(month) ||
      inputDate.getFullYear() !== parseInt(year)
    ) {
      return { 
        day: "Must be a valid date",
        month: "",
        year: ""
      };
    }

    if (inputDate > currentDate) {
      return {
        day: "Must be in the past",
        month: "Must be in the past",
        year: "Must be in the past"
      };
    }

    return null;
  };

  const handleCalculate = () => {
    setIsSubmitted(true);
    const validationErrors = isValidDate(date.day, date.month, date.year);
    
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({ day: "", month: "", year: "" });

    const birthDate = new Date(date.year, date.month - 1, date.day);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({ years, months, days });
  };

  return (
    <div className="age-calculator-box">
      <Input date={date} setDate={setDate} errors={errors} onCalculate={handleCalculate} />
      <hr className="divider" />
      <Result result={result} />
    </div>
  );
}

export default App;