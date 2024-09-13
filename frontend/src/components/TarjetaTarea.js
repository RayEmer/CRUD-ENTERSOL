import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import FormularioActualizar from './FormularioActualizar'; // Importa el nuevo componente

const TarjetaTarea = ({ tarea, onDelete, onUpdate, onToggleEstado, color }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = (updatedTarea) => {
    onUpdate(updatedTarea);
    handleClose();
  };

  const handleDelete = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás deshacer esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(tarea.id);
        Swal.fire('Eliminado', 'La tarea ha sido eliminada.', 'success');
      }
    });
  };

  return (
    <div className={`mb-3 card ${color}`}>
      <div className="card-header">{tarea.id} - {tarea.titulo}</div>
      <div className="card-body">
        <p>{tarea.descripcion}</p>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id={`flexSwitchCheckDefault-${tarea.id}`}
            checked={tarea.estado}
            onChange={() => onToggleEstado(tarea)}
          />
          <label className="form-check-label" htmlFor={`flexSwitchCheckDefault-${tarea.id}`}>
            {tarea.estado ? 'Completado' : 'No Completado'}
          </label>
        </div>

        <Button variant="primary" onClick={handleShow} className="mr-2 mt-2">
          Actualizar
        </Button>
        <Button variant="danger" onClick={handleDelete} className="ml-2 mt-2">
          Eliminar
        </Button>
      </div>

      {/* Modal para actualizar */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Usamos el FormularioActualizar en lugar de un formulario interno */}
          <FormularioActualizar tareaInicial={tarea} onSubmit={handleUpdate} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TarjetaTarea;