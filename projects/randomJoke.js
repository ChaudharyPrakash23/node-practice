import https from "https";
import chalk from "chalk";

const crackJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";

  https.get(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      const joke = JSON.parse(data);

      console.log("\nRandom Joke:\n");
      console.log(chalk.red(joke.setup));
      console.log(chalk.bgRed.bold(joke.punchline));
    });

    response.on("error", (err) => {
      console.log(`Error: ${err.message}`);
    });
  });
};

crackJoke();
