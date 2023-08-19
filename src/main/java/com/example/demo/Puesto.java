package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Puesto {

    private @Id @GeneratedValue Long id;
	private String nombre;
	private String descripcion;

	private Puesto() {}

	public Puesto(String nombre, String descripcion) {
		this.nombre = nombre;
		this.descripcion = descripcion;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Puesto puesto = (Puesto) o;
		return Objects.equals(id, puesto.id) &&
			Objects.equals(nombre, puesto.nombre) &&
			Objects.equals(descripcion, puesto.descripcion);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, descripcion);
	}

	@Override
	public String toString() {
		return "Puesto{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", descripcion='" + descripcion + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
}
