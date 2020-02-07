# Back-End

### Endpoints

[https://med-cabinet-web25.herokuapp.com](https://med-cabinet-web25.herokuapp.com/)

| Method | URL                    | Description                                                  |
| ------ | ---------------------- | ------------------------------------------------------------ |
| POST   | /api/users/register    | Creates a user using the data inside the `request body`      |
| POST   | /api/users/login       | Auth user with credentials given in the `request body`       |
| PUT    | /api/users/:id/email   | Updates users email given in the `request body`              |
| POST   | /api/users/:id/strains | Adds selected strain with the given id in the `request body` |
| GET    | /api/users/:id/strains | Gets a list of saved strains for that specified user         |
| DELETE | /api/users/:id/strains | Deletes a strain from users saved strains list               |
| GET    | /api/strains           | Get an array of strains                                      |
| GET    | /api/strains/:id       | Get a specific strain with the provided id in URL            |

### Endpoint usage

#### POST

`/api/users/register` - register users with the following object model:

```javascript
{
    first_name: 'john',
    last_name: 'doe',
    email: 'johndoe@domain.com',
    password: 'keepITsecret123'
}
```

---

#### POST

`/api/users/login` - login users with the following object model:

```javascript
{
    email: 'johndoe@domain.com',
    password: 'keepITsecret123'
}
```

---

#### PUT

`/api/users/:id/email` - Update users email:

NOTE: This is a restricted endpoint so make sure you have the following headers -

```javascript
headers: {
    email: 'user@domain.com',
    password: 'ThisIsTheUsersPasswordGuess'
}

```

---

#### POST

`/api/users/:id/strains` - Adds a strain to the users saved strain list with the following object model:

NOTE: This is a restricted endpoint so make sure you have the following headers -

```javascript
headers: {
    email: 'user@domain.com',
    password: 'ThisIsTheUsersPasswordGuess'
}

```

```javascript
{
  strainID: 2,
}
```

---

#### GET

`/api/users/:id/strains` - Get as list of saved strains for the specified user:

NOTE: This is a restricted endpoint so make sure you have the following headers -

```javascript
headers: {
    email: 'user@domain.com',
    password: 'ThisIsTheUsersPasswordGuess'
}

```

---

#### DELETE

`/api/users/:id/strains` - Removes strain from users saved list with the following object model:

NOTE: This is a restricted endpoint so make sure you have the following headers -

```javascript
headers: {
    email: 'user@domain.com',
    password: 'ThisIsTheUsersPasswordGuess'
}

```

```javascript
{
  strainID: 2,
}
```

---

#### GET

`/api/strains` - reieve an array of strains with the following object model:

NOTE: This is a restricted endpoint so make sure you have the following headers -

```javascript
headers: {
    email: 'user@domain.com',
    password: 'ThisIsTheUsersPasswordGuess'
}

```

```javascript
{
    strain_id: 143,
    strain_name: "Aurora-Borealis",
    strain_type: "indica",
    strain_rating: "4.2",
    strain_description: "Also known as A-B, Aurora B., or simply Aurora, Aurora Borealis is a Flying Dutchmen strain resulting from a cross between a carefully selected Northern Lights #10 and a sweet Skunk #1 father. A vigorous plant with heavy resinous buds, this strain has the best attributes from both its parents. Aurora Borealis grows into a medium size plant similar to Skunk#1, and has a sweet and fruity taste with a hashy sharpness. Very high yields and a fast maturation time make this cross an ideal cash-cropper both indoors and out. The subtle, calming effects have helped this strain gain popularity in the Netherlands and Canada with its sweet, skunky flavors and earthy undertones.",
    strain_effects: "Happy,Euphoric,Relaxed,Sleepy,Hungry",
    strain_flavors: "Earthy,Woody,Sweet"
}
```

---

#### GET

`/api/strains/:id` - reieve a specific strain with the provided id in URL:

NOTE: This is a restricted endpoint so make sure you have the following headers -

```javascript
headers: {
    email: 'user@domain.com',
    password: 'ThisIsTheUsersPasswordGuess'
}

```
