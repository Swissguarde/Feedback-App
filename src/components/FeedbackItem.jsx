import Card from "../shared/Card";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <i className="fa fa-trash fa-2x" style={{ color: "purple" }}></i>
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <i class="fa fa-edit fa-2x" style={{ color: "purple" }}></i>
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
