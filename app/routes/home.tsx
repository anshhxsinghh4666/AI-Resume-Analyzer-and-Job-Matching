import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import Navbar from "~/components/navbar";
import ResumeCard from "~/components/ResumeCard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "HireWire" },
    {
      name: "description",
      content: "Analyze your resume and match it with job descriptions using AI.",
    },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Application & Resume Ratings</h1>
        <h2>Review your submission and check AI-powered feedback</h2>
      </div>

      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </section>
  </main>
}

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gray-50">
//       <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
//         <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
//           AI-Powered Resume Analysis
//         </p>

//         <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//           Analyze Your Resume.
//           <br />
//           Match Your Dream Job.
//         </h1>

//         <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
//           Upload your resume and provide a job description to get AI-powered
//           insights, ATS analysis, job matching, skill gaps, and personalized
//           recommendations.
//         </p>

//         <button
//           type="button"
//           className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
//         >
//           Analyze My Resume
//         </button>
//       </section>
//     </main>
//   );
// }
