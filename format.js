var reps = require('./representatives');

// console.log(reps);

for (var i = 0; i < reps.length; i++) {
  if (reps[i].name.indexOf(',') > -1) {
    reps[i].name = reps[i].name.replace(/^(.*?),(?! Jr.?)\s*(.*?)(,.*?| Jr.?)?$/, '$2 $1$3');
  }
}

console.log(JSON.stringify(reps, null, 2))
