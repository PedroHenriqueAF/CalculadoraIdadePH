function Result({ result }) {
    return (
      <div className="date-result">
        <div className="result-output">
          <h1 className="date-number" id="year-result">{result.years}</h1>
          <h1 className="date-text">years</h1>
        </div>
        <div className="result-output">
          <h1 className="date-number" id="month-result">{result.months}</h1>
          <h1 className="date-text">months</h1>
        </div>
        <div className="result-output">
          <h1 className="date-number" id="day-result">{result.days}</h1>
          <h1 className="date-text">days</h1>
        </div>
      </div>
    );
}
  
export default Result;
  