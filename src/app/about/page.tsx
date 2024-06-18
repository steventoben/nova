//'use client';
import {Text} from "@/components/Typography/Text";
//import {TableOfContents, TocProvider, useToc} from "@/components/TableOfContents/TableOfContents";
//import { ViewportObserver } from "@/components/ViewportObserver/ViewportObserver";
import { ExpandablePane } from "@/components/Expandable/Expandable";

function AboutPage() {
    //const {activeItem, setActiveItem} = useToc();
    return(
        <div className={'Page-container AboutPage TextPage-container'}>
            <section className={'Section About-intro TextBlock'}>
                <Text el={'h1'} fontSize={'1.5rem'} fontWeight={500}>
                    About Us
                </Text>
                <Text el={'p'} fontSize={'1rem'} fontWeight={400}>
                    We are Nova Piratica.
                </Text>
            </section>

            <section className={'Section About-intro TextBlock'}>
                <h2 className={'Heading xl Heading-effect'}>
                    Who We Are
                </h2>
                <p className={'Body medium'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem enim, finibus a orci non,
                    vehicula interdum ante. Mauris semper, massa at ultrices molestie, felis ipsum porttitor nulla, ut
                    aliquam quam ligula fermentum nunc.
                    <div style={{marginBottom: '1rem'}}/>
                    Sed auctor sit amet nibh ac finibus. Praesent maximus metus in felis iaculis, congue finibus tellus
                    placerat. Vivamus vehicula ipsum eget magna maximus, ac sagittis arcu interdum. Duis molestie orci
                    eu augue vulputate luctus vel eu massa.
                    <div style={{marginBottom: '1rem'}}/>
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam eget
                    sem nec erat fringilla tincidunt nec quis leo. Aliquam erat volutpat. Quisque rhoncus luctus erat a
                    tempus. Vivamus eu ex ac ex maximus pharetra. Integer in augue accumsan, molestie ipsum eu, ornare
                    lectus. Suspendisse mi mi, volutpat at sagittis eu, dignissim a ex.
                    <div style={{marginBottom: '1rem'}}/>
                    Fusce eu lacus vestibulum, egestas massa nec, elementum dolor. Mauris facilisis sem sapien, eu
                    imperdiet turpis lobortis ut. Etiam sit amet nulla viverra, blandit ipsum quis, euismod lorem.
                </p>
            </section>

            <div style={{height: '4rem'}} />

            <ExpandablePane title="Test Expandable" id="testing" content={<div>Fusce eu lacus vestibulum, egestas massa nec, elementum dolor. Mauris facilisis sem sapien, eu
                imperdiet turpis lobortis ut. Etiam sit amet nulla viverra, blandit ipsum quis, euismod lorem.!!</div>} isExpanded={false}></ExpandablePane>

            <div style={{height: '4rem'}} />


        
            <section className={'Section About-intro TextBlock'}>
                <h2 className={'Heading xl Heading-effect'}>
                    What We Offer
                </h2>
                <p className={'Body medium'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem enim, finibus a orci non,
                    vehicula interdum ante. Mauris semper, massa at ultrices molestie, felis ipsum porttitor nulla, ut
                    aliquam quam ligula fermentum nunc. Sed auctor sit amet nibh ac finibus. Praesent maximus metus in
                    felis iaculis, congue finibus tellus placerat. Vivamus vehicula ipsum eget magna maximus, ac
                    sagittis arcu interdum. Duis molestie orci eu augue vulputate luctus vel eu massa. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam eget sem nec erat
                    fringilla tincidunt nec quis leo. Aliquam erat volutpat. Quisque rhoncus luctus erat a tempus.
                    Vivamus eu ex ac ex maximus pharetra. Integer in augue accumsan, molestie ipsum eu, ornare lectus.
                    Suspendisse mi mi, volutpat at sagittis eu, dignissim a ex. Fusce eu lacus vestibulum, egestas massa
                    nec, elementum dolor. Mauris facilisis sem sapien, eu imperdiet turpis lobortis ut. Etiam sit amet
                    nulla viverra, blandit ipsum quis, euismod lorem.
                </p>
            </section>
        </div>
    );
}

/* const ProvidedPage = () => {
    return (
        <TocProvider items={['about us', 'who we are', 'what we offer']}>
            <AboutPage/>
        </TocProvider>
    );
} */

export default AboutPage;