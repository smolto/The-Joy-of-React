import React from 'react';

function fetchUsers() {
  return [
    {
      name: 'Susanita Kumar',
      job: 'Electrical Engineer',
      email: 'sunita.kumar@acme.co',
    },
    {
      name: 'Henderson G. Sterling II',
      job: 'Receptionist',
      email: 'henderson-the-second@acme.co',
    },
    {
      name: 'Aoi Kobayashi',
      job: 'President',
      email: 'kobayashi.aoi@acme.co',
    },
  ];
}

function ContactCard({name, job, email}) {
  return (
    <li className="contact-card">
      <h2>{name}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{job}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </li>
  );
}

function App() {
  const contacts = fetchUsers();
  return (
    <ul>
      {contacts.map(({name, job, email}, index) => (
        <ContactCard key={index} name={name} job={job} email={email} />
      ))}
    </ul>
  );
}

export default App;
