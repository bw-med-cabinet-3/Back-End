# Back-End

## Endpoints

[https://med-cabinet-web25.herokuapp.com](https://med-cabinet-web25.herokuapp.com/)

| Method | URL                 | Description                                             |
| ------ | ------------------- | ------------------------------------------------------- |
| POST   | /api/users/register | Creates a user using the data inside the `request body` |
| POST   | /api/users/login    | Auth user with credentials given in the `request body`  |
|        |                     |                                                         |

### Endpoint usage

`/api/users/register` register users with the following object model:

```javascript
{
    first_name: 'john',
    last_name: 'doe',
    email: 'johndoe@domain.com',
    password: 'keepITsecret123'
}
```
