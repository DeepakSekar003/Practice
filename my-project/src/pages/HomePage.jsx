import Navbar from "../components/Navbar";
import RadioBox from "../components/RadioBox"
import InputBox from "../components/InputBox";
import SearchButton from "../components/SearchButton";
import main from "../assets/main.jpg";

export default function HomePage() {
  return (
    <div className="bg-[#052038] min-h-screen text-white">
      <Navbar />

      <section className="pt-12 2xl:pt-14 px-8 2xl:px-23">
        <h1 className="text-3xl 2xl:text-4xl inline-block font-bold ml-10 tracking-wider leading-relaxed">
          Thousands of trucks at <br /> your fingertips...
        </h1>

        <div className="mt-6 ml-26 2xl:text-2xl">
          <RadioBox />
        </div>

        <div className="ml-26 mt-6">
          <InputBox placeholder="Enter Pickup Location" /><br />
          <InputBox placeholder="Enter Drop Location" /><br />

          <SearchButton label="Search" />
        </div>

        <div className="ml-130 2xl:ml-140 -mt-100 2xl:-mt-120">
          <img src={main}
            alt="Main"
            className="h-100 2xl:h-120 w-200 2xl:w-220 rounded-sm  object-cover" />
        </div>

      </section>
    </div>
  )
}