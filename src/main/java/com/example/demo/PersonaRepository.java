package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "personas", path = "personas")
public interface PersonaRepository extends CrudRepository<Persona, Long> {
    
}
