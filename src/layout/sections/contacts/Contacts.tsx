import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Сontainer.ts";
import {SmallText} from "../../../components/SmallText.ts";
import {S} from "./Contact_Styles.ts"
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Contact} from "./contact/Contact.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import emailjs from '@emailjs/browser';
import {ElementRef, useRef} from "react";


const socialItemData = [
    {
        iconId: "instagram"
    },
    {
        iconId: "telegram"
    },
    {
        iconId: "vk"
    },
    {
        iconId: "linkedin"
    },
]

export const Contacts: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs
            .sendForm('service_1ppjw6q', 'template_9euu4td', form.current, {
                publicKey: 't4NAfWcLMMI0MKdIEY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };



    return (
        <S.Contact id={"contact"}>
            <Container>

                <SectionTitle>Contact</SectionTitle>
                <SmallText>Want to know more or just chat?<br/>
                    You are welcome!</SmallText>
                <S.ContactWrapper>
                    <S.ContactCard>
                        <S.FormSection>

                            <S.Form ref={form} onSubmit={sendEmail}>
                                <span>Get in touch</span>
                                <FlexWrapper gap="7px">
                                    <S.Field required placeholder={"name"} name={'user_name'}/>
                                    <S.Field required placeholder={"subject"} name={'subject'}/>
                                </FlexWrapper>
                                <S.Field required placeholder={"email"} name={'email'}/>
                                <S.Field required placeholder={"massage"} as={"textarea"} name={'message'}/>
                                <Button type={"submit"}>Send</Button>
                            </S.Form>
                        </S.FormSection>
                        <S.ContactSection direction={"column"} gap="37px">
                            <Contact iconId={"location"} title={"Location"} description={"Rostov-on-Don, Russia"} />
                            <Contact iconId={"phone"} title={"Phone"} description={"89298280297"} href="tel:89298280297"/>
                            <Contact iconId={"email"} title={"Email"} description={"semenovamk96@mail.ru"} href="mailto:semenovamk96@mail.ru"/>
                        </S.ContactSection>

                    </S.ContactCard>
                    <S.SocialIconsList>

                        {socialItemData.map((s, index) => {
                            return <S.SocialItem>
                                <S.SocialLink>
                                    <Icon iconId={s.iconId} key={index} height={"58"} width={"58"} />
                                </S.SocialLink>
                            </S.SocialItem>
                        })}

                    </S.SocialIconsList>

                </S.ContactWrapper>



            </Container>

        </S.Contact>
    );
};

