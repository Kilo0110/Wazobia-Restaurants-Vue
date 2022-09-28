# Wazobia Restaurants - Fullstack MEVN project

## Installation
Be sure to have NodeJS and PNPM (or NPM) installed on your work machine. To check if you have NodeJS installed as well as PNPM or NPM run the following commands.

``` NodeJS
node --version

```

``` PNPM
pnpm --version

```

OR

``` NPM
npm --version

```

PNPM is recommended as the package manager. To install PNPM globally via NPM run the following.

``` NPM
npm install -g pnpm

```

Once you have NodeJS and PNPM installed, you can go on to install the dependencies. To do that, run the following command from the root of the project

``` PNPM
pnpm install --save

```

This will install all dependencies used for building the server. Upon completion run the following command to install the client dependencies.

``` PNPM
cd client && pnpm install --save

```

## Run the project

When all dependencies are installed, navigate back to the project root and run the following to run the project locally.

``` PNPM
pnpm run dev

```

This will spin up the server on http://localhost:3000 and the client on http://localhost:8080. To run the server or client independently, run the following respective commands

#### Server

``` PNPM
pnpm run server

```

#### Client

``` PNPM
pnpm run client

```

## Routes

### API Routes

As of this moment, only the meal routes, **/api/meals** are fully functional. Other routes, **/api/testimonials** and **/api/users** are still in development.

### Client Routes
Presently, the following routes exist in the project

1. /
2. /meals
3. /faq
4. /contact
5. /admin/dashboard
6. /login
7. /404

Remember to affix the various development URLs and PORT.

## TODOS

1. Authentication
2. User Profiles and actions
3. Admin Profiles and actions