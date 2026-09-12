* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f7fb;
  color: #182033;
  line-height: 1.6;
}


/* HEADER */

.header {
  min-height: 82px;
  padding: 15px 6%;

  background: white;
  border-bottom: 1px solid #e5e7ef;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 25px;
  font-weight: 800;
}

nav {
  display: flex;
  gap: 28px;
}

nav a {
  text-decoration: none;
  color: #4b5568;
  font-weight: 600;
}

nav a:hover {
  color: #5146e5;
}

.account-btn {
  border: 0;
  border-radius: 14px;

  padding: 14px 22px;

  background: #5146e5;
  color: white;

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
}


/* HERO */

.hero {
  min-height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  padding: 70px 20px;

  background: linear-gradient(
    135deg,
    #f7f7ff,
    #eef1ff
  );
}

.hero-content {
  max-width: 750px;
}

.eyebrow {
  color: #5146e5;
  font-weight: 800;
  letter-spacing: .8px;
  margin-bottom: 12px;
}

.hero h1 {
  font-size: clamp(45px, 8vw, 72px);
  line-height: 1.05;
  margin-bottom: 20px;
}

.hero-content > p:not(.eyebrow) {
  color: #6b7280;
  font-size: 20px;
  margin-bottom: 30px;
}

.hero-btn {
  display: inline-block;

  padding: 15px 28px;

  border-radius: 12px;

  background: #5146e5;
  color: white;

  text-decoration: none;
  font-weight: 700;
}


/* SECTIONS */

.section {
  max-width: 1000px;
  margin: auto;
  padding: 80px 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
}

.section-title h2 {
  font-size: 40px;
  margin-bottom: 10px;
}

.section-title p:last-child {
  color: #6b7280;
}


/* FORM CARD */

.card {
  background: white;

  border: 1px solid #e4e7ef;

  border-radius: 24px;

  padding: 35px;

  box-shadow:
    0 15px 40px rgba(20, 30, 60, .07);
}

.form-section h3 {
  font-size: 25px;
  margin-bottom: 30px;
}


/* INPUTS */

label {
  display: block;

  margin-top: 20px;
  margin-bottom: 8px;

  font-weight: 700;
}

input,
select {
  width: 100%;

  padding: 15px;

  border: 1px solid #dce1ea;

  border-radius: 12px;

  background: white;

  color: #182033;

  font-size: 16px;

  outline: none;
}

input:focus,
select:focus {
  border-color: #5146e5;

  box-shadow:
    0 0 0 3px rgba(81, 70, 229, .1);
}


/* PHONE */

.phone-group {
  display: grid;

  grid-template-columns: 190px 1fr;

  gap: 10px;
}


/* FEE */

.fee-box {
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;

  margin-top: 30px;
  padding: 22px;

  border-radius: 16px;

  background: #f1f2ff;
}

.fee-box span {
  font-weight: 700;
}

.fee-box strong {
  color: #5146e5;
  font-size: 22px;
}


/* SEND */

.submit-btn {
  width: 100%;

  margin-top: 20px;

  padding: 17px;

  border: 0;
  border-radius: 13px;

  background: #5146e5;
  color: white;

  font-size: 17px;
  font-weight: 800;

  cursor: pointer;
}


/* STEPS */

.steps {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}

.step {
  padding: 30px;

  background: white;

  border: 1px solid #e5e7ef;

  border-radius: 20px;
}

.step span {
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 18px;

  border-radius: 50%;

  background: #5146e5;
  color: white;

  font-weight: 800;
}

.step h3 {
  margin-bottom: 8px;
}

.step p {
  color: #6b7280;
}


/* FOOTER */

footer {
  padding: 35px 20px;

  text-align: center;

  background: white;

  border-top: 1px solid #e5e7ef;

  color: #6b7280;
}


/* MODAL */

.modal {
  display: none;

  position: fixed;
  inset: 0;

  z-index: 500;

  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(10, 15, 30, .55);
}

.modal.show {
  display: flex;
}

.modal-box {
  width: 100%;
  max-width: 430px;

  padding: 30px;

  position: relative;

  background: white;

  border-radius: 22px;

  box-shadow:
    0 25px 70px rgba(0,0,0,.2);
}

.modal-box h2 {
  font-size: 30px;
  margin-bottom: 5px;
}

.modal-subtitle {
  color: #6b7280;
  margin-bottom: 25px;
}


/* CLOSE */

.close-btn {
  position: absolute;

  right: 18px;
  top: 15px;

  border: 0;

  background: transparent;

  color: #6b7280;

  font-size: 30px;

  cursor: pointer;
}


/* ACCOUNT */

.auth-btn {
  width: 100%;

  margin-top: 25px;
  padding: 15px;

  border: 0;
  border-radius: 12px;

  background: #5146e5;
  color: white;

  font-size: 16px;
  font-weight: 800;

  cursor: pointer;
}

#accountMessage {
  margin-top: 15px;

  text-align: center;

  color: #dc2626;

  font-size: 14px;
}

.account-info {
  margin: 25px 0;
  padding: 20px;

  border-radius: 14px;

  background: #f5f6ff;
}

#accountEmailDisplay {
  color: #5146e5;

  word-break: break-word;
}

.logout-btn {
  width: 100%;

  padding: 14px;

  border: 0;
  border-radius: 12px;

  background: #ef4444;
  color: white;

  font-weight: 800;

  cursor: pointer;
}


/* MOBILE */

@media (max-width: 800px) {

  .header {
    padding: 14px 18px;
  }

  nav {
    display: none;
  }

  .logo {
    font-size: 21px;
  }

  .account-btn {
    padding: 12px 15px;
  }

  .hero {
    min-height: 420px;
  }

  .section {
    padding: 55px 15px;
  }

  .card {
    padding: 23px;
    border-radius: 18px;
  }

  .section-title h2 {
    font-size: 32px;
  }

  .phone-group {
    grid-template-columns: 1fr;
  }

  .steps {
    grid-template-columns: 1fr;
  }

  .fee-box {
    flex-direction: column;
    align-items: flex-start;
  }
}