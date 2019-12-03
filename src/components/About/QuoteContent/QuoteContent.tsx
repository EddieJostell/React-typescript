import * as React from "react";
import "../../About/About.less";

interface Props {
  quote: string;
  author: string;
}

const QuoteContent = (props: Props) => {
  return (
    <div>
      <span>{props.quote}</span>
      <span>{props.author}</span>
    </div>
  );
};

export default QuoteContent;
