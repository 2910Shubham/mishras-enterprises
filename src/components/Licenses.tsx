import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const licenseTypes = [
	// {
	// 	title: "Food Safety License",
	// 	description: "FSSAI certifications for all our operational locations",
	// 	document: "FSSAI_Certificate.pdf",
	// 	thumbnail: "/assets/certificates/FSSAI_Certificate.jpg",
	// 	icon: FileText,
	// },
	{
		title: "MSME Registered",
		description: "MSME Registered Unit",
		document: "MSME_Registration.pdf",
		thumbnail: "/assets/certificates/msme.png",
		icon: FileText,
	},
	// {
	// 	title: "GST Certificates",
	// 	description: "Staff health and hygiene certifications",
	// 	document: "Health_Certificates.pdf",
	// 	thumbnail: "/assets/certificates/Health_Certificates.jpg",
	// 	icon: FileText,
	// },
];

const Licenses = () => {
	const { ref: sectionRef, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section id="licenses" className="py-20 bg-white" ref={sectionRef}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`text-center mb-16 ${
						inView ? "fade-in-up" : "opacity-0"
					}`}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-royalblue mb-4">
						Licenses & Certifications
					</h2>
					<div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
					<p className="max-w-2xl mx-auto text-lg text-royalblue/80">
						All our operations are fully licensed and comply with the highest
						standards of food safety and hygiene.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{licenseTypes.map((license, index) => (
						<Card
							key={index}
							className={`border-2 border-gold hover:border-royalblue transition-all hover-lift ${
								inView ? `fade-in-up animate-stagger-${index + 1}` : "opacity-0"
							} bg-gold-light/30`}
						>
							<CardHeader>
								<div className="flex flex-col items-center gap-2 mb-2">
									<img
										src={license.thumbnail}
										alt={license.title + " certificate thumbnail"}
										className="w-32 h-48 object-cover rounded border border-gold bg-white mb-2 mx-auto shadow bg-white"
									/>
									<div className="flex items-center gap-2">
										<license.icon className="w-6 h-6 text-royalblue" />
										<CardTitle className="ml-2 text-lg text-royalblue">
											{license.title}
										</CardTitle>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-royalblue/80 mb-2">
									{license.description}
								</p>
								<div className="flex items-center gap-2 p-2 bg-gold-light rounded-lg">
									<FileText className="w-4 h-4 text-royalblue" />
									 <a
            href={license.thumbnail.replace(/\.(png|jpg|jpeg)$/i, ".pdf")}
            download
            className="text-sm font-medium text-royalblue underline hover:text-royalblue/70"
        >
            {license.document}
        </a>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Licenses;
