export default function Header() {
  return (
    <header className='fixed top-0 z-50 flex w-full items-center 
    justify-between px-4 py-4 lg:px-10 lg:py-10'>
      <img src='/logo.png' alt='netflix' width={120} height={120}></img>
      <ul className='flex space-x-4'>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Latest</li>
      </ul>
    </header>
  );
}
