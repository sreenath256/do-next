import Marquee from "react-fast-marquee";
import { ClientsData } from "../../constant/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

// async function getData() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/client-logos?&populate=*`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     return notFound();
//   }
//   return res.json();
// }

const Clientslider = async () => {
  // const clintsdata = await getData();
  // console.log(clintsdata.data);

  return (
    <div className="w-12/12 xl:w-10/12 mx-auto py-10">

      <Marquee speed={100}>
        {ClientsData && ClientsData.length > 0 ? (
          ClientsData?.map((data, i) => (
            <div className="h-16 w-16 md:h-32 md:w-32 xl:h-48 xl:w-48 relative">
              <Image
                key={i}
                fill={true}
                className="object-cover grayscale hover:grayscale-0 duration-200"
                src={data.clt}
                alt="clients"
              />
            </div>
          ))
        ) : (
          <div className="text-left text-2xl font-medium animate-bounce">
            No data found.
          </div>
        )}
      </Marquee>
      {/* <div className="grid place-items-center mt-5">
        <Link href={"/clients"}>
          <button className="btn-21">
            <span>Show more</span>
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Clientslider;
