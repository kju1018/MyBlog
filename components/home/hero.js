import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. 김민석입니다!
        </h1>
        <p className="mb-8 leading-relaxed">
          구할 그들은 하는 얼음에 가치를 끓는 주는 싶이 그들은 보라. 이 온갖
          곳으로 곳이 우리 이상은 그들에게 위하여, 피어나기 때문이다. 아니더면,
          천자만홍이 있는 것은 것이다. 같이 소금이라 이상의 가는 설레는
          노년에게서 것이다. 품으며, 청춘의 이는 보이는 든 말이다. 청춘을 품고
          그들은 못할 청춘은 것이다. 웅대한 풀밭에 하는 속에 눈에 넣는 있다.
          되는 보이는 곳으로 황금시대의 끝까지 인간이 대중을 천하를
          그리하였는가? 방지하는 때까지 때에, 안고, 때문이다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">
              프로젝트 보러가기
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
