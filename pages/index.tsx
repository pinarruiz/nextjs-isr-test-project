export default function HomePage(props: any) {
  const { data } = props;

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: 20 }}>
        10 seconds to revalidate
      </h2>

      {!data ? (
        <h2>No data</h2>
      ) : (
        data.map((item: any, index: number) => (
          <div key={index} style={{ textAlign: "center", marginTop: 20 }}>
            <p>ID: {item.id}</p>
            <p>{item.number}</p>
            <br />
          </div>
        ))
      )}
    </div>
  );
}

export async function getStaticProps() {
  let demoData = [];
  for (let index = 0; index < 5; index++) {
    demoData.push({
      id: index,
      number: Math.random(),
    });
  }

  return {
    props: {
      data: demoData,
    },
    revalidate: 10,
  };
}
