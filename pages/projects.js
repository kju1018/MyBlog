import Head from "next/head";
import Layout from "../components/layout";
import ProjectItem from "../components/projects/projectItem";
import { TOKEN, DATABASE_ID } from "../config";

export default function Projects({ projects }) {
  console.log(projects);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
        <Head>
          <title>민석이의 개발블로그</title>
          <meta name="description" content="오늘부터 하나씩 " />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          총프로젝트 : 
          <span className='pl-4 text-blue-500'>{projects.results.length}</span>
        </h1>
        <div className="grid gird-cols-1 md:grid-cols-2 gap-8">
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  const projectsNames = projects.results.map(
    (project) => project.properties.Name.title[0].plain_text
  );

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
