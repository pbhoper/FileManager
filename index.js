const args = process.argv;
    const usernameArg = args.find(arg => arg.startsWith('--username='));

    if (usernameArg) {
      const username = usernameArg.split('=')[1];
      console.log(`Привет, ${username}!`);
    } 
