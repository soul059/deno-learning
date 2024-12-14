// to clear console use console.clear()
// for windows it will clear the console without effect in the previous commands
// for mac it will clear the console with effect in the previous commands
// for linux it will clear the console with effect in the previous commands 

// for more info --> https://docs.deno.com/api/node/console/~/Console.clear

for(let i = 0; i < 10; i++) {
    console.log("this will clear after 3 seconds");
}
setTimeout(()=>{

    console.clear(); // clear the console
},3000)