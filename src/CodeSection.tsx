import Uik from "@reef-defi/ui-kit";
import { useState, useEffect } from "react";
const CodeSection = () => {
  const [code, setCode] = useState<string>("");
  const url =
    "https://raw.githubusercontent.com/boidushya/reef-ui-kit-workshop/master/src/CodeSection.tsx";
  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((text) => setCode(text));
  }, []);
  return (
    <Uik.Container>
      {code.length === 0 ? <Uik.Loading /> : <Uik.Code>{code}</Uik.Code>}
    </Uik.Container>
  );
};

export default CodeSection;
