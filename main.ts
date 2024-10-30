import express from "npm:express@4.18.2";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

app.listen(8000);


/* deno does not cantain process object which is used in nodejs. inorderto use that we need to import it from deno.

if you just wnat to use some process like get env or exit the program you can use Deno object which is provided by deno runtime.

Deno.exit(0) // to exit the program

ther is 2 way for env in deno
you can go with deno.env file
or you can go with older thig .env file

for .env file you need to install dotenv module
import "jsr:@std/dotenv/load";
after that use Deno.env.get("PORT") // to get the port number from env



*/