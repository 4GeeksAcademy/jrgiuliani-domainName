  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  for (let a in pronoun){
    for (let b in adj){
      for (let c in noun){
        console.log(pronoun[a]+adj[b]+noun[c]+".com");
      }
    }
  }