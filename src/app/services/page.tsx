import {Button, ButtonVariants} from "@/components/Button/Button";
import { CardGrid } from "@/components/Card/CardGrid";
import { SAMPLE_SERVICES, ServiceCard, ServicePriceCard } from "@/components/Card/ServiceCard";
import { Spacer } from "@/components/Spacer/Spacer";

function ServicesPage() {
    return(
        <div className={'Page-container ServicesPage'}>
            <Spacer size={2} />
            <h1 className={'Heading xxl G-Medium'}>Our Services</h1>
            <h2 className="Heading medium Medium">We provide top-notch information finding and security intelligence solutions.</h2>
            <Spacer size={2} />
            <div style={{padding: '1rem'}}>
                <CardGrid>
                    {SAMPLE_SERVICES.map(service => (
                        <ServicePriceCard key={service.title} {...service}/>
                    ))}
                </CardGrid>
            </div>
        </div>
    );
}

export default ServicesPage;