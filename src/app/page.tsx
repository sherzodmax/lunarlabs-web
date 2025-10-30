import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background gradient blob */}
      <div className="absolute left-0 top-[200px] w-full h-[800px] pointer-events-none opacity-60">
        <Image
          alt=""
          className="block w-full h-full object-cover"
          src="/assets/768ae0cf42524745e26b4f7967d6e04382369e09.svg"
          width={2462}
          height={793}
          priority
        />
      </div>

      {/* Decorative stars - scattered throughout */}
      <div className="absolute top-[24%] right-[41%] w-[30px] h-[30px] pointer-events-none opacity-80">
        <Image
          alt=""
          src="/assets/72766f05bb4ab1ce4488ee297512f4d753270f41.svg"
          width={30}
          height={30}
        />
      </div>

      <div className="absolute bottom-[2%] left-[30%] w-[35px] h-[35px] pointer-events-none opacity-70">
        <Image
          alt=""
          src="/assets/ae80cb73edb78f4b3ddfbdbb687fbdc64ee1ff4a.svg"
          width={35}
          height={35}
        />
      </div>

      <div className="absolute top-[5%] right-[16%] w-[20px] h-[20px] pointer-events-none opacity-60">
        <Image
          alt=""
          src="/assets/6d119a2ee3ddffe9c1f38239d2f0f0dcd5d1017c.svg"
          width={20}
          height={20}
        />
      </div>

      <div className="absolute top-[16%] left-[14%] w-[25px] h-[25px] pointer-events-none opacity-60">
        <Image
          alt=""
          src="/assets/f5b03263926e3f926e1fff1e1bd249ae6b5d841f.svg"
          width={25}
          height={25}
        />
      </div>

      <div className="absolute bottom-[6%] left-[16%] w-[30px] h-[30px] pointer-events-none opacity-50">
        <Image
          alt=""
          src="/assets/dc18a738f1087b16e3f6bab5c75c3a62cfa71de6.svg"
          width={30}
          height={30}
        />
      </div>

      <div className="absolute bottom-[17%] right-[2%] w-[22px] h-[22px] pointer-events-none opacity-60">
        <Image
          alt=""
          src="/assets/983ca773da482a28c81101a029f927e786ceed5d.svg"
          width={22}
          height={22}
        />
      </div>

      <div className="absolute bottom-[3%] right-[90%] w-[18px] h-[18px] pointer-events-none opacity-60">
        <Image
          alt=""
          src="/assets/9166af19b1a6f4e97df9fb88485e7d0b53911a3c.svg"
          width={18}
          height={18}
        />
      </div>

      <div className="absolute top-[3%] left-[4%] w-[35px] h-[35px] pointer-events-none opacity-60">
        <Image
          alt=""
          src="/assets/580bc8c419c8c34ff0d847e2764ddb9beaebb566.svg"
          width={35}
          height={35}
        />
      </div>

      <div className="absolute top-[18%] right-[24%] w-[32px] h-[32px] pointer-events-none opacity-70">
        <Image
          alt=""
          src="/assets/5e01d487c28dbf98f4f6ccb6221405684ee518bd.svg"
          width={32}
          height={32}
        />
      </div>

      <div className="absolute top-[43%] right-[79%] w-[28px] h-[28px] pointer-events-none opacity-60">
        <Image
          alt=""
          src="/assets/df2195060e37c584d2d53834634db34e1fb1b797.svg"
          width={28}
          height={28}
        />
      </div>

      <div className="absolute top-[18%] right-[96%] w-[30px] h-[30px] pointer-events-none opacity-60">
        <Image
          alt=""
          src="/assets/5e6531f0b94eb7beb450f7e73f4cc8783b720b1d.svg"
          width={30}
          height={30}
        />
      </div>

      <div className="absolute top-[66%] left-[60%] w-[32px] h-[32px] pointer-events-none opacity-70">
        <Image
          alt=""
          src="/assets/9ab495699f153198fd825bba6d6b91a5f2335ec6.svg"
          width={32}
          height={32}
        />
      </div>

      <div className="absolute top-[36%] right-[91%] w-[25px] h-[25px] pointer-events-none opacity-60">
        <Image
          alt=""
          src="/assets/a762ca291ea886586ba717f63d2bec7c19aad7f1.svg"
          width={25}
          height={25}
        />
      </div>

      {/* Large decorative vector in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] pointer-events-none opacity-40">
        <Image
          alt=""
          className="block w-full h-full"
          src="/assets/7f268b44257d422a961958ff337a13ae0f3938ba.svg"
          width={900}
          height={900}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1565px] mx-auto px-8">
        {/* Header */}
        <header className="flex items-center justify-between py-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Logo Icon */}
            <div className="relative w-[42px] h-[42px]">
              <div className="absolute inset-0 rounded-full bg-white opacity-10 blur-md"></div>
              <div className="relative w-full h-full rounded-full border-2 border-[rgba(224,228,233,0.4)] flex items-center justify-center bg-[rgba(224,228,233,0.05)]">
                <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#e0e4e9] to-transparent opacity-80"></div>
              </div>
            </div>

            {/* Logo Text */}
            <div className="relative">
              <p
                className="absolute blur-[3.5px] font-semibold text-[27.629px] text-[rgba(224,228,233,0.4)] whitespace-nowrap"
                style={{ fontFamily: "var(--font-instrument-sans)" }}
              >
                Lunar Labs
              </p>
              <p
                className="relative blur-[0.25px] font-semibold text-[27.629px] text-[#e0e4e9] whitespace-nowrap drop-shadow-[0_0_8px_rgba(224,228,233,0.5)]"
                style={{ fontFamily: "var(--font-instrument-sans)" }}
              >
                Lunar Labs
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-12">
            <p
              className="blur-[0.25px] font-medium text-[#fda81d] text-[16px] uppercase whitespace-nowrap cursor-pointer"
              style={{ fontFamily: "var(--font-instrument-sans)" }}
            >
              Moonwell
            </p>

            <p
              className="blur-[0.25px] font-medium text-[#fda81d] text-[16px] uppercase whitespace-nowrap cursor-pointer"
              style={{ fontFamily: "var(--font-instrument-sans)" }}
            >
              MAMO.bot
            </p>

            {/* Explore Open Roles Button */}
            <div className="relative bg-[rgba(30,32,35,0.5)] border border-black rounded-[12px] px-12 py-3">
              <div className="relative">
                <p
                  className="absolute blur-[5px] font-normal text-[rgba(252,167,30,0.8)] text-[16px] uppercase tracking-wide whitespace-nowrap"
                  style={{ fontFamily: "var(--font-instrument-sans)" }}
                >
                  EXPLORE OPEN ROLES
                </p>
                <p
                  className="relative blur-[0.1px] font-medium text-[#fca71e] text-[16px] uppercase tracking-wide whitespace-nowrap"
                  style={{ fontFamily: "var(--font-instrument-sans)" }}
                >
                  EXPLORE OPEN ROLES
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Mission Section */}
        <section className="mt-32 mb-20">
          <p
            className="font-medium text-[#777e84] text-[16px] mb-4 tracking-widest"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            MISSION
          </p>
          <h1
            className="font-medium text-[#e0e4e9] text-[23px] leading-normal max-w-[384px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Building safe and automated tools for digital economy
          </h1>
        </section>

        {/* Project Cards */}
        <section className="grid grid-cols-2 gap-8 pb-20">
          {/* Moonwell Card */}
          <div className="relative rounded-[12px] p-[1px] bg-gradient-to-br from-[#d4deed] via-[#d4deed] to-transparent h-[412px]">
            <div className="relative bg-[rgba(30,32,35,0.95)] backdrop-blur-sm rounded-[11px] p-8 h-full">
            <p
              className="font-medium text-[#777e84] text-[16px] mb-6 tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              PROJECT 1
            </p>

            <div className="mb-8">
              <Image
                alt="Moonwell Logo"
                className="block"
                src="/assets/8f5aaf7d6e014290b84adf5afd11212f0b355a89.svg"
                width={262}
                height={39}
              />
            </div>

            <p
              className="font-medium text-[#e0e4e9] text-[23px] leading-normal mb-8 max-w-[384px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Lend, borrow and earn yield with confidence
            </p>

            {/* Project Badge */}
            <div className="inline-block rounded-[12px] p-[1px] bg-gradient-to-r from-[#fda81d] via-[#8b6914] to-[#3a3a3a] mb-6">
              <div className="bg-[#282a2d] rounded-[11px] px-3 py-2">
                <p
                  className="blur-[0.1px] font-medium text-[#fda81d] text-[20px] uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-instrument-sans)" }}
                >
                  MOONWELL
                </p>
              </div>
            </div>

            <div className="flex gap-16">
              <div>
                <p
                  className="font-medium text-[#777e84] text-[16px] mb-2"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  TVL
                </p>
                <p
                  className="font-medium text-[#e0e4e9] text-[23px] opacity-80"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  $734,5093,487
                </p>
              </div>

              <div>
                <p
                  className="font-medium text-[#777e84] text-[16px] mb-2"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  MARKET CAP
                </p>
                <p
                  className="font-medium text-[#e0e4e9] text-[23px] opacity-80"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  $88.98M
                </p>
              </div>
            </div>
            </div>
          </div>

          {/* MAMO.bot Card */}
          <div className="relative rounded-[12px] p-[1px] bg-gradient-to-br from-[#d4deed] via-[#d4deed] to-transparent h-[412px]">
            <div className="relative bg-[rgba(30,32,35,0.95)] backdrop-blur-sm rounded-[11px] p-8 h-full">
            <p
              className="font-medium text-[#777e84] text-[16px] mb-6 tracking-widest"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              PROJECT 2
            </p>

            <div className="mb-8">
              <Image
                alt="MAMO.bot Logo"
                className="block"
                src="/assets/48ee980939752dabd354ae96f04929cc6a9181ed.svg"
                width={197}
                height={40}
              />
            </div>

            <p
              className="font-medium text-[#e0e4e9] text-[23px] leading-normal mb-8 max-w-[384px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Simple, safe and automated way to earn interest with your money
            </p>

            {/* Project Badge */}
            <div className="inline-block rounded-[12px] p-[1px] bg-gradient-to-r from-[#fda81d] via-[#8b6914] to-[#3a3a3a] mb-6">
              <div className="bg-[#282a2d] rounded-[11px] px-3 py-2">
                <p
                  className="blur-[0.1px] font-medium text-[#fda81d] text-[20px] uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-instrument-sans)" }}
                >
                  MAMO.BOT
                </p>
              </div>
            </div>

            <div className="flex gap-16">
              <div>
                <p
                  className="font-medium text-[#777e84] text-[16px] mb-2"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  TVL
                </p>
                <p
                  className="font-medium text-[#e0e4e9] text-[23px] opacity-80"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  $734,5093,487
                </p>
              </div>

              <div>
                <p
                  className="font-medium text-[#777e84] text-[16px] mb-2"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  MARKET CAP
                </p>
                <p
                  className="font-medium text-[#e0e4e9] text-[23px] opacity-80"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  $32.3M
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
