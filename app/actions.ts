"use server";
import { Resend } from "resend";

interface Form {
  name: string;
  email: string;
  message: string;
}
export const sendEmail = async (form: Form) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, email, message } = form;

  try {
    const data = await resend.emails.send({
      from: `onboarding@resend.dev`,
      to: ["pierrepbaptiste@gmail.com"],
      subject: `${email}`,
      html: `<p>${message}</p>`,
    });

    return {
      message: "Email sent successfully.",
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error sending email.",
    };
  }
};
