import './App.css';
import MovieFeedbackForm from './components/MovieFeedbackForm';
import MovieReview from './components/MovieReview'; // <-- Add this line

import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Movie Feedback Forms</h1>

        <div className='tabs'>
          <Link to="/MovieFeedbackForm" className="tab-link">Feedback</Link>
          <Link to="/MovieReview" className="tab-link">Review</Link>
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/MovieFeedbackForm" />} />
          <Route path="/MovieFeedbackForm" element={<MovieFeedbackForm />} />
          <Route path="/MovieReview" element={<MovieReview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
