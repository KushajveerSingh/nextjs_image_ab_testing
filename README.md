# nextjs_image_ab_testing

npx create-next-app@latest .

copy .vscode folder, .editorconfig

npm install --save-dev eslint-config-prettier
add prettier in .eslintrc.json

copy .prettierrc.json

setup lint-statges
npm install --save-dev prettier lint-staged husky
npx mrm@2 lint-staged

copy .gitattributes file

create convex account
npm install convex
npx convex dev
create convex project with the same name as main project

goto clerk and create a new application (give it the same name as main project)
choose email and google for now
copy clerk env variables to .env.local (convex had already put its here)
create src/middleware.ts, and specxify the public routes and which routes to check for authentication

in clerk goto jwt templates and create new template for convex
keep the name as "convex" (I tried changing applicationId in convex/auth.config.js, and the name of hwt template to nextjs_image_ab_testing, but that did not work)
copy issuer and click "apply changes"
create convex/auth.config.js, and copy the issuer in there
npm install @clerk/nextjs

create src/providers/providers.tsx, and add the provider to src/app/layout.tsx

setup next-themes, for dark mode support. (npm install next-themes)
add darkMode: 'class' in tailwind.config.ts
create src/providers/theme-provider.tsx and add it to src/providers/providers.tsx
add the provider in src/app/layout.tsx

setup tailwind typography plugin, and add it to plugins in tailwind.config.ts
npm install -D @tailwindcss/typography

setup tailwind-animate pluing and add it to plugings in tailwind.config.ts
npm install -D tailwindcss-animate

setup tailwind prettier plugin (npm install -D prettier prettier-plugin-tailwindcss)
add it to .prettierrc.json

create account for beamanalytics
add the script tag in src/app/layout.tsx

add mutations (functions) for convex at convex/images.ts
copy the schema for typescript from convex dashboard and store it in convex/schema.ts

setup shadcn npx shadcn-ui@latest init (it will reset some of the changes in tailwind config, so add them back in again)

create clerk "webhooks" to send data to convex when a new user is created
click "add endpoint" and provide NEXT_PUBLIC_CONVEX_URL (remove .cloud and add .site/clerk)
in message filtering choose 'user created'
create 'convex/http.ts' file to create webhook on convex side
create 'convex/clerk.ts' to create an action that can decode the data sent from clerk (npm install @clerk/clerk-sdk-node svix)
in convex goto settings -> environment variables and add "CLERK_WEBHOOK_SECRET" (then go to clerk and grab "signing secret" from the endpoint page)
add CLERK_JWT_ISSUER_DOMAIN in convex env variable

create stripe webhook
add the route in 'convex/http.ts' to create webhook on convex side
create 'convex/stripe.ts' to create an action (npm install stripe)
in convex goto settings -> environment variables and add 'STRIPE_KEY'
goto stripe -> developers -> api keys -> reveal secret key (and paste that into STRIPE_KEY in convex)
in package.json -> scripts add the following to run the stripe webhooks locally for development (make the url same as your convex url from .env file)

    "stripe:listen": "stripe listen --forward-to https://accurate-tapir-403.convex.site/stripe",
    "stripe:trigger": "stripe trigger payment_intent.succeeded"

visit https://docs.stripe.com/stripe-cli to install stripe-cli
run 'stripe login'
run 'npm run stripe:listen', copy the webhook secret and add that as an env variable in convex with the name 'STRIPE_WEBHOOKS_SECRET'
in stripe, search for product and then select 'create a product'. Give name 'Subscription to PicPulse', standard pricing, 5.99 USD, recurring, montly. Then press 'Save Product' and copy the price_ID
Store the price_id as an env variable in convex with the name 'PRICE_ID'

npm install convex-helpers@latest
npm install openai

-   zod
-   https://github.com/ethanniser/next-typesafe-url
-   react hook forms
