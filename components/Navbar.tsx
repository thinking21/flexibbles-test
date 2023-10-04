import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";


const Navbar = async () => {
    const session = await getCurrentUser();

  return (
    <nav className='flex justify-between items-center p-6 px-6 lg:px-0 container mx-auto'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image
            src='/logo1.png'
            width={156}
            height={43}
            alt='logo'
          />
        </Link>
        </div>
        <div className="px-24">
            <ul className='xl:flex hidden text-md font-light gap-10'>
            {NavLinks.map((link) => (
                <Link href={link.href} key={link.text}>
                {link.text}
                </Link>
            ))}
            </ul>
      </div>
      <div className="flexCenter gap-4">
                {session?.user ? (
                    <>
                        {session?.user?.image && (
                          <Image 
                            src={session.user.image}
                            width={40}
                            height={40}
                            className="rounded-full"
                            alt={session.user.name}
                          />
                        )}
                        <Link href="/create-project">
                            Share Work
                        </Link>
                    </>
                ): (
                    <AuthProviders/>
                )}
      </div>

    </nav>
  );
};

export default Navbar;