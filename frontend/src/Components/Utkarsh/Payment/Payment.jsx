import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increaseStep } from "../../Redux/action";
import styled from "styled-components";
let data = ["1234 5678 1234 5678", "12/25", "123", "Utkarsh Jain"];
function Payment() {
  let [inp, setInp] = React.useState(data);
  let [color, setColor] = React.useState("#06A759");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(increaseStep());
    navigate("/checkout/summary");
  };
  const clr = () => {
    if (color === "#06A759") {
      setColor("grey");
      return;
    }
    setColor("#06A759");
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const changeHandler = (e) => {
    let newInp = [...inp];
    let { id, value } = e.target;
    newInp[+id] = value;
    setInp(newInp);
  };
  return (
    <Section>
      <div>
        <svg
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          iconSize="20"
          className="Icon-sc-1iwi4w1-0 bpNwUI"
          style={{ marginRight: "13px" }}
        >
          <path
            d="M24.029 9.01v6.277L28 13.782 22.869.93a1 1 0 00-1.3-.558L0 9.011"
            fill="#56BB8A"
          ></path>
          <path
            d="M0 8.82h27a1 1 0 011 1v13.512a1 1 0 01-1 1H1a1 1 0 01-1-1V8.82z"
            fill="#56BB8A"
          ></path>
          <path
            d="M1.559 14.358c1.656-.35 2.952-1.265 3.447-2.435H23c.495 1.17 1.791 2.085 3.448 2.435v4.437c-1.657.35-2.953 1.265-3.448 2.435H5.006c-.496-1.17-1.791-2.085-3.447-2.435v-4.437z"
            fill="#91E5BD"
          ></path>
          <path
            d="M13.751 19.28c1.58 0 2.86-1.277 2.86-2.852a2.857 2.857 0 00-2.86-2.853 2.857 2.857 0 00-2.86 2.853 2.857 2.857 0 002.86 2.852z"
            fill="#56BB8A"
          ></path>
          <path
            d="M23.635 9.01L22.28 5.53l-.062-.153a4.018 4.018 0 01-3.5-1.501l-.154.062L6.296 9.01h17.34z"
            fill="#91E5BD"
          ></path>
          <path
            d="M7.28 16.998a.571.571 0 100-1.142.571.571 0 000 1.143zM19.865 16.998a.571.571 0 10.002-1.142.571.571 0 00-.002 1.143z"
            fill="#56BB8A"
          ></path>
        </svg>
        <p>Cash on Delivery</p>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          iconSize="20"
          className="Icon-sc-1iwi4w1-0 fvvrdU"
          onClick={clr}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM6.355 12.322l2.761 2.76 7.863-7.85A.793.793 0 1118.1 8.355l-8.42 8.413a.793.793 0 01-1.122 0l-3.326-3.324a.791.791 0 01.56-1.354c.211 0 .413.084.562.233z"
            fill={color}
          ></path>
        </svg>
      </div>
      <form action="">
        <h1>ADD PAYMENT METHOD</h1>
        <hr />
        <h2>Card Number</h2>
        <input
          type="text"
          placeholder="Card Number"
          id="0"
          value={inp[0]}
          onChange={changeHandler}
        />
        <h2>Expiry Date</h2>
        <input
          type="text"
          placeholder="MM/YY"
          id="1"
          value={inp[1]}
          onChange={changeHandler}
        />
        <h2>CVV</h2>
        <input
          type="text"
          placeholder="CVV"
          id="2"
          value={inp[2]}
          onChange={changeHandler}
        />
        <h2>Name on Card</h2>
        <input
          type="text"
          placeholder="Name on Card"
          id="3"
          value={inp[3]}
          onChange={changeHandler}
        />
        <button onClick={handleClick}>Place Order</button>
      </form>
    </Section>
  );
}

export default Payment;

let Section = styled.section`
  padding: 50px 0;
  max-width: 95%;
  width: 400px;
  display: grid;
  gap: 2.5vw;
  margin: 30px auto 50px;
  box-shadow: 1px 1px 6px 1px #e4e4e4;
  padding: 20px 15px;
  padding-bottom: 20px;
  border-radius: 3px;
  div {
    display: flex;
    align-items: center;
    p {
      flex-grow: 1;
    }
  }
  h1 {
    font-size: 22px;
  }
  hr {
    border: none;
    border-bottom: 1px solid rgb(221, 221, 221);
    margin: 20px 0;
  }
  h2 {
    font-size: 16px;
    font-weight: 500;
  }
  form input {
    width: 99%;
    margin: 18px 0;
    border: none;
    border-bottom: 1px solid #000;
    border-bottom: 1px solid rgb(178, 178, 178);
    padding: 0 0 8px 6px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  button {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border: none;
    background-color: #f43397;
    color: #fff;
    font-weight: 500;
    border-radius: 3px;
  }
`;
