import React, { useEffect, useState } from "react";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
import Card from "../shared/Card";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setMessage(null);
      setBtnDisabled(true);
    } else if (text !== null && text.trim().length <= 10) {
      setMessage("Please type in 10 or more characters");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button version="secondary" type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        <div className="alert alert-danger">{message}</div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
