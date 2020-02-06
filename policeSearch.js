// solution to police search problem

const getCriminal = name => {
  let dp = {
    "Paul White": "Roger Night, Peter Llong Jr.",
    "Roger Fedexer": "Rob Ford, Pete Lord, Roger McWire",
    "Paul White Jr.": null,
    "Red Fortress": "Roger Rabbit, Ross Winter",
    "Redford Fort": "Red Strong, Red Fort"
  };

  // check name field is not empty
  if (!name) {
    return "Insert a name please";
  }
  name = name.toLowerCase();

  let criminals = Object.keys(dp);

  // check in real names
  for (let criminal of criminals) {
    let criminalX = criminal.toLowerCase();
    if (criminalX === name) {
      return `First Name: ${criminal}, Aliases: ${dp[criminal]}`;
    } else if (criminalX.match(name)) {
      return `First Name: ${criminal}, Aliases: ${dp[criminal]}`;
    }
  }

  // check in aliases
  for (let criminal of criminals) {
    let alias = dp[criminal];
    if (alias) {
      let criminalX = alias.toLowerCase();
      if (criminalX.includes(name)) {
        return `First Name: ${criminal}, Aliases: ${alias}`;
      }
    }
  }

  return "No match";
};
