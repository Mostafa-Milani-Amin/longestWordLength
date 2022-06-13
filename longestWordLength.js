const longestWordLength = str => str.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"()*+,\-.\/:;<=>?\[\]_`{|}]/g,"").trim().split(/\s+/).sort((a, b) => b.length - a.length)[0].length;
