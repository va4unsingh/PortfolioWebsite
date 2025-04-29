import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import ReactLogo from "../../assets/react.svg";
import NextLogo from "../../assets/NextjsLogo.svg";
import TailwindLogo from "../../assets/tailwindcss.svg";
import PythonLogo from "../../assets/python.svg";
import JsLogo from "../../assets/javascript.svg";
import TsLogo from "../../assets/typescriptLogo.svg";
import NodejsLogo from "../../assets/nodejs.svg";
import ExpjsLogo from "../../assets/Express.svg";
import MongoLogo from "../../assets/mongodb.svg";
import PostgreLogo from "../../assets/postgresql.svg";
import GitLogo from "../../assets/git.svg";
import GithubLogo from "../../assets/githubLogo.png";
import DockerLogo from "../../assets/docker.svg";
import PostmanLogo from "../../assets/postman.svg";
import graphQlLogo from "../../assets/GraphQl.svg";
import RenderDev from "../../assets/render2dev.png";
import NetlifyLogo from "../../assets/netlifyLogo.png";
import VercelLogo from "../../assets/vercel.svg";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-2">
              Full Stack Developer with a focus on backend architecture.
              Committed to writing clean code, building scalable systems, and
              delivering effective solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Lib and frameworks */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Libraries and frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img src={ReactLogo} alt="" />
                    <div>React</div>
                  </div>
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={RenderDev} alt="" />
                    <div>React Router</div>
                  </div>
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={NextLogo} alt="" />
                    <div>Next.js</div>
                  </div>
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={TailwindLogo} alt="" />
                    <div>Tailwindcss</div>
                  </div>
                </div>
              </div>

              {/* Languages  */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={JsLogo} alt="" />
                    <div>JavaScript</div>
                  </div>
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={TsLogo} alt="" />
                    <div>TypeScript</div>
                  </div>
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={PythonLogo} alt="" />
                    <div>Python</div>
                  </div>
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={graphQlLogo} alt="" />
                    <div>GraphQL</div>
                  </div>
                </div>
              </div>

              {/* Backend  */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={NodejsLogo} alt="" />
                    <div>Node.js</div>
                  </div>
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={ExpjsLogo} alt="" />
                    <div>Express.js</div>
                  </div>
                </div>
              </div>

              {/* Databases and ORMs  */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Databases and ORMs </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={PostgreLogo} alt="" />
                    <div>PostgreSQL</div>
                  </div>
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={MongoLogo} alt="" />
                    <div>MongoDB</div>
                  </div>
                </div>
              </div>

              {/* Deployment */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Deployment </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-2xl  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={RenderDev} alt="" />
                    <div>Render</div>
                  </div>
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-2xl hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={NetlifyLogo} alt="" />
                    <div>Netlify</div>
                  </div>
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-2xl hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-7 flex" src={VercelLogo} alt="" />
                    <div>Vercel</div>
                  </div>
                </div>
              </div>

              {/* Tools and technologies  */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Tools and technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={GitLogo} alt="" />
                    <div>Git</div>
                  </div>
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={GithubLogo} alt="" />
                    <div>GitHub</div>
                  </div>
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={DockerLogo} alt="" />
                    <div>Docker</div>
                  </div>
                  <div className="SkillItr flex items-center gap-2 bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <img className="w-8" src={PostmanLogo} alt="" />
                    <div>Postman</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl">🏫 Education</h3>
              <ul className=" list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>BCom Finance</strong> - IGNOU (2023-2026)
                </li>
                <li>
                  Relavant course work: Data Structures, Web Development, Cloud
                  Computing....
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl">👜 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Engineer at ABC Coprs (2020 - Present)
                  </h4>
                  <p>
                    Developed and maintained mircoservices for cloud-based
                    applications
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Intern at DEF Startups (2019)
                  </h4>
                  <p>
                    Assisted in Building front-end components and integration
                    REST APIS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
