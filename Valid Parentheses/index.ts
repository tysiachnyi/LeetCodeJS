const rules: { [key: string]: string } = {
  "(": ")",
  "{": "}",
  "[": "]",
};

function isValid(s: string): boolean {
  let globVal = false;
  console.log(s);
  s.split("").reduce((prev: string, current, idx) => {
    console.log("prev", prev);
    console.log("current", current);
    console.log(idx);
    if (Object.keys(rules).includes(prev)) {
      if (current === rules[prev]) globVal = true;
    } else {
      globVal = false;
    }

    return s[idx];
  });

  console.log(globVal);
  return globVal;
}

isValid("()[]{}");
