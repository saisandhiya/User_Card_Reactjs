export const Header = () => {
  let customCss = "code";
  const isLoggedIn = true;
  const greeting = isLoggedIn ? "Welcome" : "Login in";
  const items = ["item1", "item2", "item3"];
  
  return (
    <>
      <div>
        <h1 className="banner">heloo</h1>
        <p className="slogan">Learn more</p>

        {/* js expression */}

        <p className={customCss}>25+34={25 + 34}</p>

        {/* condiotional rendering */}
        {greeting}

        {/* list */}
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
