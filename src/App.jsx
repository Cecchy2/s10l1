import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import { Component } from "react";
import fantasy from "./data/fantasy.json";

class App extends Component {
  state = {
    recensioni: [],
    books: fantasy,
    selectedCardId: "",
  };

  handleCardClick = (_id) => {
    this.setState({ selectedCardId: _id }, this.fetchReviews);
  };

  fetchReviews = async () => {
    if (!this.state.selectedCardId) return;

    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.state.selectedCardId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjlhOTdjMjM5YzAwMTUyZjRiM2QiLCJpYXQiOjE3MTk0OTExNzAsImV4cCI6MTcyMDcwMDc3MH0.hWXOvdsqvExQltlx-3uMY51gcEWGWiG266VOOod96kU",
        },
      });

      if (resp.ok) {
        const reviews = await resp.json();
        console.log("Fetched reviews:", reviews);
        this.setState({ recensioni: reviews });
      } else {
        console.error("Errore nel reperimento dei commenti");
      }
    } catch (err) {
      console.error("Errore nella fetch", err);
    }
  };

  render() {
    return (
      <>
        <MyNav />
        <BookList
          books={this.state.books}
          onCardClick={this.handleCardClick}
          selectedCardId={this.state.selectedCardId}
          recensioni={this.state.recensioni}
        />
        <MyFooter />
      </>
    );
  }
}

export default App;
