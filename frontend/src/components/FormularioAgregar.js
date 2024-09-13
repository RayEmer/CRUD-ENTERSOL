import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import swal from 'sweetalert2';

const FormularioAgregar = ({ onSubmit, onCancel }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!titulo || titulo.length > 100) {
      swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El título es obligatorio y debe tener menos de 100 caracteres.'
      });
      return;
    }
    onSubmit({ titulo, descripcion });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitulo">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Ingrese el título de la tarea"
        />
      </Form.Group>
      <Form.Group controlId="formDescripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Ingrese una descripción"
        />
      </Form.Group>
      <div className="modal-footer">
        <Button variant="secondary" type="button" onClick={onCancel}>
          Cancelar
        </Button>
        <Button variant="primary" type="submit">
          Agregar Tarea
        </Button>
      </div>
    </Form>
  );
};

export default FormularioAgregar;