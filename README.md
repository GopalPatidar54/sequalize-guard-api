# sequalize-guard-api
sequalize-guard-api-practice

sample endpoints
http://localhost:5003/role/makeRoles?data={"role":["member","consultant","emp","empAdmin"]} 

http://localhost:5003/role/deleteRole?data={"role":["member"]}         

http://localhost:5003/role/makeRole?data={"role":"memberAdmin"}      

http://localhost:5003/role/getAllRole                   

http://localhost:5003/role/getRole           

http://localhost:5003/role/addPermsToRole?data={"resources":"this is for member admin","role":"admin"}

http://localhost:5003/perms/createPerms?data={"perms":"this is for member admin","action":"memberAdmin"} 

http://localhost:5003/perms/createPermsBulk?data={"perms":[{"name":"this is for member admin","resource":"resou rce","action":"first"},{"name":"ook","resource":"resourceOK","action":["actionOK"]},{"name":"ook1","resource":"resource ook1","action":["action Ok 1"]}]}

http://localhost:5003/perms/findPerms                

http://localhost:5003/user/roleBasedAuthorization?data={"role":["member"]}

http://localhost:5003/user/makeUser?data={"name":"memberAdmin","email":"memberAdmin@gmail.com"}  

http://localhost:5003/user/userCan

http://localhost:5003/aburap/assignRole?data={"user":{"id": 2,"name":"memberAdmin","email":"memberAdmin@gmail.com"},"role":"admin"}
