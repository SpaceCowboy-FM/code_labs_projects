function greeting() {
  let user = {
    name: "Felix",
    age: 36,
    location: "Springfield",
  };

  let currentTime = new Date().toString();
  let greet = "Hello " + user.name + ", the time is " + currentTime;

  alert(greet);
}

greeting();
