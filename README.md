
## Overview

Implementation of Authentication with tRPC API in Next.js 14: [Next.Js 14](https://nextjs.org/blog/next-14)/[tRPC](https://trpc.io/docs/v9/nextjs)/[Prisma](https://www.prisma.io/)/[Postgres](https://www.postgresql.org/)

## Environment

#### .ENV

Use .env from the repository or create your own using the template:

```bash

DATABASE_URL  =  "postgres://postgres.hpkzbmlrxymktodrtnsx:tl-goober-demo2024@aws-0-us-east-1.pooler.supabase.com:5432/postgres?schema=public"
JWT_SECRET  =  "ma3J6kjiHUBsJVuKCDMTYQMZY72FH3ntvEi2Ai3Oedw="
NEXTAUTH_URL  =  "http://localhost:8080"

```

#### Predefined Users(./prisma/seed.ts )

| name | email |role |avatar |
| ------------ | ------------ | ------------ | ------------ |
| admin | <admin@tlgoober.dev>| admin | ![enter image description here](https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/admin.png)
| Antony | <antony@tlgoober.dev>| **driver** |![enter image description here](https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_m004.png)
| Ian | <ian@tlgoober.dev>| **driver** |![enter image description here](https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_m001.png)
| Zooey | <zooey@tlgoober.dev>| **driver** |![enter image description here](https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_f001.png)
| Allison | <allison@tlgoober.dev>| rider |![enter image description here](https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_f002.png)
| Chrissy | <chrissy@tlgoober.dev>| rider |![enter image description here](https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_f003.png)
| Joyful | <joyful@tlgoober.dev>| rider | ![enter image description here](https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_f004.png)
| Michael | <michael@tlgoober.dev>| rider |![enter image description here](https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_m002.png)
| Tiffani | <tiffani@tlgoober.dev>| rider |![enter image description here](https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_m003.png)

> **All the users have the same password: 123**

#### Storage

In this version, I did not use storage to save data, however, I used [Supabase](https://supabase.com/) to save prepared images:

## DB

#### Predefined

I created a database on a very easy to use [Supabase](https://supabase.com/) that was extremely convenient for demos.

#### Using local PostgresDB in container

You can use a `start-database.sh` script to create a container with a database.

```

#TO RUN ON WINDOWS:
#1. Install WSL (Windows Subsystem for Linux) - https://learn.microsoft.com/en-us/windows/wsl/install
#2. Install Docker Desktop for Windows - https://docs.docker.com/docker-for-windows/install/
#3. Open WSL - `wsl`
#4. Run this script - `./start-database.sh`

```

>On Linux and macOS you can run this script directly - `./start-database.sh`

### #Prisma

[Generating](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/generating-prisma-client) Prisma Client:

```

yarn db:generate

```

[Pushing](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#db-push) the state of your Prisma schema

```

yarn db:push

```

[Seed](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/generating-prisma-client)  your database:

```

yarn db:seed

```


[Prisma Studio](https://www.prisma.io/studio)

```

yarn db:studio

```

[Resets the database](https://fig.io/manual/prisma/db/push) and then updates the schema - useful if you need to start from scratch due to unexecutable migrations.

```

yarn db:reset

```

db:reset + yarn db:generate + yarn db:push + yarn db:seed
```

yarn db:reinit

```

## Thanks

- Inspired by solution by [wpcodevo](https://github.com/wpcodevo/nextjs14-trpc-authentication)

- Bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
