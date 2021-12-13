import "../sass/layout/_creditcard.scss";
import Header from "./Header";
import Backlink from "./Backlink";
import MaskedInput from "react-text-mask";
import { useState, useRef, useEffect } from "react";
import { postOrder } from "./../utilities/post.js";
import { useNavigate } from "react-router-dom";

function Creditcard() {
  let navigate = useNavigate();
  const redirectToConfirmation = () => {
    console.log("redirectToConfirmation");
    navigate("/confirmation");
  };

  const [number, setNumber] = useState("");
  const [numberErr, setNumberErr] = useState(false);
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [expiry, setExpiry] = useState("");
  const [expiryErr, setExpiryErr] = useState(false);
  const [cvc, setCvc] = useState("");
  const [cvcErr, setCvcErr] = useState(false);

  const cardNumberRef = useRef("");
  const cardExpiryRef = useRef("");
  const cardCvcRef = useRef("");
  const cardNameRef = useRef("");
  const submitButton = useRef("");

  const focusOnError = (errorField) => {
    errorField.current.focus();
  };

  useEffect(() => {
    if (number.length === 19) {
      cardNameRef.current.focus();
    }
  }, [number]);

  useEffect(() => {
    if (expiry.length === 5) {
      cardCvcRef.current.focus();
    }
  }, [expiry]);

  useEffect(() => {
    if (cvc.length === 3) {
      document.activeElement.blur();
    }
  }, [cvc]);

  const handleNumberInput = (e) => {
    setNumber(e.target.value);
  };

  const handleNumberBlur = (e) => {
    if (e.target.value.length < 19) {
      setNumberErr(true);
      console.log("numberErr = true");
    } else {
      setNumberErr(false);
      console.log("numberErr = false");
    }
  };

  const handleExpiryInput = (e) => {
    setExpiry(e.target.value);
  };

  const handleExpiryBlur = (e) => {
    if (e.target.value.length < 5) {
      setExpiryErr(true);
      console.log(expiry);
      console.log("expiryErr = true");
    } else {
      setExpiryErr(false);
      console.log("expiryErr = false");
    }
  };

  const handleNameInput = (e) => {
    setName(e.target.value.replace(/[^a-zA-Zæøå\s]*$/gi, ""));
  };

  const handleNameBlur = (e) => {
    if (e.target.value.length < 3) {
      setNameErr(true);
      console.log("nameErr = true");
    } else {
      setNameErr(false);
      console.log("nameErr = false");
    }
  };

  const handleCvcInput = (e) => {
    setCvc(e.target.value);
  };

  const handleCvcBlur = (e) => {
    if (e.target.value.length < 3) {
      setCvcErr(true);
      console.log("cvcErr = true");
    } else {
      setCvcErr(false);
      console.log("cvcErr = false");
    }
  };

  const checkForErrors = () => {
    if (number.length < 19) {
      return cardNumberRef;
    } else if (name.length < 3) {
      return cardNameRef;
    } else if (expiry.length < 5) {
      return cardExpiryRef;
    } else if (cvc.length < 3) {
      return cardCvcRef;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorField = checkForErrors();
    if (!errorField) {
      await postOrder();
      redirectToConfirmation();
    } else {
      focusOnError(errorField);
    }
  };

  // error message component
  function ErrorMessage(props) {
    return (
      <div className={`error ${props.show ? "shown" : ""}`}>
        <span>{props.text}</span>
      </div>
    );
  }

  // success message component
  function SuccessMessage(props) {
    return (
      <div className={`success ${props.show ? "shown" : ""}`}>
        <img src="icons/checkmark.svg" alt="success icon" />
      </div>
    );
  }

  return (
    <section className="Creditcard">
      <Header />
      <main>
        <Backlink />
        <h1>payment</h1>
        <form>
          <div className="line line_one">
            <label
              htmlFor="card-number"
              ref={cardNumberRef}
              className="label number"
            >
              Card number
            </label>
            <div className="input_wrapper">
              <MaskedInput
                mask={[
                  /[1-9]/,
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                autoFocus
                className={`form-control ${numberErr ? "incomplete" : ""}`}
                placeholder="1234 5678 9012 3456"
                guide={false}
                value={number}
                id="card-number"
                name="number"
                inputMode="numeric"
                onChange={handleNumberInput}
                onBlur={handleNumberBlur}
              />
              <SuccessMessage show={number.length === 19} />
            </div>
            <ErrorMessage
              text={"Credit card number must be 16 digits"}
              show={numberErr}
            />
          </div>

          <div className="line line_two">
            <label htmlFor="card-name" className="label name">
              Name on card
            </label>
            <div className="input_wrapper">
              <input
                type="text"
                name="name"
                className={`${nameErr ? "incomplete" : ""}`}
                id="card-name"
                placeholder="John Doe"
                ref={cardNameRef}
                value={name}
                onChange={handleNameInput}
                onBlur={handleNameBlur}
              />
              <SuccessMessage show={name.length > 2} />
            </div>
            <ErrorMessage text={"Please enter your name"} show={nameErr} />
          </div>

          <div className="line line_three">
            <div className="column_one">
              <label
                htmlFor="card-expiry"
                className="label expiry"
                ref={cardExpiryRef}
              >
                Expiry date
              </label>
              <div className="input_wrapper">
                <MaskedInput
                  mask={[/[0-9]/, /\d/, "/", /\d/, /\d/]}
                  className={`form-control ${expiryErr ? "incomplete" : ""}`}
                  placeholder="04/23"
                  guide={false}
                  value={expiry}
                  id="card-expiry"
                  name="name"
                  inputMode="numeric"
                  onChange={handleExpiryInput}
                  onBlur={handleExpiryBlur}
                />
                <SuccessMessage show={expiry.length === 5} />
              </div>
              <ErrorMessage
                text={"Expiry date must be 4 digits"}
                show={expiryErr}
              />
            </div>

            <div className="column_two">
              <label htmlFor="card-cvc" className="label cvc" ref={cardCvcRef}>
                Security code
              </label>
              <div className="input_wrapper">
                <MaskedInput
                  mask={[/[0-9]/, /\d/, /\d/, /\d/]}
                  className={`form-control ${cvcErr ? "incomplete" : ""}`}
                  placeholder="123"
                  guide={false}
                  value={cvc}
                  id="card-cvc"
                  name="cvc"
                  inputMode="numeric"
                  onChange={handleCvcInput}
                  onBlur={handleCvcBlur}
                />
                <SuccessMessage show={cvc.length === 3} />
              </div>
              <ErrorMessage
                text={"Security code must be 3 digits"}
                show={cvcErr}
              />
            </div>
          </div>

          <div className="line line_four">
            <button
              className="submit_btn"
              type="submit"
              ref={submitButton}
              onClick={handleSubmit}
            >
              order
            </button>
          </div>
        </form>
      </main>
    </section>
  );
}

export default Creditcard;
