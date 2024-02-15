import emailjs from "@emailjs/browser";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface Props {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

function ContactForm({ openModal, setOpenModal }: Props) {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          e.currentTarget,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <AlertDialog open={openModal} onOpenChange={setOpenModal}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Contact</AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            Remplissez ce court formulaire pour me contacter. Je vous répondrai
            dans les plus brefs délais.
          </AlertDialogDescription>
          <form className="flex flex-col gap-5" onSubmit={(e) => sendEmail(e)}>
            <div className="flex gap-4">
              <div className="text-left">
                <Input
                  type="text"
                  id="lastname"
                  name="from_lastname"
                  placeholder="Nom"
                />
              </div>
              <div className="text-left">
                <Input
                  type="text"
                  id="firstname"
                  name="from_firstname"
                  placeholder="Prénom"
                />
              </div>
            </div>
            <div className="text-left">
              <Input
                type="email"
                id="email"
                name="from_email"
                placeholder="Email"
              />
            </div>
            <Textarea
              placeholder="Votre message..."
              name="message"
              className="h-[220px]"
            />
            <div className="flex justify-center items-baseline gap-5">
              <AlertDialogCancel>Fermer</AlertDialogCancel>
              <AlertDialogAction type="submit">Envoyer</AlertDialogAction>
            </div>
          </form>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ContactForm;
