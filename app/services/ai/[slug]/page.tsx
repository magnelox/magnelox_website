import { notFound } from 'next/navigation';
import { aiServices } from '../../../../data/services';
import ServiceLandingTemplate from '../../../components/ServiceLandingTemplate';

export async function generateStaticParams() {
    return aiServices.map((service) => ({
        slug: service.id,
    }));
}

export default function AIServicePage({ params }: { params: { slug: string } }) {
    const service = aiServices.find((s) => s.id === params.slug);

    if (!service) {
        notFound();
    }

    const pillarInfo = {
        name: "AI Services & Automation",
        link: "/services/ai",
        color: "yellow-500",
        bgVariant: "from-yellow-400/20 to-orange-500/20",
        heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
    };

    return <ServiceLandingTemplate service={service} pillarInfo={pillarInfo} />;
}
