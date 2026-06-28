import React, { useState } from "react";
import { Link } from "react-router-dom";

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

const footerLinks = [
	{ label: "Home", href: "home" },
	{ label: "Services", href: "services" },
	{ label: "About", href: "about" },
	{ label: "Contact", href: "contact" },
	{ label: "Privacy Policy", href: "privacy" },
	{ label: "Terms & Conditions", href: "terms" },
];

const services = [
	{ name: "Website Development", path: "/services/website-development" },
	{ name: "SEO Optimization", path: "/services/seo-optimization" },
	{ name: "App Engineering", path: "/services/app-engineering" },
	{ name: "CRM Automations", path: "/services/crm-automations" },
	{ name: "UI/UX Strategy", path: "/services/ui-ux-strategy" },
];

export default function Footer() {
	const [email, setEmail] = useState("");
	const [success, setSuccess] = useState(false);

	const handleSubscribe = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email.trim() || !email.includes("@")) return;
		setSuccess(true);
		setTimeout(() => {
			setEmail("");
			setSuccess(false);
		}, 3000);
	};

	return (
		<footer className='bg-black text-white border-t border-white/10'>
			<div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-12'>
				{/* Brand */}
				<div className='md:col-span-4 space-y-5'>
					<a
						href='#home'
						onClick={(e) => handleScroll(e, "home")}
						className='flex items-center'
					>
						<img
							src='/logoWithBackground.svg'
							alt='webZ Creations'
							className='h-24 w-auto'
						/>
					</a>
					<p className='text-sm text-white/40 leading-relaxed max-w-xs'>
						A digital design and software development studio engineering
						responsive products, SEO models, and native apps.
					</p>

					{/* Social Icons */}
					<div className='flex space-x-4 pt-2'>
						{[
							{
								label: "Instagram",
								path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
							},
							{
								label: "LinkedIn",
								path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z",
							},
						].map(({ label, path }) => (
							<a
								key={label}
								href={
									label === "Instagram"
										? "https://www.instagram.com/webz_creations"
										: "https://www.linkedin.com/company/webzcreations/"
								}
								target='_blank'
								rel='noopener noreferrer'
								className='text-white/30 hover:text-white transition-colors'
							>
								<svg
									className='h-4 w-4'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d={path} />
								</svg>
								<span className='sr-only'>{label}</span>
							</a>
						))}
					</div>
				</div>

				{/* Nav Links */}
				<div className='md:col-span-2 space-y-4'>
					<h4 className='text-xs font-bold uppercase tracking-[0.15em] text-white/30'>
						Sitemap
					</h4>
					<ul className='space-y-2.5'>
						{footerLinks.map((link) => (
							<li key={link.href}>
								{link.href === "privacy" || link.href === "terms" ? (
									<Link
										to={link.href === "privacy" ? "/privacy" : "/terms"}
										className='text-sm text-white/50 hover:text-white transition-colors'
									>
										{link.label}
									</Link>
								) : (
									<a
										href={`#${link.href}`}
										onClick={(e) => handleScroll(e, link.href)}
										className='text-sm text-white/50 hover:text-white transition-colors'
									>
										{link.label}
									</a>
								)}
							</li>
						))}
					</ul>
				</div>

				{/* Services */}
				<div className='md:col-span-3 space-y-4'>
					<h4 className='text-xs font-bold uppercase tracking-[0.15em] text-white/30'>
						Services
					</h4>
					<ul className='space-y-2.5'>
						{services.map((s) => (
							<li key={s.name}>
								<Link
									to={s.path}
									className='text-sm text-white/50 hover:text-white transition-colors'
								>
									{s.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className='border-t border-white/10 max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30'>
				<p>© {new Date().getFullYear()} webZ Creations. All rights reserved.</p>
				<div className='flex space-x-6'>
					<Link to='/privacy' className='hover:text-white transition-colors'>
						Privacy Policy
					</Link>
					<Link to='/terms' className='hover:text-white transition-colors'>
						Terms of Service
					</Link>
				</div>
			</div>
		</footer>
	);
}
