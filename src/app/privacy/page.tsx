import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Privacy Policy</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 prose prose-slate max-w-none prose-headings:text-primary prose-a:text-secondary">
          <p className="text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Information We Collect</h2>
          <p>
            Shakti Foundation ("we", "our", or "us") is committed to protecting your privacy. We collect information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our programs, participate in activities on the website, or otherwise contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use personal information collected via our website for a variety of business purposes described below:</p>
          <ul>
            <li>To facilitate donation processing and issue tax receipts.</li>
            <li>To send administrative information to you.</li>
            <li>To respond to your inquiries and offer support.</li>
            <li>To send you our newsletter and updates regarding our initiatives (only if you have opted in).</li>
          </ul>

          <h2>3. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell, rent, or trade any of your personal information to third parties for promotional purposes.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may contact us at info@shaktifoundation.org or by post to our headquarters in India.
          </p>
        </div>
      </div>
    </div>
  );
}
