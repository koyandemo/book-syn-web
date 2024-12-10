// @refresh reload
import { Suspense } from "solid-js";
import WebLayout from "./layout/WebLayout";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  useLocation,
} from "solid-start";
import "./root.css";
import { ThemeProvider } from "./context/createThemeContext";
import Footer from "./components/footer/Footer";
import { NoHydration } from "solid-js/web";

export default function Root() {
  const location = useLocation();
  const isbookReadingRoute = location.pathname.includes("/books/reading/");

  return (
    <Html
      lang="en"
      style={`${isbookReadingRoute ? "overflow-y:hidden;" : "overflow-y:visible;"
        }`}
    >
      <Head>
        <Title>indexsyn - Programming Books</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="robots" content="index, follow" />
        <Meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <Meta name="theme-color" content="#000000" />
        <Meta name="title" content="indexsyn (programmming books)" />
        <Meta
          name="description"
          content="programming books for algorithms, angular, architecture, assembly, c, c#, c-double-plus, css, data-visualization, design-patterns, design-principles, expressjs, front-end, html, java, javascript, kotlin, laravel, mongodb, nodejs, object-oriented, p5js, php, postgres, project-management, python, reactjs, ruby, software-construction, spring, user-experience"
        />

        <Meta
          name="keywords"
          content="indexsyn, index, index-syn, syn, programming, books, readings, code,algorithms, angular, architecture, assembly, c, c#, c-double-plus, css, data-visualization, design-patterns, design-principles, expressjs, front-end, html, java, javascript, kotlin, laravel, mongodb, nodejs, object-oriented, p5js, php, postgres, project-management, python, reactjs, ruby, software-construction, spring, user-experience"
        />

        {!isbookReadingRoute && (
          <>
            <Meta property="og:type" content="programming books" />
            <Meta property="og:url" content="https://indexsyn.com/" />
            <Meta property="og:title" content="indexsyn (programming books)" />
            <Meta
              data-rh="true"
              property="og:image"
              content="/logo/indexsyn.png"
            />

            <Meta property="twitter:card" content="summary_large_image" />
            <Meta property="twitter:url" content="https://indexsyn.com/" />
            <Meta
              property="twitter:title"
              content="indexsyn (programming books)"
            />
            <Meta
              data-rh="true"
              property="twitter:image:src"
              content="/logo/indexsyn.png"
            />
          </>
        )}

        <link rel="canonical" href="https://indexsyn.com/" />
        {/* <link
          rel='shortcut icon'
          // type='image/ico'
          href='https://firebasestorage.googleapis.com/v0/b/bs-app-52af1.appspot.com/o/logo-black.png?alt=media'
        /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Old+Standard+TT&display=swap"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Carattere&family=Cookie&display=swap"
          rel="stylesheet"
        ></link>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ND80W1KZZK"
        ></script>
        {/* <script>
          {`
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-ND80W1KZZK');
         `}
        </script> */}
        {/* <script>
          {`window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
            'event': 'Blog View',
             'Author': 'Gary Spagnoli',
             'Blog Post Title: 'How to Set Up Standard and Custom Reports in GA4'});`}
        </script> */}
        {/* <script>
          {`window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
            ecommerce: {
            detail :{products: [{name: "Hello Hi...",id:70,price:12,category:"Posters"}]}
          }        
         })`}
        </script>
        <script>
          {`
          (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N5DPB3FL')
          `}
        </script> */}

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3786117467608194"
          crossorigin="anonymous"
        ></script>
        {/* <script>
          {`window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      ecommerce: {
         detail :{products: [{name: "Hello Hi...",id:70,price:12,category:"Posters"}]}
       }        
  })`}
        </script> */}
        {/* <script type="application/ld+json">
    { 

      "@context": "https://schema.org/",
      "@id": "https://www.indexsyn.com",
      "@type": "Course",
      "name": "Best All Time",
      "description": "Programming Books For Best All Time.",
      "publisher": {
        "@type": "Organization",
        "name": "Index Syn",
        "url": "www.indexsyn.com"
      },
      "provider": {
        "@type": "Organization",
        "name": "Index Syn",
        "url": "www.indexsyn.com"
      },
      "image": [
        "https://booksites.github.io/images/book/clean-code.jpeg",
        "https://booksites.github.io/images/book/algorithms.jpg",
        "https://booksites.github.io/images/book/think-like-a-programmer-an-introduction-to-creative-problem-solving.jpg"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.8,
        "ratingCount": 2259,
        "reviewCount": 389
      },
      "offers": [{
        "@type": "Offer",
        "category": "Paid",
        "priceCurrency": "EUR",
        "price": 0.00
      }],
      "totalHistoricalEnrollment": 3281,
      "datePublished": "2020-01-01",
      "educationalLevel": "Advanced",
      "about": ["Clean Code", "Algorithms"],
      "teaches": ["Clean Code for your code",
                  "Algorithms for your knowledge"],
      "financialAidEligible": "Scholarship Available",
      "inLanguage": "en",
      "availableLanguage": ["fr", "es"],
      "syllabusSections": [
        {
          "@type": "Syllabus",
          "name": "Clean Code",
          "description": "Learn how to write clean code.",
          "timeRequired": "PT6H"
        },
        {
          "@type": "Syllabus",
          "name": "Algorithms",
          "description": "Learn what is algorithms.",
          "timeRequired": "PT11H"
        }
      ],
      "review": [
      {
        "@type": "Review",
        "author": {
            "@type": "Person",
            "name": "devsyn"
        },
        "datePublished": "2020-08-31",
        "reviewBody": "My Clean code knowledge is improved",
        "reviewRating": {
          "@type": "Rating",
          "bestRating": 10,
          "ratingValue": 6
        }
      }],
      "coursePrerequisites": [
        "Learn how to write clean code.",
        "https://www.indexsyn.com/books/clean-code"
      ],
      "educationalCredentialAwarded": [{
        "@type": "EducationalOccupationalCredential",
        "name": "CourseProvider Certificate",
        "url": "www.index.com",
        "credentialCategory": "Certificate",
        "offers": [{
          "@type": "Offer",
          "category": "Paid",
          "price": 5,
          "priceCurrency": "USD"
        }]
      }],
      "hasCourseInstance": [
      {
      
        "@type": "CourseInstance",
        "courseMode": "Blended",
        "location": "Example University",
        "courseSchedule": {
          "@type": "Schedule",
          "duration": "PT3H",
          "repeatFrequency": "Daily",
          "repeatCount": 31,
          "startDate": "2023-07-01",
          "endDate": "2023-07-31"
        },
        "instructor": [{
          "@type": "Person",
          "name": "Ira D.",
          "description": "Professor at X-University",
          "image": "http://example.com/person.jpg"
        }]
      },
      {
        // Online self-paced course that takes 2 days to complete.
        "@type": "CourseInstance",
        "courseMode": "Online",
        "courseWorkload": "P2D"
      }],
      "hasPart": [{
        "@type": "Course",
        "name": "Clean Code",
        "url": "https://www.indexsyn.com/books/clean-code",
        "description": "Learn how to write clean code."
      }, {
        "@type": "Course",
        "name": "Algorithms",
        "url": "https://www.indexsyn.com/books/algorithms",
        "description": "Learn about algorithms."
      }]
    }
    </script> */}

        {/* <script type='application/ld+json'>
          {`
            '@context': 'https://indexsyn.com/',
            '@type': 'Programming',
            name: 'indexsyn',
            description:
              'Programming books for algorithms, angular, architecture, assembly, c, c#, c-double-plus, css, data-visualization, design-patterns, design-principles, expressjs, front-end, html, java, javascript, kotlin, laravel, mongodb, nodejs, object-oriented, p5js, php, postgres, project-management, python, reactjs, ruby, software-construction, spring, user-experience',
            brand: {
              '@type': 'indexsyn',
              name: 'indexsyn',
            },
          `}
        </script> */}
        <script type="application/ld+json">
          "@context": "https://schema.org", "@type": "Organization", "name":
          "indexsyn - Programming Books", "logo":
          "https://firebasestorage.googleapis.com/v0/b/bs-app-52af1.appspot.com/o/logo-black.png?alt=media",
          "url": "https://www.indexsyn.com"
        </script>
      </Head>
      <Body>
        <ThemeProvider>
          <WebLayout>
            <Suspense>
              {/* <ErrorBoundary> */}
              <Routes>
                <FileRoutes />
              </Routes>
              {/* </ErrorBoundary> */}
            </Suspense>
          </WebLayout>
        </ThemeProvider>
        <Scripts />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N5DPB3FL"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        {/* <script
          async
          src='https://cse.google.com/cse.js?cx=608a0639b7ab94d3e'
        ></script> */}
      </Body>
    </Html>
  );
}

// "engines": {
//   "node": ">=18"
// }
