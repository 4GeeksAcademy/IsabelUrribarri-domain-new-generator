let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io']; 

let domainNames = [];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let e = 0; e < extensions.length; e++) {
                let domainName = pronoun[i] + adj[j] + noun[k] + extensions[e];
                domainNames.push(domainName);
                
                if (extensions[e] === '.us') {
                    let domainHack = pronoun[i] + adj[j] + noun[k] + '.us';
                    domainNames.push(domainHack);
                }
            }
        }
    }
}

for (let l = 0; l < domainNames.length; l++) {
    console.log(domainNames[l]);
}