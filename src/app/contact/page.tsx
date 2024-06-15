import {ContactForm} from "@/components/Form/ContactForm";

function ContactPage() {
    return(
        <div className={'Page-container ContactPage'}>
            <h1 className={'Heading xxl'}>Contact Us</h1>
            <div>
                <ContactForm />
            </div>
        </div>
    );
}

export default ContactPage;