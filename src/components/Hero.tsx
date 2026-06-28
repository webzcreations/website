import { ArrowRight } from "lucide-react";
import DarkVeil from "../../@/components/DarkVeil";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
	const handleScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		targetId: string,
	) => {
		e.preventDefault();
		const element = document.getElementById(targetId);
		if (element) {
			const offset = 80;
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = element.getBoundingClientRect().top;
			window.scrollTo({
				top: elementRect - bodyRect - offset,
				behavior: "smooth",
			});
		}
	};

	return (
		<section
			id='home'
			className='relative min-h-screen flex flex-col justify-center pt-24 pb-16 bg-black overflow-hidden'
		>
			{/* DarkVeil background */}
			<div className='h-full w-full absolute'>
				<DarkVeil />
			</div>
			<div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center  bg-black/40'>
				{/* Left: Content */}
				<div className='space-y-8'>
					{/* Label */}
					<div className='flex items-center space-x-3'>
						<div className='w-8 h-px bg-white/30' />
					</div>

					{/* Headline */}
					<h1 className='text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-white'>
						We Build <span style={{ color: "#5711C5" }}>Digital</span>
						<br />
						Experiences.
					</h1>

					{/* Sub */}
					<p className='text-base sm:text-lg text-white/50 max-w-md leading-relaxed'>
						webZ Creations crafts high‑performance websites, apps, and SEO
						systems for ambitious brands.
					</p>

					{/* CTAs */}
					<div className='flex flex-wrap gap-4 pt-2'>
						<a href='#contact' onClick={(e) => handleScroll(e, "contact")}>
							<button
								className='flex items-center space-x-2 px-7 py-3.5 text-sm font-semibold text-white'
								style={{ backgroundColor: "#5711C5" }}
							>
								<span>Start a Project</span>
								<ArrowRight className='h-4 w-4' />
							</button>
						</a>
					</div>

					{/* Stats */}
					<div className='flex items-center space-x-10 pt-4 border-t border-white/10'>
						{[
							{ value: "100+", label: "Projects Delivered" },
							{ value: "4.9★", label: "Client Rating" },
							{ value: "5yr+", label: "Experience" },
						].map((stat) => (
							<div key={stat.label}>
								<p className='text-2xl font-black text-white'>{stat.value}</p>
								<p className='text-xs text-white/40 mt-0.5'>{stat.label}</p>
							</div>
						))}
					</div>
				</div>

				{/* Right: Illustration */}
				<div className='relative hidden lg:block'>
					<HeroIllustration />
				</div>
			</div>
		</section>
	);
}
