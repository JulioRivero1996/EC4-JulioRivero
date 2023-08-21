package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final PuestoRepository repositoryP;
	private final PersonaRepository repositoryR;
	private final DepartamentoRepository repositoryD;
	private final EmpleadoRepository repositoryE;

	@Autowired
	public DatabaseLoader(
		PuestoRepository repositoryP,
		PersonaRepository repositoryR,
		DepartamentoRepository repositoryD,
		EmpleadoRepository repositoryE
		) {
		this.repositoryP = repositoryP;
		this.repositoryR = repositoryR;
		this.repositoryD = repositoryD;
		this.repositoryE = repositoryE;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		Puesto iDirector = new Puesto("Director", "Encargado de dirigir el Departamento");
		Puesto iAnalista = new Puesto( "Analista", "Encargado de analizar el Mercado");
		Puesto iPracticante = new Puesto("Practicante", "Persona nueva en el Departamentoo");

		this.repositoryP.save(new Puesto("Soporte Tecnico", "Encargado de resolver cualquier problema tecnologico"));
		this.repositoryP.save(new Puesto("Coordinador","Encargado de Coordinar reuniones"));
		this.repositoryP.save(new Puesto("Sub Director","Encargado de dirigir el Departamento en caso no este el Director"));
		this.repositoryP.save(new Puesto("Especialista de Calidad", "Responsable de garantizar que los procesos cumplan con los estandares establecidos"));
		this.repositoryP.save(iDirector);
		this.repositoryP.save(iAnalista);
		this.repositoryP.save(iPracticante);

		Persona pJuan = new Persona("Juan");
		Persona pPedro = new Persona("Pedro");
		Persona pJulio = new Persona("Julio");
		Persona P004 = new Persona("Pablo");
		Persona P005 = new Persona("Luis");
		Persona P006 = new Persona("Messi");
		this.repositoryR.save(pJuan);
		this.repositoryR.save(pPedro);
		this.repositoryR.save(pJulio);
		this.repositoryR.save(P004);
		this.repositoryR.save(P005);
		this.repositoryR.save(P006);
		Departamento dContabilidad = new Departamento("Contabilidad");
		Departamento dRRHH = new Departamento("Recursos Humanos");
		Departamento dMarketing = new Departamento("Marketing");
		this.repositoryD.save(dContabilidad);
		this.repositoryD.save(dRRHH);
		this.repositoryD.save(dMarketing);

		Empleado empJuan = new Empleado(dContabilidad, pJuan, iPracticante);
		Empleado empPedro = new Empleado(dRRHH, pPedro, iAnalista);
		Empleado empJulio = new Empleado(dMarketing, pJulio, iDirector);
		this.repositoryE.save(empJuan);
		this.repositoryE.save(empPedro);	
		this.repositoryE.save(empJulio);
	}
}