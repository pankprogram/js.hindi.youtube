const accountId=144553
let accountEmail="hitesh@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

//accountId=1 //not allowed

accountEmail="hc@hc.com"
accountPassword="21211221"
accountCity="Meerut"

console.log(accountId)

/*
prefer not to use the var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
