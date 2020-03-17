import * as React from "react";
import "./About.less";
import { useContext, useState } from "react";
import QuoteContext from "../../utils/HelperContext";
import QuoteContent from "./QuoteContent/QuoteContent";
import { QuoteItem } from "../../utils/data";

interface IAboutProps {}

const About = (props: IAboutProps) => {
  //Will try hooks here.

  const Quote = useContext(QuoteContext);
  console.log("useContext", Quote);

  const [quoteList, setQuoteList] = useState(Quote);
  console.log("useState", quoteList);

  let robin: JSX.Element[] = quoteList.map((q: QuoteItem, key: any) => (
    <QuoteContent key={key} quote={q.quote} author={q.author} />
  ));

  /* let hej = quoteList(Math.floor(Math.random() * quoteList.length));
  console.log(hej); */
  return (
    <div className="About">
      <div className="Top">
        <span className="intro">
          Hello! My name is Eddie and I am a Frontend-developer.
        </span>
        <span className="quote">
          "My family is everything. I am what I am thanks to my mother, my
          father, my brother, my sister... because they have given me
          everything. The education I have is thanks to them." - Ronaldinho.
        </span>
      </div>

      <div className="Bot">
        <div className="Bot-box">
          <h2>Me</h2>
          <div>Name: Edward (Eddie) Jostell.</div>
          <div>Age: 32 summers.</div>
          <div>From: Stockholm, Sweden.</div>
          <div>Occupation: Frontend-developer.</div>
        </div>
        <div className="Bot-box">
          <h2>Likes</h2>
          <div>
            When Im not hitting the keyboard to make webdevelopment magic or
            playing games I like to hang out with my friends, go to the gym,
            long walks, relax with movies/tvshows or just listening to good
            music.
          </div>
        </div>
        <div className="Bot-box">
          <h2>Gamer</h2>
          <div>
            Before I wanted to become a web-developer I played at a
            semi-professional level in the computer game Counter Strike - Global
            Offensive. Even tho I dont play on that level anymore I still dream
            of a comeback, who knows, like J.B says "Never say never!".
          </div>
        </div>
        <div className="Bot-box">
          <h2>Quote</h2>
          {Quote instanceof Array
            ? Quote.map((q: QuoteItem, key: any) => (
                <QuoteContent key={key} quote={q.quote} author={q.author} />
              ))
            : null}
          {/*    <div>
            "Reality can never live up to that fantasy that you have in your
            head. You'll be much happier if you accept the fact that real life
            is never perfect." - Author unknown.
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;

//https://stackoverflow.com/questions/42094060/changing-shuffling-text-every-1-5-second-in-a-react-component
