package com.springcrud.crud.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springcrud.crud.dao.SprintDao;
import com.springcrud.crud.model.Sprint;

@Service
public class SprintServiceImpl implements SprintService {
	
	@Autowired
	private SprintDao sprintDao;
	
	
	

	@Override
	public List<Sprint> getSprints() {
		return sprintDao.findAll();
	}

	@Override
	public Sprint getSprint(long sprintId) {
		return sprintDao.findById(sprintId).get();
	}

	@Override
	public Sprint addSprint(Sprint sprint) {
		sprintDao.save(sprint);
		return sprint;
	}

	@Override
	public Sprint updateSprint(Sprint sprint) {
		sprintDao.save(sprint);
		return sprint;
	}

	@Override
	public Sprint deleteSprint(long sprintId) {
		Sprint sprint = sprintDao.findById(sprintId).get();
		sprintDao.delete(sprint);
		return sprint;
	}
	
	
	
	
}