import { createEffect, createResource } from "solid-js";
import { useRouteData } from "solid-start";
import { getBook } from "../../api/book";
import BookDetail from "../../components/detail/book/BookDetail";
import ErrorHandlingPage from "../../components/errorhandling/ErrorHandlingPage";
import SkeletonDetail from "../../components/skeleton/SkeletonDetail";
import "../../css/BookDetailPage.css";
const productList = [
  { name: "hii", id: 123, price: 12, category: "Posters" },
  { name: "hi", id: 123, price: 102, category: "Posters" },
];

export function routeData({ params }) {
  const [data] = createResource(async () => {
    try {
      const response = await getBook(params.slug);
      return await response.data;
    } catch (err) {
      return await err?.response?.data;
    }
  });
  return { data };
}

const BookDetailPage = () => {
  const { data } = useRouteData();

  createEffect(() => {
    const productList = [
      {
        name: data().data.name,
        id: data().data.id,
        price: 12,
        category: "Posters",
      },
      { name: "hi", id: 123, price: 102, category: "Posters" },
    ];

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      ecommerce: {
        detail: {
          products: [
            {
              name: data().data.name,
              id: data().data.id,
              price: 12,
              category: "Posters",
            },
            { name: "hi", id: 123, price: 102, category: "Posters" },
          ],
        },
      },
    });

    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-N5DPB3FL");
  });

  return (
    <div class="book-detail-page">
      <script>
        {`
 analytics.track('Product List Viewed', {
      list_id: 'Products List',
      products:
      ${{ productList }}
      })
    `}
      </script>
      {data()?.status === 200 ? (
        <BookDetail data={data().data} />
      ) : data()?.status !== 200 ? (
        <ErrorHandlingPage status={data()?.status} page="books" />
      ) : (
        <SkeletonDetail />
      )}
    </div>
  );
};

export default BookDetailPage;

// export async function routeData({params}) {
//   return createRouteData(async () => {
//     const response = await getBook(params.slug);
//     return response?.data?.data;
//   })
// }

// export function routeData({ params }) {
//   const [students] = createResource(async () => {
//     const response = await fetch(
//       `https://book-syn-api-szma.vercel.app/books/${params.slug}`
//     )
//     return await response.json()
//   })

//   return { students }
// }

//  const { slug } = useParams()
//  const location = useLocation()
// const [bookData, setBookData] = createSignal(null)
// const [errorData, setErrorData] = createSignal({
//   status: 0,
//   message: '',
// })

// createEffect(() => {
//   if (location.pathname.split('books/')[1] !== slug) {
//     setBookData(null)
//   }
// })

// createEffect(() => {
//   fetchBookDetail(location.pathname.split('books/')[1])
// })

// const fetchBookDetail = async (slug) => {
//   try {
//     const response = await getBook(slug)
//     setBookData({ ...response?.data?.data })
//     document.title = response?.data?.data?.name
//   } catch (err) {
//     setErrorData({ status: err.response.status, message: '' })
//     console.error(err)
//   }
// }
