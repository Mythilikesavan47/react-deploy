import React from 'react';
import './contact.css';
import Footer from '../Footer';

const Contact = () => {
  return (
    <div className="home-container">
      <section id="contact" class="form-section py-5">
    <div class="container">
            <!-- Contact Form -->
            <div class="col-md-6">
                <h5 style="color: #333;">Fill out the form to contact us:</h5>
                <form action="submit_form.php" method="POST">
                    <!-- Full Name -->
                    <div class="mb-4">
                        <label for="name" class="form-label" style="color: #333; font-weight: bold;">Full Name</label>
                        <input type="text" class="form-control" id="name" name="name" required style="border: none; border-bottom: 2px solid #007bff; border-radius: 0; padding: 10px; font-size: 1rem; background-color: transparent;">
                    </div>
                    <!-- Email -->
                    <div class="mb-4">
                        <label for="email" class="form-label" style="color: #333; font-weight: bold;">Email</label>
                        <input type="email" class="form-control" id="email" name="email" required style="border: none; border-bottom: 2px solid #007bff; border-radius: 0; padding: 10px; font-size: 1rem; background-color: transparent;">
                    </div>
                    <!-- Phone Number -->
                    <div class="mb-4">
                        <label for="phone" class="form-label" style="color: #333; font-weight: bold;">Phone</label>
                        <input type="tel" class="form-control" id="phone" name="phone" required style="border: none; border-bottom: 2px solid #007bff; border-radius: 0; padding: 10px; font-size: 1rem; background-color: transparent;">
                    </div>
                    <!-- Submit Button -->
                    <button type="submit" class="btn btn-primary" style="background-color: #007bff; padding: 10px 30px; border-radius: 30px; font-weight: bold;">Submit</button>
                </form>
            </div>
        </div>
    </div>
</section>

      <Footer />

    </div>
  );
};

export default Contact;
