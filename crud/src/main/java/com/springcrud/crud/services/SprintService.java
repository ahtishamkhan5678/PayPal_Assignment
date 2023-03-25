package com.springcrud.crud.services;

import java.util.List;

import com.springcrud.crud.model.Sprint;

public interface SprintService {
	
	public List<Sprint> getSprints();
	
	public Sprint getSprint(long sprintId);
	
	public Sprint addSprint(Sprint sprint);
	
	public Sprint updateSprint(Sprint sprint);
	
	public Sprint deleteSprint(long sprintId);
}