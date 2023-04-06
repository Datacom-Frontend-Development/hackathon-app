import { auth, firestore } from "../../../firebase";

export default function MyPage({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}

export async function getStaticProps() {
  const docRef = firestore.collection("myCollection").doc("myDoc");
  const docData = (await docRef.get()).data();

  return {
    props: {
      data: docData,
    },
  };
}
