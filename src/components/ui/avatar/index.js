import "./style.scss";

export default () => {
  return (
    <div className="ui-avatar">
      <div className="wrapper">
        <div className="wolverine">
          <div className="wolverine-body">
            <div className="wolverine-torso">
              <div className="peck left">
                <div className="wolverine-arm left">
                  <div className="forearm"></div>
                  <div className="fist">
                    <div className="finger"></div>
                    <div className="finger"></div>
                    <div className="finger"></div>
                    <div className="finger"></div>
                    <div className="wolverine-claws">
                      <div className="wolverine-claw"></div>
                      <div className="wolverine-claw"></div>
                      <div className="wolverine-claw"></div>
                    </div>
                  </div>
                </div>
                <div className="shoulderpad"></div>
              </div>
              <div className="peck right">
                <div className="wolverine-arm right">
                  <div className="forearm"></div>
                  <div className="fist">
                    <div className="finger"></div>
                    <div className="finger"></div>
                    <div className="finger"></div>
                    <div className="finger"></div>
                    <div className="wolverine-claws">
                      <div className="wolverine-claw"></div>
                      <div className="wolverine-claw"></div>
                      <div className="wolverine-claw"></div>
                    </div>
                  </div>
                </div>
                <div className="shoulderpad"></div>
              </div>
            </div>
            <div className="wolverine-head">
              <div className="cowl-left">
                <div className="eye"></div>
              </div>
              <div className="cowl-right">
                <div className="eye"></div>
              </div>
              <div className="face">
                <div className="mouth">
                  <div className="tongue"></div>
                  <div className="teeth"></div>
                </div>
              </div>
            </div>
            <div className="wolverine-leg right">
              <div className="boot">
                <div className="chevron"></div>
              </div>
            </div>
            <div className="wolverine-crotch"></div>
            <div className="wolverine-belt">
              <div className="buckle"></div>
            </div>
            <div className="wolverine-leg left">
              <div className="boot">
                <div className="chevron"></div>
              </div>
            </div>
          </div>
          <div className="snikt left">Snikt!</div>
          <div className="snikt right">Snikt!</div>
        </div>
      </div>
    </div>
  );
};
