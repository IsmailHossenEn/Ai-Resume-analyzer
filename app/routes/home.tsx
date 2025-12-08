import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResAnalyzer" },
    { name: "description", content: "Analyzed Feedback from smart source" },
  ];
}
    export default function Home() {


        return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
          <Navbar/>
          <section className="main-section">
              <div className="page-heading py-12">
                    <h1>Track Your applications & Resume Ratings</h1>
                  <h2>Review your submission and check AI powered feedback</h2>
              </div>

          {resumes.length > 0 && (
            <div className="resumes-section">
                {resumes.map((resume)=>(
                    <ResumeCard key={resume.id} resume={resume} />
                ))}
            </div>
          )}
          </section>
      </main>
    }
