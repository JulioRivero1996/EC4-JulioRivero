package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "empleados", path = "empleados")
public interface EmpleadoRepository extends CrudRepository<Empleado, Long> {
    
}
