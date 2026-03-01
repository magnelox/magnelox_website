import { notFound } from 'next/navigation';
import { cybersecurityServices } from '../../../../data/services';
import ServiceLandingTemplate from '../../../components/ServiceLandingTemplate';

export async function generateStaticParams() {
    return cybersecurityServices.map((service) => ({
        slug: service.id,
    }));
}

export default function CybersecurityServicePage({ params }: { params: { slug: string } }) {
    const service = cybersecurityServices.find((s) => s.id === params.slug);

    if (!service) {
        notFound();
    }

    const pillarInfo = {
        name: "Cybersecurity Services",
        link: "/services/cybersecurity",
        color: "ag-magenta",
        bgVariant: "from-pink-500/20 to-purple-500/20",
        heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
    };

    return <ServiceLandingTemplate service={service} pillarInfo={pillarInfo} />;
}
