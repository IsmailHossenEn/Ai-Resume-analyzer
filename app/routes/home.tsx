import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";

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
              <div className="page-heading">
                    <h1>Track Your applications & Resume Ratings</h1>
                  <h2>Review your submission and check AI powered feedback</h2>
              </div>
          </section>

          {resumes.map((resume:any)=>(
              <div>
                  <h1>{resume.jobTitle}</h1>
              </div>
          ))}
      </main>
    }
