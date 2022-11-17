# malaghe_utility

![https://github.com/apakhbari/malaghe_utility/ascii_malaghe_utility.png](https://github.com/apakhbari/malaghe_utility/ascii_malaghe_utility.png)

### ---

### ⌘K V --> split view

### ⇧⌘V --> separate view

### ---

## Useful Links:

github --> https://github.com/apakhbari/malaghe_utility

docker --> https://hub.docker.com/repository/docker/apakhbari/malaghe

npm utility package --> https://www.npmjs.com/package/@apa_malaghe/utility

---

## Errors:

- bad-request --> 400 + message

- request-validation --> 400 + 'Invalid request parameters'

- not-authorized --> 401 + 'Not authorized'

- not-found --> 404 + 'Route not found'

- database-connection --> 500 + 'Error connecting to db'

---

## OrderStatus:

- Created

- Cancelled

- Completed

---

## ServiceStatus:

- Troubleshooting

- Transferring

- Repairing

- Received

---

## UsersRoles:

- User

- Admin

- Operator

- Technician

- Transporter

---

## Events:

- OrderCreated = 'order:created'

  id: string, version: number, userId: string, expiresAt: string, serviceStatus?: ServiceStatus,

  store:[{id: string, title: string, price: number, quantity: number}]

- OrderCancelled = 'order:cancelled'

  id: string, version: number, userId: string,

  store:[{id: string, quantity: number;}]

- OrderUpdated = 'order:updated'

  id: string, version: number, userId: string, expiresAt: string, serviceStatus?: ServiceStatus,

  store?:[{id: string, title: string, price: number, quantity: number}]

- OrderCompleted = 'order:completed'

  id: string, version: string, userId: string

<br>

- MagAssigned = 'mag:assigned'

  id: string, version: number, slug:string, storeId?: string

- MagUpdated = 'mag:updated'

  id: string, version: number, slug: string, storeId?: string

- MagDeleted = 'mag:deleted'

  id: string, version: number, storeId?: string

---

## MiddleWares:

- current-user

  UserPayload {id: string, email: string, mobile: number, fiName: string, laName: string, role: UserRoles}

- err-handler

  400 + 'Unhandled error'

- require-auth

- validate-request

---

## Developed by APA

### copyright © 2022 all rights reserved

<br>

![https://github.com/apakhbari/malaghe_utility/ascii_malaghe_utility.png](https://github.com/apakhbari/malaghe_utility/ascii_apa.png)
