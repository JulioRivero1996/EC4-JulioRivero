package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "departamentos", path = "departamentos")
public interface DepartamentoRepository extends CrudRepository<Departamento, Long> {

}
