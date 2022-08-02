# exploration-microfrontend

An exploration of MFEs using module federation on NextJS

## How to run

To run this demo, you will need to open 2 terminal windows.

<br />

### Running the MFE

<br />

Navigate to the mfe folder

```
cd mfe-1
```

Install dependencies

```
npm ci
```

Run the app

```
npm run start
```

You should see a basic page loaded with a banner component.

<br />

### Running the host app

<br />

Navigate to the host app folder

```
cd main-nextjs
```

Install dependencies

```
npm ci
```

Run the app in developer mode

```
npm run dev
```

## Note

The main app is currently hitting an error. At this point there is no concrete solutions other than consuming the [paid library](https://app.privjs.com/buy/packageDetail?pkg=@module-federation/nextjs-mf).
