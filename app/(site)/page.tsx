export default function Home() {
  return (
    <div
    className="
      flex
      min-h-full
      flex-col
      justify-center
      py-12
      sm:px-6
      lg:px-8
      bg-gray-100
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image 
        alt="logo"
        height="48"
        width="48"
        className="mx-auto w-auto"
        src="/public/images/logo.png"
        />
      </div>
    </div>
  )
}
