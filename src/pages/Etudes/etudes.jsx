import React, { useState } from 'react';
import './etudes.css';

const Etudes = () => {
  const [etudes, setEtudes] = useState([
    { id: '00001', client: 'Client1', titre: 'xxxxxxxxxxxxxxxxxxxxx', date: '14 Feb 2019', type: 'xxxx', status: 'terminé' },
    { id: '00002', client: 'Client2', titre: 'xxxxxxxxxxxxxxxxxxxxx', date: '14 Feb 2019', type: 'xxxx', status: 'en cours' },
    { id: '00003', client: 'Client2', titre: 'xxxxxxxxxxxxxxxxxxxxx', date: '14 Feb 2019', type: 'xxxx', status: 'refusé' },
    { id: '00004', client: 'Client3', titre: 'xxxxxxxxxxxxxxxxxxxxx', date: '14 Feb 2019', type: 'xxxx', status: 'terminé' },
    { id: '00005', client: 'Client4', titre: 'xxxxxxxxxxxxxxxxxxxxx', date: '14 Feb 2019', type: 'xxxx', status: 'en cours' },
    { id: '00006', client: 'Client5', titre: 'xxxxxxxxxxxxxxxxxxxxx', date: '14 Feb 2019', type: 'xxxx', status: 'terminé' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [nouvelleEtude, setNouvelleEtude] = useState({
    client: '',
    titre: '',
    date: '',
    type: '',
    status: 'en cours',
  });

  const handleAjouterEtude = () => {
    const nouvelleId = String(etudes.length + 1).padStart(5, '0');
    const nouvelle = {
      id: nouvelleId,
      ...nouvelleEtude,
    };
    setEtudes([...etudes, nouvelle]);
    setShowModal(false);
    setNouvelleEtude({ client: '', titre: '', date: '', type: '', status: 'en cours' });
  };

  return (
    <div className="fiche-container ">
      <div className="etudes-header">
        <h2>Etudes</h2>
        <button className="btn-ajouter" onClick={() => setShowModal(true)}>
            + Ajouter une étude
        </button>
      </div>
        
      <div className="filters">
        <button className="filter-btn"><i className="fa fa-filter"></i> filtrer par</button>
        <select><option>14 Feb 2019</option></select>
        <select><option>Type d'étude</option></select>
        <select><option>Status</option></select>
        <button className="reset-btn">🗘 Effacer les filtres</button>
      </div>

      <table className="etudes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Titre d’étude</th>
            <th>Date</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {etudes.map((etude) => (
            <tr key={etude.id}>
              <td>{etude.id}</td>
              <td>{etude.client}</td>
              <td>{etude.titre}</td>
              <td>{etude.date}</td>
              <td>{etude.type}</td>
              <td>
                <span className={`status ${etude.status.replace(' ', '-')}`}>
                  {etude.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Ajouter une étude</h2>
            <input
              type="text"
              placeholder="Client"
              value={nouvelleEtude.client}
              onChange={(e) => setNouvelleEtude({ ...nouvelleEtude, client: e.target.value })}
            />
            <input
              type="text"
              placeholder="Titre d'étude"
              value={nouvelleEtude.titre}
              onChange={(e) => setNouvelleEtude({ ...nouvelleEtude, titre: e.target.value })}
            />
            <input
              type="date"
              value={nouvelleEtude.date}
              onChange={(e) => setNouvelleEtude({ ...nouvelleEtude, date: e.target.value })}
            />
            <input
              type="text"
              placeholder="Type"
              value={nouvelleEtude.type}
              onChange={(e) => setNouvelleEtude({ ...nouvelleEtude, type: e.target.value })}
            />
            <select
              value={nouvelleEtude.status}
              onChange={(e) => setNouvelleEtude({ ...nouvelleEtude, status: e.target.value })}
            >
              <option value="en cours">En cours</option>
              <option value="terminé">Terminé</option>
              <option value="refusé">Refusé</option>
            </select>

            <div className="modal-actions">
              <button onClick={handleAjouterEtude}>Ajouter</button>
              <button onClick={() => setShowModal(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Etudes;
