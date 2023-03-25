package com.springcrud.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springcrud.crud.model.Sprint;
import com.springcrud.crud.services.SprintService;


@RestController
@CrossOrigin
public class SprintController {
	
	@Autowired
	private SprintService sprintService;

	
	@PostMapping("/sprint")
	public Sprint addSprint(@RequestBody Sprint sprint) {
		return this.sprintService.addSprint(sprint);
	}
	
	@GetMapping("/sprints")
	public List<Sprint> getSprints() {
		return this.sprintService.getSprints();
	}
	
	@GetMapping("/sprint/{sprintId}")
	public Sprint getSprint(@PathVariable String sprintId) {
		return this.sprintService.getSprint(Long.parseLong(sprintId));
	}
	
	@PutMapping("/sprint")
	public Sprint updateSprint(@RequestBody Sprint sprint) {
		return this.sprintService.updateSprint(sprint);
	}
	
	@DeleteMapping("/sprint/{sprintId}")
	public Sprint deleteSprint(@PathVariable String sprintId){
		return this.sprintService.deleteSprint(Long.parseLong(sprintId));
	}
	
}