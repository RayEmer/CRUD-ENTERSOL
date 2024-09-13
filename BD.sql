CREATE DATABASE IF NOT EXISTS Entersol;
USE Entersol;

DROP TABLE IF EXISTS Tarea;
CREATE TABLE Tarea (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descripcion TEXT,
    estado BOOLEAN DEFAULT false,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar registros de prueba
INSERT INTO Tarea (titulo, descripcion, estado) VALUES
('Tarea 1', 'Descripcion - tarea 1', false),
('Tarea 2', 'Descripcion - tarea 2', true),
('Tarea 3', 'Descripcion - tarea 3', false),
('Tarea 4', 'Descripcion - tarea 4', true),
('Tarea 5', 'Descripcion - tarea 5', false),
('Tarea 6', 'Descripcion - tarea 6', true),
('Tarea 7', 'Descripcion - tarea 7', false),
('Tarea 8', 'Descripcion - tarea 8', true),
('Tarea 9', 'Descripcion - tarea 9', false),
('Tarea 10', 'Descripcion - tarea 10', true);