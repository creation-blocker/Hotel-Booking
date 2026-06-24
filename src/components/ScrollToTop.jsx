import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
    const { pathname, search } = useLocation()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pathname, search])

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!visible) return null

    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white shadow-xl transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
            aria-label="Scroll to top"
            title="Scroll to top"
        >
            <ArrowUp size={20} strokeWidth={2} />
        </button>
    )
}

export default ScrollToTop
