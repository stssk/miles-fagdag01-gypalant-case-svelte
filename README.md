# Miles - Fagdag 01 - GYPaLaNT: Case Svelte

Miles Fagdag 01 - Gather Your Party and Learn a New Technology: Case Svelte.

![](https://i.ytimg.com/vi/93XFxKXdbqY/hqdefault.jpg)

## Case

Dette dokumentet ligger også i README-en i prosjektet. Det er anbefalt å lese, selv om det klør litt i proggefingrene 😉

### Premisser

- Jobber i grupper, men åpen deling og interaksjon er oppfordret til.
- Casen beskriver “målet” med det vi skal lage, men annet en målet kan dere behandle alt annet som tips. Passer ikke starteren dere? Start fra scratch og få full kontroll 😀 Har dere lyst til å lage en transpiler som transpilerer Haskell til JavaScript og skrive koden deres i det? Kjør på!
- Dag Erik er tilgjengelig for spørsmål og hjelp, om opplegget eller kode, under hele dagen. Selv når han sitter med rynkede øyenbryn i dyp konsentrasjon og progger på den ene gruppen (det kan være han bare har luft i magen), bare spør!

### Casebeskrivelse

Se foilsett på skjerm (hvis vi er heldige) eller her: https://docs.google.com/presentation/d/1z1nvVod5Vv7NIsMP75N4xQTfOSJ35A_qsiF80-SEXw0/edit?usp=sharing.

### Forhåndskrav

- PC (MAC til nød).
- Terminal (ev. git GUI).
- IDE (anbefaler VSCode, IntelliJ, eller terminal VIM; Notepad for de som liker smerte).
- GitHub-bruker.
- Git (kan lastes ned her: https://git-scm.com/downloads).
- Node (kan lastes ned her: https://nodejs.org/en/).
- Yarn (kan lastes ned her: https://classic.yarnpkg.com/lang/en/ eller ved `npm install --global yarn`).
  - Gruppen kan selvfølgelig også velge å bruke npm, hvis de enda ikke har sett lyset 😉

### Starttips

Kun tips, gruppene kan organisere seg og utvikler akkurat som de vil, poenget er at vi skal ha det gøy og lære sammen 😀

1. Kartlegg ressurser i gruppen: hvem kan hva fra før av?
2. Delegér roller, aka ansvarsområder: hvem skal ansvar for hva?
   1. Mange ting kan være nyttig: Prosess/arbeidsflyt, design (layout, styling), arkitektur, komponenter, hovedside, undersider. Det er mange måter å dele dette opp på!
   2. Husk: parprogrammering er også lov 😀
3. Planlegg det dere skal lage.
4. ??????
5. Profit! Lykke til 😀

Bonustips: Samarbeid, hjelp, og diskusjon på tvers av gruppene oppfordres til, det kan vi bare bli bedre av!

### Kildekode-starter

Her kan gruppene velge om de ønsker å utvikle i JavaScript eller TypeScript. Casen er den samme, og husk å høre hva alle i gruppen synes 😀 Og hvis du ikke har brukt TypeScript før, kanskje dette er dagen å lære seg toooo nye ting? Whaaaat?!

### Lenke

- JavaScript: https://github.com/dagerikhl/miles-fagdag01-gypalant-case-svelte/tree/starter-js.
- TypeScript: https://github.com/dagerikhl/miles-fagdag01-gypalant-case-svelte/tree/starter-ts.

### Forklaring på “Hvorfor SvelteKit”

Svelte har to basic starter-setups: Svelte og SvelteKit.

- Svelte: Bare rammeverket og man kan lage hva man vil.
- SvelteKit: Rammeverket + Routing og andre goodies (blant annet SSR, API, og lynrask hot reloading), mye som Next.js for React.

Her er det brukt SvelteKit for å sette opp en kildekode-starter. Man kunne brukt basic Svelte, men SvelteKit er brukt fordi det gir enkel routing og noen ekstra goodies “out of the box”, så man slipper å bruke tid på å finne eksterne biblioteker og rammeverk. Fungerer på mye samme måten som Next.js, f.eks. med filbasert routing. Det er enda ikke releaset en v1 av dette, så jeg håper inderlig på at vi ikke treffer på noen rare beta-feil 😅 Men det virker stabilt og veletablert i miljøet.

Hvis gruppen føler at de ønsker å rulle på egenhånd uten “Kit”, gjør det! Se init-guiden til Svelte: https://svelte.dev/blog/the-easiest-way-to-get-started#2_Use_degit.

### Ressurser

- Svelte docs: https://svelte.dev/docs.
- SvelteKit docs: https://kit.svelte.dev/docs.
  - Filbasert routing: https://kit.svelte.dev/docs#routing.
- Svelte og TypeScript: https://svelte.dev/blog/svelte-and-typescript.
- Svelte VSCode extension: https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode
- _The Holy Grail: https://bit.ly/3FipIsv._

---

README from create Svelte app:

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
