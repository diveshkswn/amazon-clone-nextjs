import SuccessPage from '../components/SuccessPage';

export default function Success() {
  return (
    <SuccessPage />
  );
}

// export async function getServerSideProps(context) {
//   // /success?orderToken=a

//   console.log(context.query);

//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
