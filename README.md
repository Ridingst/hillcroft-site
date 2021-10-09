# Welcome to [Hillcroft Lacrosse Club](https://hillcroftlacrosse.com)

> 🥍  This site is lovingly cared for and maintained by [Thomas Ridings](https://thomasridings.com) please conact for more info

## Overview
I built this website ([Hillcroft Lacrosse](https://hillcroftlacrosse.com)) using a Jamstack static site generator.

Each time the `main` branch is updated, a new version of the website is built and deployed automatically in under 2 mins. The build process outputs a set of html/js/css files. The site has some limited dynamic functionality. The backend API calls are all serverless and instantiated on request.

The site uses a number of tools and frameworks to make this all happen by magic;
 - [Astro](https://astro.build) Static Site Generator
 - [Svelte](https://svelte.dev/) UI Components
 - [Tailwind](https://tailwindcss.com/) Awesome CSS library
 - [Vercel](https://vercel.com/) Hosting, Serverless backend and CI/CD

---

## **How did I end up here?**
95% of the content on this website is static, it rarely changes, and we rarely add to it. 

We used to host the site on a self-hosted WordPress, but it was a pain to manage. It would go down once a year, and I'd spend a long time sys-admining my way to fixing the problem. I could have just moved it to a hosted WordPress site, and that would be that. But instead, I had a thought: "given we're not going to be managing content, why do we need a CMS". All I needed was to put something online that was quick to build and needed minimal operational overhead. 

Then came the brainwave...given that 95% of this website is static, why not just use static`.html` files—no more sys-admin type work— and I can write `html` quickly.

That was fine until I realised the amount of repeated `html` in stepped Static Site Generators.

An SSG is a templating system that lets you compile to `.html` files but provides some handy features such as component re-use etc. Problem solved until I remembered the remaining 5%.

I toyed with the idea of sacking it off, "Who needs an Instagram feed on their website anyway?" but a part of me thought there must be a better solution.

Then I found the [Jamstack](https://jamstack.org/). I tested a few different options ([11ty](https://www.11ty.dev/) coming close), but many felt clunky or overkill for my simple use case. 

> Many of the JAMstack solutions are built for documentation or headless CMS systems. Neither of which was the simple brochure-esqe website we needed.

But then I found [Astro](https://astro.build/).


# 🚀 Astro

The Astro project isn't as mature as others. Their website is basic and difficult to find on google (although I'm getting fewer space results by the day). Nevertheless, what they have built is incredible! 

> Worth noting that I did run into two problems with the Astro project (my misunderstanding rather than lack of functionality). Their discord channel is an excellent example of how open-source projects can work. Within minutes we'd found my problems and fixed them with help from the community and devs.

Astro lets you use a choice of frontend frameworks (React, Svelte, Vue, Preact or even plain old HTML+JS). Then, once you're ready, it compiles those frameworks down to simple HTML—the perfect solution for what we needed here.

While the principal was great (and Astro totally could have done the job), I wanted to incorporate [Svelte](https://svelte.dev/).

# 🛠 Svelte
I've played around with lots of UI frameworks over the years. I understand why React is so popular with many today. For this project, I'm the only developer. I need to build quickly. I will tinker infrequently, so I needed something I could ignore for six months and pick up in an instance. That wasn't going to be React. I'd understand an argument for Vue; I've played with Vue a few times and do like it, but I was slow to get going with it on this project. Svelte just worked out of the box. Before I knew it, I was up and running with something that looked great and was incredibly simple. 
The choice here is most certainly a personal preference. I just trusted Svelte to deliver on my goals, especially picking it up quickly after six months away.

Svelte is used here as a component library. Each file has everything for one component; html, javascript and css. I loved how everything was together. You could glance at the page, identify a problem, find the corresponding file, understand the code and fix the problem in seconds. Massive tick in the build quickly box.

> I couldn't mention Svelte without talking about their [superb documentation and tutorials](https://svelte.dev/tutorial/basics). In hindsight, this played a considerable part in them winning out over Vue.

Svelte provided the raw HTML, but it needed a lick of paint.

# 🖌  Tailwind
I've used bootstrap for many years. It was so ubiquitous that for a long time, it wasn't worth questioning. But, Tailwind is a breath of fresh air.

The [tailwind website](https://tailwindcss.com/) includes an animation of some html being decorated with CSS and a rendered version of the code to show how it looks. It's simple, and the results are beautiful; it's a marketing promo, after all.

This animation, although short, perfectly summarises my experience of using Tailwind CSS. It's simple, powerful, and the results look fantastic.

I have been conditioned to believe that styling would be rough—a constant battle to make it look right at all screen sizes, you change one class, and the whole thing fails.

The developer experience of using Tailwind has obliterated that idea. The creators must be geniuses; I've no idea how or why it's so easy to use. But, on the other hand, part of me thinks it's magic!

Tailwind's documentation was a big part of this ease of use. The team have taken a different approach to Svelte, but it works wonders. It's constantly open on my screen, and I find what I want with ease.

The website now has all the content, and it's looking great—time to publish.

# Vercel
I knew this could be easy. But, I didn't think it could be this easy and free.

We needed a couple of things:
Some way to serve the files.
Some way to automatically update the files on commits to `main` branch.
Somewhere to run the serverless runners.

I investigated a few different options for this; AWS (S3 + ??? + Lambda), Cloudflare (Pages + Github + Workers), Vercel (vercel).

> When I was investigating the Cloudflare solution, it felt new. From what I see/read, it's improved drastically in the last few years, but when I test it was clunky, and after some hours, I didn't have it working as I liked. I believe things are very different now. Maybe I'll investigate moving over in the future.

Vercel was a dream to work with. Log in with your Github account, and off you go. It was staggeringly simple. Even the API endpoints were bundled up and deployed without using separate tools. Running locally was a doddle, too, with `vercel dev`.

I knew this was all possible, but I didn't appreciate how east it would be.

# Summary
My previous projects have been MVC heavy with LAMP/MEAN/MERN stacks. There's still a place for this, but the Jamstack setup has been a breakthrough moment for me. It's a new tool in the toolbox and one I can see using again and again. 

The area I struggled the most with on this project was the `/api` routes. While I've built countless express servers in my time, I don't have much experience with serverless. Vercel was great, but I'm still finding my feet debugging any errors when they do pop up.

In summary, I've loved this project for one simple reason: I could concentrate fully on what I needed to build, and nothing got in my way: no setup, no hosting, no routing, no boilerplate. I was just able to build!





## 🚀 Project Structure

Inside the project, you'll see the following folders and files:

```
/
├── public/
│   ├── assets/
│   ├── images/
│   │   └── logo.svg
│   ├── images/
│   ├── styles/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── Footer.svelte
│   │   └── Menu.svelte
│   ├── content/
│   │   ├── privacy_policy.md
│   │   └── constitution.md
│   ├── layouts/
│   │   └── DefaultLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── privacy.astro
│       ├── TheHub.astro
│       └── constitution.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
|:----------------|:--------------------------------------------|
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/snowpackjs/astro) or jump into our [Discord server](https://astro.build/chat).
