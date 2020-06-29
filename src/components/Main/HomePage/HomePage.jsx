import React from "react";
import NewsCard from ".//NewsList/NewsCard";
import "./HomePage.css";
import LanguageContext from "../../../languageContext";
import "semantic-ui-css/semantic.min.css";
import NewsFiltersBar from "./NewsFiltersBar";
import { Pagination } from "semantic-ui-react";

class HomePage extends React.Component {
  static contextType = LanguageContext;
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      category: null,
      lang: "pl",
      page: 1,
    };
  }

  componentDidMount() {
    this.getArticles();
    this.setState({ lang: this.context });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.category !== this.state.category ||
      prevState.lang !== this.state.lang
    )
      this.getArticles();
    if (prevState.lang !== this.context) this.setState({ lang: this.context });
    if (prevState.phrase !== this.state.phrase) this.getArticles();
    if (prevState.page !== this.state.page) this.getArticles();
  }

  getArticles() {
    const { category, lang, phrase, page } = this.state;
    const query = category ? `&category=${category}` : "";
    const queryWithPhrase = phrase ? `${query}&q=${phrase}` : query;
    const queryWithPage = page
      ? `${queryWithPhrase}&page=${page}`
      : queryWithPhrase;

    fetch(`http://localhost:4000/articles?country=${lang}${queryWithPage}`)
      .then((response) => response.json())
      .then((results) => this.setState({ results }));
  }

  setCategory = (category) => this.setState({ category });
  setSearchPhrase = (e) => {
    const phrase = e.target.value;
    if (phrase.length >= 3) this.setState({ phrase });
    if (!phrase || phrase === "") this.setState({ phrase: null });
  };

  onPageChange = (e, { activePage }) => {
    this.setState({ page: activePage });
    // console.log(activePage);
  };

  render() {
    const { results } = this.state;
    if (!results) return null;

    return (
      <>
        <NewsFiltersBar
          onCategoryChange={this.setCategory}
          onSearchPhraseChange={this.setSearchPhrase}
        />

        <div id="HomePage">
          {results.articles.map((item) => (
            <NewsCard
              key={Math.random()}
              publishedAt={item.publishedAt}
              source={item.source.name}
              urlToImage={item.urlToImage}
              title={item.title}
              description={item.description}
              url={item.url}
            />
          ))}
        </div>
        <div id="pagination">
          {results && results.totalResults ? (
            <Pagination
              defaultActivePage={1}
              totalPages={Math.ceil(results.totalResults / 20)}
              onPageChange={this.onPageChange}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default HomePage;
