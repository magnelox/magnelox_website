import { notFound } from 'next/navigation';
import { cloudServices } from '../../../../data/services';
import ServiceLandingTemplate from '../../../components/ServiceLandingTemplate';

export async function generateStaticParams() {
    return cloudServices.map((service) => ({
        slug: service.id,
    }));
}

export default function CloudServicePage({ params }: { params: { slug: string } }) {
    const service = cloudServices.find((s) => s.id === params.slug);

    if (!service) {
        notFound();
    }

    const pillarInfo = {
        name: "Cloud Services",
        link: "/services/cloud",
        color: "ag-cyan",
        bgVariant: "from-blue-500/20 to-cyan-500/20",
        heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop"
    };

    return <ServiceLandingTemplate service={service} pillarInfo={pillarInfo} />;
}
