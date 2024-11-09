'use client'

import Link from "next/link"
import { useUser } from '@auth0/nextjs-auth0/client'
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"

const Navbar = () => {
    const { user, isLoading } = useUser()

    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link
                        href='/'
                        className="flex z-40 font-semibold"
                    >
                        <span>luapdf.</span>
                    </Link>

                    {/* todo: add mobile navbar */}

                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link href='/pricing' className={buttonVariants({
                                variant: 'ghost',
                                size: 'sm'
                            })}>Preços</Link>
                            {!isLoading && (
                                user ? (
                                    <Link
                                        href="/api/auth/logout"
                                        className={buttonVariants({
                                            variant: 'ghost',
                                            size: 'sm'
                                        })}
                                    >
                                        Logout
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href="/api/auth/login"
                                            className={buttonVariants({
                                                variant: 'ghost',
                                                size: 'sm'
                                            })}
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href="/api/auth/login"
                                            className={buttonVariants({
                                                size: 'sm'
                                            })}
                                        >
                                            Começar <ArrowRight className="ml-1.5 h-5 w-5" />
                                        </Link>
                                    </>
                                )
                            )}
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar