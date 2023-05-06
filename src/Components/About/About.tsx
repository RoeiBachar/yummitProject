import Header from "../Header/Header";
import "./About.css";

function About(): JSX.Element {
  return (
    <div className="About">
      <h1>קצת עליי...</h1>
      <div id="aboutContainer">
        <p className="fade-in-up">
          היי אני ימית בת 22 בוגרת תואר מנהל עסקים ותואר בקונדיטוריה
          החלטתי לשלב בין השניים ולפתוח עצב לעיצוב עוגות ולהגשים לכם את החלומות
          על העוגות אשמח לקחת חלק מהשמחה שלכם אוהבת מלא
        </p>
      </div>
    </div>
  );
}

export default About;
