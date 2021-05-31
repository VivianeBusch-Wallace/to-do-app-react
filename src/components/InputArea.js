// import useState from React
import { useState } from "react";

// import unique universal identifier from package
import { v4 as uuidv4 } from "uuid";

function HandleInput() {
  return (
    <form>
      <input type="text" />
      <input type="submit" value="Save to List" />
    </form>
  );
}

export default HandleInput;
