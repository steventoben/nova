'use client';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {TextField} from "@/components/Input/TextField";
import {Button} from "@/components/Button/Button";

type ContactFormType = {
    email: string;
    subject: string;
    message: string;
};
export interface ContactFormProps {

}

export function ContactForm(props: ContactFormProps) {
    const {} = props;
    const { control, register, handleSubmit, watch, formState: { errors } } = useForm<ContactFormType>();
    console.log(watch('email'));
    console.log(watch('message'));
    const onSubmit: SubmitHandler<ContactFormType> = data => console.log(data);
    return (
        <div className={'Form-container ContactForm'} id={'contact-form'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}


                {/* include validation with required or other standard HTML validation rules */}
                <div className={'TextInput-container'}>
                    <label className={'TextField-label'}>{'Email'}</label>
                    <input className={'TextInput-input'} {...register("email", {required: true})} />
                </div>
                {/* errors will return when field validation fails  */}
                {errors.email && <span>This field is required</span>}

                <div className={'TextInput-container'}>
                    <label className={'TextField-label'}>{'Subject'}</label>
                    <input className={'TextInput-input'} {...register("subject", {required: true})} />
                </div>

                <div className={'TextInput-container'}>
                    <label className={'TextField-label'}>{'Message'}</label>
                    <textarea className={'TextInput-input TextArea'} {...register("message", {required: true})} />
                </div>

                <Button label={'Submit'} variant={'Filled'} theme={'Primary'} />
                {/*<input type="submit"/>*/}
            </form>
        </div>
    );
}