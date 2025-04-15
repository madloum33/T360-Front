import React, { useState } from 'react';
import './DemandsPage.css'; // lien vers le fichier CSS

const DemandsPage = () => {
  const [demands, setDemands] = useState([
    { id: '00001', name: 'xxxx', type: 'xxxx', status: 'Completed' },
    { id: '00002', name: 'xxxx', type: 'xxxx', status: 'Processing' },
    { id: '00003', name: 'xxxx', type: 'xxxx', status: 'Rejected' },
  ]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    type: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleAddDemand = () => {
    const newDemand = {
      id: String(demands.length + 1).padStart(5, '0'),
      name: formData.title,
      type: formData.type,
      status: 'Processing',
    };
    setDemands([...demands, newDemand]);
    setFormData({ title: '', description: '', date: '', type: '' });
    setShowModal(false);
  };

  return (
    <div className="demands-container">
      <h2 className="demands-title">Mes demandes</h2>

      <button className="add-button" onClick={() => setShowModal(true)}>
        Nouvelle demande
      </button>

      <table className="demands-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>TYPE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {demands.map((d, index) => (
            <tr key={index}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.type}</td>
              <td>
                <span className={`status-badge ${d.status.toLowerCase()}`}>
                  {d.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Ajouter une nouvelle demande</h3>
            <input
              type="text"
              placeholder="Titre"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
            <select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <option value="">Type</option>
              <option value="xxxx">xxxx</option>
              <option value="yyyy">yyyy</option>
            </select>
            <button onClick={handleAddDemand}>Ajouter</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemandsPage;
