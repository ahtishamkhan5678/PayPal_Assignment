package com.springcrud.crud.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springcrud.crud.model.Sprint;

public interface SprintDao extends JpaRepository<Sprint, Long> {	

}
