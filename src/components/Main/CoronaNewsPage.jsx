import React, { useState, useEffect, useCallback, useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import NewsList from "./HomePage/NewsList/NewsList";
import moment from "moment";
import LanguageContext from "../../languageContext";
import "./CoronaNewsPage.css";

const sortByOptions = [
  { value: "relevancy", name: "Relevancy" },
  { value: "popularity", name: "Popularity" },
  { value: "publishedAt", name: "Published at" },
];

const CoronaNewsPage = () => {
  const [startDate, setStartDate] = useState(
    moment().subtract(1, "months").toDate()
  );
  const [endDate, setEndDate] = useState(moment().toDate());
  const [results, setResults] = useState(null);
  const lang = useContext(LanguageContext);
  const [sortBy, setSortBy] = useState(sortByOptions[0].value);

  const fetchArticles = useCallback(() => {
    if (startDate > endDate)
      return alert("start date is greater than end date");
    fetch(
      `http://localhost:4000/korona-news?language=${lang}&from=${startDate.toISOString()}&to=${endDate.toISOString()}&sortBy=${sortBy}`
    )
      .then((response) => response.json())
      .then((res) => setResults(res));
  }, [startDate, endDate, lang, sortBy]);

  // useEffect(() => {
  //   fetchArticles();
  // }, []);
  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const onSelectChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="creepy">
      <div>
        <label className="label1">Start date:</label>
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div>
        <label className="label2">End date:</label>
        <DatePicker
          selected={endDate}
          onChange={setEndDate}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className="sortby">
        <label>Sort by:</label>
        <select onChange={onSelectChange}>
          {sortByOptions.map(({ value, name }) => (
            <option value={value}>{name}</option>
          ))}
        </select>
      </div>

      {results ? <NewsList articles={results.articles} /> : null}
    </div>
  );
};

export default CoronaNewsPage;
