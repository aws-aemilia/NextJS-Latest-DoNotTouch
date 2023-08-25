import TestResult from "../components/testresult";

export default function Page() {
  return (
    <TestResult passed={true} title="Server Side Rendering Redirect">
      If you were redirected here by accessing /ssr-redirect, then SSR with
      redirect is working properly. If you were redirected here by accessing
      /ssr-not-found, then SSR with 404 not found is working properly.
    </TestResult>
  );
}
