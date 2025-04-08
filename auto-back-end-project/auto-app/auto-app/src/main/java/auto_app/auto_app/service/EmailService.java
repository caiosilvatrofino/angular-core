package auto_app.auto_app.service;

import auto_app.auto_app.domain.ContactForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendContactEmail(ContactForm contactForm){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("caios.trofino@gmail.com");
        message.setSubject("Contato: " + contactForm.getName());
        message.setText(String.format("Nome: %s\nEmail: %s\nTelefone: %s\nMensagem:\n%s" ,
                contactForm.getName(),
                contactForm.getEmail(),
                contactForm.getPhone() != null ? contactForm.getPhone() : "Não informado",
                contactForm.getMessage()));

        message.setFrom("caiodev361@gmail.com");

        mailSender.send(message);
    }
}