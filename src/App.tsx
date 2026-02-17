import Aside from "./components/shared/Aside";
import Virtualization from "./pages/Virtualization";
import ItemListManager from "./pages/ItemListManager";
import { Switch, Route } from "wouter";
import "./App.css";
import StateManager from "./pages/StateManager";
import ArticleSorting from "./pages/ArticleSorting";
import EmployeeValidationForm from "./pages/EmployeeValidation";
import BlogSpot from "./pages/BlogSpot";
import SlideShow from "./pages/SlideShow";
import { WordOmitter } from "./pages/WordOmmiter";
import CryptoRank from "./pages/CryptoRank";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="relative">
      <Header />
      <div className="flex h-screen">
        <Aside />
        <main className="flex-1 my-0 mx-auto h-screen">
          <Switch>
            <Route
              path="/"
              component={() => (
                <div className="flex flex-col justify-center h-full">
                  <h1 className="text-center mt-8 text-3xl font-bold">
                    Welcome to the HackerRank Exercises!
                  </h1>
                  <h2 className="text-center mt-8 text-xl text-neutral-500 font-bold">
                    Choose an exercise from the navigation.
                  </h2>
                </div>
              )}
            />
            <Route path="/virtualization" component={Virtualization} />
            <Route path="/item-list-manager" component={ItemListManager} />
            <Route path="/code-review-feedback" component={StateManager} />
            <Route path="/article-sorting" component={ArticleSorting} />
            <Route path="/blog-post" component={BlogSpot} />
            <Route path="/slide-show" component={SlideShow} />
            <Route
              path="/employee-validation"
              component={EmployeeValidationForm}
            />
            <Route path="/word-omitter" component={WordOmitter} />
            <Route path="/cryptorank-exchange" component={CryptoRank} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
