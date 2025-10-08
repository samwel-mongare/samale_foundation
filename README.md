# Samale Foundation Website

This is a production-ready NGO website for the Samale Foundation, inspired by [CARE Kenya](https://www.care-kenya.org/). It focuses on delivering integrated solutions for peace, economic empowerment, and climate resilience in Northern Kenya.

## Features

-   **Next.js 15**: Built with the App Router, TypeScript, and Server Components for optimal performance and developer experience.
-   **Tailwind CSS**: For utility-first styling and custom theming.
-   **ShadCN UI**: A collection of re-usable components built with Radix UI and Tailwind CSS.
-   **Sanity.io CMS**: For managing dynamic content such as programs, stories, team members, and partners.
-   **Framer Motion**: For smooth and engaging animations.
-   **SEO Optimized**: Proper SEO tags, OG metadata, sitemap, and robots.txt (to be configured).
-   **Responsive Design**: Optimized for various screen sizes and devices.
-   **Accessible Typography**: Ensuring readability and inclusivity.

## Project Structure

```
samale-foundation/
├── public/ # Static assets
├── sanity/ # Sanity CMS configuration and schemas
│   ├── schemas/ # Sanity document schemas
│   │   ├── program.ts
│   │   ├── story.ts
│   │   ├── teamMember.ts
│   │   └── partner.ts
│   └── config.ts # Sanity studio configuration
├── src/
│   ├── app/ # Next.js App Router pages and layout
│   │   ├── layout.tsx
│   │   ├── page.tsx # Home page
│   │   ├── about/page.tsx # About Us page
│   │   ├── our-work/page.tsx # Our Work/Programs page
│   │   ├── media/page.tsx # Media Centre page
│   │   └── get-involved/page.tsx # Get Involved/Contact page
│   ├── components/
│   │   ├── layout/ # Layout components (Header, Footer)
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/ # ShadCN UI components and custom UI components
│   │   │   ├── ProgramCard.tsx
│   │   │   └── StoryCard.tsx
│   │   └── sections/ # Reusable sections (Hero)
│   │       └── Hero.tsx
│   ├── lib/ # Utility functions and Sanity client
│   │   └── sanity.ts
│   └── types/ # TypeScript type definitions
│       └── sanity.ts
├── .env.local.example # Environment variables template
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
└── ... # Other Next.js and project configuration files
```

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd samale-foundation
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Sanity.io Setup

This project uses Sanity.io for content management. You will need to set up a Sanity project and configure your environment variables.

a. **Create a Sanity Project**

If you don't have a Sanity project, create one by running:

```bash
npx sanity init
```

Follow the prompts to create a new project. Choose the "Clean project with no predefined schemas" template. Make sure to select TypeScript when prompted.

b. **Configure Sanity Studio**

Navigate to the `sanity` directory in your project and run:

```bash
npx sanity deploy
```

This will deploy your Sanity Studio to a hosted URL. Make sure your `sanity/config.ts` file is correctly configured with your `projectId` and `dataset`.

c. **Environment Variables**

Copy the `.env.local.example` file to `.env.local` and update the values with your Sanity project details:

```bash
cp .env.local.example .env.local
```

Open `.env.local` and add your Sanity Project ID and Dataset:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production # or your dataset name
```

d. **Import Schemas**

Your Sanity schemas are defined in `sanity/schemas/`. When you run `npx sanity deploy` or `npx sanity start`, these schemas will be registered with your Sanity project.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Vercel

This Next.js application can be easily deployed to [Vercel](https://vercel.com/).

1.  **Connect your Git Repository**: Link your project's Git repository (GitHub, GitLab, Bitbucket) to Vercel.
2.  **Configure Environment Variables**: Add your `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` to your Vercel project's environment variables.
3.  **Deploy**: Vercel will automatically detect that it's a Next.js project and deploy it.

### Sanity Studio

Your Sanity Studio is deployed separately. You can access it at `https://<your-project-id>.sanity.studio/` after running `npx sanity deploy` from the `sanity` directory.

## Contributing

Feel free to fork the repository and contribute. Please ensure your code adheres to the project's styling and architectural guidelines.

## License

This project is open-source and available under the MIT License.
