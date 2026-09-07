import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Resume Analyzer" },
    {
      name: "description",
      content: "Analyze your resume and match it with job descriptions using AI.",
    },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
          AI-Powered Resume Analysis
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Analyze Your Resume.
          <br />
          Match Your Dream Job.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Upload your resume and provide a job description to get AI-powered
          insights, ATS analysis, job matching, skill gaps, and personalized
          recommendations.
        </p>

        <button
          type="button"
          className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Analyze My Resume
        </button>
      </section>
    </main>
  );
}
