import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		service: "Web Development",
		message: "",
	});

	const [errors, setErrors] = useState<Record<string, string>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const validate = () => {
		const newErrors: Record<string, string> = {};
		if (!formData.name.trim()) newErrors.name = "Full name is required";
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email) newErrors.email = "Email address is required";
		else if (!emailRegex.test(formData.email))
			newErrors.email = "Please provide a valid email address";
		if (!formData.message.trim())
			newErrors.message = "Message text is required";
		else if (formData.message.trim().length < 10)
			newErrors.message = "Message must be at least 10 characters long";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!validate()) return;
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSuccess(true);
			setFormData({
				name: "",
				email: "",
				service: "Web Development",
				message: "",
			});
		}, 1800);
	};

	const inputClass = (field: string) =>
		`w-full bg-white dark:bg-black border ${
			errors[field] ? "border-red-500" : "border-black/15 dark:border-white/15"
		} px-4 py-3 text-sm text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#5711C5] transition-colors rounded-sm`;

	return (
		<section id='contact' className='py-28 bg-white dark:bg-black'>
			<div className='max-w-7xl mx-auto px-6 lg:px-8'>
				{/* Header */}
				<div className='mb-16'>
					<div className='flex items-center space-x-3 mb-6'>
						<div className='w-8 h-px' style={{ backgroundColor: "#5711C5" }} />
						<span className='text-xs font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40'>
							Get In Touch
						</span>
					</div>
					<h2 className='text-4xl sm:text-5xl font-black tracking-tight text-black dark:text-white leading-tight'>
						Let's Build Something <br />
						<span style={{ color: "#5711C5" }}>Together.</span>
					</h2>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-start'>
					{/* Left Info */}
					<div className='lg:col-span-4 space-y-10'>
						<p className='text-base text-black/50 dark:text-white/50 leading-relaxed'>
							Have a project in mind or want to consult on SEO audit frameworks?
							Drop us a line and let's coordinate.
						</p>

						{[
							{
								icon: Mail,
								label: "Email Us",
								value: "webzcreations@zohomail.in",
								href: "mailto:webzcreations@zohomail.in",
							},
							{
								icon: Phone,
								label: "Call Us",
								value: "+918838526867",
								href: "tel:+918838526867",
							},
							{ icon: MapPin, label: "Our Studio", value: "Erode", href: "#" },
						].map(({ icon: Icon, label, value, href }) => (
							<div key={label} className='flex items-start space-x-4'>
								<div
									className='w-10 h-10 flex items-center justify-center text-white shrink-0'
									style={{ backgroundColor: "#5711C5" }}
								>
									<Icon className='h-5 w-5' />
								</div>
								<div>
									<p className='text-xs font-bold uppercase tracking-widest text-black/30 dark:text-white/30 mb-1'>
										{label}
									</p>
									<a
										href={href}
										className='text-sm font-semibold text-black dark:text-white'
									>
										{value}
									</a>
								</div>
							</div>
						))}
					</div>

					{/* Right Form */}
					<div className='lg:col-span-8 border border-black/10 dark:border-white/10 p-8 rounded-sm'>
						<AnimatePresence mode='wait'>
							{!isSuccess ? (
								<motion.form
									key='form'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									onSubmit={handleSubmit}
									className='space-y-6'
								>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
										<div className='space-y-1.5'>
											<label className='text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40'>
												Full Name
											</label>
											<input
												type='text'
												id='name'
												name='name'
												value={formData.name}
												onChange={handleChange}
												placeholder='John Doe'
												className={inputClass("name")}
											/>
											{errors.name && (
												<p className='text-xs text-red-500'>{errors.name}</p>
											)}
										</div>
										<div className='space-y-1.5'>
											<label className='text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40'>
												Email Address
											</label>
											<input
												type='email'
												id='email'
												name='email'
												value={formData.email}
												onChange={handleChange}
												placeholder='john@example.com'
												className={inputClass("email")}
											/>
											{errors.email && (
												<p className='text-xs text-red-500'>{errors.email}</p>
											)}
										</div>
									</div>

									<div className='space-y-1.5'>
										<label className='text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40'>
											Required Service
										</label>
										<select
											id='service'
											name='service'
											value={formData.service}
											onChange={handleChange}
											className='w-full bg-white dark:bg-black border border-black/15 dark:border-white/15 px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:border-[#5711C5] transition-colors rounded-sm'
										>
											<option>Web Development</option>
											<option>SEO Optimization</option>
											<option>Digital Marketing</option>
											<option>App Development</option>
											<option>CRM Development</option>
										</select>
									</div>

									<div className='space-y-1.5'>
										<label className='text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40'>
											Message
										</label>
										<textarea
											id='message'
											name='message'
											rows={5}
											value={formData.message}
											onChange={handleChange}
											placeholder='Outline your project timeline, requirements, and budget...'
											className={`${inputClass("message")} resize-none`}
										/>
										{errors.message && (
											<p className='text-xs text-red-500'>{errors.message}</p>
										)}
									</div>

									<button
										type='submit'
										disabled={isSubmitting}
										className='w-full py-4 text-sm font-semibold text-white flex items-center justify-center space-x-2 disabled:opacity-50 transition-opacity rounded-sm'
										style={{ backgroundColor: "#5711C5" }}
									>
										{isSubmitting ? (
											<>
												<Loader2 className='h-4 w-4 animate-spin' />
												<span>Sending...</span>
											</>
										) : (
											<>
												<span>Send Message</span>
												<Send className='h-4 w-4' />
											</>
										)}
									</button>
								</motion.form>
							) : (
								<motion.div
									key='success'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className='py-16 flex flex-col items-center justify-center text-center space-y-4'
								>
									<div
										className='w-12 h-12 flex items-center justify-center text-white'
										style={{ backgroundColor: "#5711C5" }}
									>
										<CheckCircle2 className='h-6 w-6' />
									</div>
									<h3 className='text-2xl font-black text-black dark:text-white'>
										Message Sent!
									</h3>
									<p className='text-base text-black/50 dark:text-white/50 max-w-sm leading-relaxed'>
										Thank you for reaching out. Our team will follow up within
										24 business hours.
									</p>
									<button
										onClick={() => setIsSuccess(false)}
										className='mt-2 text-sm font-semibold border border-black/20 dark:border-white/20 px-6 py-2.5 text-black dark:text-white rounded-sm'
									>
										Send Another
									</button>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}
