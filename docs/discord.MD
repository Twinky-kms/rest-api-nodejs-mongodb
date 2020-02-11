Documentation in discord text format. 

**Create account post request expects the following fields: **
*http://localhost:3000/api/register*

username (alphanumeric). 
email
password (minimum length 6 characters). 

**possible responses from server: **
Error: missing field username `username must be specified.`
Error: username already in use `username already in use.`

Error: missing field email: `email must be specified.`
Error: email already in use `email already in use.`

Error: pass not 6 chars: `Password must be 6 characters or greater.`

**Example user object:**
```
var user = { 
  username: "sleepyjoe29103",
  email: "aemail@mail.com",
  password: "anawesomepassword!4903$)"
}
```