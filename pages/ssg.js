import TestResult from "../components/testresult";

export async function getStaticProps() {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
}

export default function Page({ time }) {
  const title = "Static Site Generation (SSG)";

  if (!time) {
    return (
      <TestResult passed={false} title={title}>
        The prop 'time' was not found. It should have been passed from
        getStaticProps.
      </TestResult>
    );
  }

  return (
    <TestResult passed={true} title={title}>
      This timestamp 👉 {time} should be when the build was run, not when the
      page is refreshed. Hence, this time should not change on refresh.
    </TestResult>
  );
}
