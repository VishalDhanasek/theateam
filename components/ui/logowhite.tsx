import Link from 'next/link'
import Image from 'next/image'
import Logomain1 from '@/public/logowhite.png'
import Logomain from '@/public/images/1.png'



export default function LogoWhite() {
  return (
    
    <Link href="/" className="block" aria-label="Cruip">
      <Image
      src={Logomain}
      width={190}
      height={95}
      alt="Innovation Geeks - Unlocking Your Digital Potential"
        />
    </Link>
  )
}
