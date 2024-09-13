import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTareas, deleteTarea, updateTarea, createTarea } from '../redux/actions/tareasActions';
import TarjetaTarea from '../components/TarjetaTarea';
import { Button, Modal, Form } from 'react-bootstrap';
import swal from 'sweetalert2';
import FormularioTarea from '../components/FormularioAgregar';

const Index = () => {
  const dispatch = useDispatch();
  const tareas = useSelector((state) => state.tareas);
  const [showModal, setShowModal] = useState(false);
  const [filtroNombre, setFiltroNombre] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('');

  useEffect(() => {
    dispatch(fetchTareas());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTarea(id)).then(() => {
      swal.fire({
        icon: 'success',
        title: 'Tarea eliminada',
        text: 'La tarea ha sido eliminada con éxito.'
      });
      dispatch(fetchTareas());
    });
  };

  const handleUpdate = (tarea) => {
    dispatch(updateTarea(tarea)).then(() => {
      dispatch(fetchTareas());
      swal.fire({
        icon: 'success',
        title: 'Tarea actualizada',
        text: 'La tarea ha sido actualizada con éxito.'
      });
    });
  };

  const handleAgregarTarea = (nuevaTarea) => {
    dispatch(createTarea(nuevaTarea)).then(() => {
      dispatch(fetchTareas());
      handleCloseModal();
      swal.fire({
        icon: 'success',
        title: 'Tarea agregada',
        text: 'La tarea ha sido agregada con éxito.'
      });
    });
  };

  const handleToggleEstado = (tarea) => {
    const tareaActualizada = { ...tarea, estado: !tarea.estado };
    dispatch(updateTarea(tareaActualizada)).then(() => {
      dispatch(fetchTareas());
    });
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleFiltroNombre = (e) => {
    setFiltroNombre(e.target.value);
  };

  const handleFiltroEstado = (e) => {
    setFiltroEstado(e.target.value);
  };

  const tareasFiltradas = tareas
    .filter((tarea) =>
      tarea.titulo.toLowerCase().includes(filtroNombre.toLowerCase()) ||
      tarea.descripcion.toLowerCase().includes(filtroNombre.toLowerCase())
    )
    .filter((tarea) =>
      filtroEstado === '' ? true : tarea.estado === (filtroEstado === 'completadas')
    )
    .sort((a, b) => b.id - a.id);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Button variant="primary" onClick={handleShowModal}>
          Agregar Tarea
        </Button>

        <Form.Control
          type="text"
          placeholder="Buscar por título o descripción"
          value={filtroNombre}
          onChange={handleFiltroNombre}
          style={{ width: '300px' }}
        />

        <Form.Select onChange={handleFiltroEstado} style={{ width: '200px' }}>
          <option value="">Todas</option>
          <option value="completadas">Completadas</option>
          <option value="noCompletadas">No Completadas</option>
        </Form.Select>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Nueva Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormularioTarea onSubmit={handleAgregarTarea} onCancel={handleCloseModal} />
        </Modal.Body>
      </Modal>

      <div className="row mt-3">
        {tareasFiltradas.length > 0 ? (
          tareasFiltradas.map((tarea, index) => (
            <div className="col-md-3 mb-3" key={tarea.id}>
              <TarjetaTarea
                tarea={tarea}
                color={index % 2 === 0 ? 'color-claro' : 'color-fuerte'}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
                onToggleEstado={handleToggleEstado}
              />
            </div>
          ))
        ) : (
          <h2>Ninguna tarea encontrada con los parámetros buscados</h2>
        )}
      </div>
    </div>
  );
};

export default Index;
