package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "puestos", path = "puestos")
public interface PuestoRepository extends CrudRepository<Puesto, Long> {
    
}
