import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert2';

const FormularioActualizar = ({ tareaInicial, onSubmit }) => {
  const [titulo, setTitulo] = useState(tareaInicial.titulo);
  const [descripcion, setDescripcion] = useState(tareaInicial.descripcion);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || titulo.length > 100) {
      swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El título es obligatorio y debe tener menos de 100 caracteres.'
      });
      return;
    }
    onSubmit({ ...tareaInicial, titulo, descripcion });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          className="form-control"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Descripción</label>
        <input
          type="text"
          className="form-control"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <div className="modal-footer"> {/* Ponemos los botones en el pie del formulario */}
        <Button variant="secondary" type="button" onClick={() => onSubmit(tareaInicial)}>
          Cancelar
        </Button>
        <Button variant="primary" type="submit">
          Guardar cambios
        </Button>
      </div>
    </form>
  );
};

export default FormularioActualizar;
