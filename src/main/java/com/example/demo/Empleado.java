package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Empleado {

    private @Id @GeneratedValue Long id;

    @ManyToOne()
    @JoinColumn(name = "id_departamento")
    private Departamento departamento;

    @ManyToOne()
    @JoinColumn(name = "id_persona")
    private Persona persona;

    @ManyToOne()
    @JoinColumn(name = "id_puesto")
    private Puesto puesto;

	public Empleado() {
	}

	public Empleado(Departamento departamento, Persona persona, Puesto puesto) {
        this.departamento = departamento;
        this.persona = persona;
        this.puesto = puesto;
    }

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

    public Departamento getDepartamento() {
        return departamento;
    }

    public void setDepartamento(Departamento departamento) {
        this.departamento = departamento;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Puesto getPuesto() {
        return puesto;
    }

    public void setPuesto(Puesto puesto) {
        this.puesto = puesto;
    }

}
