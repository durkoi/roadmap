1. Nodemon not working - closed.
Solution: running script is not allowed in terminal, need to run "nodemon server" in windows powershell.
   (also reinstalled with global flag)
ref: https:/go.microsoft.com/fwlink/?LinkID=135170
2. angular request not reading nodejs response but works from file. - Closed.
Solution: it is a CORS issue, need to add headers to allow CORS requests to nodejs.
Ref: https://enable-cors.org/server_expressjs.html
