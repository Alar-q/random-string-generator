const fs = require('fs');
const crypto = require('crypto');

crypto.randomBytes(127, (err, buf) => {
  if (err) {
  	console.log(err);
  	return;
  }

  const randomStr = buf.toString('hex');

  fs.writeFile('random.txt', randomStr, (err) => {
    if (err) console.log(err);
    else console.log(randomStr);
  });
});



