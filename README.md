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

create account for beamanalytics
add the script tag in src/app/layout.tsx

add mutations (functions) for convex at convex/images.ts
copy the schema for typescript from convex dashboard and store it in convex/schema.ts

setup shadcn npx shadcn-ui@latest init (it will reset some of the changes in tailwind config, so add them back in again)

todo

-   zod
-   https://github.com/ethanniser/next-typesafe-url
-   react hook forms
