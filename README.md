
<!-- Centering an image using HTML -->
<div align="center">
  <img src="https://github.com/user-attachments/assets/e8598480-d582-4177-b2ed-2058e71b77cb" alt="Centered Image" />
</div>

# Bask Dashboard
Bask Dashboard is a real-time, customizable dashboard that provides comprehensive insights into your data. The application features various widgets like charts, tables, and maps, all designed to be dynamically resizable and customizable. Users can switch between dark and light themes and select from a palette of colors.


## Visit Live 👉 https://kareem-bask-health.vercel.app/ (Deployed on Vercel)


## Screenshot

![ss](https://github.com/user-attachments/assets/2e6554f9-509c-47b9-a0d5-8c5166e7f35a)


## Tech Stack

- **Next.js 14:** A React framework for server-side rendering and static site generation.
- **React Query:** For efficient data fetching, caching, and synchronization.
- **Tailwind CSS:** Utility-first CSS framework for rapid and consistent UI development.
- **Shadcn:** Provides UI components, theme customization and color management.
- **TypeScript:** Ensures type safety and improves code quality.
- **Lucide-react:** Beautiful & consistent icons.
- **react-leaflet:** For displaying geographical data on interactive maps.
- **npm:** For managing project dependencies and scripts.


## Features

- **Real-Time Data Fetching:** The dashboard fetches data every 5 seconds to ensure that users have the most up-to-date information.
- **Data Hydration:** Efficient data hydration ensures that data is readily available on load, enhancing performance and user experience.
- **Server Components:** Utilizes Next.js 14's server components effectively for optimized rendering and performance.
- **Loading and Error States:** Implements Next.js’s built-in loading.js, error.js and not-found.js files for seamless handling of fallbacks.
- **Server Actions:** Incorporates server actions to handle data fetching and processing efficiently.
- **Theme Customization:** Users can switch between dark and light modes and choose from a range of theme colors, dynamically loaded from the server on each load.
- **Customizable Layout:** Users can resize widgets (charts and tables) to their preference.
- **Responsive Design:** The dashboard is designed to be fully responsive, providing a seamless experience on both desktop and mobile devices.
- **Error Handling:** Comprehensive error handling is implemented to provide a smooth user experience.
- **Type Safety:** TypeScript is used throughout the application to ensure type safety and improve code quality.



## User Journey

1. **Landing on the Dashboard:** Upon loading, users are presented with a default view of the dashboard, displaying key statistics, charts, and a map.
2. **Customizing the Layout:** Users can resize the widgets container (charts, tables) around to customize the layout according to their preferences.
3. **Changing Themes:** Users can switch between dark and light modes using the theme customizer in the navbar. Additionally, they can choose a color theme from the provided palette.
4. **Interacting with Data:** The dashboard automatically refreshes data every 5 seconds, ensuring real-time updates. Users can filter, sort, and search through the table data.
5. **Exploring the Map:** The map widget shows pins indicating locations of user activities, providing a geographical representation of the data.
6. **Responsive Design:** The layout of the widgets adjusts according to the screen size, ensuring that all elements are properly displayed on different devices. The side navbar can be toggled to maximize the viewing area at wide views. On tablet and mobile views, the sidebar becomes a side drawer that toggles over the main content.



## Design and Architectural Decisions
### Technologies Used
  - **Next.js 14:** Utilized for its powerful features like file-based routing, server-side rendering, and static site generation.
  - **React Query:** Implemented for efficient data fetching, caching, synchronization, and hydration (prefetching) ensuring that the dashboard is always up-to-date.
  - **Tailwind CSS:** Used for utility-first CSS styling, enabling rapid and consistent UI development.
  - **Shadcn:** Integrated for theme customization capabilities, allowing users to personalize their dashboard experience.
  - **TypeScript:** Employed to enhance type safety and maintain code quality across the application.
  - **Error and Loading States:** Implemented using Next.js’s built-in error.js, loading.js, and not-found.js files for handling different states seamlessly.
  - **Responsive Layout:** Ensured through the use of CSS Grid and Flexbox, making the dashboard adaptable to various screen sizes.

### Layout and Components
  - **Horizontal Navbar:** Features theme customizers (dark/light mode and color palette). Includes links to other parts of the dashboard, though only the first tab is functional.
  - **Aside Navbar:** A sidebar that is hidden on smaller screens and becomes a side drawer on mobile and tablet views.
  - **Main Content Area:**
    - **Cards:** Display key statistics.
    - **Charts:** Visualize data trends, such as sales over time and user engagement.
    - **Tables:** Show detailed data with options for filtering, sorting, and column management.
    - **Map:** Provides a geographical view with markers indicating user activities.
  - **Resizability:** Widgets like charts and tables are resizable, allowing users to customize their layout.

## Setup Instructions

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/yourusername/bask-dashboard.git
  cd bask-dashboard
  ```

2. Add a `.env` file in the root directory and add the following environment variables

  ```env
  API_KEY=your_api_key
  ```

3. Install dependencies:

  ```bash
  npm install
  # or
  yarn install
  ```

### Running the Application

1. Start the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  ```

2. Open your browser and navigate to http://localhost:3000 to view the dashboard.

### File Structure
  ```
  src
  ├── app
  │   ├── dashboard
  │   │   ├── layout.tsx
  │   │   ├── page.tsx
  │   ├── layout.tsx
  │   ├── loading.tsx
  │   ├── not-found.tsx
  │   ├── error.tsx
  │   ├── icon.png
  ├── assets
  │   ├── images
  │   │   ├── (some image *.png)
  ├── components
  │   ├── layout
  │   │   ├── sidebar
  │   │   │   ├── NavLink.tsx
  │   │   │   ├── Sidebar.tsx
  │   │   │   ├── SidebarContent.tsx
  │   │   │   ├── SideSheet.tsx
  │   │   ├── Navbar.tsx
  │   │   ├── Footer.tsx
  │   ├── charts
  │   │   ├── SalesLineChart.tsx
  │   │   ├── UserPieChart.tsx
  │   ├── tables
  │   │   ├── TransactionTable.tsx
  │   │   ├── ProductsTable.tsx
  │   ├── shared
  │   │   ├── LoadingPlaceHolder.tsx
  │   │   ├── PlaceHolder.tsx
  │   │   ├── spinner.tsx
  │   ├── ui
  │   │   ├── (some shadcn modified components)
  │   ├── DashboardContent.tsx
  │   ├── CardsInsights.tsx
  │   ├── DashboardCard.tsx
  │   ├── CardLayout.tsx
  │   ├── ChartsInsights.tsx
  │   ├── TableInsights.tsx
  │   ├── MapInsights.tsx
  │   ├── Map.tsx
  ├── customTypes
  │   ├── theme-types.ts
  │   ├── dashboard-data.ts
  │   ├── api-response.ts
  ├── global
  │   ├── constants.ts
  ├── lib
  │   ├── ReactQueryProvider.tsx
  │   ├── chartUtils.ts
  │   ├── formaters.ts
  │   ├── utils.ts
  ├── server
  │   ├── actions.ts
  ├── styles
  │   ├── globals.css
  │   ├── themes.css
  ├── routes
  │   ├── routes.tsx
  ```


## Getting Started with Next.js Project

First, run the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  # or
  bun dev
  ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


![logo](https://github.com/user-attachments/assets/e8598480-d582-4177-b2ed-2058e71b77cb)
