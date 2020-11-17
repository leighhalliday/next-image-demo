import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <h2>Fixed</h2>
        <Image
          src="/starbucks.png"
          layout="fixed"
          width={100}
          height={100}
          alt="Starbucks Logo"
        />
      </div>

      <div>
        <h2>Intrinsic</h2>
        <Image src="/house.jpg" layout="intrinsic" width={600} height={400} />
      </div>

      <div>
        <h2>Responsive</h2>
        <Image src="/llama.jpg" layout="responsive" width={600} height={400} />
      </div>

      <div>
        <h2>Fill</h2>
        <div style={{ position: "relative", width: "400px", height: "400px" }}>
          <Image src="/llama.jpg" layout="fill" />
        </div>
      </div>
    </div>
  );
}
