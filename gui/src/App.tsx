import { useWindowDimensions } from "@fi-sci/misc";
import "./App.css";

import { FunctionComponent, useState } from "react";

const data = {};

function App() {
  const { width, height } = useWindowDimensions();
  const mainAreaWidth = Math.min(width - 30, 1200);
  const offsetLeft = (width - mainAreaWidth) / 2;
  const [okayToViewSmallScreen, setOkayToViewSmallScreen] = useState(false);
  if (width < 800 && !okayToViewSmallScreen) {
    return (
      <SmallScreenMessage
        onOkay={() => setOkayToViewSmallScreen(true)}
      />
    );
  }
  return (
    <div>Hello</div>
  );
}

const SmallScreenMessage: FunctionComponent<{ onOkay: () => void }> = ({ onOkay }) => {
  return (
    <div style={{padding: 20}}>
      <p>
        This page is not optimized for small screens or mobile devices. Please use a larger
        screen or expand your browser window width.
      </p>
      <p>
        <button onClick={onOkay}>
          I understand, continue anyway
        </button>
      </p>
    </div>
  );
}

export default App;
